export enum EditType {
  ADD,
  EDIT
}

export class EditMode<T> {
  complete: boolean;
  editType: EditType;
  editObject: T;

  constructor(editType: EditType, editObject: T) {
    this.complete = false;
    this.editType = editType;
    this.editObject = editObject;
  }
}
