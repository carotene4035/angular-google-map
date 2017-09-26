import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailImageListsComponent } from './survey-detail-image-lists.component';

describe('SurveyDetailImageListsComponent', () => {
  let component: SurveyDetailImageListsComponent;
  let fixture: ComponentFixture<SurveyDetailImageListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDetailImageListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailImageListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
