import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {};
  constructor(
    private auth: AuthServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.userData);
    .subscribe(
      res => {
        localStorage.getItem('token', res.token)
        this.router.navigate(['/profile'])
      }
      err => console.log(err);
    )
  }

}
