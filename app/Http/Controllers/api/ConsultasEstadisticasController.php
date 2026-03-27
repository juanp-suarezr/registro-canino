<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Caninos;
use App\Models\User;
use App\Models\InformacionUsuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConsultasEstadisticasController extends Controller
{
    /**
     * Estadísticas de registros caninos
     *
     * Retorna el total de registros caninos aprobados, rechazados y registrados
     * con filtros de rango de fechas y estado
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function estadisticasCaninos(Request $request)
    {
        try {
            // Validar parámetros de entrada
            $request->validate([
                'fecha_inicio' => 'nullable|date',
                'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
                'estado' => 'nullable|string|in:aprobado,rechazado,registrado,pendiente',
            ]);

            // Query base
            $query = Caninos::query();

            // Aplicar filtro de rango de fechas
            if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
                $query->whereBetween('created_at', [
                    $request->fecha_inicio . ' 00:00:00',
                    $request->fecha_fin . ' 23:59:59'
                ]);
            } elseif ($request->has('fecha_inicio')) {
                $query->where('created_at', '>=', $request->fecha_inicio . ' 00:00:00');
            } elseif ($request->has('fecha_fin')) {
                $query->where('created_at', '<=', $request->fecha_fin . ' 23:59:59');
            }

            // Aplicar filtro de estado específico
            if ($request->has('estado')) {
                $query->where('estado', $request->estado);
            }

            // Obtener totales por estado
            $totalRegistrados = (clone $query)->count();
            $totalAprobados = (clone $query)->where('estado', 'aprobado')->count();
            $totalRechazados = (clone $query)->where('estado', 'rechazado')->count();
            $totalPendientes = (clone $query)->where('estado', 'pendiente')->count();

            // Estadísticas adicionales
            $estadisticasPorSexo = (clone $query)
                ->select('sexo', DB::raw('COUNT(*) as total'))
                ->groupBy('sexo')
                ->get();

            $estadisticasPorRaza = (clone $query)
                ->select('raza', DB::raw('COUNT(*) as total'))
                ->groupBy('raza')
                ->orderBy('total', 'desc')
                ->limit(10)
                ->get();

            $estadisticasPeligrosos = (clone $query)
                ->where('es_peligroso', true)
                ->count();

            $response = [
                'estado' => 'success',
                'mensaje' => 'Estadísticas de registros caninos obtenidas exitosamente',
                'data' => [
                    'totales' => [
                        'total_registrados' => $totalRegistrados,
                        'total_aprobados' => $totalAprobados,
                        'total_rechazados' => $totalRechazados,
                        'total_pendientes' => $totalPendientes,
                    ],
                    'por_sexo' => $estadisticasPorSexo,
                    'por_raza_top_10' => $estadisticasPorRaza,
                    'caninos_peligrosos' => $estadisticasPeligrosos,
                    'filtros_aplicados' => [
                        'fecha_inicio' => $request->fecha_inicio ?? null,
                        'fecha_fin' => $request->fecha_fin ?? null,
                        'estado' => $request->estado ?? null,
                    ],
                ],
            ];

            return response()->json($response, 200);

        } catch (\Exception $e) {
            return response()->json([
                'estado' => 'error',
                'mensaje' => 'Error al obtener estadísticas de caninos',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Estadísticas de personas registradas
     *
     * Retorna información no sensible de personas registradas
     * como edad y comuna, con filtros de rango de fechas
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function estadisticasPersonas(Request $request)
    {
        try {
            // Validar parámetros de entrada
            $request->validate([
                'fecha_inicio' => 'nullable|date',
                'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
                'comuna' => 'nullable|string',
                'edad_min' => 'nullable|integer|min:0',
                'edad_max' => 'nullable|integer|min:0',
            ]);

            // Query base para información de usuarios
            $query = InformacionUsuario::query();

            // Aplicar filtro de rango de fechas
            if ($request->has('fecha_inicio') && $request->has('fecha_fin')) {
                $query->whereBetween('created_at', [
                    $request->fecha_inicio . ' 00:00:00',
                    $request->fecha_fin . ' 23:59:59'
                ]);
            } elseif ($request->has('fecha_inicio')) {
                $query->where('created_at', '>=', $request->fecha_inicio . ' 00:00:00');
            } elseif ($request->has('fecha_fin')) {
                $query->where('created_at', '<=', $request->fecha_fin . ' 23:59:59');
            }

            // Aplicar filtro de comuna
            if ($request->has('comuna')) {
                $query->where('comuna', $request->comuna);
            }

            // Aplicar filtro de rango de edad
            if ($request->has('edad_min') && $request->has('edad_max')) {
                $query->whereBetween('edad', [$request->edad_min, $request->edad_max]);
            } elseif ($request->has('edad_min')) {
                $query->where('edad', '>=', $request->edad_min);
            } elseif ($request->has('edad_max')) {
                $query->where('edad', '<=', $request->edad_max);
            }

            // Obtener total de personas
            $totalPersonas = (clone $query)->count();

            // Estadísticas por comuna
            $estadisticasPorComuna = (clone $query)
                ->select('comuna', DB::raw('COUNT(*) as total'))
                ->groupBy('comuna')
                ->orderBy('total', 'desc')
                ->get();

            // Estadísticas por rango de edad
            $estadisticasPorEdad = (clone $query)
                ->select(
                    DB::raw('
                        CASE
                            WHEN edad < 18 THEN "Menor de 18"
                            WHEN edad BETWEEN 18 AND 25 THEN "18-25"
                            WHEN edad BETWEEN 26 AND 35 THEN "26-35"
                            WHEN edad BETWEEN 36 AND 45 THEN "36-45"
                            WHEN edad BETWEEN 46 AND 55 THEN "46-55"
                            WHEN edad BETWEEN 56 AND 65 THEN "56-65"
                            ELSE "Mayor de 65"
                        END as rango_edad
                    '),
                    DB::raw('COUNT(*) as total')
                )
                ->groupBy('rango_edad')
                ->orderByRaw('
                    CASE
                        WHEN rango_edad = "Menor de 18" THEN 1
                        WHEN rango_edad = "18-25" THEN 2
                        WHEN rango_edad = "26-35" THEN 3
                        WHEN rango_edad = "36-45" THEN 4
                        WHEN rango_edad = "46-55" THEN 5
                        WHEN rango_edad = "56-65" THEN 6
                        ELSE 7
                    END
                ')
                ->get();

            // Estadísticas por zona
            $estadisticasPorZona = (clone $query)
                ->select('zona', DB::raw('COUNT(*) as total'))
                ->groupBy('zona')
                ->orderBy('total', 'desc')
                ->get();

            // Promedio de edad
            $promedioEdad = (clone $query)->avg('edad');

            $response = [
                'estado' => 'success',
                'mensaje' => 'Estadísticas de personas registradas obtenidas exitosamente',
                'data' => [
                    'total_personas' => $totalPersonas,
                    'promedio_edad' => round($promedioEdad, 2),
                    'por_comuna' => $estadisticasPorComuna,
                    'por_rango_edad' => $estadisticasPorEdad,
                    'por_zona' => $estadisticasPorZona,
                    'filtros_aplicados' => [
                        'fecha_inicio' => $request->fecha_inicio ?? null,
                        'fecha_fin' => $request->fecha_fin ?? null,
                        'comuna' => $request->comuna ?? null,
                        'edad_min' => $request->edad_min ?? null,
                        'edad_max' => $request->edad_max ?? null,
                    ],
                ],
            ];

            return response()->json($response, 200);

        } catch (\Exception $e) {
            return response()->json([
                'estado' => 'error',
                'mensaje' => 'Error al obtener estadísticas de personas',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Estadísticas combinadas de caninos y personas
     *
     * Retorna un resumen general de ambas estadísticas
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function estadisticasGenerales(Request $request)
    {
        try {
            // Validar parámetros de entrada
            $request->validate([
                'fecha_inicio' => 'nullable|date',
                'fecha_fin' => 'nullable|date|after_or_equal:fecha_inicio',
            ]);

            // Filtros de fecha comunes
            $fechaInicio = $request->fecha_inicio ?? null;
            $fechaFin = $request->fecha_fin ?? null;

            // Estadísticas de caninos
            $queryCaninos = Caninos::query();
            if ($fechaInicio && $fechaFin) {
                $queryCaninos->whereBetween('created_at', [
                    $fechaInicio . ' 00:00:00',
                    $fechaFin . ' 23:59:59'
                ]);
            }

            $totalCaninos = (clone $queryCaninos)->count();
            $caninosAprobados = (clone $queryCaninos)->where('estado', 'aprobado')->count();
            $caninosRechazados = (clone $queryCaninos)->where('estado', 'rechazado')->count();
            $caninosPendientes = (clone $queryCaninos)->where('estado', 'pendiente')->count();

            // Estadísticas de personas
            $queryPersonas = InformacionUsuario::query();
            if ($fechaInicio && $fechaFin) {
                $queryPersonas->whereBetween('created_at', [
                    $fechaInicio . ' 00:00:00',
                    $fechaFin . ' 23:59:59'
                ]);
            }

            $totalPersonas = (clone $queryPersonas)->count();
            $promedioEdad = (clone $queryPersonas)->avg('edad');

            // Top 5 comunas con más registros
            $topComunas = (clone $queryPersonas)
                ->select('comuna', DB::raw('COUNT(*) as total'))
                ->groupBy('comuna')
                ->orderBy('total', 'desc')
                ->limit(5)
                ->get();

            $response = [
                'estado' => 'success',
                'mensaje' => 'Estadísticas generales obtenidas exitosamente',
                'data' => [
                    'caninos' => [
                        'total' => $totalCaninos,
                        'aprobados' => $caninosAprobados,
                        'rechazados' => $caninosRechazados,
                        'pendientes' => $caninosPendientes,
                    ],
                    'personas' => [
                        'total' => $totalPersonas,
                        'promedio_edad' => round($promedioEdad, 2),
                        'top_comunas' => $topComunas,
                    ],
                    'filtros_aplicados' => [
                        'fecha_inicio' => $fechaInicio,
                        'fecha_fin' => $fechaFin,
                    ],
                ],
            ];

            return response()->json($response, 200);

        } catch (\Exception $e) {
            return response()->json([
                'estado' => 'error',
                'mensaje' => 'Error al obtener estadísticas generales',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
