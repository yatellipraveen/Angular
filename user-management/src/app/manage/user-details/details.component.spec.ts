import { TestBed, async } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserFullName } from '../user-fullname.pipe';
import { UserStatusPipe } from '../user-status.pipe';

describe('DetailsComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent, UserFullName, UserStatusPipe],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(DetailsComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
