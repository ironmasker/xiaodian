import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExerciseComponent } from './reactive-form-exercise.component';

describe('ReactiveFormExerciseComponent', () => {
  let component: ReactiveFormExerciseComponent;
  let fixture: ComponentFixture<ReactiveFormExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
