import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforHomeComponent } from './ngfor-home.component';

describe('NgforHomeComponent', () => {
  let component: NgforHomeComponent;
  let fixture: ComponentFixture<NgforHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
