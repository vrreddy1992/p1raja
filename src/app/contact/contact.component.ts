import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {GoogleMapsModule} from 'google-maps-angular2';
import {GoogleMapsService} from "google-maps-angular2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {


  @ViewChild('mapElement') mapElement: ElementRef;
  @ViewChild('inputElement') inputElement: ElementRef;

  private map: any;
    
  constructor(private gapi: GoogleMapsService) {
    
  }
  
  ngAfterViewInit(): void {
        /**
         * Init map api [google.maps]
         */
        this.gapi.init.then(maps => {
            const loc = new maps.LatLng(32.8140, -96.9489);
            
            this.map = new maps.Map(this.mapElement.nativeElement, {
                zoom: 13,
                center: loc,
                scrollwheel: false,
                panControl: false,
                mapTypeControl: false,
                zoomControl: true,
                streetViewControl: false,
                scaleControl: true,
                zoomControlOptions: {
                    style: maps.ZoomControlStyle.LARGE,
                    position: maps.ControlPosition.RIGHT_BOTTOM
                }
            });
            
            const input = this.inputElement.nativeElement;
            const options = {
                componentRestrictions: {country: 'ru'}
            };

            const autocomplete = new maps.places.Autocomplete(input, options);

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                const location = place.geometry.location;

                this.map.setZoom(13);
                this.map.setCenter({
                    lat: location.lat(),
                    lng: location.lng()
                });
            });
        });
  }
  }

