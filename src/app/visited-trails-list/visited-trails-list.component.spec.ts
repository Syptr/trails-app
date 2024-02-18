import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedTrailsListComponent } from './visited-trails-list.component';

describe('VisitedTrailsListComponent', () => {
  let component: VisitedTrailsListComponent;
  let fixture: ComponentFixture<VisitedTrailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedTrailsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitedTrailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
