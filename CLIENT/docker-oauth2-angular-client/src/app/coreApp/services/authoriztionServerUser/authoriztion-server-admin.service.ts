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
      'Authorization': 'Bearer 91ff8f81-984c-4a65-801d-9560573d4e8a',
      'Content-type': 'application/json'
    }
    return this.http.get<any>('http://localhost:8081/admin/list', { headers }).pipe(
      map((res: Response) => res)
    )
  }




}



