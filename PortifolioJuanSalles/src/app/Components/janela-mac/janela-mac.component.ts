import { Component, Input, Type } from '@angular/core';
import { TypeWindown } from 'src/Interfaces/TypeWindown';
import { ISkill } from 'src/Interfaces/ISkill';

@Component({
  selector: 'app-janela-mac',
  templateUrl: './janela-mac.component.html',
  styleUrls: ['./janela-mac.component.scss']
})
export class JanelaMacComponent {

  @Input() typeWindown!: TypeWindown;
  @Input() content: string[] = [];
  @Input() Skills: ISkill[] = [];

  constructor() { 
    
  }
  condicaoParagrafo(): boolean {

    return this.typeWindown === TypeWindown.text;
  }

  condicaoImagem(): boolean {
    return this.typeWindown === TypeWindown.image;
  }
}
