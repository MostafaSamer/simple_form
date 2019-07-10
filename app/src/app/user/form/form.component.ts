import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShareDataService } from '../../share-data.service'
import { DataClass } from '../../data-class'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    //@Input() new_user: Object = {};

    new_user = new DataClass;

    // must send in the constructor
    constructor(private router:Router, private share: ShareDataService){

    }

    onSubmitTemplateBased() {
        console.log(this.new_user);
        this.share.setData(this.new_user)
        this.share.setApiData(this.new_user)
        this.router.navigateByUrl('/submited')
    }




}
