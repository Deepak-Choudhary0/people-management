import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  name: string;
  age: number;
  gender: string;
  mob: number;
}
@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.css']
})
export class CreatePeopleComponent {
    
  constructor(private http: HttpClient) { }

  createItem(payload: any) {
    this.http.post<any>('http://localhost:3000/person', payload).subscribe(response => {
      // Handle the response
      console.log(response);
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }

}
