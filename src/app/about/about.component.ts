import { Component } from '@angular/core';
import { SectionEndComponent } from "../section-end/section-end.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionEndComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
