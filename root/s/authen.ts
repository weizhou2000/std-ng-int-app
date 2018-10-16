import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenService {
  // isLoggedIn = false;
  redirectUrl: string;

  public isAuth(): boolean {
    //console.log(this.claim());
    const exp = parseInt(localStorage.getItem('etolesexp1'))||0;//this.claim().etolesexp1;
    //console.log(exp, !exp || exp * 1000 < new Date().getTime());
    if(!exp || exp * 1000 < new Date().getTime()) {
      return false;
     }else{
       return true;
     }
  }

  public auth(claim: any, callback: () => void) {
    // console.log('auth', claim);
    const { exp, api, uid } = claim;
    // this._claim = claim;
    localStorage.setItem('etolesapi', api);
    localStorage.setItem('etolesuid', uid);
    localStorage.setItem('etolesexp1', '999999999999'); // exp//new Date().getTime()+1000*60*60*24
    callback();
  }

  public unAuth(callback: () => void) {
    // this.isAuthenticated = false
    // this._claim = { etolesapi: '', etolesuid: '0', etolesexp1: '0' };
    localStorage.setItem('etolesapi', '');
    localStorage.setItem('etolesuid', '0');
    localStorage.setItem('etolesexp1', '0');
    callback();
  }

}
