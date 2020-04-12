import { TestBed, async } from '@angular/core/testing';
import { CreateUserComponent} from './create-user.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateUserComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateUserComponent  ,
       ],
       imports : [ HttpClientTestingModule  ]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});