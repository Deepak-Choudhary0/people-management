import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeopleComponent } from './create-people.component';

describe('CreatePeopleComponent', () => {
  let component: CreatePeopleComponent;
  let fixture: ComponentFixture<CreatePeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePeopleComponent]
    });
    fixture = TestBed.createComponent(CreatePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
