import { Component, Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AUTH_CONFIG  } from './auth-variable';
import 'rxjs/add/operator/toPromise';

declare var google: any;
  
export namespace GoogleWebApiClient {
    export interface  ProviderMaster 
        {
            primaryId,
            providerName,
            address,
            phone,
            specialty,
            language,
            gender,
            latitude,
            longitude
        }
};


class SearchItem {
  constructor(
      
        public  PrimaryId : number,
        public  ProviderName : string,
        public  Address : string,
        public  Phone : string,
        public  Specialty : string,
        public  Language : string,
        public  Gender : string,
        public  Latitude : string,
        public  Longitude : string
        ) 
              {
                }
}

@Injectable()
export class latlagfromaddressservice {
   results: SearchItem[];
    constructor(
    //@Inject('baseUri') 
    //private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', 
    //private baseUri: string,
    private http: Http){
        this.results = [];
        }

   getGeoLocation(lat: number, lng: number) {
        if (navigator.geolocation) {
            let geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(lat, lng);
            let request = { latLng: latlng };

            geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                let result = results[0];
                let rsltAdrComponent = result.address_components;
                let resultLength = rsltAdrComponent.length;
                if (result != null) {
                console.log( result);
                } else {
                alert("No address available!");
                }
            }
            });
    }
   };

getGeoLocationFromAddress_Old(address: string)
   {
        var me = this;
        var geocoder = new google.maps.Geocoder();
                geocoder.geocode( { 'address': address}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK)
                    {
                        // do something with the geocoded result
                        console.log( results[0].geometry.location.lat());
                        console.log( results[0].geometry.location.lng());
                        console.log(address);
                    }
    })
   };

    getGeoLocationFromAddress(address: string)
   {
        var me = this;
        var geocoder = new google.maps.Geocoder();
        let promise = this.getWithPromise();
        promise.then(
            (data : Observable<GoogleWebApiClient.ProviderMaster> )=> 
            (
            data.forEach(item=>
                geocoder.geocode( { 'address': item.address}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK)
                    {
                        // do something with the geocoded result
                        var temp = item;
                        temp.latitude = results[0].geometry.location.lat();
                        temp.longitude = results[0].geometry.location.lng();
                        me.put(item.primaryId,temp)
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
                        .subscribe()
                        console.log( results[0].geometry.location.lat());
                        console.log( results[0].geometry.location.lng());
                        console.log(item.address);
                    }
                })
                )
                )
                ,
            ( msg ) => console.log(msg)
        )
    }; 

    /**
         * Get all ProviderMasters.
         * GET api/ProviderMasters
         * @return {Array<GoogleWebApiClient.ProviderMaster>}
         */
        get(): Observable<Array<GoogleWebApiClient.ProviderMaster>>{
            return this.http.get(AUTH_CONFIG.baseUri + 'api/ProviderMasters').map(response=> response.json());
        }

       getWithPromise() {
            let apiURL = AUTH_CONFIG.baseUri + 'api/ProviderMasters';
            let promise = new Promise((resolve, reject) => {
            this.http.get(apiURL)
                .toPromise()
                .then(
                    res => { // Success
                        this.results = res.json();
                        resolve(this.results);
                    },
                    msg => { // Error
                        reject(msg);
                    }
                );
            });
            return promise;
        };

        
        /**
         * Get a hero.
         * GET api/ProviderMasters/{id}
         * @param {number} id
         * @return {GoogleWebApiClient.ProviderMaster}
         */
        getById(id: number): Observable<GoogleWebApiClient.ProviderMaster>{
            return this.http.get(AUTH_CONFIG.baseUri + 'api/ProviderMasters/'+id).map(response=> response.json());
        }

        /**
         * DELETE api/ProviderMasters/{id}
         * @param {number} id
         * @return {void}
         */
        delete(id: number): Observable<Response>{
            return this.http.delete(AUTH_CONFIG.baseUri + 'api/ProviderMasters/'+id);
        }

        /**
         * Add a hero
         * POST api/ProviderMasters?name={name}
         * @param {string} name
         * @return {GoogleWebApiClient.ProviderMaster}
         */
        post(providerMaster: GoogleWebApiClient.ProviderMaster): Observable<GoogleWebApiClient.ProviderMaster>{
            return this.http.post(AUTH_CONFIG.baseUri + 'api/ProviderMasters',providerMaster , { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=> response.json());
        }

        /**
         * Update hero.
         * PUT api/ProviderMasters
         * @param {GoogleWebApiClient.ProviderMaster} hero
         * @return {GoogleWebApiClient.ProviderMaster}
         */
        put(id: number , providerMaster: GoogleWebApiClient.ProviderMaster): Observable<GoogleWebApiClient.ProviderMaster>{
            return this.http.put(AUTH_CONFIG.baseUri + 'api/ProviderMasters/' + id, providerMaster, { headers: new Headers({ 'Content-Type': 'application/json' }) }).map(response=> response.json());
        }

        /**
         * Search ProviderMasters
         * GET api/ProviderMasters?name={name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<GoogleWebApiClient.ProviderMaster>} Hero array matching the keyword.
         */
        search(name: string): Observable<Array<GoogleWebApiClient.ProviderMaster>>{
            return this.http.get(AUTH_CONFIG.baseUri + 'api/ProviderMasters?name='+encodeURIComponent(name)).map(response=> response.json());
        }
    };