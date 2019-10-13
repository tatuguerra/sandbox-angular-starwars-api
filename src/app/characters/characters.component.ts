import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  character: Character = {
    id: 1,
    name: 'Darth Vader'
  };

  constructor() { }

  ngOnInit() {
  }

}
