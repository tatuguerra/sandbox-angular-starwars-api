import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsNavComponent } from './films-nav.component';

describe('FilmsNavComponent', () => {
  let component: FilmsNavComponent;
  let fixture: ComponentFixture<FilmsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
