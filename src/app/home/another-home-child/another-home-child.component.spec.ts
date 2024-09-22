import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherHomeChildComponent } from './another-home-child.component';

describe('AnotherHomeChildComponent', () => {
  let component: AnotherHomeChildComponent;
  let fixture: ComponentFixture<AnotherHomeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherHomeChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherHomeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
