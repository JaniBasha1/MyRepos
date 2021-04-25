import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatCongigRadioComponent } from './ngx-mat-congig-radio.component';

describe('NgxMatCongigRadioComponent', () => {
  let component: NgxMatCongigRadioComponent;
  let fixture: ComponentFixture<NgxMatCongigRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatCongigRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatCongigRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
