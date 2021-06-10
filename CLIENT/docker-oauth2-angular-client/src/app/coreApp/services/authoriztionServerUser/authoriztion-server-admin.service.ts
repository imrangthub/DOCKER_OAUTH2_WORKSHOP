import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthoriztionServerAdminService {

  constructor(
    private http: HttpClient,
  ) { }


  authorizationServerAdminInfo(): Observable<any> {
    return this.http.get<any>('http://localhost:8181/authorization-server-admin/info').pipe(
      map((res: Response) => res)
    )
  }



  // authorizationServerAdminInfo(): Observable<any> {
  //   const headers = {
  //     'Authorization': 'Bearer 9398de08-b18f-4bd8-bd93-b344a329cf62',
  //     'Content-type': 'application/json'
  //   }
  //   return this.http.get<any>('http://localhost:8181/authorization-server-admin/info', { headers }).pipe(
  //     map((res: Response) => res)
  //   )
  // }





}



