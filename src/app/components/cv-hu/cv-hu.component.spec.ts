import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvHuComponent } from './cv-hu.component';

describe('CvHuComponent', () => {
  let component: CvHuComponent;
  let fixture: ComponentFixture<CvHuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvHuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvHuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
