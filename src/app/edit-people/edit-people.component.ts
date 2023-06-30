import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  age: number;
  gender: string;
  mob: number;
}
@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})

export class EditPeopleComponent {

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  routeID:number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.routeID = params['id'];

      this.getItemById(this.routeID);
    });
  }
  person: PeriodicElement = {
    id: this.routeID,
    name: ' ',
    age: 0,
    gender: ' ',
    mob: 0
  };

  getItemById(id: number) {
    this.http.get<any>(`http://localhost:3000/person/${id}`).subscribe(data => {
      this.person = data;
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }

  updateItem() {
    console.log(this.person);
    this.http.put<any>(`http://localhost:3000/person/${this.routeID}`, this.person).subscribe(response => {
      // Handle the response
      console.log(response);
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }
}
