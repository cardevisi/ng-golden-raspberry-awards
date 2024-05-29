import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class ToolbarComponent {
  @Output() onToggleSidenav = new EventEmitter<string>();
  @Input() title = '';

  onToggle(): void {
    this.onToggleSidenav.emit('');
  }
}
