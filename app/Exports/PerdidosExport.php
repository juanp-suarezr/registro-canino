<?php

namespace App\Exports;

use Maatwebsite\Excel\Concern\ShouldAutoSize;
use Maatwebsite\Excel\Concern\WithHeadings;
use Maatwebsite\Excel\Concern\WithStyles;
use Maatwebsite\Excel\Concerns\FromCollection;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class PerdidosExport implements FromCollection, ShouldAutoSize, WithHeadings, WithStyles
{
    protected $reportes;

    public function __construct($reportes)
    {
        $this->reportes = $reportes;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return $this->reportes->map(function ($r) {
            return [
                'ID' => $r->id ?? '',
                'Estado actual' => $r->estado_label ?? $r->estado ?? '',
                'Fecha creación' => optional($r->created_at)->format('d/m/Y H:i:s') ?? 'N/A',
                'Reportante' => $r->nombre_reportante ?? 'Sin nombre',
                'Contacto' => $r->contacto ?? 'N/A',
                'Email' => $r->email ?? 'N/A',
                'Origen' => $r->origen_label ?? $r->origen ?? '',
                'Tipo' => $r->tipo_label ?? $r->tipo ?? '',
                'Nombre animal' => $r->nombre ?? 'Sin nombre',
                'Raza' => $r->raza ?? 'N/A',
                'Color' => $r->color ?? 'N/A',
                'Tamaño' => $r->tamano_label ?? $r->tamano ?? 'No especificado',
                'Estado físico' => $r->estado_encuentra_label ?? $r->estado_encuentra ?? 'No especificado',
                'Lugar' => $r->lugar ?? 'N/A',
                'Fecha evento' => optional($r->fecha_hora)->format('d/m/Y H:i:s') ?? 'N/A',
                'Aprobado/Rechazado por' => ($r->aprobador && $r->aprobador->name) ? $r->aprobador->name : 'Sin aprobación',
                'Particularidades' => $r->particularidades ?? 'N/A',
                'Descripción' => $r->descripcion ?? 'N/A',
            ];
        });
    }

    public function headings(): array
    {
        return [
            'ID',
            'Estado actual',
            'Fecha creación',
            'Reportante',
            'Contacto',
            'Email',
            'Origen',
            'Tipo',
            'Nombre animal',
            'Raza',
            'Color',
            'Tamaño',
            'Estado físico',
            'Lugar',
            'Fecha evento',
            'Aprobado/Rechazado por',
            'Particularidades',
            'Descripción',
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'color' => ['rgb' => 'FFFFFF'], 'size' => 12],
                'fill' => [
                    'fillType' => Fill::FILL_SOLID,
                    'color' => ['rgb' => 'C20E1A'],
                ],
            ],
        ];
    }
}
