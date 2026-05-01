import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilms } from './liste-films';

describe('ListeFilms', () => {
  let component: ListeFilms;
  let fixture: ComponentFixture<ListeFilms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFilms],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeFilms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
