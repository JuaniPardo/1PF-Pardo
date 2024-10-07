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
    return this.alumnos;
  }
}
