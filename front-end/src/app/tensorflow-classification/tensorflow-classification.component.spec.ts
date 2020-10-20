import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorflowClassificationComponent } from './tensorflow-classification.component';

describe('TensorflowClassificationComponent', () => {
  let component: TensorflowClassificationComponent;
  let fixture: ComponentFixture<TensorflowClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TensorflowClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorflowClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
