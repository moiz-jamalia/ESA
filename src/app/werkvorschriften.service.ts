import {Injectable} from '@angular/core';
import {Werkvorschrift} from './werkvorschriften.model';

@Injectable({
  providedIn: 'root'
})
export class WerkvorschriftenService {
  private werkvorschriftC1: Werkvorschrift[] = [
    new Werkvorschrift(
      'C1',
      null,
      'Allgemeines'
    ),
    new Werkvorschrift(
      'C1.2',
      null,
      'Geltungsbereich'
    ),
    new Werkvorschrift(
      'C1.2',
      3,
      'Vorliegende Bestimmungen gelten als harmonisierte Ergänzungen im Verteilnetzgebiet' +
      ' der Mitglieder des Elektrizitätswerke-Verbandes St.Gallen-Appenzel und können durch diese ' +
      'übernommen, ergänzt oder geändert werden'
    )
  ];

  get werkvorschriften() {
    return [...this.werkvorschriften];
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() {}
}
