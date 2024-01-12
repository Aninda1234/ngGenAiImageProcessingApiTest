import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CartoonYourselfComponent } from './pages/cartoon-yourself/cartoon-yourself.component';
import { LivePhotosComponent } from './pages/live-photos/live-photos.component';
import { PhotoToPaintingComponent } from './pages/photo-to-painting/photo-to-painting.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImageDehazeComponent } from './pages/image-dehaze/image-dehaze.component';
import { ImageUpscalerComponent } from './pages/image-upscaler/image-upscaler.component';
import { PhotoColorizerComponent } from './pages/photo-colorizer/photo-colorizer.component';
import { CartoonGeneratorComponent } from './pages/cartoon-generator/cartoon-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CartoonYourselfComponent,
    LivePhotosComponent,
    PhotoToPaintingComponent,
    ImageDehazeComponent,
    ImageUpscalerComponent,
    PhotoColorizerComponent,
    CartoonGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
