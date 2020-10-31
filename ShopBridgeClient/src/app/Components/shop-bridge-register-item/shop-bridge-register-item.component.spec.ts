import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBridgeRegisterItemComponent } from './shop-bridge-register-item.component';

describe('ShopBridgeRegisterItemComponent', () => {
  let component: ShopBridgeRegisterItemComponent;
  let fixture: ComponentFixture<ShopBridgeRegisterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBridgeRegisterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBridgeRegisterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
