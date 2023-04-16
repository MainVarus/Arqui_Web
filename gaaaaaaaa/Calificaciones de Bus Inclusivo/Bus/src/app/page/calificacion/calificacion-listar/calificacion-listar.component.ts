import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})

export class CalificacionListarComponent implements OnInit {

  lista: Calificacion[] = [];

  dataSource: MatTableDataSource<Calificacion> = new MatTableDataSource();

  displayedColumns: string[] = ['PK_IdCalificacion', 'valoracion','comentario']

  constructor(private pS: CalificacionService) {
  }

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.pS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
}

