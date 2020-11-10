import {Injectable} from '@angular/core'
import {IUser} from './user.model'

@Injectable ()
export class AuthService{

    currentUser: IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
             id: 1,
             firstName: 'Mukhammad',
             lastName: 'Mahkamov',
             userName: userName
        }
        this.currentUser.firstName = 'userName'
    }

    isAuthenticated(){
       // return (this.currentUser.userName == this.currentUser.firstName && this.currentUser.password == this.currentUser.lastName)
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}