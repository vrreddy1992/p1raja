import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SkillsComponent } from './skills.component';




const routes: Routes = [
    {
        path: '',
        component: SkillsComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
