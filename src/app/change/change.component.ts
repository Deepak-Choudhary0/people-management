import { Component,ViewChild,OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeletePeopleComponent } from '../delete-people/delete-people.component';
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
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {


  constructor(private http: HttpClient,public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DeletePeopleComponent,{data: { id: this.selectedOption }});
  }
  ngOnInit(): void {
    // Call your function here
    this.getAllItems();
  }

  isDisable: boolean = false;

  selectedOption!: number;

  availableID : number[] = [];

  onOptionSelected(event: any) {
    this.selectedOption = event.value;
    console.log(this.selectedOption);
    this.getItemById(event.value);
    this.isDisable = true;
  }
  
  getId(): number[] {
    return this.availableID;
  }

  displayedColumns: string[] = ['id', 'name', 'age', 'gender','mob'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;


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
      // this.dataSource = data;
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

}
