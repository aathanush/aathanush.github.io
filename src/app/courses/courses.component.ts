	import {AsyncPipe, NgForOf} from '@angular/common';
	import {ChangeDetectionStrategy, Component} from '@angular/core';
	import {TuiTable} from '@taiga-ui/addon-table';
	import {TuiFormatNumberPipe, TuiTitle} from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-courses',
  imports: [TuiTitle, NgForOf, TuiHeader, TuiTable],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  readonly columns = ["Name","Url","Authority","Completion","License"]

   readonly courses = [
  {
    "Name": "Python",
    "Url": "",
    "Authority": "Kaggle",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Intro to Machine Learning",
    "Url": "",
    "Authority": "Kaggle",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Intermediate Machine Learning",
    "Url": "",
    "Authority": "Kaggle",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Data Science for Engineers",
    "Url": "",
    "Authority": "NPTEL",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Time Management by Ankur Warikoo",
    "Url": "",
    "Authority": "WebVeda",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Java",
    "Url": "",
    "Authority": "Spoken Tutorial",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "C",
    "Url": "",
    "Authority": "Spoken Tutorial",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "C++",
    "Url": "",
    "Authority": "Spoken Tutorial",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Getting started with Robotic Process Automation",
    "Url": "",
    "Authority": "Automation Anywhere",
    "Completion": "",
    "License": ""
  },
  {
    "Name": "Introduction to AI",
    "Url": "",
    "Authority": "University of Helsinki",
    "Completion": "Jan 2023",
    "License": ""
  },
  {
    "Name": "Certificate of Participation in The Tri-NIT Hackathon",
    "Url": "https://unstop.com/certificate-preview/c7151e10-e440-40ba-b672-08e2d873446e?utm_campaign",
    "Authority": "Unstop (formerly Dare2Compete)",
    "Completion": "Apr 2023",
    "License": "c7151e10-e440-40ba-b672-08e2d873446e"
  },
  {
    "Name": "The Science of Well-Being",
    "Url": "https://www.coursera.org/account/accomplishments/certificate/FHEDSGRXK9BP",
    "Authority": "Coursera",
    "Completion": "Jul 2023",
    "License": "FHEDSGRXK9BP"
  },
  {
    "Name": "Exploring and Preparing your Data with BigQuery",
    "Url": "https://www.coursera.org/account/accomplishments/records/6D97WRJM8FBD",
    "Authority": "Google Cloud",
    "Completion": "Feb 2024",
    "License": "6D97WRJM8FBD"
  },
  {
    "Name": "Working with BigQuery",
    "Url": "https://www.coursera.org/account/accomplishments/records/V7EB97DHCUBX",
    "Authority": "Coursera Project Network",
    "Completion": "Feb 2024",
    "License": "V7EB97DHCUBX"
  },
  {
    "Name": "Creating New BigQuery Datasets and Visualizing Insights",
    "Url": "https://www.coursera.org/account/accomplishments/verify/365VDQXLZGQ7",
    "Authority": "Google Cloud ",
    "Completion": "Feb 2024",
    "License": "365VDQXLZGQ7"
  },
  {
    "Name": "Linear Algebra for Machine Learning and Data Science",
    "Url": "https://www.coursera.org/account/accomplishments/records/DQSQ5TBDAXMY",
    "Authority": "DeepLearning.AI",
    "Completion": "Feb 2024",
    "License": "DQSQ5TBDAXMY"
  },
  {
    "Name": "Terraform Fundamentals",
    "Url": "https://www.coursera.org/account/accomplishments/records/NYVDFVJQHUCY",
    "Authority": "Google Cloud",
    "Completion": "Jun 2024",
    "License": "NYVDFVJQHUCY"
  },
  {
    "Name": "Crash Course on Python",
    "Url": "https://www.coursera.org/account/accomplishments/records/FAX5ZMM8KVPG",
    "Authority": "Google",
    "Completion": "Jul 2024",
    "License": "FAX5ZMM8KVPG"
  },
  {
    "Name": "Angular for Front End Engineers",
    "Url": "https://www.coursera.org/account/accomplishments/records/6MK6YG5T7CBH",
    "Authority": "Codio",
    "Completion": "Jul 2024",
    "License": "6MK6YG5T7CBH"
  },
  {
    "Name": "Introduction to Data Visualization in Qlik Sense",
    "Url": "https://www.coursera.org/account/accomplishments/records/DB99WWWQ43JC",
    "Authority": "Coursera Instructor Network",
    "Completion": "Jul 2024",
    "License": "DB99WWWQ43JC"
  },
  {
    "Name": "Using Python to Interact with the Operating System",
    "Url": "https://www.coursera.org/account/accomplishments/records/0ASOSV69KXUK",
    "Authority": "Google",
    "Completion": "Dec 2024",
    "License": "0ASOSV69KXUK"
  },
  {
    "Name": "Introduction to Git and GitHub",
    "Url": "https://www.coursera.org/account/accomplishments/records/PA55W5IC77ZV",
    "Authority": "Google",
    "Completion": "Dec 2024",
    "License": "PA55W5IC77ZV"
  },
  {
    "Name": "Troubleshooting and Debugging Techniques",
    "Url": "https://www.coursera.org/account/accomplishments/records/95M95CBE0VTG",
    "Authority": "Google",
    "Completion": "Dec 2024",
    "License": "95M95CBE0VTG"
  },
  {
    "Name": "Google IT Automation with Python",
    "Url": "https://www.coursera.org/account/accomplishments/specialization/96ALZ26P8E2C",
    "Authority": "Google",
    "Completion": "May 2025",
    "License": "96ALZ26P8E2C"
  },
  {
    "Name": "Advanced C# Programming in .NET Core",
    "Url": "https://www.coursera.org/account/accomplishments/verify/D4FVJBNRL2X6",
    "Authority": "EDUCBA",
    "Completion": "May 2025",
    "License": "D4FVJBNRL2X6"
  }
]

}