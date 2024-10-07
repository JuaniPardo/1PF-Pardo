import {Component, ViewChild} from '@angular/core';
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
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['apellido', 'nombre', 'email', 'actions'];
  dataSource: MatTableDataSource<Alumno>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Constructor
  constructor(private alumnosService: AlumnosService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Alumno>([]);
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
  openDialog(alumno: Alumno) {
    const dialogRef = this.dialog.open(AbmAlumnosComponent, {
      data: alumno,
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAlumnos();
      }
    });
  }

  private loadAlumnos() {
    this.dataSource.data = this.alumnosService.getAlumnos(); // Asigna los datos al dataSource
  }
}
