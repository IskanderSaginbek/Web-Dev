import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Album} from "../Album";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private apiUrl = "http://localhost:5000/albums";
  constructor(private http:HttpClient) { }

  public getAlbums() : Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  public deleteItem(id : number): Observable<unknown> {
    //console.log(this.apiUrl+'/'+id.toString());
    return this.http.delete<unknown>(this.apiUrl+'/'+id.toString());
  }

  public saveItem(item : Album, title : string): Observable<unknown> {
    item.title = title;
    return this.http.patch<unknown>(this.apiUrl+'/'+item.id.toString(),item)
  }
}
