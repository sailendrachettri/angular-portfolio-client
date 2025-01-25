import { Component } from '@angular/core';
import { SmallHeadingWrapperComponent } from '../../../utilities/small-heading-wrapper/small-heading-wrapper.component';
import { LargeHeadingWrapperComponent } from '../../../utilities/large-heading-wrapper/large-heading-wrapper.component';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [SmallHeadingWrapperComponent, LargeHeadingWrapperComponent],
  templateUrl: './education-experience.component.html',
})
export class EducationExperienceComponent {}
