import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedeModalComponent } from './sede-modal.component';

describe('SedeModalComponent', () => {
  let component: SedeModalComponent;
  let fixture: ComponentFixture<SedeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
