import { Component, HostListener } from '@angular/core';
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
  nextBtn: string = 'Next';
  prevBtn: string = 'Previous';

  images = [
    { src: '/closet1.jpg', alt: 'closet', category: 'Closets' },
    { src: '/closet2.jpg', alt: 'closet', category: 'Closets' },
    { src: '/closet3.jpg', alt: 'closet', category: 'Closets' },
    { src: '/closet4.png', alt: 'closet', category: 'Closets' },
    { src: '/closet5.webp', alt: 'closet', category: 'Closets' },
    { src: '/closet6.jpg', alt: 'closet', category: 'Closets' },
    { src: '/closet7.webp', alt: 'closet', category: 'Closets' },
    { src: '/closet8.jpg', alt: 'closet', category: 'Closets' },
    { src: '/bed1.jpg', alt: 'bed', category: 'Bed' },
    { src: '/bed2.jpg', alt: 'bed', category: 'Bed' },
    { src: '/bed3.jpeg', alt: 'bed', category: 'Bed' },
    { src: '/bed4.webp', alt: 'bed', category: 'Bed' },
    { src: '/bed5.jpg', alt: 'bed', category: 'Bed' },
    { src: '/bed6.jpg', alt: 'bed', category: 'Bed' },
    { src: '/bed7.jpeg', alt: 'bed', category: 'Bed' },
    { src: '/bed8.jpg', alt: 'bed', category: 'Bed' },
    { src: '/table8.jpg', alt: 'Table 8', category: 'Table' },
    { src: '/table3.jpg', alt: 'Table 3', category: 'Table' },
    { src: '/table5.jpeg', alt: 'Table 5', category: 'Table' },
    { src: '/table6.jpg', alt: 'Table 6', category: 'Table' },
    { src: '/table9.jpg', alt: 'Table 9', category: 'Table' },
    { src: '/tables 7.webp', alt: 'Table 7', category: 'Table' },
    { src: '/table2.webp', alt: 'Table 2', category: 'Table' },
    { src: '/table4.webp', alt: 'Table 4', category: 'Table' },
    { src: '/w1.jpg', alt: 'window', category: 'Window' },
    { src: '/w2.jpeg', alt: 'window', category: 'Window' },
    { src: '/w3.jpg', alt: 'window', category: 'Window' },
    { src: '/w4.jpg', alt: 'window', category: 'Window' },
    { src: '/w5.jpg', alt: 'window', category: 'Window' },
    { src: '/w6.jpg', alt: 'window', category: 'Window' },
    { src: '/w7.jpeg', alt: 'window', category: 'Window' },
    { src: '/w8.jpeg', alt: 'window', category: 'Window' },
    { src: '/d1.webp', alt: 'door', category: 'Door' },
    { src: '/d2.jpg', alt: 'door', category: 'Door' },
    { src: '/d3.png', alt: 'door', category: 'Door' },
    { src: '/d4.png', alt: 'door', category: 'Door' },
    { src: '/d5.jpeg', alt: 'door', category: 'Door' },
    { src: '/d5.png', alt: 'door', category: 'Door' },
    { src: '/d7.jpg', alt: 'door', category: 'Door' },
    { src: '/d8.jpg', alt: 'door', category: 'Door' }
  ];

  currentIndex = 0;
  itemsPerSlide = 16; // Show 12 items at a time
  selectedCategory: string = 'All'; // Default category

  get currentImages() {
    // Filter images based on selected category
    const filteredImages = this.selectedCategory === 'All' 
      ? this.images 
      : this.images.filter(image => image.category === this.selectedCategory);
    
    // Slice to show the correct set of images
    return filteredImages.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }

  // Navigate to next slide
  nextSlide() {
    const filteredImages = this.selectedCategory === 'All' 
      ? this.images 
      : this.images.filter(image => image.category === this.selectedCategory);
    
    if (this.currentIndex + this.itemsPerSlide < filteredImages.length) {
      this.currentIndex += this.itemsPerSlide;
    } else {
      this.currentIndex = 0; // Loop back to the beginning
    }
  }

  // Navigate to previous slide
  prevSlide() {
    const filteredImages = this.selectedCategory === 'All' 
      ? this.images 
      : this.images.filter(image => image.category === this.selectedCategory);
    
    if (this.currentIndex - this.itemsPerSlide >= 0) {
      this.currentIndex -= this.itemsPerSlide;
    } else {
      this.currentIndex = filteredImages.length - this.itemsPerSlide; // Loop to the last set
    }
  }

  // Set selected category and reset index
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentIndex = 0; // Reset to first slide when category changes
  }

  //listen for window resize event
  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.updateButtonText();
  }

  ngOnInit(){
    this.updateButtonText();//set the button text based on initial screen size
  }

  updateButtonText(){
    const screenWidth = window.innerWidth;
    if(screenWidth<=707){
      this.nextBtn = '';
      this.prevBtn = '';
    }else{
      this.nextBtn = 'Next';
      this.prevBtn = 'Previous'
    }
  }
}
