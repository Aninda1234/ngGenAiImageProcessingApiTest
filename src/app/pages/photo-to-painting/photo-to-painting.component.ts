// pages/photo-to-painting/photo-to-painting.component.ts

import { Component } from '@angular/core';
import { AIPhotoService } from '../../services/ai-photo.service';
import { PaintingResponse } from '../../interfaces/painting-response.interface';

@Component({
  selector: 'app-photo-to-painting',
  templateUrl: './photo-to-painting.component.html',
  styleUrls: ['./photo-to-painting.component.css'],
})
export class PhotoToPaintingComponent {
  selectedPaintingOption: string = 'cartoon';
  paintingImageUrl: string | undefined;
  selectedFile: File | undefined;

  // Define painting options
  paintingOptions = [
    { key: 'cartoon', label: 'Cartoon Style' },
    { key: 'pencil', label: 'Pencil Style' },
    { key: 'color_pencil', label: 'Color Pencil Drawing Style' },
    { key: 'warm', label: 'Colorful Sugar Cube Oil Painting Style' },
    { key: 'wave', label: 'Oil Painting Style in Surfing in Kanagawa' },
    { key: 'lavender', label: 'Lavender Oil Painting Style' },
    { key: 'mononoke', label: 'Strange Oil Painting Style' },
    { key: 'scream', label: 'Scream Oil Painting Style' },
    { key: 'gothic', label: 'Gothic Oil Painting Style' },
  ];

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  generatePainting() {
    if (this.selectedFile) {
      this.aiphotoService
        .generatePainting(this.selectedFile, this.selectedPaintingOption)
        .subscribe(
          (response: PaintingResponse) => {
            if (response.error_code === 0) {
              this.paintingImageUrl = response.image;
            } else {
              console.error(`API Error: ${response.error_msg}`, response);
            }
          },
          (error) => {
            console.error('Error generating painting:', error);
          }
        );
    }
  }
}
