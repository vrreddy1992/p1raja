import { NgModule } from '@angular/core';

import { SkillsComponent } from './skills.component';
import { Routing } from './skills.route';

@NgModule({
    declarations: [
        SkillsComponent,
    ],
    imports: [
        Routing,
    ],
})

export class SkillsModule { }
