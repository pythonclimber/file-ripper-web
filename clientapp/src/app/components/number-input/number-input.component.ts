import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() visible: boolean;
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() minimum: number;
  @Input() invalid: boolean;
  @Input() label: string;
  @Input() validationMessage: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange() {
    this.valueChange.emit(this.value);
  }
}
