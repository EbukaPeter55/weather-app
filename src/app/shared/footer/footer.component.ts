import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear:any;
 

  constructor() { }

  ngOnInit(): void {
    // Get the current date and year using javascript date object
    let date = new Date();
    this.currentYear = date.getFullYear();
  }

}
