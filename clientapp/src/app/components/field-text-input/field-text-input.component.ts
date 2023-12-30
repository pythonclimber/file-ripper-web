import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-field-text-input',
  templateUrl: './field-text-input.component.html',
  styleUrls: ['./field-text-input.component.css']
})
export class FieldTextInputComponent implements OnInit {
  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() invalid: boolean;
  @Input() fieldLabel: string;
  @Input() errorMessage: string;
  @Input() maxlength: number;
  @Input() visible: boolean;
  @Input() infoMessage: string;

  constructor() {
    this.visible = true;
  }

  ngOnInit(): void {
  }

  onTextChange() {
    this.textChange.emit(this.text)
  }
}
