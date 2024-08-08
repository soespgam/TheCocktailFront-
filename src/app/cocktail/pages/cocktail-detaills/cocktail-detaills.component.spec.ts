import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetaillsComponent } from './cocktail-detaills.component';

describe('CocktailDetaillsComponent', () => {
  let component: CocktailDetaillsComponent;
  let fixture: ComponentFixture<CocktailDetaillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailDetaillsComponent]
    });
    fixture = TestBed.createComponent(CocktailDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
