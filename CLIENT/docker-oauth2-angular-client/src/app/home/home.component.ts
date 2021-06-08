import { Component, OnInit } from '@angular/core';
import { HomeService } from '../coreApp/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
