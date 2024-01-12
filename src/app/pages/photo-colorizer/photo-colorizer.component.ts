import { Component } from '@angular/core';

import { ColorizeResponse } from 'src/app/interfaces/models.interfaces';
import { AIPhotoService } from 'src/app/services/ai-photo.service';

@Component({
  selector: 'app-photo-colorizer',
  templateUrl: './photo-colorizer.component.html',
  styleUrls: ['./photo-colorizer.component.css']
})
export class PhotoColorizerComponent {
  colorizeImageUrl: string | undefined;
  selectedFile: File | undefined;

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Add options for scale of magnification and level of enhancement later. 
  colorizePhoto() {
    if (this.selectedFile) {
      this.aiphotoService
        .colorizePhoto(this.selectedFile)
        .subscribe(
          (response: ColorizeResponse) => {
            if (response.error_code === 0) {
              this.colorizeImageUrl = response.image;
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
