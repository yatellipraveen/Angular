import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus'
})
export class UserStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value) {
      return 'Deleted';
    } else {
      return 'Active';
    }
  }
}
