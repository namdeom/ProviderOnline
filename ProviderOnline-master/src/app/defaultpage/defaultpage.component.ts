import { Component, OnInit } from '@angular/core';
declare function custom(): any;

@Component({
    selector: 'app-defaultpage',
    templateUrl: './defaultpage.component.html',
    //template: `<div>test</div><div>test2</div>`,
    //styleUrls: ['./defaultpage.component.css']
})

export class defaultpagecomponent implements OnInit {
    constructor() { }

    ngOnInit() {
         var rtl = false; // Use RTL
         custom.prototype.initializeOwl(rtl);
     }
}