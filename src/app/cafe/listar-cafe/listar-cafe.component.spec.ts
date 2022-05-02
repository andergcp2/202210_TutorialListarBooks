/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarCafeComponent } from './listar-cafe.component';
import { Cafe } from '../cafe';
import { faker } from 'faker';

describe('ListarCafeComponent', () => {
  let component: ListarCafeComponent;
  let fixture: ComponentFixture<ListarCafeComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCafeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafeComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(1, 'Cafe 1', 'Tipo 1', 'región 1', 'sabor 1', 1000, 'urlFake'),
      new Cafe(2, 'Cafe 2', 'Tipo 1', 'región 1', 'sabor 1', 1000, 'urlFake'),
      new Cafe(3, 'Cafe 3', 'Tipo 1', 'región 1', 'sabor 1', 1000, 'urlFake'),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create the component listar-cafe', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 imgs elements ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.cafes[0].imagen
    );
  });
});
