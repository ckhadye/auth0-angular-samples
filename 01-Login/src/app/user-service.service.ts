import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Injectable()
export class UserService {

  constructor(private http:HttpClient,private authService: AuthService) { }
    
  private urlJson:string = '../assets/jsons'; 
  private users:Promise<any>;
  public getUserInfo():Promise<any> {
    
    
    return this.http.get(this.urlJson +'/users.json').toPromise().then((res:any) => {
      let userProfile = this.getUserProfileFromAuth();
        // console.log(res); 
        let isFound:boolean = false;
        // userProfile.id = 10;
        res.forEach((user) => {
          if(user.name === userProfile.name){
            isFound = true;
              console.log('Found user');
              userProfile.id = user.id;
              userProfile.age = user.age;
              // userProfile.email = user.email;
              userProfile.gender = user.gender;
              res = user;
              return false;
          }})

        return Promise.resolve(userProfile);
        ;}).then((user:any) => {
          console.log('Displaying user:'+user);
          console.log("ID:"+user.id);
          console.log(user.name);
          return Promise.resolve(user);
              // console.log(user.age);
}).catch((err : any) => { console.log(err)});

     /*this.users.forEach(user => {
       console.log("ID:"+user.id);
       console.log(user.name);
       console.log(user.age);
     });
*/
}

private getUserProfileFromAuth():any{
  let decodedIDToken = this.authService.getDecodedIDToken();
  let userProfile = {'name':decodedIDToken.name,'email':decodedIDToken.email,'picture':decodedIDToken.picture,'nickname':decodedIDToken.nickname};
  return userProfile;
}

}
