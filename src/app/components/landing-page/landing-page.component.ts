import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';

@Component({
  selector: 'app-landing-page',
  imports: [NgIcon, NgIf],
  viewProviders: [provideIcons({ octMarkGithub })],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  bg = 'assets/backgrounds/bg.png';
  github_url: string = 'https://github.com/sailendrachettri';
  resume: string =
    'https://drive.google.com/file/d/10V7j5lAsDgffbvn6j9cSjWwGLQLbY-nz/view?usp=sharing';

   fullText =
    'JavaScript, React, .NET, Electron, Tauri, AngularJS, Node.js, and PostgreSQL';

  typedText = '';
  isCompleted = false;

  private index = 0;
  private typingInterval!: number;

  ngOnInit() {
    this.typingInterval = window.setInterval(() => {
      if (this.index < this.fullText.length) {
        this.typedText += this.fullText[this.index];
        this.index++;
      } else {
        this.isCompleted = true; // 👈 hide cursor
        clearInterval(this.typingInterval);
      }
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.typingInterval);
  }
}
