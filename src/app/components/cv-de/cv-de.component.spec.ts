import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDeComponent } from './cv-de.component';

describe('CvDeComponent', () => {
  let component: CvDeComponent;
  let fixture: ComponentFixture<CvDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvDeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
