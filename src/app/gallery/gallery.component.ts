import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: any[] = []; 

  constructor(private imageService: ImageService) {
    this.images = this.imageService.getAllImages();
   }

  ngOnInit() {
    
  }

}
