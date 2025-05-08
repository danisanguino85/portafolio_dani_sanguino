import { Component, inject } from '@angular/core';
import { WorkExperienceService } from '../../services/work-experience.service';
import { WorkExperience } from '../../interfaces/workExperience.interface';

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  experienceService = inject(WorkExperienceService)
  workExperience: WorkExperience[] = []

  ngOnInit() {

    this.getAllExperiences()

  }


  async getAllExperiences() {
    try {
      this.workExperience = await this.experienceService.getAll()
    } catch (error) {

    }
  }

}
