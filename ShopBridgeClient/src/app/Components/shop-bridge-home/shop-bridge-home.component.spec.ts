import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBridgeHomeComponent } from './shop-bridge-home.component';

describe('ShopBridgeHomeComponent', () => {
  let component: ShopBridgeHomeComponent;
  let fixture: ComponentFixture<ShopBridgeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopBridgeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBridgeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
