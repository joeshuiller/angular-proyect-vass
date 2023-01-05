import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RoutersLink } from '../models/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public dataAllId: any;
  public loading: boolean = true
  constructor(
    private activatedRoute: ActivatedRoute,
    private _https:AuthService,
    private router: Router) {
      this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
        let token = parametros.get("id");
        if (token != null) {
          this.getDataId(parseInt(token))
        } else {
          this.router.navigate([RoutersLink.home]);
        }
      })
    }

  ngOnInit(): void {
  }
  getDataId(item:number){
    this._https.getUsersDataDetail(item).then((resulta: any)=>{
          this.dataAllId = resulta
          this.loading = false
    }).catch((err: any)=>{
      console.log(err)
    });
  }
  routerLink(){
    this.router.navigate([RoutersLink.home]);
  }
}
