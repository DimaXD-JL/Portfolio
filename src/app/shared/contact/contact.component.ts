import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  activeButton: string | null = null;
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://dzmitry-stashkevich.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.activeButton = language;
    this.translate.use(language);
  }
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error submitting form', error);
          },
          complete: () => {
            console.info('Send post complete');
          },
        });
    } else if (ngForm.submitted && !ngForm.form.valid) {
      console.warn('Form is invalid');
    }
  }
  scrollToTop(): void {
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/index.html'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  }
}
