import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'My Fitness App',
      subtitle: 'A fitness web application for tracking workouts',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      repoUrl: 'https://github.com/23737k/myfitnessapp'
    }
  ]

}

export interface Project{
  title: string;
  subtitle: string;
  description: string;
  repoUrl: string;
}
