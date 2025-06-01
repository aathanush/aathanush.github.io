import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { CoursesComponent } from './courses/courses.component';
import { ExperienceComponent } from './experience/experience.component';
import { PublicationsComponent } from './publications/publications.component';
import { QualificationsComponent } from './qualifications/qualifications.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'achievements',
        component: AchievementsComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'publications',
        component: PublicationsComponent
    },
    {
        path: 'qualifications',
        component: QualificationsComponent
    }

];
