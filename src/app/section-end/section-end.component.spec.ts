import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEndComponent } from './section-end.component';

describe('SectionEndComponent', () => {
  let component: SectionEndComponent;
  let fixture: ComponentFixture<SectionEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
