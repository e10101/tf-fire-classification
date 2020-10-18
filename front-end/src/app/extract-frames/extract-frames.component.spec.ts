import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFramesComponent } from './extract-frames.component';

describe('ExtractFramesComponent', () => {
  let component: ExtractFramesComponent;
  let fixture: ComponentFixture<ExtractFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
