import { Injectable } from '@angular/core';
import { Paper } from '../Model/paper';

@Injectable({
  providedIn: 'root',
})
export class PaperServiceService {
  public papiers: Paper[] = [
    {
      id: 1,
      nom: 'Canson feuille trop bien',
      texture: 'oui',
      grammage: '300g',
      couleur: 'bleu',
    },
    {
      id: 2,
      nom: 'Non',
      texture: 'oui',
      grammage: '100g',
      couleur: 'jsppp',
    },
    {
      id: 3,
      nom: 'Non',
      texture: 'oui',
      grammage: '8768452g',
      couleur: 'aaaaaaaaaaaaaaa',
    },
  ];

  getPapers() {
    return this.papiers;
  }

  addPaper(paper: Paper) {
    this.papiers.push(paper);
  }

  getSinglePaper(id: number) {
    return this.papiers[id];
  }

  constructor() {}
}
