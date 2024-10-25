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
    },
    {
      title: 'HealthTech',
      subtitle: 'A telemedicine app for online consultations with certified doctors from home.',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729835457/sore-throat-istock-1176_seywvy.jpg',
      repoUrl: 'https://github.com/No-Country-simulation/c20-42-n-java-react'
    },
    {
      title: 'My Carbon FootPrint',
      subtitle: 'A carbon footprint calculator app to measure and reduce your environmental impact.',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/v1729835710/image_bbnohm.png',
      repoUrl: 'https://github.com/23737k/mi-huella-de-carbono'
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
