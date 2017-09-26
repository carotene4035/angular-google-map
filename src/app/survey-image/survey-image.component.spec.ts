import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailImageComponent } from './survey-detail-image.component';

describe('SurveyDetailImageComponent', () => {
  let component: SurveyDetailImageComponent;
  let fixture: ComponentFixture<SurveyDetailImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDetailImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
