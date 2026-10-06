import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursoService } from '../services/curso';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cursos.html'
})

export class CursosComponent implements OnInit {
  cursos: any[] = [];
  curso = { nombre: '', precio: 0, modalidad: '' };
  idEditar: number | null = null;

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void { this.listarCursos(); }

  listarCursos(): void {
    this.cursoService.listarCursos()
      .subscribe(data => { this.cursos = data; });
  }

  guardarCurso(): void {
    if (this.idEditar === null) {
      this.cursoService.registrarCurso(this.curso)
        .subscribe(() => {
          this.listarCursos();
          this.limpiarFormulario();
        });
    } else {
      this.cursoService.actualizarCurso(
        this.idEditar, this.curso)
        .subscribe(() => {
          this.listarCursos();
          this.limpiarFormulario();
        });
    }
  }

  editarCurso(curso: any): void {
    this.idEditar = curso.id;
    this.curso = {
      nombre: curso.nombre,
      precio: curso.precio,
      modalidad: curso.modalidad
    };
  }

  eliminarCurso(id: number): void {
    this.cursoService.eliminarCurso(id)
      .subscribe(() => { this.listarCursos(); });
  }

  limpiarFormulario(): void {
    this.curso = { nombre: '', precio: 0, modalidad: '' };
    this.idEditar = null;
  }
}


