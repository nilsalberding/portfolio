import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCommentComponent } from './team-comment.component';

describe('TeamCommentComponent', () => {
  let component: TeamCommentComponent;
  let fixture: ComponentFixture<TeamCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
