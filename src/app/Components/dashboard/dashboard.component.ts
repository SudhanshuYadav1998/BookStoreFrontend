import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  search: any;
  cancel: boolean = false;
  fullName: any='';


  ngOnInit(): void {this.fullName = localStorage.getItem('name');
  }
  searchNote(event: any) {
    //console.log(event.target.value)
    this.cancel = true;
    
    this.search=event.target.value

    if (this.search == '') {
      this.cancel = false;
    }
  }

  searchClear() {
    this.search = '';
    this.cancel = false;
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('mobile');
    //localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
