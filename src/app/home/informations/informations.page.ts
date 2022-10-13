import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationsService } from 'src/app/core/informations.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {
  public contactData;

  constructor(
    private router: Router,
    private informationsService: InformationsService
  ) {}

  ngOnInit() {
    this.informationsService.get().subscribe((res) => {
      this.contactData = res;
    });
  }

  stepBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  callPhone(countryCode, ddd, whatsappNumber) {
    const phoneNumber = `tel:+${countryCode}${ddd}${whatsappNumber}`;
    console.log(phoneNumber);
    return phoneNumber;
  }

  callWhatsapp(countryCode, ddd, whatsappNumber) {
    const msg = 'Olá, tenho uma dúvida sobre o casamentos dos véios!';
    const URL = `https://wa.me/${countryCode}${ddd}${whatsappNumber}?text=${msg}`;
    console.log(URL);
    return URL;
  }
}
