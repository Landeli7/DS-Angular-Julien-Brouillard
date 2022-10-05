import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-eval-form',
  templateUrl: './eval-form.component.html',
  styleUrls: ['./eval-form.component.css']
})
export class EvalFormComponent implements OnInit {

  public evaluateurInput: string = "";
  public commentaireInput: string = "";
  public noteInput: number = 0;

  @Output()
  public evalCreated: EventEmitter<EvalFormContent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {

    if (form.valid) {
      this.evalCreated.emit({
        evaluateur: this.evaluateurInput,
        commentaire: this.commentaireInput,
        note: this.noteInput
      });
    }
  }

}

export interface EvalFormContent {
  evaluateur: string;
  commentaire: string;
  note: number;
}
