import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ConstantsService } from 'src/app/services/constants/constants.service';
import { UtilityService } from 'src/app/services/utilities/utility.service';
import { DataService } from 'src/app/services/data/data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ConstantsService, UtilityService, DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(inject([ConstantsService, UtilityService, DataService], (constantsService: ConstantsService, utilityService: UtilityService, dataService: DataService) => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })));
  
});
