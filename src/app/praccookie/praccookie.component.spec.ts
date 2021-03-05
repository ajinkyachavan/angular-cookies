import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraccookieComponent } from './praccookie.component';

describe('PraccookieComponent', () => {
  let component: PraccookieComponent;
  let fixture: ComponentFixture<PraccookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraccookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraccookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
