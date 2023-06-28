import { Component } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  selectedOption!: string;

  onOptionSelected(event: any) {
    this.selectedOption = event.value;
    console.log(event.value);
  }
}
