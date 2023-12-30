import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDefinitionTableComponent } from './field-definition-table.component';

describe('FieldDefinitionTableComponent', () => {
  let component: FieldDefinitionTableComponent;
  let fixture: ComponentFixture<FieldDefinitionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDefinitionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDefinitionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
