import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { PurchaseOrderEntity } from '../../model/PurchaseOrderEntity';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  private purchaseOrder: Array<PurchaseOrderEntity>;

  constructor(private ordenesService: OrdenesService) { }

  ngOnInit() {
    this.loadPurchaseOrders();
  }

  private loadPurchaseOrders(): void{

    this.ordenesService.getPurchaseOrder().subscribe(res => {
     this.purchaseOrder = res;
     //console.log(res);
    });
  }

}
