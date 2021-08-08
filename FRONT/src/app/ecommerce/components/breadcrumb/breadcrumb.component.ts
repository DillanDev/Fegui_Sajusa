import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  public location = '';

  constructor(public _router: Router){
    
  }

  main(){

    let strn = this._router.url.charAt(1).toUpperCase()+ this._router.url.slice(2);
    strn = strn.replace('/',' / ');

    return strn;
    
  }

}
