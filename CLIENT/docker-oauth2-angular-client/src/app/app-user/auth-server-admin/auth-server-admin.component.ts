import { Component, OnInit } from '@angular/core';
import { AuthoriztionServerAdminService } from 'src/app/coreApp/services/authoriztion-server-admin.service';

@Component({
  selector: 'app-auth-server-admin',
  templateUrl: './auth-server-admin.component.html',
  styleUrls: ['./auth-server-admin.component.css']
})
export class AuthServerAdminComponent implements OnInit {

  resObj:any={};


  constructor(
    private authoriztionServerAdminService: AuthoriztionServerAdminService
  ) { }

  ngOnInit() {
    this.getAuthorizationServerAdminInfo();
  }
  
  getAuthorizationServerAdminInfo(): void {
    this.authoriztionServerAdminService.authorizationServerAdminInfo().subscribe(
      res => {
        console.log('getAuthorizationServerAdminInfoRes: ',res);
        this.resObj = res;
      },
      err => {
        console.log("getAuthorizationServerAdminInfoErr: ", err);
      }
    )
  }



  

}
