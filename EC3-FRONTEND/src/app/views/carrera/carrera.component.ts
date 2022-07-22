import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Carrera } from 'src/app/model/carrera';
import { CarreraService } from 'src/app/service/carrera.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  displayedColumns = ["idCarrera", "carrera", "acciones"];
  dataSource!: MatTableDataSource<Carrera>;

  constructor(
    private carreraService: CarreraService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
        this.carreraService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponent,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.carreraService.eliminar(id).subscribe(()=>{
          this.carreraService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

}
