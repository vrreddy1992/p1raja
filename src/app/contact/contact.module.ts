import { NgModule } from '@angular/core';
import {GoogleMapsModule} from 'google-maps-angular2';

import { ContactComponent } from './contact.component';
import { Routing } from './contact.route';

@NgModule({
    declarations: [
        ContactComponent,
    ],
    imports: [
        Routing,
        GoogleMapsModule.forRoot({
            url: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCsuYRfNRhRj6z8BUkwd1OAggrWpgfGOus'
        }) 
    ]
})

export class ContactModule { }
