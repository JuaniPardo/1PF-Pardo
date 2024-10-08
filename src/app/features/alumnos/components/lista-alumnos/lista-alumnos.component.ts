import {Component, OnInit, ViewChild} from '@angular/core';
import {Alumno} from "../../../../shared/interfaces/alumno";
import {AlumnosService} from "../../../../services/alumnos.service";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AbmAlumnosComponent} from "../abm-alumnos/abm-alumnos.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatPaginator,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    MatInputModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatNoDataRow,
    MatRow,
    MatHeaderRow,
    MatButton,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})

export class ListaAlumnosComponent implements OnInit {
  displayedColumns: string[] = ['apellido', 'nombre', 'email', 'actions'];
  dataSource: MatTableDataSource<Alumno> | any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Constructor
  constructor(private alumnosService: AlumnosService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Alumno>([]);
  }

  ngOnInit(): void {
    this.loadAlumnos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Función para abrir el diálogo de edición de alumnos.
  openDialog(alumno: Alumno | null) {
    const dialogRef = this.dialog.open(AbmAlumnosComponent, {
      data: alumno || null,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (!!result) {
        // Sí es nuevo o editado, actualizar los datos en la lista.
        const currentData = this.dataSource.data;
        if (alumno) {
          // Sí es editado, actualizar el registro en la lista.
          const index = currentData.findIndex((x: { id: number; }) => x.id === alumno.id);
          currentData[index] = result;
        } else {
          // Sí es nuevo, agregar el registro a la lista.
          currentData.push(result);
        }
        this.dataSource.data = currentData; // Actualizar la lista de datos.
        }
    });
  }

  private loadAlumnos() {
    this.dataSource.data = this.alumnosService.getActiveAlumnos(); // Asigna los datos al dataSource
  }

  deleteAlumno(row: { id: number; }) {
    /*const currentData = this.dataSource.data;
    const index = currentData.findIndex((x: { id: number; }) => x.id === row.id);
    console.log('Borrando alumno con id: ', currentData[index]);
    currentData[index].isActive = false;
    this.dataSource.data = currentData;*/
    const currentData = this.dataSource.data;
    const index = currentData.findIndex((x: { id: number; }) => x.id === row.id);
    currentData.splice(index, 1);
    this.dataSource.data = currentData;
  }
}
