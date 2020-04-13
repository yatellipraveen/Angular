import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/user.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import{ globalConstants} from '../../constants'

@Component({
  selector: 'app-edituser',
  templateUrl: './edit-user.component.html',
  styleUrls:['./edit-user.component.css']
})
export class EditUserComponent {
  globalConst;

  user:User;
  updateForm= new FormGroup({
    password:new FormControl('',[Validators.required, Validators.minLength(7)]),
    age : new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.maxLength(2)])
  });

  constructor(private route: ActivatedRoute, private http: HttpService){

  }
  ngOnInit() {
    this.globalConst=globalConstants;

    let id = this.route.snapshot.params['id'];
    this.http.getUserByID(id).subscribe(user => {
      this.user = user as any;
    });
    this.route.params.subscribe(params => {
      id = params['id'];
      this.http.getUserByID(id).subscribe(user => {
        this.user = user as any;
      });
    });
  }

  onSubmit(){
    this.http.updateUser({
      ...this.updateForm.value,
      id:this.user.id
    });
    this.updateForm.reset();
  }

}
