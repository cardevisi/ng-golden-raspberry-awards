import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to first page', () => {
    component.goToFirstPage();
    expect(component.currentPage).toBe(1);
  });

  it('should go to last page', () => {
    component.totalPages = 5;
    component.goToLastPage();
    expect(component.currentPage).toBe(5);
  });

  it('should go to page', () => {
    component.totalPages = 5;
    component.goToPage(3);
    expect(component.currentPage).toBe(3);
  });

  it('should go to previous page', () => {
    component.currentPage = 2;
    component.goToPreviousPage();
    expect(component.currentPage).toBe(1);
  });

  it('should go to next page', () => {
    component.currentPage = 2;
    component.totalPages = 5;
    component.goToNextPage();
    expect(component.currentPage).toBe(3);
  });

  it('should not go to next page', () => {
    component.currentPage = 5;
    component.totalPages = 5;
    component.goToNextPage();
    expect(component.currentPage).toBe(5);
  });

  it('should not go to previous page', () => {
    component.currentPage = 1;
    component.totalPages = 5;
    component.goToPreviousPage();
    expect(component.currentPage).toBe(1);
  });
});
