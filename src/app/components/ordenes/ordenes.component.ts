import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private ordenesService: OrdenesService) { }

  ngOnInit() {
  }

}
