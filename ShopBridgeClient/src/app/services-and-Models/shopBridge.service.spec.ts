/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopBridgeService } from './shopBridge.service';

describe('Service: ShopBridge', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopBridgeService]
    });
  });

  it('should ...', inject([ShopBridgeService], (service: ShopBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
