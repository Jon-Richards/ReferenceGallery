import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StyleGuide } from 'style-guide';

@Component({
  imports: [RouterOutlet, StyleGuide],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('site');
}
