import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';

@Component({
  selector: 'app-dashboard-alt',
  templateUrl: './dashboard-alt.component.html',
  styleUrls: ['./dashboard-alt.component.css']
})
export class DashboardAltComponent implements OnInit {
  

  constructor(private designService: DesignBlockService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);
  }

}
