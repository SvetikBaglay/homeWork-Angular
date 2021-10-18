import { Component, Input, OnInit } from '@angular/core';
import { Gallery, ImageService, galleryItems } from '../image.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Gallery | undefined;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,) {}

  closeImage(event: Event){
    this.router.navigate(['/gallery'])
  }

  ngOnInit() {
  //  this.imageService.getImage(this.activateRoute.snapshot.params['id'])
  //    console.log('this.image: ', this.imageService.getImage(this.activateRoute.snapshot.params['id']));
    const routeParams = this.activateRoute.snapshot.paramMap;
    const imageIdFromRoute = Number(routeParams.get('id'));

    this.image = galleryItems.find((image) => image.id === imageIdFromRoute);
    console.log('this.image: ', this.image)
}

}
