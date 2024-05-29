import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  standalone: true,
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class SearchInputComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchValue = '';

  onSearchChange() {
    this.searchChange.emit(this.searchValue);
  }
}
