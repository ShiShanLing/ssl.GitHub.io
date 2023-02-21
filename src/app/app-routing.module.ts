import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {FetchDataComponent} from "./fetch-data/fetch-data.component";
import {CounterComponent} from "./counter/counter.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'identy',
    pathMatch: 'full'
  },
  { path: 'test1', component: FetchDataComponent },
  { path: 'test2', component: CounterComponent },
  {path:'**', redirectTo: 'board'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // preloadingStrategy: PreloadAllModules // 开启预加载
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
