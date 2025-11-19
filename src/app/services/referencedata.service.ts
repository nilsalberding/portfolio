import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferencedataService {

  constructor() { }

  references = [
    {
      name: "Henry Wolf",
      project: "Join",
      text: "team.reference1"
    },
    {
      name: "Marcel Buchmann",
      project: "Join",
      text: "team.reference2"
    },
    {
      name: "Felicia Tretter",
      project: "Join",
      text: "team.reference3"
    },

  ]
}
