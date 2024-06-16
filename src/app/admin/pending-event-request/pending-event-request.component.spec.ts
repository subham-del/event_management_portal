import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingEventRequestComponent } from './pending-event-request.component';

describe('PendingEventRequestComponent', () => {
  let component: PendingEventRequestComponent;
  let fixture: ComponentFixture<PendingEventRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingEventRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PendingEventRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
