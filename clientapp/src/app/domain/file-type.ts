export class FileType {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}

export class FileTypes {
  static delimited: FileType = new FileType('Character Delimited', 'DELIMITED');
  static fixed: FileType = new FileType('Fixed Width', 'FIXED');
  static xml: FileType = new FileType('Xml', 'XML');
}
