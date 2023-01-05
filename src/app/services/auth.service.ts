import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RoutersLink } from '../models/router';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private registeresquest: HttpsService,
    private route: Router, ) { }

    getUsersData(){
      return  this.registeresquest.GET(RoutersLink.all)
    }

    getUsersDataDetail(item: number){
      let itemEnd: string = item+'.json'
      return  this.registeresquest.GET(RoutersLink.id+itemEnd)
    }
}
