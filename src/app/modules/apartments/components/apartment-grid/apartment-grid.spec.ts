import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentGrid } from './apartment-grid';

describe('ApartmentGrid', () => {
  let component: ApartmentGrid;
  let fixture: ComponentFixture<ApartmentGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
