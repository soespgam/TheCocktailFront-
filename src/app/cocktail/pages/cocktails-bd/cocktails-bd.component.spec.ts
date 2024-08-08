import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsBdComponent } from './cocktails-bd.component';

describe('CocktailsBdComponent', () => {
  let component: CocktailsBdComponent;
  let fixture: ComponentFixture<CocktailsBdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailsBdComponent]
    });
    fixture = TestBed.createComponent(CocktailsBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
