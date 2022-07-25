import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Cookie } from 'ng2-cookies';
// import { Properties } from '../util/properties';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    // properties: Properties;

    constructor(private router: Router) {
        // this.properties = new Properties();

     }

    /**
     * Se ejecuta en cada llamada a una ruta de Angular para validar seguridad de la Aplicación Volrisk
     * @param route Objeto Route de la ruta generada
     * @param state Estado del Ruteo contiene la URL invocada
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Sacar del local storage
        const isAuthenticated = Cookie.get('data_user') !== null && Cookie.get('data_user') !== undefined
            && Cookie.get('data_user').toString().trim() !== '';
        if (!isAuthenticated) {
            if (state.url) {
                this.router.navigate(['login']);
            }
        } else {
            return true;
        }
    }
}
