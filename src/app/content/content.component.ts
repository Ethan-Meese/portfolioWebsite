import { Component } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-content',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  selectedSection: string = "about";

  constructor(private selectionService: SelectionService){}

  ngOnInit(){
    this.selectionService.selectedSection$.subscribe(section => {
      this.selectedSection = section;
    })
  }
}
