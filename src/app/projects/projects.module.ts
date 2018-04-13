import { NgModule } from '@angular/core';

import { ProjectsComponent } from './projects.component';
import { Routing } from './projects.route';

@NgModule({
    declarations: [
        ProjectsComponent,
    ],
    imports: [
        Routing,
    ]
})

export class ProjectsModule { }
