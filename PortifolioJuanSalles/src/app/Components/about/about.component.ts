import { Component } from '@angular/core';
import { TypeWindown } from 'src/Interfaces/TypeWindown';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  typeContentOne : TypeWindown = TypeWindown.image;
  contentOne : string[] = [
    '../../../assets/About/Foto-Perfil.png',
    'Foto de perfil de Juan Salles'
  ];
  typeContentTwo : TypeWindown = TypeWindown.text;
  contentTwo : string[] = [
    'Olá.\nMe chamo Juan. Trabalho há mais de 10 anos com tecnologia. Meu primeiro  contato com programação foi em 2011, durante meu primeiro ano no ensino  médio técnico no Instituto Federal de Ciência e Tecnologia da Bahia  (IFBA ou CEFET para os mais íntimos).',
    'Após me formar em 2015, consegui uma posição como  técnico e atuei no ramo operacional de eletrônica e televisão. Sempre  tive o desejo de continuar aprendendo programação, o que me levou, em  2021, a investir meu tempo de estudo na área e me enxergar como  desenvolvedor.',
    'Comecei meus estudos com Javascript e seus frameworks no frontend e,  posteriormente, conquistei minha primeira vaga como Analista de Sistemas  na mesma empresa em que trabalhava como técnico (onde continuo até  hoje). Com essa oportunidade, pude adentrar no mundo do backend e agora  consigo atuar como fullstack, oferecendo suporte aos sistemas da empresa  e desenvolvendo novas aplicações com diversas tecnologias.',
    'Atualmente, estou focado em aprender novas tecnologias e aprimorar minhas  habilidades de desenvolvimento, sempre buscando novos desafios e  oportunidades para crescer profissionalmente.'
  ];
}
