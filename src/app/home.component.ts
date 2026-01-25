import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main>
      <h1>{{ title() }}</h1>
      <p>Bienvenido a la página principal de tu proyecto Angular.</p>
    </main>
  `,
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  readonly title = signal('Home');
}
