import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Sede } from 'src/app/model/sede';
import { SedeService } from 'src/app/service/sede.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  displayedColumns = ["idSede", "sede", "acciones"];
  dataSource!: MatTableDataSource<Sede>;

  constructor(
    private sedeService: SedeService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
        this.sedeService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  onEliminar(id: number){
    let dialogRef = this.dialog.open(DialogComponent,{
    });
    dialogRef.afterClosed().subscribe(estado =>{
      if (estado) {
        this.sedeService.eliminar(id).subscribe(()=>{
          this.sedeService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
     
    })
  }

}
