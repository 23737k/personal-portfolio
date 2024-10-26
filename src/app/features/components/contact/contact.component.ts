import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  @ViewChild('alertPlaceholder') alertPlaceHolder! : ElementRef;

  constructor(private _http: HttpClient, private _fb: FormBuilder, private _render2: Renderer2) {
  }

  sendForm(){
    if(this.contactForm.valid){
      let controls = this.contactForm.controls;
      const body ={
        name: controls['name'].value,
        email: controls['email'].value,
        message: controls['message'].value
      }

      this._http.post('https://formspree.io/f/meoqeqbv',body).subscribe({
        next: ()=> this.createAlert()
      });
    }
  }

  createAlert(){
    let alertPlaceHolderElement = this.alertPlaceHolder.nativeElement;
    let childAlertElement = this._render2.createElement('div');
    childAlertElement.innerHTML = `<div id="alert" class="w-50 mx-auto alert alert-success alert-dismissible fade show" role="alert">
                        Message sent successfully
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
    this._render2.appendChild(alertPlaceHolderElement, childAlertElement);
  }

  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }




}
