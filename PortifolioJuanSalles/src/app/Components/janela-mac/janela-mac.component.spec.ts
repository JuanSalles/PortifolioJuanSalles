import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaMacComponent } from './janela-mac.component';

describe('JanelaMacComponent', () => {
  let component: JanelaMacComponent;
  let fixture: ComponentFixture<JanelaMacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JanelaMacComponent]
    });
    fixture = TestBed.createComponent(JanelaMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
