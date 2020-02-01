import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PurchaseOrderEntity } from '../model/PurchaseOrderEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private purchaseOrder: Array<PurchaseOrderEntity>;
  constructor(private http: HttpClient) {
  }

  public getPurchaseOrder(): Observable<PurchaseOrderEntity[]> {

      return this.http.get<PurchaseOrderEntity[]>('http://localhost:9093/api/Orden-Compra');

  }
}
