import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookDetaliComponent } from './addressbook-detali.component';

describe('AddressbookDetaliComponent', () => {
  let component: AddressbookDetaliComponent;
  let fixture: ComponentFixture<AddressbookDetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookDetaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
