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
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729814832/Fitness-for-10-Home-Licensing-Information_e1ekte.jpg',
      repoUrl: 'https://github.com/23737k/myfitnessapp'
    },
    {
      title: 'The Walking Dogs',
      subtitle: 'Project for a Dog Walking and Care Services Application',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729831904/the-walking-dogs_kkdpq6.jpg',
      repoUrl: 'https://github.com/23737k/the-walking-dogs-app'
    }
  ]

}

export interface Project{
  title: string;
  subtitle: string;
  description: string;
  repoUrl: string;
  photoUrl: string;
}
