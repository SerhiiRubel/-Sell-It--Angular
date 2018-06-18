import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthDefaultService} from '../../../core/services/auth-default.service';
import {ProfileService} from '../../../core/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  constructor(
    private auth: AuthDefaultService,
    private profile: ProfileService) {}
  public currentUser;
  private logout = () => this.auth.logout();
  ngOnInit() {
    this.profile.profile.subscribe(
      response => this.currentUser = response
    );
  }
}
