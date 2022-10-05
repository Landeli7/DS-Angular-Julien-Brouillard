import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoTableComponent } from './resto-table.component';

describe('RestoTableComponent', () => {
  let component: RestoTableComponent;
  let fixture: ComponentFixture<RestoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
