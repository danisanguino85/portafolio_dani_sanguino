import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { WorkExperience } from '../interfaces/workExperience.interface';
import { environment } from '../../../enrironments/environments';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {


  private baseUrl = environment.apiUrl
  private httpClient = inject(HttpClient)

  getAll() {
    return lastValueFrom(
      this.httpClient.get<WorkExperience[]>(`${this.baseUrl}/experiencia`)
    )
  }

}
