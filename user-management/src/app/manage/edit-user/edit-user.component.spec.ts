import { TestBed, async } from '@angular/core/testing';
import { EditUserComponent} from './edit-user.component'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from 'src/app/http.service';

describe('EditUserComponent', () => {
  let service: HttpService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        EditUserComponent ,
       ],
        imports:[RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(HttpService);

  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(EditUserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call update user',()=>{
    let fixture = TestBed.createComponent(EditUserComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(service,'updateUser');
    spyOn(app.updateForm,'reset');
    app.user={id : '21'};
    app.onSubmit();
    expect(service.updateUser).toHaveBeenCalled();
    expect(app.updateForm.reset).toHaveBeenCalled();;
  });
});