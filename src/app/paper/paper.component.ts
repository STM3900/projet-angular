import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
})
export class PaperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nom = 'Théo';
  papiers = [
    {
      id: '12',
      nom: 'Canson feuille trop bien',
      grammage: '300g',
      couleur: 'bleu',
    },
    {
      id: '13',
      nom: 'Non',
      grammage: '100g',
      couleur: 'jsppp',
    },
    {
      id: '13',
      nom: 'Non',
      grammage: '8768452g',
      couleur: 'aaaaaaaaaaaaaaa',
    },
  ];
}
