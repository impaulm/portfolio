import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioData } from '../models/portfolio-data.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private http = inject(HttpClient);

  getPortfolioData(): Observable<PortfolioData> {
    return this.http.get<PortfolioData>('/data/data.json');
  }
}