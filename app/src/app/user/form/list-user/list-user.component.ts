import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";

import { DataClass } from '../../../data-class'
import { ShareDataService } from '../../../share-data.service'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    data:any;

    constructor(private share: ShareDataService) { }

    ngOnInit() {
        //this.data = this.share.getApiData();
        this.share.getApiData().subscribe((return_data:DataClass[])=> {
            this.data = return_data;
        })
        console.log("The data: " + this.data)
    }

}
