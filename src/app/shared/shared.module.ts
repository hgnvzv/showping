import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { 
  
}
