import { Component } from '@angular/core';
import { DogComponent } from '../dog/dog.component';

@Component({
  providers:[DogComponent],
  selector: 'app-heart-rating',
  templateUrl: './heart-rating.component.html',
  styleUrls: ['./heart-rating.component.css']
})
export class HeartRatingComponent {
  public hearts: boolean[] = Array(5).fill(true);

  constructor(private dogComponent: DogComponent) {
  }

  public rate(rating: number) {
    this.hearts = this.hearts.map((_, i) => rating > i);
  }

  onSubmit(): void {
    this.dogComponent.getDogs();
    this.hearts = Array(5).fill(true);
  }
}