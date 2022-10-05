import { Component, OnInit } from '@angular/core';
import { RestoFormContent } from 'src/app/components/resto-form/resto-form.component';
import { Resto } from 'src/app/dto/resto.dto';
import { RestoService } from 'src/app/services/resto.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  public restos: Resto[] = [];

  constructor(private restoService: RestoService) {
  
  }

  ngOnInit(): void {
    this.restoService.getRestos().subscribe({
      next: value => this.restos = value
    })
  }

  public createResto(resto: RestoFormContent): void {
    this.restoService.createResto(resto.nom, resto.adresse).subscribe({
      next: value => this.restos.push(value)
    })
  }


}
