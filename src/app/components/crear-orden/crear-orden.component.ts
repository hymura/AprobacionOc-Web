import { Component, OnInit } from '@angular/core';
import { PurchaseOrderEntity } from '../../model/PurchaseOrderEntity';
import { CrearOrdenService } from '../../services/crear-orden.service';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  private purchaseOrder: PurchaseOrderEntity;
  private isValid: boolean = true ;
  private message: string = null;


  constructor(private crearOrdenService: CrearOrdenService) { 
    this.purchaseOrder = new PurchaseOrderEntity();

  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{

  }

}
