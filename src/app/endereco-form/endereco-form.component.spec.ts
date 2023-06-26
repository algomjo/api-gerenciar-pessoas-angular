import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFormComponent } from './endereco-form.component';

describe('EnderecoFormComponent', () => {
  let component: EnderecoFormComponent;
  let fixture: ComponentFixture<EnderecoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoFormComponent]
    });
    fixture = TestBed.createComponent(EnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
