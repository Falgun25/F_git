import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor ,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout,map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthenticationService } from '@/_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private router : Router ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                console.log("event",event)
                if (event instanceof HttpResponse) {
                    this.resetTimer();
                }
                return event;
            })
        );
    }
    resetTimer() {
        console.log("resetTimer")
        let t
        clearTimeout(t);
         t= setTimeout(this.logout, 10000) 

    }


    logout() {
        console.log(" resetTimer============== ")
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
         // this.currentUserSubject.next(null);
       window.location.href='/login';
    }
    
}