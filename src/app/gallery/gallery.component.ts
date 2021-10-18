import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any[] = []; 
  selectedImage = '';
  

  constructor(private imageService: ImageService) {
    this.images = this.imageService.getAllImages();
  }

  handleClick(event: Event, id: string) {
    this.selectedImage = id;
    console.log('selectedImage: ', this.selectedImage);
    event.preventDefault();
  }

   ngOnInit() {
    
  }

}
