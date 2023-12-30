import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() disabled: boolean;
  @Input() invalid: boolean;
  @Input() header: string;
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
