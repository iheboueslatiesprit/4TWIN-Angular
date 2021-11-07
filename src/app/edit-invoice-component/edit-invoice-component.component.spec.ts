import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvoiceComponentComponent } from './edit-invoice-component.component';

describe('EditInvoiceComponentComponent', () => {
  let component: EditInvoiceComponentComponent;
  let fixture: ComponentFixture<EditInvoiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInvoiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
