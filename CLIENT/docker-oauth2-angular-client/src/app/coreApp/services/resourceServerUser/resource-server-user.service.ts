import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResourceServerUserService {

  constructor(
    private http: HttpClient,
  ) { }


  resourceServerUserInfo(reqObj:any): Observable<any> {
    return this.http.get<any>('http://localhost:8282/resource-server-user/info',reqObj).pipe(
      map((data: any) => data
    ));
  }



 





}


