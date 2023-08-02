import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpHomePageComponent } from './start-up-home-page.component';

describe('StartUpHomePageComponent', () => {
  let component: StartUpHomePageComponent;
  let fixture: ComponentFixture<StartUpHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartUpHomePageComponent]
    });
    fixture = TestBed.createComponent(StartUpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
