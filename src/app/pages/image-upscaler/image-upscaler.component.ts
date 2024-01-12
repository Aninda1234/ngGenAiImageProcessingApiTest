import { Component } from '@angular/core';

import { AIPhotoService } from 'src/app/services/ai-photo.service';
import { UpscaleResponse } from 'src/app/interfaces/models.interfaces';


@Component({
  selector: 'app-image-upscaler',
  templateUrl: './image-upscaler.component.html',
  styleUrls: ['./image-upscaler.component.css']
})
export class ImageUpscalerComponent {
  // selectedUpScaleLevel: number = '2';
  upScaleImageUrl: string | undefined;
  selectedFile: File | undefined;

  // // Define level of Upscale 
  // upScaleLevels = [
  //   { key: '2', label: 'Twice' },
  // ];

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Add options for scale of magnification and level of enhancement later. 
  upScaleImage() {
    if (this.selectedFile) {
      this.aiphotoService
        .upscaleImage(this.selectedFile)
        .subscribe(
          (response: UpscaleResponse) => {
            if (response.error_code === 0) {
              this.upScaleImageUrl = response.data.url;
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
