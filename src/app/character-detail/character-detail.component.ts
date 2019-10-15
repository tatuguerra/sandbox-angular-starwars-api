import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import {log} from 'util'

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  

  constructor() { }

  ngOnInit() {
    
  }

}
