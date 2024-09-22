import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListingComponentComponent } from './services-listing-component.component';

describe('ServicesListingComponentComponent', () => {
  let component: ServicesListingComponentComponent;
  let fixture: ComponentFixture<ServicesListingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesListingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
