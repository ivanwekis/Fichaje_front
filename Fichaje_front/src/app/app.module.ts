import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicios/login.services';
import { CookieService } from 'ngx-cookie-service';
import { MainComponent } from './main/main.component';
import { RegistroService } from './servicios/registro.services';
import { RegisterTableComponent } from './main/components/register-table/register-table.component';
import { FicharService } from './servicios/fichar.services';
import { RegisterService } from './servicios/register.service';
import { PaginationComponent } from './main/components/pagination/pagination.component';
import { ModifyRegisterComponent } from './main/components/modify-register/modify-register.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModifyRegister } from './servicios/modify.service';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes:Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'logout', component:LoginComponent},
  {path:'signup', component:RegistroComponent},
  {path:'modify/:string', component:ModifyRegisterComponent},
  {path:'fichaje', component:MainComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    MainComponent,
    RegisterTableComponent,
    PaginationComponent,
    ModifyRegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    LoginService,
    RegistroService,
    FicharService,
    RegisterService,
    CookieService,
    ModifyRegister,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
