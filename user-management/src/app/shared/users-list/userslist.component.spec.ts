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

  // it('should get users list from service',()=>{
  //   const dummyUsers: User[] = [
  //     {
  //       firstName: 'One',
  //       lastName: 'User',
  //       login: 'user1',
  //       password: 'pass',
  //       age: 22,
  //       isDeleted: true,
  //       updatedAt: new Date()
  //     },
  //     {
  //       firstName: 'Two',
  //       lastName: 'User',
  //       login: 'user1',
  //       password: 'pass',
  //       age: 22,
  //       isDeleted: true,
  //       updatedAt: new Date()
  //     }
  //   ];

  //   let fixture = TestBed.createComponent(UserslistComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let httpService=fixture.debugElement.injector.get(HttpService);
  //   let spy=spyOn(httpService,'getUsers').and.callFake(()=>{ return new Observable(dummyUsers) });
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     expect(app.userslist).toEqual(dummyUsers);
  //   });

  // });
});