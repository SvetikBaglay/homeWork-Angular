import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {


constructor(private imageService: ImageService) {

 }

  ngOnInit(): void {
  }

}
