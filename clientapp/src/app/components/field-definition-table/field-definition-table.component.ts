import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileType, FileTypes} from "../../domain/file-type";
import {FieldDefinition, FileDefinition} from "../../domain/file-definition";
import {EditMode, EditType} from "../../domain/edit-mode";

@Component({
  selector: 'app-field-definition-table',
  templateUrl: './field-definition-table.component.html',
  styleUrls: ['./field-definition-table.component.css']
})
export class FieldDefinitionTableComponent implements OnInit {
  fixedType: FileType = FileTypes.fixed;
  delimitedType: FileType = FileTypes.delimited;
  xmlType: FileType = FileTypes.xml;

  @Input() fileDefinition: FileDefinition;
  @Output() editField = new EventEmitter<FieldDefinition>();

  constructor() {
    this.fileDefinition = new FileDefinition();
  }

  ngOnInit(): void {
  }

  moveDown(fieldDef: FieldDefinition) {
    const oldIndex = this.fileDefinition.fieldDefinitions.indexOf(fieldDef);
    const newIndex = oldIndex + 1;

    if (newIndex >= this.fileDefinition.fieldDefinitions.length) {
      return;
    }

    this.moveFieldDef(oldIndex, newIndex, fieldDef);
  }

  moveUp(fieldDef: FieldDefinition) {
    const oldIndex = this.fileDefinition.fieldDefinitions.indexOf(fieldDef);
    const newIndex = oldIndex - 1;

    if (oldIndex <= 0) {
      return;
    }

    this.moveFieldDef(oldIndex, newIndex, fieldDef);
  }

  deleteField(fieldDef: FieldDefinition) {
    const index = this.fileDefinition.fieldDefinitions.indexOf(fieldDef);
    this.fileDefinition.fieldDefinitions.splice(index, 1);
  }

  private moveFieldDef(oldIndex: number, newIndex: number, fieldDef: FieldDefinition) {
    this.fileDefinition.fieldDefinitions.splice(oldIndex, 1);
    this.fileDefinition.fieldDefinitions.splice(newIndex, 0, fieldDef);
  }
}
