import { Router } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.page.html',
  styleUrls: ['./localization.page.scss'],
})
export class LocalizationPage implements AfterViewInit {
  constructor(private router: Router, public sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {}

  stepBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  openURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=R.%20Dr.%20Leoc%C3%A1dio%20Jos%C3%A9%20Corr%C3%AAa,%201%20-%20Roseira,%20Colombo%20-%20PR,%2083415-370&t=&z=13&ie=UTF8&iwloc=&output=embed'
    );
  }
}
