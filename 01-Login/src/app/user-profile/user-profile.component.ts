import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

   private userInfo:any;
    
    private urlJson = 'assets/jsons';
    
    
  constructor(private authService:AuthService, private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
      console.log('Inside userprofile init');
   
    this.userInfo = this.userService.getUserInfo();
    //console.log('Displaying userInfo');
    this.userInfo.then((res) => this.userInfo = res);
     }
}
