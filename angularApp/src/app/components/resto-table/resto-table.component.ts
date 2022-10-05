import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resto } from 'src/app/dto/resto.dto';

@Component({
  selector: 'app-resto-table',
  templateUrl: './resto-table.component.html',
  styleUrls: ['./resto-table.component.css']
})
export class RestoTableComponent implements OnInit {

  @Input()
  public restos: Resto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
