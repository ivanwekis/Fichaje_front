import { Component } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { UserInfo } from '../../../models/userInfo.model';
import { UserInfoService } from '../../../services/userInfo.service';
import { ModifyUser } from '../../../models/modifyUser.model';

@Component({
  selector: 'app-navbar-modify-user-config',
  templateUrl: './navbar-modify-user-config.component.html',
  styleUrl: './navbar-modify-user-config.component.css'
})
export class NavbarModifyUserConfigComponent {
  userInfo : UserInfo;
  newpassword: string;
  renewpassword: string;
  modifyUser : ModifyUser;

  

  constructor(private bsModalRef: BsModalRef, private userInfoService: UserInfoService) { 
    this.userInfo = new UserInfo("","","","","");
  }
  ngOnInit() {
    this.userInfoService.getUserInfo().subscribe((data: any) => {
      console.log(data);
      this.userInfo.username = data['username'];
      this.userInfo.company = data['company'];
      this.userInfo.email = data['email'];
      this.userInfo.name = data['name'];
      this.userInfo.surname = data['surname'];
    });

  }

  save() {
    if (this.newpassword != null && this.renewpassword != null && this.newpassword == this.renewpassword) {
      if(this.checkPassword(this.newpassword)){
        this.modifyUser = new ModifyUser(this.userInfo.name, this.userInfo.surname, this.userInfo.username, 
          this.userInfo.email, this.newpassword, this.userInfo.company);
        this.userInfoService.modifyUserInfo(this.modifyUser).subscribe((data: any) => {
          console.log(data);
          alert("Usuario modificado correctamente");
          this.bsModalRef.hide();
        });
    }
    else {
      alert("La contraseña no cumple los requisitos.");
    }
  }
  else{
    alert("Las contraseñas no coinciden.");
  }
}

  checkPassword(password: string): boolean {
    const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_=+{};:,<.>]).{10,}$/;
    return passwordRegex.test(password);
  }

  close() {
    this.bsModalRef.hide();
  }
}
