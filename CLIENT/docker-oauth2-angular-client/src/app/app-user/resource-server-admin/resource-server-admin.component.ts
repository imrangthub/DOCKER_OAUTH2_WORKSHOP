import { Component, OnInit } from '@angular/core';
import { ResourceServerAdminService } from 'src/app/coreApp/resource-server-admin.service';

@Component({
  selector: 'app-resource-server-admin',
  templateUrl: './resource-server-admin.component.html',
  styleUrls: ['./resource-server-admin.component.css']
})
export class ResourceServerAdminComponent implements OnInit {

  resObj:any={};


  constructor(
    private resourceServerAdminService: ResourceServerAdminService
  ) { }

  ngOnInit() {
    this.getResourceServerAdminInfo();
  }
  
  getResourceServerAdminInfo(): void {
    this.resourceServerAdminService.resourceServerAdminInfo().subscribe(
      res => {
        console.log('getResourceServerAdminInfo: ',res);
        this.resObj = res;
      },
      err => {
        console.log("getResourceServerAdminInfoErr: ", err);
      }
    )
  }






}
