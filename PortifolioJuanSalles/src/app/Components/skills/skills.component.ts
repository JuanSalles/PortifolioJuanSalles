import { Component } from '@angular/core';
import { ISkill } from 'src/Interfaces/ISkill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: ISkill[] = [
    {
      name: 'Angular',
      level: 2,
      description: 'Angular',
      icon: '../../../assets/Logo/Logo_angular.png'
    },
    {
      name: 'React',
      level: 1,
      description: 'React',
      icon: '../../../assets/Logo/Logo_react.png'
    },
    {
      name: 'Node.js',
      level: 1,
      description: 'Node.js',
      icon: '../../../assets/Logo/Logo_node.png'
    },
    {
      name: 'Nest.js',
      level: 1,
      description: 'Nest.js',
      icon: '../../../assets/Logo/Logo_nest.png'
    },
    {
      name: '.Net',
      level: 2,
      description: '.Net',
      icon: '../../../assets/Logo/Logo_dotnet.png'
    },
    {
      name: 'SQL',
      level: 2,
      description: 'SQL',
      icon: '../../../assets/Logo/Logo_sql.png'
    },
    {
      name: '.MongoDB',
      level: 1,
      description: 'Mongo',
      icon: '../../../assets/Logo/Logo_mongo.png'
    },
    {
      name: 'Figma',
      level: 2,
      description: 'Figma',
      icon: '../../../assets/Logo/Figma.png'
    },
    {
      name: 'Wordpress',
      level: 1,
      description: 'Wordpress',
      icon: '../../../assets/Logo/Logo_wordpress.png'
    },
    {
      name: 'Git',
      level: 2,
      description: 'Git',
      icon: '../../../assets/Logo/Logo_git.png'
    },
    {
      name: 'Docker',
      level: 2,
      description: 'Docker',
      icon: '../../../assets/Logo/Logo_docker.png'
    },
    {
      name: 'Jenkins',
      level: 1,
      description: 'Jenkins',
      icon: '../../../assets/Logo/Logo_jenkins.png'
    },
    {
      name: 'Linux',
      level: 2,
      description: 'Linux',
      icon: '../../../assets/Logo/Logo_linux.png'
    }
  ];

  plusSkills: ISkill[] = [

  ]
}
