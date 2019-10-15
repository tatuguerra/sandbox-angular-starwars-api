import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTER } from '../mock-character';
import { log } from 'util';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters = CHARACTER;
  selectedCharacter: Character;
  
  constructor() { }
  
  ngOnInit() {
  }
  onSelect(character: Character): void {
    
    this.selectedCharacter = character;
  }

}
