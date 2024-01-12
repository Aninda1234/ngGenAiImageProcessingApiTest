// aiphoto.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { LivePhotoResponse } from '../interfaces/live-photo-response.interface';
// import { CartoonResponse } from '../interfaces/cartoon-response.interface';
// import { PaintingResponse } from '../interfaces/painting-response.interface';
import { ColorizeResponse, LivePhotoResponse, UpscaleResponse } from '../interfaces/models.interfaces';
import { CartoonResponse } from '../interfaces/models.interfaces';
import { PaintingResponse } from '../interfaces/models.interfaces';

import { DeHazeResponse } from '../interfaces/models.interfaces';


@Injectable({
  providedIn: 'root',
})
export class AIPhotoService {
  private baseUrl = 'https://www.ailabapi.com/api/';
  // private baseUrl = 'https://www.ailabapi.com/api/portrait/effects/'; // baseUrl won't work for other endpoints like Photo to Painting 
  private apiKey = 'm69kRyvYBrzi8nsXPCrPm3zG8CJa1OkpbSIVL1MQLjynUtV9wXfhHH4JeqZ67EsO'; 
  // private apiKey = 'RidXhQZjFsu8xHG72CznS2wtTbxjy0sYNq41DczS18pf5mXd6KMMfV3AbZPe7omC'; // Replace with your actual API key
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) {}

  generateCartoonAnimation(image: File, type: string): Observable<CartoonResponse> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('type', type);

    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'portrait/effects/portrait-animation'; 
    // this.apiUrl = this.baseUrl + 'portrait-animation'; // // baseUrl won't work for other endpoints like Photo to Painting 

    return this.http.post<CartoonResponse>(this.apiUrl, formData, { headers });
  }
  
  generateLivePhoto(image: File, type: number): Observable<LivePhotoResponse> {
    const formData: FormData = new FormData();
    formData.append('image_target', image);
    formData.append('type', type.toString());

    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'portrait/effects/live-photo';
    // this.apiUrl = this.baseUrl + 'live-photo'; // baseUrl won't work for other endpoints like Photo to Painting

    return this.http.post<LivePhotoResponse>(this.apiUrl, formData, { headers });
  }

  generatePainting(image: File, option: string): Observable<PaintingResponse> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    formData.append('option', option);

    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'image/effects/image-style-conversion'; 
    // this.apiUrl = this.baseUrl + 'image-style-conversion'; // baseUrl won't work for other endpoints like Photo to Painting

    return this.http.post<PaintingResponse>(this.apiUrl, formData, { headers });
  }
 
  
  deHazeImage(image: File): Observable<DeHazeResponse> {
    const formData: FormData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'image/enhance/image-defogging';

    return this.http.post<DeHazeResponse>(this.apiUrl, formData, { headers });
  }

  upscaleImage(image: File): Observable<UpscaleResponse> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    // formData.append('option', option);

    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'image/enhance/image-lossless-enlargement';

    return this.http.post<UpscaleResponse>(this.apiUrl, formData, { headers });
  }

  colorizePhoto(image: File): Observable<ColorizeResponse> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    
    const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
    this.apiUrl = this.baseUrl + 'image/effects/image-colorization';

    return this.http.post<ColorizeResponse>(this.apiUrl, formData, { headers });
  }

  // // Cartoon Response is not correct interface for this. And error with the correct one. 
  // generateCartoon(image: File, option: string): Observable<CartoonResponse> {
  //   const formData: FormData = new FormData();
  //   formData.append('image', image);
  //   formData.append('option', option);

  //   const headers = new HttpHeaders().set('ailabapi-api-key', this.apiKey);
  //   this.apiUrl = this.baseUrl + 'image/effects/ai-anime-generator';

  //   return this.http.post<CartoonResponse>(this.apiUrl, formData, { headers });
  // }

}

