import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  ville:string = "";
  appid:string = "";

  makeRequest(){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ this.ville +"&APPID="+ this.appid
    this.Http.get(url).subscribe(resultat => {
      console.log(resultat);
    })
  }

  constructor(private Http: HttpClient){

  }

}
