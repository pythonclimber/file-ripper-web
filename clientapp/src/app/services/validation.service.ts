import { Injectable } from '@angular/core';
import {
  FieldDefinition,
  FieldDefinitionValidationResult,
  FileDefinition,
  FileDefinitionValidationResult
} from "../domain/file-definition";
import {FileTypes} from "../domain/file-type";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateFieldDefinition(fileType: string, fieldDefinition: FieldDefinition): FieldDefinitionValidationResult {
    const validationResult = new FieldDefinitionValidationResult();

    if (!fieldDefinition.fieldName) {
      validationResult.isFieldNameInvalid = true;
    }

    if (fileType == FileTypes.fixed.value && fieldDefinition.startPosition == null) {
      validationResult.isStartPositionInvalid = true;
    }

    if (fileType == FileTypes.fixed.value && !fieldDefinition.fieldLength) {
      validationResult.isFieldLengthInvalid = true;
    }

    if (fileType == FileTypes.delimited.value && fieldDefinition.positionInRow == null) {
      validationResult.isPositionInRowInvalid = true;
    }

    return validationResult;
  }

  validateFileDefinition(file: any, fileDefinition: FileDefinition): FileDefinitionValidationResult {
    const validationResult = new FileDefinitionValidationResult();

    if (!fileDefinition.fileType) {
      validationResult.isFileTypeInvalid = true;
    }

    if (!file) {
      validationResult.isFileInvalid = true;
    }

    if (fileDefinition.hasHeader == null && fileDefinition.fileType != FileTypes.xml.value) {
      validationResult.isHasHeaderInvalid = true;
    }

    if (!fileDefinition.delimiter && fileDefinition.fileType == FileTypes.delimited.value) {
      validationResult.isDelimiterInvalid = true;
    }

    if (!fileDefinition.recordXmlElement && fileDefinition.fileType == FileTypes.xml.value) {
      validationResult.isRecordXmlElementInvalid = true;
    }

    if (fileDefinition.fieldDefinitions.length < 1) {
      validationResult.isFieldDefinitionListInvalid = true;
    }

    return validationResult;
  }
}
