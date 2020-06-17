import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { StorageKey } from './storage.model';

class UserToken {

}

class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}

@Injectable({
    providedIn: 'root',
})
export class Guard implements CanActivate {
  constructor(
      private storageService: StorageService,
      ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log(this.storageService.read(StorageKey.TOKEN))
    return this.storageService.read(StorageKey.TOKEN) != null;
  }
}
