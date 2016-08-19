/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('Component: Products', () => {
  it('should create an instance', () => {
    let component = new ProductsComponent();
    expect(component).toBeTruthy();
  });
});
