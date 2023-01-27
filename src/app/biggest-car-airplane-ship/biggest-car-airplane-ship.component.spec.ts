import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestCarAirplaneShipComponent } from './biggest-car-airplane-ship.component';

describe('BiggestCarAirplaneShipComponent', () => {
  let component: BiggestCarAirplaneShipComponent;
  let fixture: ComponentFixture<BiggestCarAirplaneShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestCarAirplaneShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggestCarAirplaneShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
