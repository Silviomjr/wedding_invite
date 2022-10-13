import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get('../assets/data/wish-list.json');
  }
}
