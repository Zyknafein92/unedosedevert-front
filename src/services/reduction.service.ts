import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reduction} from '../model/reduction.model';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReductionService {
  private URL = 'http://localhost:8080/api/produits/reductions';

  constructor(private http: HttpClient) { }

  getReductions(): Observable<Array<Reduction>> {
    return this.http.get<Array<Reduction>>(this.URL);
  }

  getReduction(id: number): Observable<Reduction> {
    return this.http.get<Reduction>(`${this.URL}/${id}`);
  }

  getReductionPage(page: number, size: number, sort: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/xxx?page=${page}&size=${size}&sort=${sort}`);
  }

  createReduction(form: FormGroup): Observable < Reduction> {
    console.log('form:', form.value);
    return this.http.post<Reduction>(this.URL, form.value);
  }

  updateReduction(form: FormGroup): Observable<Reduction> {
    return this.http.put<Reduction>(`${this.URL}`, form.value);
  }

  deleteReduction(id: number): Observable<Reduction> {
    return this.http.delete<Reduction>(`${this.URL}/${id}`);
  }
}
