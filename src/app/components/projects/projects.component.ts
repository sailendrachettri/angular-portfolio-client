import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';
import { Project, ProjectCardComponent, ProjectType } from 'src/reusable/project-cards/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    LargeHeadingWrapperComponent,
    SmallHeadingWrapperComponent,
    RouterLink,
    RouterLinkActive,
    ProjectCardComponent
],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {

  
  // Getting the path name
  currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url; // Get the current pathname
    // console.log('Current Path:', this.currentPath);
  }

  // LINKS FOR PROJECT ASSETS
  img1_waadiyon = 'assets/projects/01_waadiyo.png';
  img2_emaildb = 'assets/projects/02_emaildb.jpg';
  img3_food_panda = 'assets/projects/03_food_panda.png';
  img4_compressor = 'assets/projects/04_img_comp.jpg';
  img5_blog = 'assets/projects/05_blog.jpg';
  img6_gktraveller = 'assets/projects/06_gktraveller.jpg';
  img7_gk = 'assets/projects/07_gk.jpg';
  img8_text_analyzer = 'assets/projects/08_text_ana.jpg';
  img9_check_list = 'assets/projects/09_check_list.jpg';
  img10_markdown = 'assets/projects/markdown-editor.png';
  img11_office_connect = 'assets/projects/office_connect.png';
  img12_dev_wellbeing = 'assets/projects/dev_wellbeing.png';
  img13_neo_polar_cam = 'assets/projects/neo-polar-cam.png';
  img14_expensex = 'assets/projects/expensex.png';
  img15_sharedNotes = 'assets/projects/sharednotes.png';
  img16_pushGrids = 'assets/projects/push_grid.png';
  img17_autoHideNav = 'assets/projects/auto-hide-nav.png';

  npmPackagesUrl: string = 'https://www.npmjs.com/~bytesberry';

  // PROJECTS DEMO LINK
  markdownEditor: string = 'https://sailendraz-markdown-editor.netlify.app';
  waadiyon: string = 'https://waadiyon.onrender.com';
  emailDb: string = 'https://emailsdb.onrender.com';
  foodPanda: string = 'https://foodpandaz.onrender.com';
  compressor: string = 'https://reducer.onrender.com';
  blog: string = 'https://codebinds.onrender.com';
  gkTraveller: string = 'https://gtraveller.onrender.com';
  generalKnowledge: string = 'https://gk-site.netlify.app';
  textAnalyzer: string = 'https://tanalyzer-site.netlify.app';
  checklist: string = 'https://checklist-site.netlify.app';
  officeConnect: string = 'https://github.com/sailendrachettri/office-connect-app';
  devWellbeing: string = 'https://sailendra.onrender.com/windows-application/dev-wellbeing';
  newPolarCam: string = '/android-application/neo-polar-cam';
  expenseX: string = '/android-application/expensex';
  sharedNotes: string = '/windows-application/sharednotes';
  pushGrid: string = 'https://sailendrachettri.github.io/push-grid';
  autoHideNavUrl: string = 'https://sailendrachettri.github.io/auto-hiding-navigation-bar';

   filters: { label: string; value: ProjectType | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Front-end Animations', value: 'frontend' },
    { label: 'Windows Apps', value: 'windows' },
    { label: 'Websites', value: 'website' },
    { label: 'Android Apps', value: 'android' },
    { label: 'Archives', value: 'archive' },
    { label: 'Web Games', value: 'web-games' }
  ];

  activeFilter: ProjectType | 'all' = 'all';

  projects: Project[] = [
    {
      title: 'Auto Hide Navbar',
      url: this.autoHideNavUrl,
      image: this.img17_autoHideNav,
      tech: 'GSAP, HTML, CSS, JS',
      type: 'frontend',
      date: "Oct 2026"
    },
    {
      title: 'Shared Notes',
      url: this.sharedNotes,
      image: this.img15_sharedNotes,
      tech: 'Tauri, ReactJs, .NET, PostgreSQL',
      type: 'windows',
      date: "Feb 2026"
    },
    
    {
      title: 'ExpenseX',
      url: this.expenseX,
      image: this.img14_expensex,
      tech: 'Flutter',
      type: 'android',
      date: "Jan 2026"
    },
    {
      title: 'Dev Wellbeing',
      url: this.devWellbeing,
      image: this.img12_dev_wellbeing,
      tech: 'Tauri, Rust, ReactJs',
      type: 'windows',
      date: "Jan 2026"
    },
    {
      title: 'Office Connect',
      url: this.officeConnect,
      image: this.img11_office_connect,
      tech: 'ElectronJS, SignalR, Asp .NET',
      type: 'windows',
      date: "Dec 2025"
    },
    {
      title: 'Markdown Editor',
      url: this.markdownEditor,
      tech: 'ReactJS, Tailwind, NPM Marked',
      image: this.img10_markdown,
      type: 'website',
      date: ""
    },
    {
      title: 'Waadiyon - Tours & Travels',
      url: this.waadiyon,
      image: this.img1_waadiyon,
      tech: 'ReactJS, Tailwind',
      type: 'website',
      date: ""
    },
    {
      title: 'emailDB',
      url: this.emailDb,
      image: this.img2_emaildb,
      tech: 'ReactJS, NodeJS',
      type: 'archive',
      date: ""
    },
    {
      title: 'FoodPandaZ',
      url: this.foodPanda,
      image: this.img3_food_panda,
      tech: 'Bootstrap, ReactJS',
      type: 'archive',
      date: ""
    },
    {
      title: 'Images Compressor',
      url: this.compressor,
      image: this.img4_compressor,
      tech: 'ReactJS, Bootstrap',
      type: 'archive',
      date: ""
    },
    {
      title: 'Codebinds Blogs',
      url: this.blog,
      image: this.img5_blog,
      tech: 'Express, NodeJS',
      type: 'archive',
      date: ""
    },
    {
      title: 'Gangtok Traveller',
      url: this.gkTraveller,
      image: this.img6_gktraveller,
      tech: 'Bootstrap, ReactJS',
      type: 'archive',
      date: ""
    },
    {
      title: 'General Knowledge',
      url: this.generalKnowledge,
      image: this.img7_gk,
      tech: 'HTML & CSS, JavaScript',
      type: 'archive',
      date: ""
    },
    {
      title: 'Text Analyzer',
      url: this.textAnalyzer,
      image: this.img8_text_analyzer,
      tech: 'HTML & CSS',
      type: 'archive',
      date: ""
    },
    {
      title: 'Checklist',
      url: this.checklist,
      image: this.img9_check_list,
      tech: 'HTML & CSS, JavaScript',
      type: 'archive',
      date: ""
    },
    {
      title: 'Push Grid',
      url: this.pushGrid,
      image: this.img16_pushGrids,
      tech: 'HTML & CSS, JavaScript',
      type: 'web-games',
      date: ""
    }
  ];

   get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects.filter(p => p.type !== 'archive');
    return this.projects.filter(p => p.type === this.activeFilter);
  }

  setFilter(filter: ProjectType | 'all') {
    this.activeFilter = filter;
  }
}
