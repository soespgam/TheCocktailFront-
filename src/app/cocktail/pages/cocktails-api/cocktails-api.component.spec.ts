import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsApiComponent } from './cocktails-api.component';

describe('CocktailsApiComponent', () => {
  let component: CocktailsApiComponent;
  let fixture: ComponentFixture<CocktailsApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailsApiComponent]
    });
    fixture = TestBed.createComponent(CocktailsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
