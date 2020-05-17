import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private designService: DesignBlockService) { }

  ngOnInit() {
    this.designService.updateDesignBlockStatus(true);
  }

}
