import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  testValue = "";
  isLoading = false;

  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authservice.getIsAuth();
    this.authListenerSubs = this.authservice
    .getAuthStatusListener()
    .subscribe( isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onClickTest(){
	  this.testValue = "New Text";
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
