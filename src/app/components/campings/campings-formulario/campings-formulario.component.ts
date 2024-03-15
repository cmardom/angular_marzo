import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf} from "@angular/common";
import {Camping, Provincia} from "../campings.interface";
import {CampingsService} from "../../../services/campings.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-campings-formulario',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor] ,
  templateUrl: './campings-formulario.component.html',
  styleUrl: './campings-formulario.component.css'
})
export class CampingsFormularioComponent {
  camping:Camping={
    id: -1,
    nombre: "",
    provincia: -1,
    categoria: -1
  };
  provincias:Provincia[]=[];
  dbError:boolean = false;
  esNuevo:boolean = true;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private campingService: CampingsService){
    activatedRoute.params.subscribe((p) => {
      let id:number;
      id = Number(p['id'])
      if (id >= 0) {
        this.esNuevo=false;

        campingService.getCamping(id).subscribe((data) => {
          this.camping = data as Camping;
        })
      } else {
        campingService.getCampings().subscribe(data => {
          // this.siguienteIdUsuario=(data as Usuario[]).map(u => u.id).reduce((a,b) => (a > b) ? a : b) + 1;
          // this.usuario.id=this.siguienteIdUsuario;



        })
      }
    });
    campingService.getProvincias().subscribe((data) =>
      this.provincias=(data as Provincia[])
    );
  }

  enviarFormulario(){
  }

  protected readonly error = error;
}
