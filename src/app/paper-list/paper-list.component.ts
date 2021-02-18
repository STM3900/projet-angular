import { Component, OnInit } from '@angular/core';
import { PaperServiceService } from '../services/paper-service.service';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css'],
})
export class PaperListComponent implements OnInit {
  public publicPaper;
  constructor(private _papiers: PaperServiceService) {
    this.publicPaper = _papiers.getPapers();
  }

  ngOnInit(): void {}
}
