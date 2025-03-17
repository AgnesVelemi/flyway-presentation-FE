import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowTodoComponent } from './how-todo.component';

describe('HowTodoComponent', () => {
  let component: HowTodoComponent;
  let fixture: ComponentFixture<HowTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
