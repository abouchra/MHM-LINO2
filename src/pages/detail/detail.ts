import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { Http } from '@angular/http';
import { DetailService } from './detail.service';
import { EtatPage } from '../etat/etat';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers:[DetailService]
})
export class DetailPage implements OnInit, OnChanges {
  
  
    
    tel : string ;
    dailing : string;
    
    data= {
      nbrPersonnesDevant:"",
      notifierUser: "",
      numeroQueuing: false,
      tempsAttente:"",
    };
    mode:number =0;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public detailService: DetailService) {
    this.tel=navParams.get('tel');
    this.dailing=navParams.get('dailing');
    this.data=navParams.get('data');
    console.log(this.tel);
    console.log(this.dailing);
    //console.log(this.data);
 
    //this.data=this.detailService.getPhoneDetail(this.number);
  }

  ngOnInit(): void {
    this.http.get("https://aaeb41a1.ngrok.io/mhm-lino/rest/jsonServices/mhm/getLino/"+this.dailing+this.tel)
    .map(resp=>resp.json())
    .subscribe(data=>{
       this.data=data;
       console.log(this.data);
    },
    err=>{
     console.log(err);
    });
    setTimeout( ()=>{
     /* this.http.get("https://aaeb41a1.ngrok.io/mhm-lino/rest/jsonServices/mhm/getLino/"+this.dailing+this.tel)
      .map(resp=>resp.json())
      .subscribe(data=>{
         this.data=data;
         console.log(data);
      },
      err=>{
       console.log(err);
      });*/
      this.ngOnInit();
    }, 300000);
    
    
       //this.verifier(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.http.get("https://aaeb41a1.ngrok.io/mhm-lino/rest/jsonServices/mhm/getLino/"+this.dailing+this.tel)
    .map(resp=>resp.json())
    .subscribe(data=>{
       this.data=data;
       console.log(this.data);
    },
    err=>{
     console.log(err);
    });
    setTimeout( () => {
      console.log(this.tel);
 }, 3000);
    this.ngOnChanges(changes);
  }

  doRefresh(refresher: Refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  refreshStatu(){
     this.http.get("https://aaeb41a1.ngrok.io/mhm-lino/rest/jsonServices/mhm/getLino/"+this.dailing+this.tel)
    .map(resp=>resp.json())
    .subscribe(data=>{
       this.data=data;
       console.log(data);
    },
    err=>{
     console.log(err);
    });
    this.ngOnInit();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
