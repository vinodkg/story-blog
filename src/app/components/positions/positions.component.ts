import { Component, OnInit } from '@angular/core';
import { Position } from '../../models/position.model';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  positions: Position[] = [];
  constructor(private dataService: DataService) { 
      this.positions = this.dataService.getPositions();
  }

  ngOnInit() {
  }

  openPostionDetails(position, event){
    window.alert("Coming Soon!");
  }
}
