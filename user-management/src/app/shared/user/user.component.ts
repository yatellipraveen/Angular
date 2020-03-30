import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() user: User;
  @Input() module: string;

  constructor(private route: ActivatedRoute, private users: UsersService) {}

  onActivate() {
    this.users.activateUser(this.user.id);
  }
  onDeactivate() {
    this.users.deactivateUser(this.user.id);
  }
}
