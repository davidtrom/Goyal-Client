import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesignBlockService } from 'src/app/service/design-block.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDesignBlock$: boolean;
  collapsed: any;
  
  constructor(private designService: DesignBlockService) {
    
   }

  ngOnInit() {
    this.designService.getDesignBlockStatus().subscribe(data => this.showDesignBlock$ = data);
  }

}
