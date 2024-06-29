import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { ThemePalette } from '@angular/material/core';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';


@Component({
  selector: 'app-items-category',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,MatSliderModule,MatProgressBarModule],
  templateUrl: './items-category.component.html',
  styleUrls: ['./items-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsCategoryComponent {
  @Input() property1 = "Default";

    color =  '#da2020'
    mode:ProgressBarMode  = 'buffer';
    value = 50;
    bufferValue = 75;

}
