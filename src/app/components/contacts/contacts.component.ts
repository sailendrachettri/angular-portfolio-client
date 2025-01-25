import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // Getting the pathname
  currentPath: string = '';

  ngOnInit(): void {
    this.currentPath = this.router.url;
  }

  //  Email newsletter subscription
  private toastService = inject(HotToastService);
  contactForm: FormGroup;
  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.toastService.success('Thank you. I will get back to you shortly!');
      this.contactForm.reset();
    } else {
      this.toastService.error('oops! Please try again later');
    }
  }
}
