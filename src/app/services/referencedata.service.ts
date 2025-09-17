import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferencedataService {

  constructor() { }

  references = [
    {
      name: "Nico Dunkler",
      project: "El Pollo Loco",
      text: "team.reference1"
    },
    {
      name: "Marcel Heftmann",
      project: "Join",
      text: "team.reference2"
    },
    {
      name: "Marcus Gähne",
      project: "Pokedex",
      text: "team.reference3"
    },

  ]
}
