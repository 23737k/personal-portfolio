import { Component } from '@angular/core';
import {HeaderComponent} from "../../features/components/header/header.component";
import {FooterComponent} from "../../features/components/footer/footer.component";
import {AboutMeComponent} from "../../features/components/about-me/about-me.component";
import {ProjectsComponent} from "../../features/components/projects/projects.component";
import {SkillsComponent} from "../../features/components/skills/skills.component";
import {IntroComponent} from "../../features/components/intro/intro.component";
import {ContactComponent} from "../../features/components/contact/contact.component";
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    IntroComponent,
    ContactComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
