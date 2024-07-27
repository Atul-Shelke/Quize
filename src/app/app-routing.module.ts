import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {path:'questions',component:QuestionsComponent},
  {path:'parent',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
