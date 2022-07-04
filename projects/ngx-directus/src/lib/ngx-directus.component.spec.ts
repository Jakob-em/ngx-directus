import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDirectusComponent } from './ngx-directus.component';

describe('NgxDirectusComponent', () => {
  let component: NgxDirectusComponent;
  let fixture: ComponentFixture<NgxDirectusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDirectusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDirectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
