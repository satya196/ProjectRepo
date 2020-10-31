import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBridgeItemDetailComponent } from './shop-bridge-item-detail.component';

describe('ShopBridgeItemDetailComponent', () => {
  let component: ShopBridgeItemDetailComponent;
  let fixture: ComponentFixture<ShopBridgeItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBridgeItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBridgeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
