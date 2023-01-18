import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsFormComponent } from './shows-form.component';

describe('ShowsFormComponent', () => {
  let component: ShowsFormComponent;
  let fixture: ComponentFixture<ShowsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
