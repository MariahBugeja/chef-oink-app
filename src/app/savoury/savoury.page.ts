import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-savoury',
  templateUrl: './savoury.page.html',
  styleUrls: ['./savoury.page.scss'],
})
export class SavouryPage {


  constructor(private router: Router) { }
  goBack() {
    this.router.navigate(['/tabs/tab1']);
  }
}
