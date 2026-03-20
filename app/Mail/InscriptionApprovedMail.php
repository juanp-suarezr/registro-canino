<?php

namespace App\Mail;

use App\Models\Caninos;
use App\Models\Delegado;
use App\Models\Inscripciones;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Log;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class InscriptionApprovedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $caninos;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Caninos $caninos)
    {
        $this->caninos = $caninos;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        ini_set('memory_limit', '1024M'); // 1 GB, puedes ajustar el valor
        ini_set('max_execution_time', 180); // 180 segundos (3 minutos)

        $nombreLimpio = preg_replace('/[^A-Za-z0-9\-]/', '_', $this->caninos->nombre);

        $delegado = Delegado::where('estado', 1)->first();

        $qr = 'data:image/svg+xml;base64,' . base64_encode(QrCode::format('svg')->size(120)->generate(url('/consulta-certificado/' . $this->caninos->id)));

        $pdf = Pdf::loadView('pdf.certificado', [
            'canino' => $this->caninos,
            'delegado' => $delegado,
            'qr' => $qr
        ]);


        return $this
            ->subject('Estado de registro del canino ' . $this->caninos->nombre)
            ->view('emails.inscription_approved')
            ->attachData($pdf->output(), 'certificado.pdf', [
                'mime' => 'application/pdf',
            ])
            ->with([
                'nombre' => $this->caninos->user->informacionUsuario->nombre_completo ?? $this->caninos->user->name,
                'nombre_canino' => $this->caninos->nombre
            ]);
    }
}
