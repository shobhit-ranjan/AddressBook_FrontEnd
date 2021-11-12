import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookAddentriesComponent } from './addressbook-addentries.component';

describe('AddressbookAddentriesComponent', () => {
  let component: AddressbookAddentriesComponent;
  let fixture: ComponentFixture<AddressbookAddentriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookAddentriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookAddentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
