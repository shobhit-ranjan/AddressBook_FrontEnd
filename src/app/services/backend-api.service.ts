import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addressWithOutId } from '../Model/model'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  baseUrl = environment.getUrl;


  constructor(private http: HttpClient) { }

  getAddress(): Observable<any> {

    return this.http.get<any>(this.baseUrl)
  }

  postAddress(addressInFo: addressWithOutId) {
    return this.http.post<any>(this.baseUrl + 'addaddress', addressInFo)
  }


  deleteAddress(n: number) {
    return this.http.delete<any>(this.baseUrl + "del/" + n)
  }


}
