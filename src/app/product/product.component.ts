import { Component } from '@angular/core';
import { SectionEndComponent } from "../section-end/section-end.component";
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SectionEndComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  images = [
    { src: '/closet1.jpg', alt: 'closet' },
    { src: '/closet2.jpg', alt: 'closet' },
    { src: '/closet3.jpg', alt: 'closet' },
    { src: '/closet4.png', alt: 'closet' },
    { src: '/closet5.webp', alt: 'closet' },
    { src: '/closet6.jpg', alt: 'closet' },
    { src: '/closet7.webp', alt: 'closet' },
    { src: '/closet8.jpg', alt: 'closet' },
    { src: '/bed1.jpg', alt: 'bed' },
    { src: '/bed2.jpg', alt: 'bed' },
    { src: '/bed3.jpeg', alt: 'bed' },
    { src: '/bed4.webp', alt: 'bed' },
    { src: '/bed5.jpg', alt: 'bed' },
    { src: '/bed6.jpg', alt: 'bed' },
    { src: '/bed7.jpeg', alt: 'bed' },
    { src: '/bed8.jpg', alt: 'bed' },
    { src: '/table8.jpg', alt: 'Table 8' },
    { src: '/table3.jpg', alt: 'Table 3' },
    { src: '/table5.jpeg', alt: 'Table 5' },
    { src: '/table6.jpg', alt: 'Table 6' },
    { src: '/table9.jpg', alt: 'Table 9' },
    { src: '/tables 7.webp', alt: 'Table 7' },
    { src: '/table2.webp', alt: 'Table 2' },
    { src: '/table4.webp', alt: 'Table 4' },
    { src: '/w1.jpg', alt: 'window' },
    { src: '/w2.jpeg', alt: 'window' },
    { src: '/w3.jpg', alt: 'window' },
    { src: '/w4.jpg', alt: 'window' },
    { src: '/w5.jpg', alt: 'window' },
    { src: '/w6.jpg', alt: 'window' },
    { src: '/w7.jpeg', alt: 'window' },
    { src: '/w8.jpeg', alt: 'window' },
    { src: '/d1.webp', alt: 'door' },
    { src: '/d2.jpg', alt: 'door' },
    { src: '/d3.png', alt: 'door' },
    { src: '/d4.png', alt: 'door' },
    { src: '/d5.jpeg', alt: 'door' },
    { src: '/d5.png', alt: 'door' },
    { src: '/d7.jpg', alt: 'door' },
    { src: '/d8.jpg', alt: 'door' }
  ];

  currentIndex = 0;
  itemsPerSlide = 12; // Show 12 items at a time (3 sets of 4)

  get currentImages() {
    return this.images.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  nextSlide() {
    if (this.currentIndex + this.itemsPerSlide < this.images.length) {
      this.currentIndex += this.itemsPerSlide;
    } else {
      this.currentIndex = 0; // Loop back to the beginning
    }
  }

  prevSlide() {
    if (this.currentIndex - this.itemsPerSlide >= 0) {
      this.currentIndex -= this.itemsPerSlide;
    } else {
      this.currentIndex = this.images.length - this.itemsPerSlide; // Loop to the last set
    }
  }
}
