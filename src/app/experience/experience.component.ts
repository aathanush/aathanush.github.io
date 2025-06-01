import {NgForOf} from '@angular/common';
import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTitle} from '@taiga-ui/core';  
import { TuiAccordion } from '@taiga-ui/kit';
import {TuiConnected} from '@taiga-ui/kit';
@Component({
  selector: 'app-experience',
  imports: [
	        FormsModule,
	        NgForOf,
	        TuiAccordion,
	        TuiConnected,
	    ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  readonly experience =[{
    org: "Thiagarajar College of Engineering Madurai, India",
    role: "In‑lab intern",
    period: "2021",
    techskills: [ "Python with NumPy", "Matplotlib", "Pandas", "Scikit‑learn", "Git", "Machine Learning"],
    softskills:["Teamwork", "Time management", "Communication", "Presentation"],
    details:[
      "Worked on atmospheric corrosion rate prediction of low‑alloy steels using machine learning models under the mentorship of Dr. P Chitra, HOD‑CSBS",
      "Conference paper published in IOP conference proceedings on 1 August 2022"
    ]
  },
  {
    org: "Ford Business Solutions, Chennai",
    role: "Graduate Trainee ",
    period: "January 2024 ‑ July 2024",
    techskills: [ "Java, Spring Boot", "Angular", "Python", "Google Cloud Platform"],
    softskills:["Teamwork", "Collaboration", "Communication"],
    details:[
      "Received training on Angular, Java, React, and Google Cloud Platform",
      "Developed Websites based on Angular, React (front‑end) and Java (backend: spring framework) as a part of the training",
      "Developed monitoring and alerting policies for VM instance in Google Cloud",
      "Developed a process health checking script using python"
    ]
  },{
    org: "Ford Business Solutions, Chennai",
    role: "Junior Engineer ",
    period: "July 2024 - July 2025",
    techskills: [ ".NET framework", ".NET core", "Angular", "Python", "PostgreSQL", "Web hosting on windows servers using IIS"],
    softskills:["Teamwork", "Collaboration", "Communication", "Learning through application"],
    details:[
      "Worked on critical database migration projects as a part of organization’s cost cutting objectives",
      "Worked on web development (back‑end and front) projects for an inventory management application suite",
      "Hosted web sites and APIs on on‑premise windows development servers" 
       ]
  }

  ]

 
	    
}
