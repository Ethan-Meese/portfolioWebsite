import { Component } from '@angular/core';
import { type Project } from './projects.model';
import { PROJECTS } from './projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = PROJECTS;

}
