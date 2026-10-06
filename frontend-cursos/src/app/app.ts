import { Component, signal } from '@angular/core';
import { CursosComponent } from './cursos/cursos';

@Component({
  imports: [CursosComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend-cursos');
}
