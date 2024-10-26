import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _route: ActivatedRoute) {
  }

}
