import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SkillCardComponent } from './Components/skill-card/skill-card.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';
import { JanelaMacComponent } from './Components/janela-mac/janela-mac.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    SkillCardComponent,
    ProjectsComponent,
    ProjectCardComponent,
    JanelaMacComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
