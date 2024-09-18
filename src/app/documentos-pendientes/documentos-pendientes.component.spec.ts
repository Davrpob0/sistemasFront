import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPendientesComponent } from './documentos-pendientes.component';

describe('DocumentosPendientesComponent', () => {
  let component: DocumentosPendientesComponent;
  let fixture: ComponentFixture<DocumentosPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentosPendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentosPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
