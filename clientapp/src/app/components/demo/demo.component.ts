import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DemoService} from "../../services/demo.service";
import {FileType, FileTypes} from "../../domain/file-type";
import {FieldDefinition, FileDefinition, FileDefinitionValidationResult} from "../../domain/file-definition";
import {BoolOption} from "../../domain/bool-option";
import {ValidationService} from "../../services/validation.service";
import {EditMode, EditType} from "../../domain/edit-mode";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  data: any;
  fileTypes: FileType[];
  boolOptions: BoolOption[];
  fileDefinition: FileDefinition;
  fileDefinitionValidation: FileDefinitionValidationResult;
  showAddField: boolean;
  file: File;
  displayErrorDialog: boolean;
  errorMessage: string;
  delimitedType: FileType = FileTypes.delimited;
  xmlType: FileType = FileTypes.xml;
  editMode: EditMode<FieldDefinition>;

  @ViewChild('inputFile')
  inputFile: ElementRef;

  constructor(private demoService: DemoService, private validationService: ValidationService) { }

  ngOnInit() {
    this.fileDefinition = new FileDefinition();
    this.fileDefinition.fieldDefinitions = [];
    this.fileDefinitionValidation = new FileDefinitionValidationResult();

    this.boolOptions = [
      {
        name: "Yes",
        value: true
      },
      {
        name: "No",
        value: false
      }
    ];

    this.fileTypes = [FileTypes.delimited, FileTypes.fixed, FileTypes.xml];

    this.data = {
      "yourData": "Your data will display here",
      "dataElements": [
        {
          "name": "item 1",
          "value": "value 1"
        },
        {
          "name": "item 2",
          "value": "value 2"
        },
        {
          "name": "item 3",
          "value": "value 3"
        }
      ]
    }
  }

  submitFile(): void {
    this.fileDefinitionValidation = this.validationService.validateFileDefinition(this.file, this.fileDefinition);

    if (!this.fileDefinitionValidation.isFieldDefinitionListInvalid
        && !this.fileDefinitionValidation.isRecordXmlElementInvalid
        && !this.fileDefinitionValidation.isDelimiterInvalid
        && !this.fileDefinitionValidation.isHasHeaderInvalid
        && !this.fileDefinitionValidation.isFileTypeInvalid
        && !this.fileDefinitionValidation.isFileInvalid) {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('fileDefinition', JSON.stringify(this.fileDefinition));

      this.demoService.submitFile(formData).subscribe(fileDef => {
        this.data = {
          fileDefinition: fileDef
        };
      }, error => {
        console.log(error.name, error.message, error.description);
        this.errorMessage = error.error;
        this.displayErrorDialog = true;
      });
    }
  }

  addFile(files: FileList) {
    this.file = files.item(0);
  }

  toggleDialog() {
    if (!this.fileDefinition.fileType) {
      this.errorMessage = 'Please select File Type before adding fields.';
      this.displayErrorDialog = true;
      return;
    }
    this.showAddField = !this.showAddField;
  }

  addField() {
    this.editMode = new EditMode<FieldDefinition>(EditType.ADD, new FieldDefinition());
    this.toggleDialog();
  }

  editField(fieldDef: FieldDefinition) {
    this.editMode = new EditMode<FieldDefinition>(EditType.EDIT, fieldDef);
    this.toggleDialog();
  }

  deleteField(fieldDef: FieldDefinition) {
    const index = this.fileDefinition.fieldDefinitions.indexOf(fieldDef);
    this.fileDefinition.fieldDefinitions.splice(index, 1);
  }

  onFileTypeChange() {
    switch (this.fileDefinition.fileType) {
      case FileTypes.xml.value:
        this.fileDefinition.hasHeader = null;
        this.fileDefinition.delimiter = '';
        break;
      case FileTypes.delimited.value:
        this.fileDefinition.recordXmlElement = '';
      case FileTypes.fixed.value:
        this.fileDefinition.delimiter = '';
        this.fileDefinition.recordXmlElement = '';
        break;
      default:
        this.fileDefinition.delimiter = '';
        this.fileDefinition.recordXmlElement = '';
        this.fileDefinition.hasHeader = null;
        this.inputFile.nativeElement.value = null;
        break;
    }
    this.fileDefinition.fieldDefinitions = [];
  }

  completeAddEdit(editMode: EditMode<FieldDefinition>) {
    if (!!editMode && editMode.complete && editMode.editType == EditType.ADD) {
      this.fileDefinition.fieldDefinitions.push(editMode.editObject);
    }
    this.toggleDialog();
  }
}
