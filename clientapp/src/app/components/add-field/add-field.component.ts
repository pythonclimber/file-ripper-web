import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FieldDefinition, FieldDefinitionValidationResult} from "../../domain/file-definition";
import {ValidationService} from "../../services/validation.service";
import {FileType, FileTypes} from "../../domain/file-type";
import {EditMode} from "../../domain/edit-mode";

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
  @Input() fileType: string;
  @Input() showAddField: boolean;
  @Input() editMode: EditMode<FieldDefinition>;
  @Output() submit = new EventEmitter<EditMode<FieldDefinition>>();
  fieldDefinitionValidation: FieldDefinitionValidationResult;
  fixedType: FileType = FileTypes.fixed;
  delimitedType: FileType = FileTypes.delimited;
  xmlType: FileType = FileTypes.xml;
  fieldDefinition: FieldDefinition;

  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
    this.fieldDefinition = new FieldDefinition();
    this.fieldDefinitionValidation = new FieldDefinitionValidationResult();
  }

  initializeDialog(): void {
    this.fieldDefinition = Object.assign({}, this.editMode.editObject);
    this.fieldDefinitionValidation = new FieldDefinitionValidationResult();
  }

  toggleModal(): void {
    this.showAddField = !this.showAddField;
    this.submit.emit(null);
  }

  onSubmit() {
    this.fieldDefinitionValidation = this
      .validationService
      .validateFieldDefinition(this.fileType, this.fieldDefinition);

    if (!this.fieldDefinitionValidation.isFieldNameInvalid
      && !this.fieldDefinitionValidation.isStartPositionInvalid
      && !this.fieldDefinitionValidation.isFieldNameInvalid
      && !this.fieldDefinitionValidation.isPositionInRowInvalid) {
      if (this.fileType == this.xmlType.value && !this.fieldDefinition.xmlFieldName) {
        this.fieldDefinition.xmlFieldName = this.fieldDefinition.fieldName;
      }
      this.editMode.complete = true;
      this.editMode.editObject.updateFromCopy(this.fieldDefinition);
      this.submit.emit(this.editMode);
      this.showAddField = !this.showAddField;
    }
  }
}
