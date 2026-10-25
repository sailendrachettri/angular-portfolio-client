
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { SideMenuComponent } from 'src/utilities/side-menu/side-menu.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar-desktop',
  imports: [NgIf, RouterLink, RouterLinkActive, SideMenuComponent],
  templateUrl: './navbar-desktop.component.html',
})
export class NavbarDesktopComponent
  implements AfterViewInit, OnDestroy {

  githubUrl = 'https://github.com/sailendrachettri';
  linkedInUrl = 'https://linkedin.com/in/sailendrachettri';
  logo = 'assets/icons/Z.png';

  showMenu = false;

  private lastScrollY = 0;

  private handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      gsap.to('#navbar', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
    // Show navbar when scrolling up
    else if (currentScrollY < this.lastScrollY) {
      gsap.to('#navbar', {
        yPercent: 0,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }

    this.lastScrollY = currentScrollY;
  };

  ngAfterViewInit(): void {
    this.lastScrollY = window.scrollY;

    window.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
    gsap.killTweensOf('#navbar');
  }

  scrollToElement(id: string): void {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
