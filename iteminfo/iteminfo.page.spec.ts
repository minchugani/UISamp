import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteminfoPage } from './iteminfo.page';

describe('IteminfoPage', () => {
  let component: IteminfoPage;
  let fixture: ComponentFixture<IteminfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteminfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteminfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
