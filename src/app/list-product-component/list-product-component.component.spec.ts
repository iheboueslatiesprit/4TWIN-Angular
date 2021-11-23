import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductComponentComponent } from './list-product-component.component';

describe('ListProductComponentComponent', () => {
  let component: ListProductComponentComponent;
  let fixture: ComponentFixture<ListProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
