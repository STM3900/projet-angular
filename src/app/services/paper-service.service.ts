import { Injectable } from '@angular/core';
import { Paper } from '../Model/paper';
@Injectable({
  providedIn: 'root',
})
export class PaperServiceService {
  //bip bip je suis l'appel API
  private dataAPI = `{
    "paper": [
      {
        "id": 1,
        "nom": "Papier dessin",
        "texture": "lisse",
        "grammage": "100g",
        "couleur": "noir"
      },
      {
        "id": 2,
        "nom": "Papier aquarelle",
        "texture": "absorbante",
        "grammage": "300g",
        "couleur": "blanc"
      },
      {
        "id": 3,
        "nom": "Papier cailloux ciseaux",
        "texture": "oui",
        "grammage": "100g",
        "couleur": "toutes"
      }
    ]
  }
  `;

  public papiers: Paper[] = JSON.parse(this.dataAPI).paper;
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
