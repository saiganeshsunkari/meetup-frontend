import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable()

export class RetriveService {
  header = new HttpHeaders({'Content-Type':'application/json'})
rootUrl =  environment.rootUrl;
  insertUrl = this.rootUrl+"/api/customers";
  retriveUrl = this.rootUrl+"/api/retrieveById";
  getSingleUrl = this.rootUrl+"/api/customers/";
  getAllUrl  = this.rootUrl+"/api/customers/";
  updateUrl = this.rootUrl+"/api/customers/";
  deleteUrl = this.rootUrl+"/api/customers/";

  constructor(private http: HttpClient) { }

  insertApi(data) {
    return this.http.post(
      this.insertUrl,
      data).map((uresponse: Response) => {
        // this.userData=uresponse.json();
        return uresponse;
      }, error => {
        console.log(error);
      });
  }
  getall(){
    return this.http.get(this.getAllUrl);
  }

  getSingle(id){
    console.log(this.getSingleUrl+id)
    return this.http.get(this.getSingleUrl+id);
  }

  update(data,id){
    return this.http.put(this.updateUrl+id,data);
  }

  delete1(name){

    console.log(this.deleteUrl+name);
    return this.http.delete(this.deleteUrl+name);
  }

  // retriveApi(request) {

  //   return this.http.get(this.retriveUrl + "?sEmail=" + request).map((uresponse: Response) => {
  //     return uresponse;
  //   });

  // }

}
