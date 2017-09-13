import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListsComponent } from './survey-lists.component';

describe('SurveyListsComponent', () => {
  let component: SurveyListsComponent;
  let fixture: ComponentFixture<SurveyListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
