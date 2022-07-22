import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/model/docente';
import { DocenteService } from 'src/app/service/docente.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  displayedColumns = ["idDocente", "nombres", "apellidos", "email", "numero", "sede", "acciones"];
  dataSource!: MatTableDataSource<Docente>;

  //Metodo sin Angular Material y con una tabla normal
  //docente: Docente[] | undefined;

  constructor(
    private docenteService: DocenteService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.docenteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponent,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.docenteService.eliminar(id).subscribe(()=>{
          this.docenteService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

}
