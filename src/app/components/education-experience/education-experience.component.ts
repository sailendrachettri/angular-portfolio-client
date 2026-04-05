import { Component } from '@angular/core';
import { ExperienceDurationPipe } from 'src/utilities/date-time/experience-duration.pipe';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [SmallHeadingWrapperComponent, LargeHeadingWrapperComponent, ExperienceDurationPipe],
  templateUrl: './education-experience.component.html',
})
export class EducationExperienceComponent {}
