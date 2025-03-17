import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEnComponent } from './cv-en.component';

describe('CvEnComponent', () => {
  let component: CvEnComponent;
  let fixture: ComponentFixture<CvEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CvEnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
