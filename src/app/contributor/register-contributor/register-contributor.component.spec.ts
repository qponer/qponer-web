import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContributorComponent } from './register-contributor.component';

describe('RegisterContributorComponent', () => {
  let component: RegisterContributorComponent;
  let fixture: ComponentFixture<RegisterContributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
