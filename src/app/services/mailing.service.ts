import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../enrironments/environments';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  httpClient = inject(HttpClient)
  private baseUrl = environment.apiUrl

  sendMail(body: any) {

    return lastValueFrom(
      this.httpClient.post(`${this.baseUrl}/mailing`, body)

    )

  }


}
