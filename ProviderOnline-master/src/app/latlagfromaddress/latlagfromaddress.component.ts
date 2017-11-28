import { Component, OnInit } from '@angular/core';
import {latlagfromaddressservice} from './latlagfromaddress.service';

@Component({
    selector: 'app-latlagfromaddress',
    templateUrl: './latlagfromaddress.component.html',
    //styleUrls: ['./latlagfromaddress.component.css'],
    providers:[latlagfromaddressservice]
})
export class latlagfromaddresscomponent implements OnInit {
    constructor(private _glocationservice : latlagfromaddressservice ) { }

    ngOnInit() { }

    getGeoLocation(lat: number, lng: number) {
       this._glocationservice.getGeoLocation(lat,lng);
    } ;

    getGeoLocationFromAddress(address : string) {
        this._glocationservice.getGeoLocationFromAddress(address);
    }

}