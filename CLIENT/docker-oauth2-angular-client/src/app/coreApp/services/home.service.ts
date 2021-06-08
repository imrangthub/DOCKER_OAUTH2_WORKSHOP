import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
  ) { }


  getHomeInfo(): Observable<any> {
    const headers = {
      'Content-type': 'application/json'
    }
    return this.http.get<any>('http://localhost:8081/home', { headers }).pipe(
      map((res: Response) => res)
    )
  }





}

