// live-photos.component.ts

import { Component } from '@angular/core';
import { AIPhotoService } from '../../services/ai-photo.service';

@Component({
  selector: 'app-live-photos',
  templateUrl: './live-photos.component.html',
  styleUrls: ['./live-photos.component.css'],
})
export class LivePhotosComponent {
  selectedLivePhotoType: number = 0;
  videoBlob: Blob | undefined;
  selectedFile: File | undefined;

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  generateLivePhoto() {
    if (this.selectedFile) {
      this.aiphotoService
        .generateLivePhoto(this.selectedFile, this.selectedLivePhotoType)
        .subscribe(
          (response) => {
            if (response.error_code === 0) {
              // Assuming the video data is returned as base64 encoded string
              const videoData = atob(response.data.video);
              const videoArray = new Uint8Array(videoData.length);

              for (let i = 0; i < videoData.length; ++i) {
                videoArray[i] = videoData.charCodeAt(i);
              }

              this.videoBlob = new Blob([videoArray], { type: 'video/mp4' });
            } else {
              console.error(`API Error: ${response.error_msg}`, response);
            }
          },
          (error) => {
            console.error('Error generating live photo:', error);
          }
        );
    }
  }

  getVideoUrl(): string {
    return this.videoBlob ? URL.createObjectURL(this.videoBlob) : '';
  }
}
