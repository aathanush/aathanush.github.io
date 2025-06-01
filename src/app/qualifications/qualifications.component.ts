import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TuiTitle} from '@taiga-ui/core';  
import { TuiAccordion } from '@taiga-ui/kit';
import {TuiConnected} from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-qualifications',
  imports: [
	        FormsModule,
	        NgForOf,
	        TuiAccordion,
	        TuiConnected,
          TuiTitle,
          TuiHeader
	    ],
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.css'
})
export class QualificationsComponent {

  readonly qualifications = [
  {
    "institution": "Kendriya Vidyalaya",
    "degree": "10th Grade",
    "location": "Nagercoil, Kanniyakumari, Tamil Nadu",
    "completionYear": 2018,
    "gradingSystem": "Out of 500",
    "marks": "87.4% (437/500)"
  },
  {
    "institution": "Kendriya Vidyalaya",
    "degree": "12th Grade",
    "location": "Nagercoil, Kanniyakumari, Tamil Nadu",
    "completionYear": 2020,
    "gradingSystem": "Out of 500",
    "marks": "94.2% (471/500)"
  },
  {
    "institution": "Thiagarajar College of Engineering",
    "degree": "BTech in Computer Science and Business Systems",
    "location": "Madurai, Tamil Nadu, India",
    "completionYear": 2024,
    "gradingSystem": "CGPA",
    "marks": "8.57 / 10"
  }
]


}
