import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDrawerComponent } from './nav-bar-drawer.component';

describe('NavBarDrawerComponent', () => {
  let component: NavBarDrawerComponent;
  let fixture: ComponentFixture<NavBarDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarDrawerComponent]
    });
    fixture = TestBed.createComponent(NavBarDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
