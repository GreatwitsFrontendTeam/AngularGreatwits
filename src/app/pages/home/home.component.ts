import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carausalFlag: boolean;
  constructor() { 
    this.carausalFlag = true;
  }

  ngOnInit(): void {
  }

}
