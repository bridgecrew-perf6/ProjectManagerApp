import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './components/footer/footer.component';
const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatIconModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,FooterComponent
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
  ]
})
export class CoreModule { }
