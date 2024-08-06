import { Component } from '@angular/core';
import { SectionEndComponent } from "../section-end/section-end.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SectionEndComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
