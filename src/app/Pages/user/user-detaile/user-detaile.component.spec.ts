import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaileComponent } from './user-detaile.component';

describe('UserDetaileComponent', () => {
  let component: UserDetaileComponent;
  let fixture: ComponentFixture<UserDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetaileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
