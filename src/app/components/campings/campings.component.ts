import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Camping, Provincia} from "./campings.interface";
import {CampingsService} from "../../services/campings.service";
import {NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-campings',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './campings.component.html',
  styleUrl: './campings.component.css'
})
export class CampingsComponent {
  provincias:Provincia[] = [];
  provincia_seleccionada:Provincia =  {id: 0,
                                      nombre: ""};
  campings:Camping[] = [];
  idCampingSeleccionado:any = 0;
  //idProvinciaSeleccionada:any=0;

  dbError:boolean = false;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private campingService:CampingsService){

    campingService.getCampings().subscribe({
      next:(data) => {
        this.campings= data as Camping[];
      },
      error:(error) => this.setErrorDB()
    })



    campingService.getProvincias().subscribe({
      next:(data) => {
        this.provincias= data as Provincia[];
      },
      error:(error) => this.setErrorDB()
    })




  }

  mostrarCampings() {
  }
  mostrarCampingsProvincia(provincia:Provincia){
    this.campingService.getCampingsProvincia(provincia).subscribe({
      next:(data) => {
        this.provincias= data as Provincia[];
      },
      error:(error) => this.setErrorDB()
    })

    this.provincia_seleccionada = provincia;

  }

  nuevoCamping(){

  }

  editarCamping(){

  }

  eliminarCamping(camping:Camping){
    let resp:boolean=confirm(`Desea eliminar el camping ${camping.nombre}`);
    if (resp) {
      this.campingService.deleteCamping(camping).subscribe({
        next: () =>
          this.campings=this.campings.filter(x => x.id!=camping.id),
        error: (error) => this.setErrorDB()
      })

    }
  }



  setErrorDB(){
    this.dbError=true;
    setTimeout(() => {
      this.dbError=false;
    }, 1500);
  }

}

