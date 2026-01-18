import { Component, Input } from '@angular/core';

export type ProjectType = 'windows' | 'website' | 'mobile' | 'other';

export interface Project {
  title: string;
  url: string;
  image: string;
  tech: string;
  type: ProjectType;
}


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
