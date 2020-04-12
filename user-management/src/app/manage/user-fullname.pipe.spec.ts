import { UserFullName} from './user-fullname.pipe';
import { User } from '../user.model'; 

describe('UserFullName Pipe',()=>{
    const dummyUser: User = 
        {
          firstName: 'Two',
          lastName: 'User',
          login: 'user1',
          password: 'pass',
          age: 22,
          isDeleted: false,
          updatedAt: new Date()
        };
    it('should return user full name',()=>{
        let userFullName= new UserFullName() ;
        expect(userFullName.transform(dummyUser)).toBe(dummyUser?.firstName+' '+dummyUser?.lastName);
    })
})