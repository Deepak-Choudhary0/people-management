import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { ChangeComponent } from './change/change.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component:  ListPeopleComponent},
  { path: 'edit/:id', component: EditPeopleComponent },
  { path: 'delete/:id', component: DeletePeopleComponent },
  { path: 'create', component: CreatePeopleComponent },
  { path: 'change', component:ChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
