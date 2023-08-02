import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpPageComponent } from './start-up-page.component';

describe('StartUpPageComponent', () => {
  let component: StartUpPageComponent;
  let fixture: ComponentFixture<StartUpPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartUpPageComponent]
    });
    fixture = TestBed.createComponent(StartUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
