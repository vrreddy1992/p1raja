import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';



const routes: Routes = [
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full',
      },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'skill',
      loadChildren: './skills/skills.module#SkillsModule'
    },
    {
      path: 'projects',
      loadChildren: './projects/projects.module#ProjectsModule'
    },
    {
      path: 'contact',
      loadChildren: './contact/contact.module#ContactModule'
    },
    {
      path: '**',
      component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
