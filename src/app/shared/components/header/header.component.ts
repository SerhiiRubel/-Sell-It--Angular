import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private auth: AuthService) {}
  public currentUser;
  public user = this.auth.currentUser.subscribe(
    user => this.currentUser = user
  );
  private logout = () => this.auth.logout();
}
