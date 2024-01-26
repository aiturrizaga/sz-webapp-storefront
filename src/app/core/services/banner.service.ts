import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../interfaces/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Banner[]> {
    return this.http.get<Banner[]>('assets/data/banners.json');
  }
}
