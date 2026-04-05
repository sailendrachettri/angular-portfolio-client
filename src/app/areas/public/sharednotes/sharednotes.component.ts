import { Component } from '@angular/core';

@Component({
  selector: 'app-sharednotes',
  imports: [],
  templateUrl: './sharednotes.component.html',
})
export class SharednotesComponent {
  collageImg: string = 'assets/sharednotes/collegeSharednotes.png';
  image1: string = 'assets/sharednotes/workspace_view.png';
  image2: string = 'assets/sharednotes/slash_command.png';
  image3: string = 'assets/sharednotes/notes_page_view.png';
  image4: string = 'assets/sharednotes/file_storage.png';
  image5: string = 'assets/sharednotes/tenders.png';
  image6: string = 'assets/sharednotes/uptime.png';

  downloadUrl: string =
    'https://github.com/sailendrachettri/shared-notes';
  sourceCodeUrl: string =
    'https://github.com/sailendrachettri/shared-notes';
}
