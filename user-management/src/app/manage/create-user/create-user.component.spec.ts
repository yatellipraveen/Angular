import { TestBed, async } from '@angular/core/testing';
import { CreateUserComponent} from './create-user.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/http.service';

describe('CreateUserComponent', () => {
  let service: HttpService;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateUserComponent  ,
       ],
       imports : [ HttpClientTestingModule  ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should post user data',()=>{
    let fixture = TestBed.createComponent(CreateUserComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(service,'createNewUser');
    spyOn(app.userForm,'reset');
    app.onSubmit();
    expect(service.createNewUser).toHaveBeenCalled();
    expect(app.userForm.reset).toHaveBeenCalled();  
  });
});