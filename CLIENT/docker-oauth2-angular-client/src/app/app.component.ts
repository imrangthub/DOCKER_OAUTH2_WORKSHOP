import { Component } from '@angular/core';
import { HomeService } from './coreApp/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'docker-oauth2-angular-client';

  resObj:any={};


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getHomeResourceWithGet();
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