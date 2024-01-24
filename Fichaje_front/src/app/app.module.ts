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
import { AuthGuardLogin } from './core/guards/login-service.guard';
import { AuthGuardAdmin } from './core/guards/admin-service.guard';
import { AdminComponent } from './admin-dashboard/admin.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { MainSideBarComponent } from './core/side-bar/components/main-side-bar/main-side-bar.component';
import { AdminSideBarComponent } from './core/side-bar/components/admin-side-bar/admin-side-bar.component';
import { AdminService } from './services/admin.services';
import { UsersTableComponent } from './admin-dashboard/components/users-table/users-table.component';
import { SearchUsersComponent } from './admin-dashboard/components/search-users/search-users.component';
import { OrderByUsersComponent } from './admin-dashboard/components/order-by-users/order-by-users.component';
import { UsersTablePaginationComponent } from './admin-dashboard/components/users-table-pagination/users-table-pagination.component';
import { AdminUserRegisterHistoryComponent } from './admin-user-register-history/admin-user-register-history.component';
import { AdminUserRegisterSideBarComponent } from './core/side-bar/components/admin-user-register-side-bar/admin-user-register-side-bar.component';
import { User } from './models/user.model';
import { UserHistoryService } from './services/user-history.service';
import { AddNewUserComponent } from './admin-dashboard/components/add-new-user/add-new-user.component';
import { ModifyUserDataComponent } from './admin-dashboard/components/modify-user-data/modify-user-data.component';
import { ConfirmationDeleteUserComponent } from './admin-dashboard/components/confirmation-delete-user/confirmation-delete-user.component';
import { AdminStatsComponent } from './admin-stats/admin-stats.component';


const appRoutes:Routes = [
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'logout', component:LoginComponent},
  {path:'signup', component:RegistroComponent},
  {path:'modify/:string', component:ModifyRegisterComponent},
  {path:'fichaje', component:MainComponent, resolve: {registers: GetRegistersResolver}, canActivate: [AuthGuardLogin]},
  {path:'admin/dashboard', component:AdminComponent, canActivate: [AuthGuardAdmin], resolve: {users: GetRegistersResolver}},
  {path:'admin/user-history', component:AdminUserRegisterHistoryComponent, canActivate: [AuthGuardAdmin]},
  {path:'admin/stats/:string', component:AdminStatsComponent, canActivate: [AuthGuardAdmin]},
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
    AdminComponent,
    SideBarComponent,
    MainSideBarComponent,
    AdminSideBarComponent,
    UsersTableComponent,
    SearchUsersComponent,
    OrderByUsersComponent,
    UsersTablePaginationComponent,
    AdminUserRegisterHistoryComponent,
    AdminUserRegisterSideBarComponent,
    AddNewUserComponent,
    ModifyUserDataComponent,
    ConfirmationDeleteUserComponent,
    AdminStatsComponent,
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
    AdminService,
    ModifyRegister,
    UserInfoService,
    UserHistoryService,
    provideAnimations(),
    AuthGuardAdmin,
    AuthGuardLogin,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
