import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShareDataService } from '../../../share-data.service'

@Component({
  selector: 'app-submited',
  templateUrl: './submited.component.html',
  styleUrls: ['./submited.component.css']
})
export class SubmitedComponent {

  constructor(private router:ActivatedRoute, private share: ShareDataService) { }

  submited_user: Object = this.share.getData()

  //submited_user: Object = <Object>this.router.snapshot.queryParams.get('object');


}
