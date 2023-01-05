import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutersLink } from '../models/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataAll: any = []
  public loading: boolean = true
  constructor(
    private _https:AuthService,
    private router: Router) { 
      this.getData();
    }

  ngOnInit(): void {
  }
  getData(){
    this._https.getUsersData().then((resulta: any)=>{ 
          this.dataAll = resulta
          this.loading = false
    }).catch((err: any)=>{
      console.log(err)
    });
  }
  routerLink(item: number){
    this.router.navigate([RoutersLink.deatil+item]);
  }
}
