import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  url: string;
  constructor(private router: Router, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this.whatsAppUrl();
  }
  localizationNavigation() {
    this.router.navigateByUrl('home/localization', { replaceUrl: true });
  }

  wishListNavigation() {
    this.router.navigateByUrl('home/wish-list', { replaceUrl: true });
  }

  informationsNavigation() {
    this.router.navigateByUrl('home/infos', { replaceUrl: true });
  }

  whatsAppUrl() {
    const countryCode = 55;
    const ddd = 41;
    const whatsappNumber = 984926134;
    const msg =
      'Olá, gostaria de confirmar a minha prença nos casamentos dos véios!';
    const URL = `https://wa.me/${countryCode}${ddd}${whatsappNumber}?text=${msg}`;

    return URL;
  }
}
