import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailingService } from '../../services/mailing.service';
import { NgxSonnerToaster, toast } from 'ngx-sonner';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgxSonnerToaster],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  mailingService = inject(MailingService)


  formContact: FormGroup = new FormGroup({

    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]
    ),
    mensaje: new FormControl('', [
      Validators.required,

    ])

  })
  checkError(fieldName: string, errorName: string) {
    return this.formContact.get(fieldName)?.hasError(errorName) && this.formContact.get(fieldName)?.touched
  }
  async onSubmit() {
    if (this.formContact.valid) {
      this.mailingService.sendMail(this.formContact.value)
      this.formContact.reset()
      toast.info('Tu mensaje se ha enviado correctamente. Contestaré con la mayor brevedad posible.')
    }
    else {
      toast.error('Vaya parece que ha habido un error, comprueba que todos los campos están rellenos correctamente o prueba a ponerte en contacto conmigo a través de otro medio. Gracias')
    }

  }


}
