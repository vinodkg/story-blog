import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsComponent } from './positions.component';
import { JobstatusPipe } from '../../pipes/jobstatus/jobstatus.pipe';
import { ToDaysPipe } from '../../pipes/to-days/to-days.pipe';

describe('PositionsComponent', () => {
  let component: PositionsComponent;
  let fixture: ComponentFixture<PositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionsComponent, JobstatusPipe, ToDaysPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
