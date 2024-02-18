import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedTrailsPageComponent } from './visited-trails-page.component';

describe('VisitedTrailsPageComponent', () => {
  let component: VisitedTrailsPageComponent;
  let fixture: ComponentFixture<VisitedTrailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedTrailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitedTrailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
