import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuComponent } from 'src/utilities/side-menu/side-menu.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-mobile-navbar',
  imports: [NgIf, SideMenuComponent, RouterLink, RouterLinkActive],
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent implements AfterViewInit, OnDestroy{
  githubUrl: string = 'https://github.com/sailendrachettri';
  linkedInUrl: string = 'https://linkedin.com/in/sailendrachettri';
  logo: string = 'assets/icons/Z.png';

  showMenu: boolean = false;

  private lastScrollY = 0;

  private handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down
    if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
      gsap.to('#mobile-navbar', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
    // Show navbar when scrolling up
    else if (currentScrollY < this.lastScrollY) {
      gsap.to('#mobile-navbar', {
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
    gsap.killTweensOf('#mobile-navbar');
  }


  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  
}
