import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-praccookie',
  templateUrl: './praccookie.component.html',
  styleUrls: ['./praccookie.component.css']
})
export class PraccookieComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  setcookiebtn() {
    this.cookieService.set("userid", "12345");
    this.cookieService.set("usertype", "internal");
  }

  getcookiebtn() {
    console.log(`User id: ${this.cookieService.get('userid')} - User Type: ${this.cookieService.get('usertype')}`);
  }

  getallcookiebtn() {
    console.log('All cookies', this.cookieService.getAll())
  }

  deletecookiebtn(){
    this.cookieService.delete("userid")
    console.log("Cookie userid deleted")
  }

  deleteallcookiebtn(){
    this.cookieService.deleteAll()
    console.log("All cookies deleted")
  }

  checkcookiebtn(){
    this.cookieService.check("userid") ? console.log("Cookie userid exist") : console.log("Cookie userid NOT exist")
    
  }

  

}
