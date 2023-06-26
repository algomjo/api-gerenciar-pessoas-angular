import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaListComponent } from './pessoa-list.component';

describe('PessoaListComponent', () => {
  let component: PessoaListComponent;
  let fixture: ComponentFixture<PessoaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaListComponent]
    });
    fixture = TestBed.createComponent(PessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
