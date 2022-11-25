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
