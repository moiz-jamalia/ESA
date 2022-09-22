import {Injectable} from '@angular/core';
import {Werkvorschrift} from './werkvorschriften.model';

@Injectable({
  providedIn: 'root'
})
export class WerkvorschriftenService {
  private werkvorschriftC1: Werkvorschrift[] = [
    {
      chapter: 'C1',
      count: null,
      description: 'Allgemeines'
    },
    {
      chapter: 'C1.2',
      count: null,
      description: 'Geltungsbereich'
    },
    {
     chapter: 'C1.2',
     count: 3,
     description: 'Vorliegende Bestimmungen gelten als harmonisierte Ergänzungen im Verteilnetzgebiet der Mitglieder des Elektrizitätswerke-Verbandes St.Gallen-Appenzel und können durch diese übernommen, ergänzt oder geändert werden'
    }
  ];

  getWerkvorschriften() {
    return [...this.werkvorschriftC1];
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}
}
