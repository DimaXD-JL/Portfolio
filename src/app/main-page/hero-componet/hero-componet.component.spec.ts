import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponetComponent } from './hero-componet.component';

describe('HeroComponetComponent', () => {
  let component: HeroComponetComponent;
  let fixture: ComponentFixture<HeroComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
