import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() Input;
  constructor() { }
  public getValidationMessages(state: any) {
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`This input must not be empty`);
            break;
          case 'pattern':
            messages.push(`This input contains illegal characters`);
            break;
          case 'email':
            messages.push(`Email incorrect`);
            break;
          case 'maxlength':
            messages.push(`Exceeded max length`);
            break;
          case 'minlength':
            messages.push('Min length is not reached');
            break;
        }
      }
    }
    return messages;
  }
}
