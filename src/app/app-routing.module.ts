// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CartoonYourselfComponent } from './pages/cartoon-yourself/cartoon-yourself.component';
import { LivePhotosComponent } from './pages/live-photos/live-photos.component';
import { PhotoToPaintingComponent } from './pages/photo-to-painting/photo-to-painting.component';

import { ImageDehazeComponent } from './pages/image-dehaze/image-dehaze.component';
import { ImageUpscalerComponent } from './pages/image-upscaler/image-upscaler.component';
import { PhotoColorizerComponent } from './pages/photo-colorizer/photo-colorizer.component';
import { CartoonGeneratorComponent } from './pages/cartoon-generator/cartoon-generator.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cartoon-yourself', component: CartoonYourselfComponent },
  { path: 'live-photos', component: LivePhotosComponent },
  { path: 'photo-to-painting', component: PhotoToPaintingComponent },
  
  { path: 'app-image-dehaze', component: ImageDehazeComponent },
  { path: 'app-image-upscaler', component: ImageUpscalerComponent },
  { path: 'app-photo-colorizer', component: PhotoColorizerComponent },
  { path: 'app-cartoon-generator', component: CartoonGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

