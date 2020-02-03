import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { RestResponse } from '../model/restResponse.model';
import { PurchaseOrderEntity } from '../model/PurchaseOrderEntity';


@Injectable({
  providedIn: 'root'
})
export class CrearOrdenService {

  /**
   * Metodo que valida campos obligatorios
   * @param user
   */

  constructor(private http: HttpClient) { }

  public validate(purchaseOrder: PurchaseOrderEntity): boolean {
    let isValid = true;

    if (!purchaseOrder.orderNumber){
      isValid = false;
    }
    if (!purchaseOrder.creationDate){
      isValid = false;
    }
    if (!purchaseOrder.buyerId){
      isValid = false;
    }
    if (!purchaseOrder.totalAmount){
      isValid = false;
}

    return isValid;
  }

  /*public saveOrUpdate(purchaseOrder: PurchaseOrderEntity): Observable<RestResponse>{
    return this.http.post<RestResponse>('http://localhost:9093/api/Orden-Compra', purchaseOrder);
  }*/

  public saveOrUpdate(purchaseOrder: PurchaseOrderEntity){
    return this.http.post<any>('http://localhost:9093/api/Orden-Compra', purchaseOrder);
}
}
