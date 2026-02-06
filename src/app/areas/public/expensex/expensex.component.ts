import { Component } from '@angular/core';

@Component({
  selector: 'app-expensex',
  imports: [],
  templateUrl: './expensex.component.html'
})
export class ExpenseXComponent {
  collageImg : string = 'assets/expensex/expense-x-collage.webp'
  image1 : string = 'assets/expensex/img1.png'
  image3 : string = 'assets/expensex/img2.png'
  image2 : string = 'assets/expensex/img3.png'

  downloadUrl: string =  'https://github.com/sailendrachettri/expense-tracker-app/tree/main/apps'
  sourceCodeUrl: string = 'https://github.com/sailendrachettri/expense-tracker-app'

}
