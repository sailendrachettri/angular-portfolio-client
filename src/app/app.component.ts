import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarDesktopComponent } from "./components/navbars/navbar-desktop/navbar-desktop.component";
import { MobileNavbarComponent } from "./components/navbars/mobile-navbar/mobile-navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarDesktopComponent, MobileNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio - Sailendra Chettri';
}
