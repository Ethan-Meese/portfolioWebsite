import { Component } from '@angular/core';
import { PROJECTS } from '../projects/projects';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  projects = PROJECTS;

}
