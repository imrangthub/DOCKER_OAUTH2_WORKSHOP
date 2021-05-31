import { Component } from '@angular/core';
import { CoreAppService } from './coreApp/core-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'docker-oauth2-angular-client';



constructor(
  private coreAppService: CoreAppService
  
) { }

ngOnInit() {
  this.getHomeResourceWithGet();
}

getHomeResourceWithGet(): void {
  this.coreAppService.getWatherInfo().subscribe(
    res => {
      console.log('getWatherInfoRes: ',res);
    },
    err => {
      console.log("getRegetWatherInfosourceErrorRes: ", err);
    }
  )
}




}