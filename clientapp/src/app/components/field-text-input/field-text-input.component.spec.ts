import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextInputComponent } from './field-text-input.component';

describe('FieldTextInputComponent', () => {
  let component: FieldTextInputComponent;
  let fixture: ComponentFixture<FieldTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
