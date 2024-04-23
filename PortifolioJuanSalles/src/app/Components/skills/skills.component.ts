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
      name: 'HTML',
      level: 3,
      description: 'HTML',
      icon: '../../../assets/Logo/Logo_html.png'
    },
    {
      name: 'CSS',
      level: 2,
      description: 'CSS',
      icon: '../../../assets/Logo/Logo_css.png'
    },
    {
      name: 'JavaScript',
      level: 2,
      description: 'JavaScript',
      icon: '../../../assets/Logo/Logo_js.png'
    },
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
      name: 'Vue.js',
      level: 1,
      description: 'Vue.js',
      icon: '../../../assets/Logo/Logo_vue.png'
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
      name: 'CSharp',
      level: 2,
      description: 'CSharp',
      icon: '../../../assets/Logo/Logo_csharp.png'
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
      name: 'MongoDB',
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
    },
    {
      name: 'AWS',
      level: 1,
      description: 'AWS',
      icon: '../../../assets/Logo/Logo_aws.png'
    },
    {
      name: 'Azure',
      level: 1,
      description: 'Azure',
      icon: '../../../assets/Logo/Logo_azure.png'
    },
  ];

  plusSkills: ISkill[] = [

  ]
}
