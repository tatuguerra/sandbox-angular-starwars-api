import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTER } from '../mock-character';
import { CharacterService } from '../character.service';
import { log } from 'util';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  characters$ = Character;
  selectedCharacter: Character;
  
  constructor(private characterService: CharacterService) { }
  
  ngOnInit() {
    this.characterService.getCharacters()
    .subscribe(data => this.characters$ = data)
  }

  
  onSelect(character: Character): void {
    
    this.selectedCharacter = character;
  }

}
