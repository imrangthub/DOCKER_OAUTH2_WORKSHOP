import { Component, OnInit } from '@angular/core';
import { ResourceServerUserService } from 'src/app/coreApp/services/resourceServerUser/resource-server-user.service';

@Component({
  selector: 'app-resource-server-user',
  templateUrl: './resource-server-user.component.html',
  styleUrls: ['./resource-server-user.component.css']
})
export class ResourceServerUserComponent implements OnInit {

  resObj:any={};


  constructor(
    private resourceServerUserService: ResourceServerUserService
  ) { }

  ngOnInit() {
    this.getResourceServerUserInfo();
  }
  
  getResourceServerUserInfo(): void {
    let reqObj={}
    this.resourceServerUserService.resourceServerUserInfo(reqObj).subscribe(
      res => {
        console.log('resourceServerUserInfo: ',res);
        this.resObj = res;
      },
      err => {
        console.log("resourceServerUserInfoErr: ", err);
      }
    )
  }
}
