import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Iproduct} from './Iproduct';
import {catchError}  from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataListService {
public getUrl="http://127.0.0.1:8080/getproducts";
public postUrl="http://127.0.0.1:8080/addproducts";
public deleteUrl="http://127.0.0.1:8080/deleteproducts"
  constructor(private http:HttpClient) { }
  public getproduct():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.getUrl);
  }
  public addproducts(data){
    return this.http.post<any>(this.postUrl,data).pipe(catchError(this.CatchError))
  }
  public CatchError(error:HttpErrorResponse){
    return throwError(error.statusText)
  }
  
}
