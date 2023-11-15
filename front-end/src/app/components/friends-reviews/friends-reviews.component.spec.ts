import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsReviewsComponent } from './friends-reviews.component';

describe('FriendsReviewsComponent', () => {
  let component: FriendsReviewsComponent;
  let fixture: ComponentFixture<FriendsReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsReviewsComponent]
    });
    fixture = TestBed.createComponent(FriendsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
