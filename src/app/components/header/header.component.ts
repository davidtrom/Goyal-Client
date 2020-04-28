import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private showDesignBlock$: BehaviorSubject<boolean>;
  
  constructor() {
    this.showDesignBlock$ = new BehaviorSubject<boolean>(false);
   }

  ngOnInit() {
    
  }

}
