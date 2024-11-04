import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
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
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/q_auto:low/f_auto/q_70/Fitness-for-10-Home-Licensing-Information_e1ekte.jpg',
      repoUrl: 'https://github.com/23737k/myfitnessapp',
      webUrl: 'https://myfitnessapp-t2q1.onrender.com/'
    },
    {
      title: 'The Walking Dogs',
      subtitle: 'Project for a Dog Walking and Care Services Application',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/f_auto/q_auto:low/q_70/the-walking-dogs_kkdpq6.jpg',
      repoUrl: 'https://github.com/23737k/the-walking-dogs-app',
      webUrl: undefined
    },
    {
      title: 'HealthTech',
      subtitle: 'A telemedicine app for online consultations with certified doctors from home.',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/f_auto/q_auto:low/q_70/sore-throat-istock-1176_seywvy.jpg',
      repoUrl: 'https://github.com/No-Country-simulation/c20-42-n-java-react',
      webUrl: undefined
    },
    {
      title: 'My Carbon FootPrint',
      subtitle: 'A carbon footprint calculator app to measure and reduce your environmental impact.',
      description: 'Built a Python-based API using Flask, integrating with external weather services. Implemented caching for improved performance and rate limiting for API security.',
      photoUrl: 'https://res.cloudinary.com/dpvs5m9an/image/upload/f_auto/q_auto:low/q_70/image_bbnohm.png',
      repoUrl: 'https://github.com/23737k/mi-huella-de-carbono',
      webUrl: undefined
    }
  ]

}

export interface Project{
  title: string;
  subtitle: string;
  description: string;
  repoUrl: string;
  photoUrl: string;
  webUrl?: string;
}
