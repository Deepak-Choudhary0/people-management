import { Component,Inject,Renderer2, ElementRef  } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialog,MatDialogRef } from '@angular/material/dialog';
import { ChangeComponent } from '../change/change.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-people',
  templateUrl: './delete-people.component.html',
  styleUrls: ['./delete-people.component.css']
})
export class DeletePeopleComponent {
  // id:number = 0;
  message: string = 'Are you sure to delete?';
  // constructor(public dialogRef: MatDialogRef<DialogContentComponent>) {}
  constructor(public dialog: MatDialog,private http: HttpClient, @Inject(MAT_DIALOG_DATA) public selectedOption: any,private renderer: Renderer2, private elementRef: ElementRef) {}


  changeStyle() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    const button2 = this.elementRef.nativeElement.querySelector('#delete');

    const button1 = this.elementRef.nativeElement.querySelector('#cancel');
    if (container && button2 && button1) {
      this.renderer.setStyle(container, 'background-color', '#75e052');
      this.renderer.setStyle(button2, 'display', 'none');
      this.renderer.setStyle(button1, 'justify-content', 'center');
    }
  }

  handleAccentButtonClick(): void {
    console.log('Accent button clicked');

    this.dialog.closeAll();
  }

  handleWarnButtonClick(): void {
    this.deleteItem(this.selectedOption.id);
    console.log('Warn button clicked');
  }

  deleteItem(id: number) {

    this.http.delete<any>(`http://localhost:3000/person/${id}`).subscribe(response => {
      // Handle the response
      // console.log(response);
      this.message = `Details Deleted Successfully..`;
      this.changeStyle();
      // console.log(response[0])
      // console.log(response.deletedPerson[0].name);
    }, error => {
      // Handle any errors
      // console.error('An error occurred:', error);
      return error;
    });
}
}
