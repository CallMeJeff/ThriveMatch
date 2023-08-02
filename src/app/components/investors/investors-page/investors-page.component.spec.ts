import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsPageComponent } from './investors-page.component';

describe('InvestorsPageComponent', () => {
  let component: InvestorsPageComponent;
  let fixture: ComponentFixture<InvestorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorsPageComponent]
    });
    fixture = TestBed.createComponent(InvestorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
