import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-custom',
  templateUrl: './diretivas-custom.component.html',
  styleUrls: ['./diretivas-custom.component.css']
})
export class DiretivasCustomComponent {
  cursos: string [] = ['angular']
  mostraCursos: boolean = false

  onMostrarCurso(){
    this.mostraCursos = !this.mostraCursos
}
}