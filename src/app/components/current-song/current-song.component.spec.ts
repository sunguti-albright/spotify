import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSongComponent } from './current-song.component';

describe('CurrentSongComponent', () => {
  let component: CurrentSongComponent;
  let fixture: ComponentFixture<CurrentSongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentSongComponent]
    });
    fixture = TestBed.createComponent(CurrentSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
