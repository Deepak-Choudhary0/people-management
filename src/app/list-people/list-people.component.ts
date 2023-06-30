import { Component,ViewChild,OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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
  
  myControl = new FormControl('');
  options: string[] = ['Snoop Dogg', 'Anand Ji', 'Naruto','Shorts','Shorts'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.getAllItems();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  selectedOption!: number;

  availableID : number[] = [];

  onOptionSelected(event: any) {
    this.selectedOption = event.value;
    console.log(event.value);
  }
  

  getId(): number[] {
    return this.availableID;
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
      // this.availableID = [x for x in data.length];
      for (let i = 1; i <= data.length; i++) {
        if (!this.availableID.includes(i)) {
          this.availableID.push(i);
        }
      }
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
