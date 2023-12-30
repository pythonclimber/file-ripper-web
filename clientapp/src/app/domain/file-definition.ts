export class FileDefinition {
  hasHeader: boolean;
  fileType: string;
  delimiter: string;
  recordXmlElement: string;
  fieldDefinitions: FieldDefinition[]
}

export class FieldDefinition {
  fieldName: string;
  startPosition: number;
  fieldLength: number;
  positionInRow: number;
  xmlFieldName: string;

  public updateFromCopy(fieldDefCopy: FieldDefinition) {
    this.fieldName = fieldDefCopy.fieldName;
    this.startPosition = fieldDefCopy.startPosition;
    this.fieldLength = fieldDefCopy.fieldLength;
    this.positionInRow = fieldDefCopy.positionInRow;
    this.xmlFieldName = fieldDefCopy.xmlFieldName;
  }
}

export class FieldDefinitionValidationResult {
  isFieldNameInvalid: boolean;
  isStartPositionInvalid: boolean;
  isFieldLengthInvalid: boolean;
  isPositionInRowInvalid: boolean;
  isXmlFieldNameInvalid: boolean;

  constructor() {
    this.isFieldLengthInvalid = false;
    this.isStartPositionInvalid = false;
    this.isFieldNameInvalid = false;
    this.isPositionInRowInvalid = false;
  }
}

export class FileDefinitionValidationResult {
  isHasHeaderInvalid: boolean;
  isFileTypeInvalid: boolean;
  isDelimiterInvalid: boolean;
  isRecordXmlElementInvalid: boolean;
  isFieldDefinitionListInvalid: boolean;
  isFileInvalid: boolean;

  constructor() {
    this.isDelimiterInvalid = false;
    this.isFileTypeInvalid = false;
    this.isHasHeaderInvalid = false;
    this.isRecordXmlElementInvalid = false;
    this.isFieldDefinitionListInvalid = false;
    this.isFileInvalid = false;
  }
}
