import { Injectable } from "@angular/core";

Injectable()
export class DetailService{

    getPhoneDetail(number : string) {
        return {
            "error": "StringErr",
            "numeroQueuing" : "StringNumQY",
            "nbrPersonnesDevant" : "StringNBR",
            "tempsAttente" : "Stringtatt",
            "notifierUser" : "booleannOTF",
            "popup" : "StringPop"
         };
    }
}