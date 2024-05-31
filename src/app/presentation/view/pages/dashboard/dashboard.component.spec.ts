import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import {
  MOCK_TABLE_FOR_MAX_AND_MIN_WINNERS_INTERVAL_FOR_PRODUCERS,
  MOCK_TABLE_FOR_MOVIES_BY_YEAR,
  MOCK_TABLE_FOR_MULTIPLES,
  MOCK_TABLE_FOR_STUDIOS_WINNERS,
} from '../../../../data/movies/movies-data-table';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesController } from '../../../../domain/controllers/imovies-controller';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    const controllerSpy = jasmine.createSpyObj('IMoviesController', {
      getMultipleWinnersByYear: new Observable(),
      getWinnersByYear: new Observable(),
      getStudiosWithWinCount: new Observable(),
      getMaxAndMinWinnersIntervalForProducers: new Observable(),
      getMoviesByYear: new Observable(),
    });

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: IMoviesController,
          useValue: controllerSpy,
        },
      ],
    }).compileComponents();
  });

  it('should create list with multiple winners', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.dataSourceMultipleWinnersByYear = MOCK_TABLE_FOR_MULTIPLES;
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelectorAll('table');
    expect(tableElement[0]).toBeTruthy();
  });

  it('should render list top 3 studios winners', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.dataSourceStudiosWithWinCount = MOCK_TABLE_FOR_STUDIOS_WINNERS;
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelectorAll('table');
    expect(tableElement[0]).toBeTruthy();
  });

  it('should render list movies by year', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.dataSourceMoviesByYear = MOCK_TABLE_FOR_MOVIES_BY_YEAR;
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelectorAll('table');
    expect(tableElement[0]).toBeTruthy();
  });

  it('should render max and min interval for producers', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.dataSourceMaxAndMinWinnersIntervalForProducers =
      MOCK_TABLE_FOR_MAX_AND_MIN_WINNERS_INTERVAL_FOR_PRODUCERS;
    fixture.detectChanges();
    const tableElement = fixture.nativeElement.querySelectorAll('table');
    expect(tableElement[0]).toBeTruthy();
    expect(tableElement[1]).toBeTruthy();
  });
});
