import { Component, OnInit } from '@angular/core';
import { DesignBlockService } from 'src/app/service/design-block.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showDesignBlock$: boolean;

  constructor(private designService: DesignBlockService) { }

  ngOnInit() {
    this.designService.getDesignBlockStatus().subscribe(data => this.showDesignBlock$ = data);
  }

}
