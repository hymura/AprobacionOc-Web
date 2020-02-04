import { Component, OnInit } from '@angular/core';

import { PurchaseOrderEntity } from '../../model/PurchaseOrderEntity';
import { CrearOrdenService } from '../../services/crear-orden.service';

import { CREATED } from '../../model/httpstatus.model';
import { NOT_FOUND } from '../../model/httpstatus.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {

  private purchaseOrder: PurchaseOrderEntity;
  private isValid = true ;
  private message: string ;


  constructor(private crearOrdenService: CrearOrdenService, private router: Router) {
    this.purchaseOrder = new PurchaseOrderEntity();

  }

  ngOnInit() {
  }

  public saveOrUpdate(): void{
    this.isValid = this.crearOrdenService.validate(this.purchaseOrder);
    if (this.isValid){
       this.crearOrdenService.saveOrUpdate(this.purchaseOrder).subscribe(res => {
         console.log('res.responseCode' + res.code);

         if(res.code === CREATED){
          this.router.navigate(['/ordenes']);

         } else {
           this.message = 'code' + res.code;
           this.isValid = false;
         }

       });
    } else {
      this.message = 'los campos con * son obligatorios';
    }

}
}
