import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Education } from '../interfaces/education.interface';
import { environment } from '../../../enrironments/environments';

@Injectable({
  providedIn: 'root'
})
export class EducationService {


  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<Education[]>(`${this.baseUrl}/formacion`)
    )
  }

}
