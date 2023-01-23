import { Component } from '@angular/core';

@Component({
  selector: 'app-heart-rating',
  templateUrl: './heart-rating.component.html',
  styleUrls: ['./heart-rating.component.css']
})
export class HeartRatingComponent {
  public hearts: boolean[] = Array(5).fill(true);

  public rate(rating: number) {
    console.log('rating', rating);
    this.hearts = this.hearts.map((_, i) => rating > i);
    console.log('hearts', this.hearts);
  }
}
