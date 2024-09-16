import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInicioComponent } from './p-inicio.component';

describe('PInicioComponent', () => {
  let component: PInicioComponent;
  let fixture: ComponentFixture<PInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
