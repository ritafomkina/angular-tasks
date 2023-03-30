import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAreaComponent } from './sorting-area.component';

describe('SortingAreaComponent', () => {
  let component: SortingAreaComponent;
  let fixture: ComponentFixture<SortingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
