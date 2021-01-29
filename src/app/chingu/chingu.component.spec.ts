import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinguComponent } from './chingu.component';

describe('ChinguComponent', () => {
  let component: ChinguComponent;
  let fixture: ComponentFixture<ChinguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinguComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
