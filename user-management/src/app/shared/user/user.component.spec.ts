import { TestBed, async } from '@angular/core/testing';
import { UserComponent} from './user.component'
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from 'src/app/http.service';

describe('UserComponent', () => {
  let service : HttpService;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent   
       ],
       imports:[HttpClientTestingModule]
    });
    service= TestBed.inject(HttpService);
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call activate user',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(service,'activateUser');
    app.onActivate();
    expect(service.activateUser).toHaveBeenCalled();
  });

  it('should call deactivate user',()=>{
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    spyOn(service,'deactivateUser');
    app.onDeactivate();
    expect(service.deactivateUser).toHaveBeenCalled();
  })
});