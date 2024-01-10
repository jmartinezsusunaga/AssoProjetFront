import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEvenementComponent } from './gestion-evenement.component';

describe('GestionEvenementComponent', () => {
  let component: GestionEvenementComponent;
  let fixture: ComponentFixture<GestionEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEvenementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
