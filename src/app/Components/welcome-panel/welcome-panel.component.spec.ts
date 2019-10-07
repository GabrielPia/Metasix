import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePanelComponent } from './welcome-panel.component';

describe('WelcomePanelComponent', () => {
  let component: WelcomePanelComponent;
  let fixture: ComponentFixture<WelcomePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
