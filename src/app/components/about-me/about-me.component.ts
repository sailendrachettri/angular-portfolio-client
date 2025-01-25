import { Component } from '@angular/core';
import { SmallHeadingWrapperComponent } from '../../../utilities/small-heading-wrapper/small-heading-wrapper.component';
import { LargeHeadingWrapperComponent } from '../../../utilities/large-heading-wrapper/large-heading-wrapper.component';

@Component({
  selector: 'app-about-me',
  imports: [SmallHeadingWrapperComponent, LargeHeadingWrapperComponent],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  meImage: string = 'assets/backgrounds/bg2.png';
}
