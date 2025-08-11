<?php

namespace App\Mail;

use App\Models\Caninos;
use App\Models\Inscripciones;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InscriptionDisapprovedMail extends Mailable
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

        return $this
            ->subject('Estado de registro del canino ' . $this->caninos->nombre)
            ->view('emails.inscription_disapproved')
            ->with([
                'nombre' => $this->caninos->user->informacionUsuario->nombre_completo,
                'nombre_canino' => $this->caninos->nombre,
                'motivo' => $this->caninos->motivo
            ]);
    }
}
