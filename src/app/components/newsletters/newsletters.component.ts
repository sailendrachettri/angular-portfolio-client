import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Form,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-newsletters',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './newsletters.component.html',
})
export class NewslettersComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  private toastService = inject(HotToastService);

  newslettersSubscribed() {
    if (this.email.valid) {
      console.log('Email:', this.email.value);
      this.email.reset('');
      this.toastService.success('Newsletter subscribed successfully!');
    } else {
      console.log('Invalid email');
      this.toastService.error('oops! Please try again later');
    }
  }
}
