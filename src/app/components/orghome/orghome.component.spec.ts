import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrghomeComponent } from './orghome.component';

describe('OrghomeComponent', () => {
  let component: OrghomeComponent;
  let fixture: ComponentFixture<OrghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
