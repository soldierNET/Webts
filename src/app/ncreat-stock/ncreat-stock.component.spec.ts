import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcreatStockComponent } from './ncreat-stock.component';

describe('NcreatStockComponent', () => {
  let component: NcreatStockComponent;
  let fixture: ComponentFixture<NcreatStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcreatStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcreatStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
