import { Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
];
