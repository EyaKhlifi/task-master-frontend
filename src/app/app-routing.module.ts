import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConnexionUserComponent} from "./connexion-user/connexion-user.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  {path: "", component: ConnexionUserComponent},
  {path: "home", component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
