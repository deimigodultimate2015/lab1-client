import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {NgModule} from '@angular/core';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: 'student', component: ListComponent},
  {path: 'student/add', component: AddComponent},
  {path: 'student/edit/:id', component: EditComponent},
  {path: '', redirectTo: 'student', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
