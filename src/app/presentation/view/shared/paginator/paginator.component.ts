import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  listOfPages: number[] = [];

  ngOnInit() {
    this.listOfPages = Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  goToFirstPage() {
    this.currentPage = 1;
    this.pageChange.emit(this.currentPage);
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
    this.pageChange.emit(this.currentPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }
}
