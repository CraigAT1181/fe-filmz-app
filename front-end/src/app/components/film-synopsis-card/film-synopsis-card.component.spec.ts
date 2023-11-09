import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSynopsisCardComponent } from './film-synopsis-card.component';

describe('FilmSynopsisCardComponent', () => {
  let component: FilmSynopsisCardComponent;
  let fixture: ComponentFixture<FilmSynopsisCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmSynopsisCardComponent]
    });
    fixture = TestBed.createComponent(FilmSynopsisCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
