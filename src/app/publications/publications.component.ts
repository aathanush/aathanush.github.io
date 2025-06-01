import { Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { CommonModule, NgForOf } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { FormsModule } from '@angular/forms';
import { TuiLink } from '@taiga-ui/core';
@Component({
  selector: 'app-publications',
  imports: [TuiLink, TuiTitle, TuiHeader, CommonModule, FormsModule,
	        NgForOf],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
  readonly conferences = [{
    author : "Thanush A A, Chitra P, Kasinath J, and Surya Prakash R" ,
   title:    "Atmospheric Corrosion rate prediction of low-alloy steel using Machine Learning models",
   booktitle : "International Conference for Materials Science and Engineering (ICMSE'22)",
   year:      "2022",
   month :    "August",
   publisher : "IOPScience",
   doi :      "10.1088/1757-899X/1248/1/012050",
   url :     "https://iopscience.iop.org/article/10.1088/1757-899X/1248/1/012050"
  }]
  readonly journals = []
}
