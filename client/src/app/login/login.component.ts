import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
