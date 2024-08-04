import { Component } from '@angular/core';
import { SectionEndComponent } from "../section-end/section-end.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionEndComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
