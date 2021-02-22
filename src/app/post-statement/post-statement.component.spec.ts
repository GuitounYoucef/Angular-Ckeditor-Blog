import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStatementComponent } from './post-statement.component';

describe('PostStatementComponent', () => {
  let component: PostStatementComponent;
  let fixture: ComponentFixture<PostStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
