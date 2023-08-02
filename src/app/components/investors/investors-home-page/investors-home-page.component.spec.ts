import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsHomePageComponent } from './investors-home-page.component';

describe('InvestorsHomePageComponent', () => {
  let component: InvestorsHomePageComponent;
  let fixture: ComponentFixture<InvestorsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorsHomePageComponent]
    });
    fixture = TestBed.createComponent(InvestorsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
