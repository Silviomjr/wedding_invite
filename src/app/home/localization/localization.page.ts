import { Router } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.page.html',
  styleUrls: ['./localization.page.scss'],
})
export class LocalizationPage implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {}

  stepBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
