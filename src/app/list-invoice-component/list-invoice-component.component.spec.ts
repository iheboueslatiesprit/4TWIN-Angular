import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvoiceComponentComponent } from './list-invoice-component.component';

describe('ListInvoiceComponentComponent', () => {
  let component: ListInvoiceComponentComponent;
  let fixture: ComponentFixture<ListInvoiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvoiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
