import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareApiDataService {

  constructor() { }

  sharedObject;

  setData(sendObject) {
      this.sharedObject = sendObject;
      //console.log('object is seted');
  }

  getData() {
      return this.sharedObject;
  }

}
