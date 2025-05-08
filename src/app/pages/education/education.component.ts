import { Component, inject } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { Education } from '../../interfaces/education.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationService = inject(EducationService)
  education: Education[] = []
  bootcamp!: Education
  router = inject(Router);
  ngOnInit() {

    this.loadEducation()


  }

  async loadEducation() {

    this.education = await this.educationService.getAll()
  }


  onClick() {
    this.router.navigate(['/bootcamp'])
  }




}
