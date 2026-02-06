import { Component } from '@angular/core';

@Component({
  selector: 'app-neo-polar-cam',
  imports: [],
  templateUrl: './neo-polar-cam.component.html'
})
export class NeoPolarCamComponent {
  collageImg : string = 'assets/neo-polar-cam/neo-polar-collage.webp'
  image1 : string = 'assets/neo-polar-cam/photo1.jpg'
  image3 : string = 'assets/neo-polar-cam/photo2.jpg'
  image2 : string = 'assets/neo-polar-cam/photo3.png'

  downloadUrl: string =  'https://github.com/sailendrachettri/polarized-camera-app/tree/main/apps'
  sourceCodeUrl: string = 'https://github.com/sailendrachettri/polarized-camera-app'

}
