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
export interface Rando{
  
  forfait: string;
  age: string;
  euros: string;
}
export interface Info{
  service: string;
  prix: string;
}
const dataPetitGroupe: PetitGroupe[] = [
  { nuits: '1 à 2 nuits', euros: '235 €' },
  { nuits: '3 nuits', euros: '285 €' },
  { nuits: '4 nuits', euros: '365 €'},
  { nuits: '5 à 7 nuits', euros: '470 €' },
];
const dataGroupe: Groupe[] = [
  {nuits: '1 à 2 nuits', euros: '470 €'},
  {nuits: '3 nuits', euros: '570 €'},
  {nuits: '4 nuits', euros: '730 €' },
  {nuits:'5 à 7 nuits', euros: '940 €'},
];
const dataSemaine : Semaine[]= [
  {repas:'Panier du midi', euros: '10 euros', age: 'Pour les adultes'},
  {repas: 'Panier du midi', euros:'8 euros', age:'Enfant de 3 à 6 ans'},
  {repas: 'Panier du midi', euros: 'Gratuit', age: 'Moins de 3 ans'},
  {repas:'Soir', euros: '28 euros', age:'15 ans et plus'},
  {repas: 'Soir', euros:'18 euros', age: '6 à 15 ans'}
];
const dataRando : Rando[]= [
  { forfait: 'Nuit + Petit Déjeuner', age: '', euros: '35 euros/pers.'},
  { forfait: 'Nuit + Petit Déjeuner + Repas du soir', age: '15 ans et plus', euros: '65 euros/pers.' },
  { forfait: 'Nuit + Petit Déjeuner + Repas du soir', age: '3 à 15 ans', euros: '47 euros/pers.' },
  { forfait: 'Nuit + Petit Déjeuner + Repas du soir + Panier midi', age: '15 ans et plus', euros: '75 euros/pers.' },
  { forfait: 'Nuit + Petit Déjeuner + Repas du soir + Panier midi', age: '3 à 15 ans ', euros: '55 euros/pers.' },
];
const dataInfo : Info[] = [
  { service :  'Utilisation du lave linge', prix: '5 euros '},
  { service: 'Utilisation du sèche linge', prix: '5 euros ' },
  { service: 'Location de draps', prix: '5 euros /pers. ' },
  { service: 'Animaux admis, mais pas à l\'étage ou dans les chambres', prix: '2 euros/ jour'},
  { service: 'A disposition chez nous des boissons (Coca-Cola, orangina, schweppes, bière) en 25 ou 33 cl', prix:'2,50 euros / boisson'},
  {service: 'Bière artisanale (33cl) blond, blanche et ambrée', prix: '3,50 euros'},
  {service: 'Si vous ne faites pas le ménage en partant un forfait sera appliqué', prix:'40 euros /gîte'},
  {service: 'Fer à repasser, sèche-cheveux, lit à barreau', prix:'Gratuit'}


]

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
  columnRando: string[] = ['forfait', 'age', 'euros'];
  dataRando= dataRando;
  columnInfo: string[] = ['service', 'prix'];
  dataInfo= dataInfo;
  constructor() { }

  ngOnInit() {
  }

}
