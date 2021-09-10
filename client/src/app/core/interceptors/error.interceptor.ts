import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private toaster: ToastrService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(e => {
                if (e) {
                    if (e.status === 400) {
                        if (e.error.errors) {
                            throw e.error;
                        } else {
                            this.toaster.error(e.error.message, e.error.statusCode);
                        }
                    }
                    if (e.status === 401) {
                        this.toaster.error(e.error.message, e.error.statusCode);
                    }
                    if (e.status === 404) {
                        this.router.navigateByUrl('/not-found');
                    }
                    if (e.status === 500) {
                        this.router.navigateByUrl('/server-error')
                    }
                }
                return throwError(e);
            })
        );
    }

}
