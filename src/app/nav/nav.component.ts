import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from './manu-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  sidenavWidth = 4;
  // opened = false;
  isExpanded = false;

  menuArray: MenuItem[] = [
    {
      title: 'Dashboard',
      home: true,
      icon: {
        icon: 'home',
        pack: 'material'
      },
      link: '/main/dashboard'
    },
    {
      title: 'País',
      icon: {
        icon: 'home',
        pack: 'material'
      },
      link: '/main/country'
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  miniVariant(){
    if (this.isExpanded) {
      this.sidenavWidth = 4;
    } else {
      this.sidenavWidth = 15;
    }
    this.isExpanded = !this.isExpanded;
    console.log('increase sidenav width');
  }

}
