// cartoon-yourself.component.ts

import { Component } from '@angular/core';
import { CartoonResponse } from 'src/app/interfaces/cartoon-response.interface';
import { AIPhotoService } from 'src/app/services/ai-photo.service';

@Component({
  selector: 'app-cartoon-yourself',
  templateUrl: './cartoon-yourself.component.html',
  styleUrls: ['./cartoon-yourself.component.css'],
})
export class CartoonYourselfComponent {
  selectedCartoonType: string = 'pixar';
  cartoonImageUrl: string | undefined;
  selectedFile: File | undefined;

  // Define cartoon types
  cartoonTypes = [
    { key: 'pixar', label: 'Pixar' },
    { key: 'pixar_plus', label: 'Pixar Pro' },
    { key: '3d_cartoon', label: '3D cartoon' },
    { key: 'angel', label: 'Angel' },
    { key: 'angel_plus', label: 'Angel Pro' },
    { key: 'demon', label: 'Demon' },
    // { key: 'ukiyoe_cartoon', label: 'Ukiyo-e' },
    // { key: 'bopu_cartoon', label: 'Popper' },
    // { key: 'amcartoon', label: 'American Manga' },
    { key: 'western', label: 'Western' },
    { key: 'avatar', label: 'Avatar' },
    { key: 'famous', label: 'World famous paintings' },
    // { key: 'jpcartoon', label: 'Japanese Manga (I)' },
    // { key: 'jpcartoon_head', label: 'Japanese Manga (portrait)' },
    // { key: 'hkcartoon', label: 'China Comics' },
    { key: 'classic_cartoon', label: 'Retro Cartoon' },
    // { key: 'tccartoon', label: 'Moe Manga' },
    { key: 'anime', label: 'Japanese Manga (II)' },
    { key: 'handdrawn', label: 'Hand-painted' },
    { key: 'sketch', label: 'Pencil drawing (I)' },
    { key: 'artstyle', label: 'Artistic effects' },
    // { key: 'head', label: 'Pencil drawing (head)' },
    // { key: 'full', label: 'Pencil drawing (II)' },
    { key: '3d_game', label: '3D game effects' },
  ];

  constructor(private aiphotoService: AIPhotoService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  generateCartoonAnimation() {
    if (this.selectedFile) {
      this.aiphotoService
        .generateCartoonAnimation(this.selectedFile, this.selectedCartoonType)
        .subscribe(
          (response: CartoonResponse) => {
            if (response.error_code === 0) {
              this.cartoonImageUrl = response.data.image_url;
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

