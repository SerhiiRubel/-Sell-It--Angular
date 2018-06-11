import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertFormComponent } from './add-advert-form.component';

describe('AddAdvertFormComponent', () => {
  let component: AddAdvertFormComponent;
  let fixture: ComponentFixture<AddAdvertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
