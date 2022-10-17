import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarQuickComponent } from './navbar-quick.component';

describe('NavbarQuickComponent', () => {
  let component: NavbarQuickComponent;
  let fixture: ComponentFixture<NavbarQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarQuickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
