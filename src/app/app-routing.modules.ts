import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


/*App Moduels */
import { pagenotfoundcomponent } from './pagenotfound/pagenotfound.component';
import { defaultpagecomponent } from './defaultpage/defaultpage.component';
import { detailspagecomponent } from './detailspage/detailspage.component';
import { latlagfromaddresscomponent } from './latlagfromaddress/latlagfromaddress.component';

const appRoutes: Routes = [
  { path: 'DefaultPage',    component: defaultpagecomponent },
  { path: 'DetailsPage',    component: detailspagecomponent },
  { path: 'UpdateAddress',    component: latlagfromaddresscomponent },
  { path: '',    component: defaultpagecomponent },
  { path: '**', component: pagenotfoundcomponent }
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: [],
    bootstrap: []
})
export class RountingModule {}