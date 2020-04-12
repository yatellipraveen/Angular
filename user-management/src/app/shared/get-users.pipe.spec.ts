import { GetUsers } from './get-users.pipe';
import { User } from '../user.model';

describe('Get Users Pipe', () => {
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
      isDeleted: false,
      updatedAt: new Date()
    }
  ];

  const activeUsers: User[] = [
    {
      firstName: 'Two',
      lastName: 'User',
      login: 'user1',
      password: 'pass',
      age: 22,
      isDeleted: false,
      updatedAt: new Date()
    }
  ];

  const deletedUsers: User[] = [
    {
      firstName: 'One',
      lastName: 'User',
      login: 'user1',
      password: 'pass',
      age: 22,
      isDeleted: true,
      updatedAt: new Date()
    }
  ];

  it('should get active users list', () => {
    let getUsersPipe = new GetUsers();
    expect(getUsersPipe.transform(dummyUsers, 'active')).toEqual(activeUsers);
  });

  it('should get deleted users list', () => {
    let getUsersPipe = new GetUsers();
    expect(getUsersPipe.transform(dummyUsers, 'deleted')).toEqual(deletedUsers);
  });

  it('should get complete/same list', () => {
    let getUsersPipe = new GetUsers();
    expect(getUsersPipe.transform(dummyUsers, 'manage')).toEqual(dummyUsers);
  });
});
