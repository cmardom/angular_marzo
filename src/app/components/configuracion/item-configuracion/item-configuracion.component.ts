import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-item-configuracion',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './item-configuracion.component.html',
  styleUrl: './item-configuracion.component.css'
})
export class ItemConfiguracionComponent implements OnInit{
  @Input() servicio: string="";
  @Input() activo: boolean=false;
  @Input() evResetHijo:EventEmitter<any>=new EventEmitter();

  @Output() evBotonPulsado: EventEmitter<any>=new EventEmitter();


  textoBotonDesactivar:string="";

  ngOnInit(): void {
    this.cambiarEstado();
    this.evResetHijo.subscribe(
      () => this.activo=false
    )}

  cambiarEstado(){

    this.activo = !this.activo;
    if (this.activo){
      this.textoBotonDesactivar = "DESACTIVAR"

    } else {
      this.textoBotonDesactivar = "ACTIVAR"
    }

    this.evBotonPulsado.emit();

  }
}
