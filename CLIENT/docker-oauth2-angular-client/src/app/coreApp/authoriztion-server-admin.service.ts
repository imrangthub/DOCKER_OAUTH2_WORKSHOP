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
    const headers = {
      'Authorization': 'Bearer 025e0d87-1b3b-4172-bc1e-df9311ad22e8',
      'Content-type': 'application/json'
    }
    return this.http.get<any>('http://localhost:8081/admin/list', { headers }).pipe(
      map((res: Response) => res)
    )
  }

  getHomeResourceWithPost(): Observable<any> {
    const headers = {
      'Authorization': 'Bearer 1adac5c3-9163-4166-810a-db3cb08e3177',
      'Content-type': 'application/json'
    }
   return this.http.post<any>('http://localhost:8081/admin/save', {}, {headers}).pipe(
      map((data: any) => data
      ));
  }



 





}




// getHomeResourceWithPost(): void {
//   const headers = {
//     'Authorization': 'Bearer 999d69a0-4244-4d62-8179-0268f83b1f9b',
//     'Content-type': 'application/json'
//   }
//   this.httpClient.post<any>('http://localhost:8080/home', {}, { headers }).pipe(
//     map(res => res))
//     .subscribe(
//       data => {
//         console.log('getHomeListDataPost Res: ', data);
//       },
//       err => {
//         console.log("getHomeListDataPost Res error ", err);

//       }
//     );
// }


// periorJavaScript():void {
//   console.log(" periorJavaScript ");

//   const xhr = new XMLHttpRequest();
//  // xhr.open('GET', 'http://localhost:8080/home')
//   xhr.open('GET', 'http://localhost:8080/admin/per-write')


//   //xhr.setRequestHeader('Authorization', 'Bearer 999d69a0-4244-4d62-8179-0268f83b1f9b');
//   xhr.setRequestHeader('Authorization', 'Bearer 978d7a05-8493-430b-918d-c6d304c2e7d3');
//   xhr.setRequestHeader('Content-Type', 'application/json');

//   xhr.responseType = 'json';
//   xhr.onload = () => {
//     const resData = xhr.response;
//     console.log("get REQ RAW RES# ", resData);
//   }

//   xhr.send();
// }


