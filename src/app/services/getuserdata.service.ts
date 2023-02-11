import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetuserdataService {
  urlget="https://jsonplaceholder.typicode.com/todos";
  urlsend="https://google.com";
  constructor(private http:HttpClient) {

    
   }
   user(){
    return this.http.get(this.urlget)
   }
   senddata(senddata:any){
    return this.http.post(this.urlsend,senddata)
   }
}
