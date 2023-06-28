import { Component,ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  name: string;
  age: number;
  gender: string;
  mob: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent {
  selectedOption!: number;

  onOptionSelected(event: any) {
    this.selectedOption = event.value;
    console.log(event.value);
  }
  
  getId(): number[] {
    return [1, 2, 3]; // Replace with your actual list of IDs
  }

  displayedColumns: string[] = ['id', 'name', 'age', 'gender','mob'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  constructor(private http: HttpClient) { }

  getAllItems() {
    this.http.get<any>('http://localhost:3000/person').subscribe(data => {
      // Handle the response data
      console.log(data);
      this.dataSource = data;
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }


  getItemById(id: number) {
    this.http.get<any>(`http://localhost:3000/person/${id}`).subscribe(data => {
      // Handle the response data
      console.log(data);
      console.log(typeof data);
      this.dataSource = [data];
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }

  createItem(payload: any) {
    this.http.post<any>('http://localhost:3000/person', payload).subscribe(response => {
      // Handle the response
      console.log(response);
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }

  updateItem(id: number, payload: any) {
    this.http.put<any>(`http://localhost:3000/person/${id}`, payload).subscribe(response => {
      // Handle the response
      console.log(response);
    }, error => {
      // Handle any errors
      console.error('An error occurred:', error);
    });
  }

  deleteItem(id: number) {
    for (let i=1;i<57;i++){
    this.http.delete<any>(`http://localhost:3000/person/${i}`).subscribe(response => {
      // Handle the response
      console.log(response);
    }, error => {
      // Handle any errors
      // console.error('An error occurred:', error);
    });
  }
}
}
