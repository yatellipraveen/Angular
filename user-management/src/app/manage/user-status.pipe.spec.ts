import{UserStatusPipe} from './user-status.pipe';

describe('UserStausPipe ', ()=>{

    it('should give status as Deleted if true',()=>{
        let userStatusPipe= new UserStatusPipe();
        expect(userStatusPipe.transform(true)).toBe('Deleted');
    });

    it('should give status as Active if false',()=>{
        let userStatusPipe= new UserStatusPipe();
        expect(userStatusPipe.transform(false)).toBe('Active');
    });
});