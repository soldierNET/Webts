import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';
  public message: string = '';
  constructor(private userService: UserService, private router: Router){}
  register(){
    this.userService.register(this.username, this.password).subscribe((resp) => {
      console.log('successfully registered');
      this.message = resp.msg;
      this.router.navigate(['login']);
    }, (err) =>{
      console.error('Error registering', err);
      this.message = err.error.msg;
    });
  }
}
