import { TestBed, async } from '@angular/core/testing';
import { UserslistComponent} from './userslist.component'
import { HttpClientModule } from '@angular/common/http';
import { GetUsers } from '../get-users.pipe';
import { HttpService } from 'src/app/http.service';
import { User } from 'src/app/user.model';
import { Observable } from 'rxjs';

describe('UserslistComponent', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        UserslistComponent,
        GetUsers   
       ],
       imports:[HttpClientModule]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserslistComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});