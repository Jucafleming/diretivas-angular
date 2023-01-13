import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExngcontentComponent } from './exngcontent.component';

describe('ExngcontentComponent', () => {
  let component: ExngcontentComponent;
  let fixture: ComponentFixture<ExngcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExngcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExngcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
