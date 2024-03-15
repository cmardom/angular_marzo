import {Component, EventEmitter, Output} from '@angular/core';
import { ItemConfiguracionComponent } from './item-configuracion/item-configuracion.component';
import { ItemConfiguracion } from './item-configuracion.interface';
import {ActivatedRoute} from "@angular/router";
import {JsonPipe, NgFor} from "@angular/common";

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [ItemConfiguracionComponent, NgFor, JsonPipe],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {

  items:ItemConfiguracion[]=[
    {servicio: 'dns', activo: true},
    {servicio: 'web', activo: false},
    {servicio: 'ftp', activo: false},
    {servicio: 'nfs', activo: true},
    {servicio: 'smtp', activo: false}
  ]
  evDesactivarTodo:EventEmitter<null>= new EventEmitter<null>(); //evento padre-hijo

  @Output() itemsActivosVariable:ItemConfiguracion[]=[];

  constructor(private activatedRoute:ActivatedRoute){
    this.itemsActivos();
  }

  itemsActivos(){
    for(let item of this.items){
      if (item.activo){
        this.itemsActivosVariable.push(item);
      }
    }
  }

  cambiarEstado(servicio:string){
  }

  desactivarTodo(){
    this.itemsActivosVariable = [];
    for (let item of this.items){
      if (item.activo){
        item.activo = false;
        this.evDesactivarTodo.emit();

      }
    }
  }



}
