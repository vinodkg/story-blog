import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralsComponent } from './referrals.component';
import { StatusPipe } from '../../pipes/status/status.pipe';

describe('ReferralsComponent', () => {
  let component: ReferralsComponent;
  let fixture: ComponentFixture<ReferralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralsComponent, StatusPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
