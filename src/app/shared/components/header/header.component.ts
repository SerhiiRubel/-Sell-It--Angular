import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {ProfileService} from '../../../core/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  constructor(
    private auth: AuthService,
    private profile: ProfileService) {}
  public currentUser;
  private logout = () => this.auth.logout();
  ngOnInit() {
    this.profile.getProfile().subscribe(
      response => this.currentUser = response
    );
  }
}
