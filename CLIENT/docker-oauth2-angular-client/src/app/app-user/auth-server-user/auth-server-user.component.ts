import { Component, OnInit } from '@angular/core';
import { AuthoriztionServerUserService } from 'src/app/coreApp/services/authoriztionServerUser/authoriztion-server-user.service';

@Component({
  selector: 'app-auth-server-user',
  templateUrl: './auth-server-user.component.html',
  styleUrls: ['./auth-server-user.component.css']
})
export class AuthServerUserComponent implements OnInit {
  resObj:any={};


  constructor(
    private authoriztionServerUserService: AuthoriztionServerUserService
  ) { }

  ngOnInit() {
    this.getAuthServerUserInfo();
  }
  
  getAuthServerUserInfo(): void {
    this.authoriztionServerUserService.authServerUserInfo().subscribe(
      res => {
        console.log('authServerUserInfo: ',res);
        this.resObj = res;
      },
      err => {
        console.log("authServerUserInfoErr: ", err);
      }
    )
  }


}
