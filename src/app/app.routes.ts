import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { EducationComponent } from './pages/education/education.component';
import { IdBootcampsComponent } from './pages/id-bootcamps/id-bootcamps.component';
import { CrmGarageComponent } from './pages/crm-garage/crm-garage.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'sobreMi', component: AboutMeComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'experiencia', component: WorkExperienceComponent },
    { path: 'formacion', component: EducationComponent },
    { path: 'bootcamp', component: IdBootcampsComponent },
    { path: 'crm', component: CrmGarageComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },

    { path: '**', redirectTo: '/inicio' }





];
