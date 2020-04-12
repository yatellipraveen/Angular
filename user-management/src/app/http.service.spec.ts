import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { User } from './user.model';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;
  let reqUrl = 'http://localhost:8080/users';
  const dummyUsers: User[] = [
    {
      firstName: 'One',
      lastName: 'User',
      login: 'user1',
      password: 'pass',
      age: 22,
      isDeleted: true,
      updatedAt: new Date()
    },
    {
      firstName: 'Two',
      lastName: 'User',
      login: 'user1',
      password: 'pass',
      age: 22,
      isDeleted: true,
      updatedAt: new Date()
    }
  ];
  const dummyUser: User = {
    id: '5602',
    firstName: 'Two',
    lastName: 'User',
    login: 'user1',
    password: 'pass',
    age: 22,
    isDeleted: true,
    updatedAt: new Date()
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a GET request to all get users', () => {
    service.getUsers().subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(reqUrl);

    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('should send a GET request to get user by ID', () => {
    service.getUserByID(dummyUser.id).subscribe((user: User) => {
      expect(user).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(reqUrl + '/' + dummyUser.id);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('should send a PUT request to deactivate user', () => {
    service.deactivateUser(dummyUser);
    const req = httpMock.expectOne(reqUrl + '/' + dummyUser.id);
    expect(req.request.method).toBe('PUT');
    req.flush('200');
  });

  it('should send a PUT request to activate user', () => {
    service.activateUser(dummyUser);
    const req = httpMock.expectOne(reqUrl + '/' + dummyUser.id);
    expect(req.request.method).toBe('PUT');
    req.flush('200');
  });

  it('should send a PUT request to update user', () => {
    service.updateUser(dummyUser);
    const req = httpMock.expectOne(reqUrl + '/' + dummyUser.id);
    expect(req.request.method).toBe('PUT');
    req.flush('200');
  });

  it('should send a post request to create new user', () => {
    service.createNewUser(dummyUser);
    const req=httpMock.expectOne(reqUrl+'/');
    expect(req.request.method).toBe('POST');
    req.flush('200');
  });
});
