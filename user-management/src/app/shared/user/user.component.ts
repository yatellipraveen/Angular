import { Component, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input() user: User;
  @Input() module: string;

  constructor(private http : HttpService) {}

  onActivate() {
    this.http.activateUser(this.user);
  }
  onDeactivate() {
    this.http.deactivateUser(this.user);
  }
}
