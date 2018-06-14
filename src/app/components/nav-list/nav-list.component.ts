import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {
  @Output() close: EventEmitter<any> = new EventEmitter();
  navs = [
    {
      label: 'App',
      links: [
        { path: '/home', label: 'Home', icon: 'home' },
        { path: '/categories', label: 'Categories', icon: 'category' }
        // { path: '/item-list', label: 'New arrivals', icon: 'fiber_new' },
        // {
        //   path: '/item-list',
        //   // tslint:disable-next-line:quotemark
        //   label: "Today's offers",
        //   icon: 'local_offer'
        // }
      ]
    },
    {
      label: 'Customer',
      links: [
        { path: '/orders', label: 'Your orders', icon: 'shopping_basket' },
        { path: '/wishlist', label: 'Your wishlist', icon: 'favorite' },
        { path: '/account', label: 'Your account', icon: 'account_box' }
      ]
    },
    {
      label: 'Configuration',
      links: [
        { path: '/settings', label: 'Settings', icon: 'settings' },
        {
          path: '/customer-service',
          label: 'Customer service',
          icon: 'contact_support'
        },
        {
          path: '/about',
          label: 'About us',
          icon: 'supervisor_account'
        }
      ]
    }
  ];

  closeSidenav() {
    this.close.emit(null);
  }
}
