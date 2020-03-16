import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
export interface PetitGroupe {
  nuits: string;
  euros: number;
};
export interface Groupe{
  nuits: string;
  euros: number;
};

const dataPetitGroupe: PetitGroupe[] = [
  { nuits: '5 à 7 nuits', euros: 470 },
  { nuits: '4 nuits', euros: 365 },
  { nuits: '3 nuits', euros: 285 },
  { nuits: '1 à 2 nuits', euros: 235 },
];
const dataGroupe: Groupe[] = [
  {nuits:'5 à 7 nuits', euros: 940},
  {nuits: '4nuits', euros: 730 },
  {nuits: '3 nuits', euros: 570},
  {nuits: '1 à 2 nuits', euros: 470}
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
  constructor() { }

  ngOnInit() {
  }

}
