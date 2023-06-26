import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaFormComponent } from './pessoa-form.component';

describe('PessoaFormComponent', () => {
  let component: PessoaFormComponent;
  let fixture: ComponentFixture<PessoaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaFormComponent]
    });
    fixture = TestBed.createComponent(PessoaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
