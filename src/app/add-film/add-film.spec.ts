import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Addfilm } from './add-film';
import { FilmService } from '../services/film';

describe('Addfilm', () => {
  let component: Addfilm;
  let fixture: ComponentFixture<Addfilm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addfilm],
      providers: [FilmService]
    }).compileComponents();

    fixture = TestBed.createComponent(Addfilm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});