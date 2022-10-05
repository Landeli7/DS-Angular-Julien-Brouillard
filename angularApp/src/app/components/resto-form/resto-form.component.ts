import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-resto-form',
  templateUrl: './resto-form.component.html',
  styleUrls: ['./resto-form.component.css']
})
export class RestoFormComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";

  @Output()
  public restoCreated: EventEmitter<RestoFormContent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {

    if (form.valid) {
      this.restoCreated.emit({
        nom: this.nomInput,
        adresse: this.adresseInput
      });
    }
  }

}

export interface RestoFormContent {
  nom: string;
  adresse: string;
}