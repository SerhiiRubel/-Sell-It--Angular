import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';
import {SessionService} from './services/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private cookie: CookieService, private session: SessionService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = `JWT${this.session.token}`;
    if (this.session.token) {
      const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader)});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
