import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
export interface PetitGroupe {
  nuits: string;
  euros: string;
};
export interface Groupe{
  nuits: string;
  euros: string;
};
export interface Semaine{
  repas: string;
  age: string;
  euros: string;
}
const dataPetitGroupe: PetitGroupe[] = [
  { nuits: '5 à 7 nuits', euros: '470 €' },
  { nuits: '4 nuits', euros: '365 €'},
  { nuits: '3 nuits', euros: '285 €' },
  { nuits: '1 à 2 nuits', euros: '235 €' },
];
const dataGroupe: Groupe[] = [
  {nuits:'5 à 7 nuits', euros: '940 €'},
  {nuits: '4 nuits', euros: '730 €' },
  { nuits: '3 nuits', euros: '570 €'},
  {nuits: '1 à 2 nuits', euros: '470 €'}
];
const dataSemaine : Semaine[]= [
  {repas:'Soir', euros: '28 euros', age:'15 ans et plus'},
  {repas: 'Soir', euros:'18 euros', age: '6 à 15 ans'},
  {repas:'Panier du midi', euros: '10 euros', age: 'Pour les adultes'},
  {repas: 'Panier du midi', euros:'8 euros', age:'Enfant de 3 à 6 ans'},
  {repas: 'Panier du midi', euros: 'Gratuit', age: 'Moins de 3 ans'}
];

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {
  displayedColumns: string[] = ['nuits', 'euros'];
  dataSource = dataPetitGroupe;
  columns: string[] = ['nuits', 'euros'];
  data = dataGroupe;
  columnSemaine: string[] = ['repas', 'age','euros'];
  dataSemaine= dataSemaine;
  constructor() { }

  ngOnInit() {
  }

}
