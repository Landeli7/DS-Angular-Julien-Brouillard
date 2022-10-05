import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EvalFormContent } from 'src/app/components/eval-form/eval-form.component';
import { RestoFormContent } from 'src/app/components/resto-form/resto-form.component';
import { Evaluation, Resto } from 'src/app/dto/resto.dto';
import { RestoService } from 'src/app/services/resto.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // public nom: string = "";
  // public adresse: string = "";
  // public evaluations: Evaluation[] = [];
  public resto: Resto = {
    id: 0,
    nom: '',
    adresse: '',
    evaluations: [],
    moyenne: 0
  };

  public evaluations: Evaluation[] = [];

  public dispMessage = false;

  constructor(private restoService: RestoService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( (params: Params) => {
      this.resto.id = params['id'];

      this.restoService.getRestoById(params['id']).subscribe( (resto: Resto) => {
        this.resto = resto;
        this.evaluations = resto.evaluations;
      })
    })
  }

  public createEval(evaluation: EvalFormContent): void {

    if(evaluation.note != 0 && evaluation.note != 1 && 
      evaluation.note != 2 && evaluation.note != 3 ) {
        console.log("Note invalide");
        this.dispMessage = true;
    } else {
      this.dispMessage = false;
      this.restoService.createEval(
        this.resto.id, 
        evaluation.evaluateur, 
        evaluation.commentaire, 
        evaluation.note).subscribe({
  
          next: value => this.evaluations.push(value)
      })

      //Recalcul de la moyenne pour l'affichage ?
    }
  }

  // public deleteEval(evalId: number): void {
  //   this.restoService.deleteEval(this.resto.id, evalId).subscribe(() => {
  //     this.evaluations.filter()
  //   });
  // }

  public createResto(resto: RestoFormContent): void {
    this.restoService.updateRestoById(this.resto.id, resto.nom, resto.adresse).subscribe((resto) => {
      this.resto = resto;
    });
  }

}
