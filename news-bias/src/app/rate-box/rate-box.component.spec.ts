import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBoxComponent } from './rate-box.component';

describe('RateBoxComponent', () => {
  let component: RateBoxComponent;
  let fixture: ComponentFixture<RateBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
