import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishListService } from 'src/app/core/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {
  public data;

  constructor(
    private wishListService: WishListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.wishListService.get().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }

  stepBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  formatterCurrency(number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number);
  }
}
