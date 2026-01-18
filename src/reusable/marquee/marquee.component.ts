import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    imports:  [RouterLink],
    standalone: true,
  selector: 'app-marquee-component',
  templateUrl: './marquee.component.html'
})
export class MarqueeComponent {
    devWellbeingIcon : string = 'assets/icons/dev_wellbeing.png'
}
