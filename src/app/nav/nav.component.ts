import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  sidenavWidth = 4;
  // opened = false;
  isExpanded = false;


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
