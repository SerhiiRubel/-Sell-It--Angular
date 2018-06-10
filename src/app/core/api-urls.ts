import {environment} from '../../environments/environment';

export class ApiUrls {
    static adverts = `${environment.apiBase}/adverts`;
    static registration = `${environment.apiBase}/registration/`;
    static login = `${environment.apiBase}/login/`;
    static logout = `${environment.apiBase}/logout/`;
}
