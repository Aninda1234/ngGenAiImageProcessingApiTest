import { Component } from '@angular/core';

import { AIPhotoService } from 'src/app/services/ai-photo.service';
import { DeHazeResponse } from 'src/app/interfaces/models.interfaces';


@Component({
  selector: 'app-image-dehaze',
  templateUrl: './image-dehaze.component.html',
  styleUrls: ['./image-dehaze.component.css']
})
export class ImageDehazeComponent {
  deHazeImageUrl: string | undefined;
  selectedFile: File | undefined;

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  deHazeImage() {
    if (this.selectedFile) {
      this.aiphotoService
        .deHazeImage(this.selectedFile)
        .subscribe(
          (response: DeHazeResponse) => {
            if (response.error_code === 0) {
              this.deHazeImageUrl = response.image;
            } else {
              console.error(`API Error: ${response.error_msg}`, response);
            }
          },
          (error) => {
            console.error('Error generating cartoon animation:', error);
          }
        );
    }
  }
}
