import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { DataClass } from './data-class'

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor(private http: HttpClient) { }


  sharedObject = new DataClass;

  setData(sendObject: DataClass) {
      this.sharedObject = sendObject;
      //console.log('object is seted');
  }

  setApiData(send_api_object: DataClass) {
      console.log(send_api_object)
      this.http.post('http://localhost:3000/user/new', {
              'f_name': send_api_object.f_name,
              's_name': send_api_object.s_name,
              'email': send_api_object.email,
              'pass': send_api_object.pass,
              'adress': send_api_object.adress,
              'phone': send_api_object.phone,
              'gender': send_api_object.gender
          }).subscribe()
          //return this.http.post('http://localhost:3000/user/new', {send_api_object: send_api_object});
      }

  getData() {
      return this.sharedObject;
  }

  getApiData() {
      return this.http.get('http://localhost:3000/user/list')

  }

}


/*
/*
//let rec_data: DataClass[];
//console.log(this.http.get<Object>('http://localhost:3000/user/list'))
return this.http.get('http://localhost:3000/user/list')
         //.toPromise()
         //.then(response => response.json().data as DataClass[]);
/*console.log(rec_data[0].f_name);
return rec_data;
 let observable: Observable<any> = this.http.get('http://localhost:3000/user/list')
 observable.subscribe((response: Response)=> {
     //let responseData: any = response;
     console.log(response)
     return response;
     /*
     let temp_obj = new DataClass();
     let arr: DataClass[] = new Array(Object.keys(response).length);
     //let arr: any[];
     console.log("before-----------------")
     console.log("the array: ")
     console.log(response)
     console.log("The type of the returned: " + typeof response)
     console.log("The Type of the pushed ele: " + typeof temp_obj)
     for(let i = 0; i<Object.keys(response).length; i++) {
         temp_obj.f_name = response[i].f_name
         temp_obj.s_name = response[i].s_name
         temp_obj.email = response[i].email
         temp_obj.pass = response[i].pass
         temp_obj.adress = response[i].adress
         temp_obj.phone = response[i].phone
         temp_obj.gender = response[i].gender
         //console.log("The name: " + temp_obj.f_name)
         //arr.push(temp_obj);
         arr[i] = temp_obj;
     }
     console.log("After-----------------")
     console.log("the array: ")
     console.log(arr)
     console.log("The type of the returned: " + typeof arr)
     console.log("The Type of the pushed ele: " + typeof temp_obj)
     return arr;

*/
