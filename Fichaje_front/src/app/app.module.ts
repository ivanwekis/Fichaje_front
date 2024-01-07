import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './core/signup/registro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.services';
import { CookieService } from 'ngx-cookie-service';
import { MainComponent } from './main/main.component';
import { RegistroService } from './services/registro.services';
import { RegisterTableComponent } from './main/components/register-table/register-table.component';
import { FicharService } from './services/fichar.services';
import { RegisterService } from './services/register.service';
import { PaginationComponent } from './main/components/pagination/pagination.component';
import { ModifyRegisterComponent } from './main/components/register-card/modify-register/modify-register.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModifyRegister } from './services/modify.service';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { NavbarModifyUserConfigComponent } from './core/navbar/components/navbar-modify-user-config/navbar-modify-user-config.component';
import { UserInfoService } from './services/userInfo.service';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { DropdownReasonComponent } from './main/components/dropdown-reason/dropdown-reason.component';
import { MainButtonComponent } from './main/components/main-button/main-button.component';
import { NightShiftComponent } from './main/components/night-shift/night-shift.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RegisterCardComponent } from './main/components/register-card/register-card.component';
import { CardHeaderComponent } from './main/components/register-card/card-header/card-header.component';
import { CardBodyComponent } from './main/components/register-card/card-body/card-body.component';
import { ShowInfoComponent } from './main/components/register-card/show-info/show-info.component'; 
import { GetRegistersResolver } from './main/resolvers/get-registers.resolver';
import { loginGuard } from './core/guards/can-service.guard';


const appRoutes:Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'logout', component:LoginComponent},
  {path:'signup', component:RegistroComponent},
  {path:'modify/:string', component:ModifyRegisterComponent},
  {path:'fichaje', component:MainComponent, resolve: {registers: GetRegistersResolver}, canActivate: [loginGuard]},
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
    NavbarModifyUserConfigComponent,
    DropdownReasonComponent,
    MainButtonComponent,
    NightShiftComponent,
    RegisterCardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ShowInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    LoginService,
    RegistroService,
    FicharService,
    RegisterService,
    CookieService,
    ModifyRegister,
    UserInfoService,
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
