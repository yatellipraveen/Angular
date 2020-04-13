import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    return (value ? 'Deleted' : 'Active');
  }
}
