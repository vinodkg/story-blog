import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position.model';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  positions: Position[] = [];
  constructor() { 
    for(let i=0;i<10;i++){
      this.positions.push(new Position());
    }
  }

  ngOnInit() {
  }

}
