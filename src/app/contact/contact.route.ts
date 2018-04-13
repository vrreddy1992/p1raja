import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ContactComponent } from './contact.component';




const routes: Routes = [
    {
        path: '',
        component: ContactComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
