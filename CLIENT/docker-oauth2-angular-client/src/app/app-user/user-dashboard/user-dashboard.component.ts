import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/coreApp/services/home.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  resObj:any={};


  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getHomeInfoWithGet();
  }
  
  getHomeInfoWithGet(): void {
    this.homeService.getHomeInfo().subscribe(
      res => {
        console.log('getHomeInfoWithGet: ',res);
        this.resObj = res;
      },
      err => {
        console.log("getHomeInfoWithGetErr: ", err);
      }
    )
  }


}
