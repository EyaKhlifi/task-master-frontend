import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionUserComponent} from "./connexion-user/connexion-user.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {BoardsComponent} from "./home-page/boards/boards.component";
import {BoardComponent} from "./home-page/boards/board/board.component";

const routes: Routes = [
  {path: "", component: ConnexionUserComponent},
  {
    path: "home", component: HomePageComponent, children: [
      {path: "boards", component: BoardsComponent},
      {path: "board/:id", component: BoardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
