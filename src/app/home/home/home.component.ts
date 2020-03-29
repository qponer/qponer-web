import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  gotoRegisterContributor(): void {
    this.router.navigate(['/contributor/register']);
  }

  gotoRegisterBusiness(): void {
    this.router.navigate(['/bo/register']);
  }
}
