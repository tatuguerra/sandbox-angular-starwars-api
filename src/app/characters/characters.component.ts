import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTER } from '../mock-character';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters = CHARACTER

  constructor() { }

  ngOnInit() {
  }

}
