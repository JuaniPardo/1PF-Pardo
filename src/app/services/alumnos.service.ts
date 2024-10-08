import {Injectable} from '@angular/core';
import {Alumno} from "../shared/interfaces/alumno";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juanperez@gmail.com',
      isActive: true
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Gonzalez',
      email: 'mariagonzalez@gmail.com',
      isActive: true
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Aguilar',
      email: 'pedroaguilar@gmail.com',
      isActive: true
    },
    {
      id: 4,
      nombre: 'Luis',
      apellido: 'Gomez',
      email: 'luisgomez@gmail.com',
      isActive: true
    },
    {
      id: 5,
      nombre: 'Carlos',
      apellido: 'Perez',
      email: 'carlosperez@gmail.com',
      isActive: true
    },
    {
      id: 6,
      nombre: 'Ana',
      apellido: 'Ortiz',
      email: 'anaortiz@gmail.com',
      isActive: true
    },
    {
      id: 7,
      nombre: 'Rafael',
      apellido: 'Hernandez',
      email: 'rafaelhernandez@gmail.com',
      isActive: true
    },
    {
      id: 8,
      nombre: 'Sara',
      apellido: 'Rodriguez',
      email: 'sararodriguez@gmail.com',
      isActive: true
    },
  ]

  constructor() {
  }

  getAlumnos(): Alumno[] {
    return this.alumnos.filter(alumno => alumno.isActive);
  }

  getAlumnoById(id: number): Alumno | null {
    const index = this.alumnos.findIndex(alumno => alumno.id === id);
    if (index === -1) {
      return null;
    } else {
      return this.alumnos[index];
    }
  }

  updateAlumno(alumno: Alumno): void {
    const index = this.getAlumnoById(alumno.id)?.id;
    if (!!index) {
      this.alumnos[index] = alumno;
    }
  }

  deleteAlumno(id: number): void {
    const index = this.getAlumnoById(id)?.id;
    if (!!index) {
      this.alumnos.splice(index, 1);
    }
  }

  getActiveAlumnos(): Alumno[] {
    return this.alumnos.filter(alumno => alumno.isActive);
  }

}
