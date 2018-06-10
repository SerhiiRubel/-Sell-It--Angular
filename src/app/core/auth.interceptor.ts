import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private cookie: CookieService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = `JWT ${this.cookie.get('Token')}`;
    if (this.cookie.get('Token')) {
      const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader)});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
