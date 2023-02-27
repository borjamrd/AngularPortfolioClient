import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadService } from 'src/app/services/lead.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  leadForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  formIsSend: boolean = false

  constructor(
    private leadService: LeadService

  ) { }

  ngOnInit(): void {
  }

  submitLeadInfo(data: any) {
    if (this.leadForm.status === 'VALID') {
      this.leadService.addNewLead(data).subscribe({
        next: ((resp: any) => {
          console.log(resp)
          this.formIsSend = true
        }),
        error: ((err: any) => {
          console.error('Error post Lead: ', err)
        })
      })
    } else {
      // console.log(this.leadForm)
      alert('⚠️ Revisa que has escrito el correo correctamente')
    }

  }


}
