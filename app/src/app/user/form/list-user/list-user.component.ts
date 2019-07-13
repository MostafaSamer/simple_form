import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { interval } from 'rxjs';


import { DataClass } from '../../../data-class'
import { ShareDataService } from '../../../share-data.service'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    public data:any;

    constructor(private share: ShareDataService) { }

    ngOnInit() {
        //this.data = this.share.getApiData();
        this.share.getApiData().subscribe((return_data:DataClass[])=> {
            this.data = return_data;
        })
        console.log("The data: " + this.data)

        // Start of the mess
        /*$(document).ready(function(){
            setInterval(function () {
                (<any>$("#reload_t")).DataTable({
                    data: this.data
                })
            }, 2000);
        });*/
        interval(2000).subscribe(x => {
            this.share.getApiData().subscribe((return_data:DataClass[])=> {
                this.data = return_data;
            })
        });

    }

}
