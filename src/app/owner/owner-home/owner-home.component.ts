import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../common/service/owner.service';
import {Observable} from 'rxjs';
import {RankedContributor} from '../../common/model';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent implements OnInit {

  topContributors$: Observable<RankedContributor[]>;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.topContributors$ = this.ownerService.listTopContributors();
  }

}
