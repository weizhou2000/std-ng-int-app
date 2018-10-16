import { Injectable } from '@angular/core';
import { GraService } from '../../root/s/gra';
import { Observable } from 'rxjs';
import { Decor } from '../../_class/decor';

//import addressesQ from '../../_gqls/queries/addresses';

@Injectable()
export class QueryService {
  constructor(private svc: GraService) {}

  /*@Decor.gra(addressesQ)
  addresses(info: any): Observable<Object> {
    return this.svc.doGra(info);
  }*/
}
