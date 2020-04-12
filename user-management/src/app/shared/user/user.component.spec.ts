import { TestBed, async } from '@angular/core/testing';
import { UserComponent} from './user.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent   
       ],
       imports:[HttpClientTestingModule]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});