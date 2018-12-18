import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';

import "rxjs/add/operator/map";
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the EtatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-etat',
  templateUrl: 'etat.html',
})
export class EtatPage {

  tel : string ="";
  country :string ="";
  data : any;
  mode: number= 0;
  msg :String ="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtatPage');
  }

  onSearch(){
    this.http.get("https://aaeb41a1.ngrok.io/mhm-lino/rest/jsonServices/mhm/getLino/"+this.country+this.tel)
    .map(resp=>resp.json())
    .subscribe(data=>{
       this.data=data;
       if(data.error == undefined){
             //console.log(data);
             this.navCtrl.push(DetailPage, {
              "dailing": this.country,
              "tel" : this.tel,
              "data" : this.data,
            });
       }
       else 
       {
         console.log(data.error);
        this.showToast("middle", data.error);
       }
    },
    err=>{
     console.log(err);
    });
    /*
       this.navCtrl.push(DetailPage, {
         "dailing": this.country,
         "tel" : this.tel,
         "number" : this.country+this.tel
       });*/
  }

  showToast(position: string, msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
