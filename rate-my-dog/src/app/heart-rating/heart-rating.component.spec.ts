import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRatingComponent } from './heart-rating.component';

describe('HeartRatingComponent', () => {
  let component: HeartRatingComponent;
  let fixture: ComponentFixture<HeartRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeartRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeartRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
