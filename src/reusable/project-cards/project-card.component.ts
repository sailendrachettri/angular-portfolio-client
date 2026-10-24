import { Component, Input } from '@angular/core';

export type ProjectType = 'windows' | 'website' | 'frontend' | 'mobile' | 'other' | 'android' | 'ios' | 'linux' | 'archive' | 'web-games';

export interface Project {
  title: string;
  url: string;
  image: string;
  tech: string;
  type: ProjectType;
  date: string;
}


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html'
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
