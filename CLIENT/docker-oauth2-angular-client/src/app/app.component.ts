import { Component } from '@angular/core';
import { AuthService } from './coreApp/services/auth-service/auth.service';
import { HomeService } from './coreApp/services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'docker-oauth2-angular-client';

  resObj:any={};


  constructor(
    private authService: AuthService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getHomeResourceWithGet();
  }


  onClickLogoutBtn():void {
    console.log("onClickLogoutBtn");
      this.authService.logout();
  }
  
  getHomeResourceWithGet(): void {
    this.homeService.getHomeInfo().subscribe(
      res => {
        console.log('getHomeResourceWithGetRes: ',res);
        this.resObj = res;
      },
      err => {
        console.log("getHomeResourceWithGetErrorRes: ", err);
      }
    )
  }



}