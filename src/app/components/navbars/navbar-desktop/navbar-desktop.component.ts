import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuComponent } from '../../../../utilities/side-menu/side-menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar-desktop',
  imports: [NgIf, RouterLink, RouterLinkActive, SideMenuComponent],
  templateUrl: './navbar-desktop.component.html',
})
export class NavbarDesktopComponent {
  githubUrl: string = 'https://github.com/sailendrachettri';
  linkedInUrl: string = 'https://linkedin.com/in/sailendrachettri';
  logo: string = 'assets/icons/Z.png';

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  showMenu: boolean = false;
}
