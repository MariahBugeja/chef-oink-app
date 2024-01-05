import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.page.html',
  styleUrls: ['./cookie.page.scss'],
}) 

export class CookiePage implements OnInit {
  selectedSegment: string = 'description';
  

  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/tabs/tab1']); 
  
  }
  
  ngOnInit() {}
}
