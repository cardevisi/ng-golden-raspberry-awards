import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DATA_TABLE } from '../../../../data/movies/movies-data-table';
import { IMoviesController } from '../../../../domain/controllers/imovies-controller';
import { Observable } from 'rxjs';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  beforeEach(async () => {
    const controllerSpy = jasmine.createSpyObj('IMoviesController', {
      getMovies: new Observable(),
    });

    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [],
      providers: [{ provide: IMoviesController, useValue: controllerSpy }],
    }).compileComponents();
  });

  it('should create the component', () => {
    fixture = TestBed.createComponent(MoviesComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.dataSource = DATA_TABLE;
    component.displayedColumns = ['id', 'year', 'title', 'winner'];
    expect(component).toBeTruthy();
  });

  it('should render data table', () => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    component.dataSource = DATA_TABLE;
    component.displayedColumns = ['id', 'year', 'title', 'winner'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });
});
