import { TestBed, async } from '@angular/core/testing';
import { EditUserComponent} from './edit-user.component'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EditUserComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        EditUserComponent      ],
        imports:[RouterTestingModule, HttpClientModule]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(EditUserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});