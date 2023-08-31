import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConnexionUserComponent} from './connexion-user/connexion-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomePageComponent} from './home-page/home-page.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CreateWorkspaceDialogComponent} from './home-page/create-workspace-dialog/create-workspace-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BoardsComponent } from './home-page/boards/boards.component';
import { BoardComponent } from './home-page/boards/board/board.component';
import { CreateBoardComponent } from './home-page/boards/create-board/create-board.component';
import { NewBoardDialogComponent } from './home-page/boards/new-board-dialog/new-board-dialog.component';
import { ModifyBoardDialogComponent } from './home-page/boards/modify-board-dialog/modify-board-dialog.component';
import { DeleteBoardDialogComponent } from './home-page/boards/delete-board-dialog/delete-board-dialog.component';
import { BoardBoxComponent } from './home-page/boards/board-box/board-box.component';
import { ListComponent } from './home-page/boards/board/list/list.component';
import { NewListComponent } from './home-page/boards/board/new-list/new-list.component';
import { ListBoxComponent } from './home-page/boards/board/list-box/list-box.component';
import { NewListBoxComponent } from './home-page/boards/board/new-list-box/new-list-box.component';
import { CardBoxComponent } from './home-page/boards/board/card-box/card-box.component';
import { DeleteCardDialogComponent } from './home-page/boards/board/delete-card-dialog/delete-card-dialog.component';
import { ModifyCardDialogComponent } from './home-page/boards/board/modify-card-dialog/modify-card-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionUserComponent,
    HomePageComponent,
    CreateWorkspaceDialogComponent,
    BoardsComponent,
    BoardComponent,
    CreateBoardComponent,
    NewBoardDialogComponent,
    ModifyBoardDialogComponent,
    DeleteBoardDialogComponent,
    BoardBoxComponent,
    ListComponent,
    NewListComponent,
    ListBoxComponent,
    NewListBoxComponent,
    CardBoxComponent,
    DeleteCardDialogComponent,
    ModifyCardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
