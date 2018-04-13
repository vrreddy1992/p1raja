import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProjectsComponent } from './projects.component';




const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
