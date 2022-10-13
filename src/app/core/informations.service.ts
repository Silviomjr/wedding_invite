import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InformationsService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get('../assets/data/informations.json');
  }
}
