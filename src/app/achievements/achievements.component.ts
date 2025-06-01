import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAccordion, TuiConnected, TuiTile, TuiTiles } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-achievements',
  imports: [TuiTiles,TuiTitle, TuiHeader,NgForOf, FormsModule, TuiConnected, TuiAccordion],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
   readonly achievements = [
  {
    "year": 2021,
    "title": "Elite",
    "event": "Data Science for Engineers NPTEL Exam",
    "details": "Obtained elite grade in the NPTEL exam - Data Science for Engineers and declared as winner for the problem statement"
  },
  {
    "year": 2022,
    "title": "Published and Presented Conference Paper",
    "event": "ICMSE’22",
    "details": "More details available on the publications section"
  },
  {
    "year": 2022,
    "title": "Winner",
    "event": "Smart India Hackathon (SIH)",
    "details": "Developed a Garbage Classification System using Convolutional Neural Networks (CNN)"
  },
  {
    "year": 2022,
    "title": "Winner",
    "event": "BAICONF’22 Datathon",
    "details": "Organized by IIM‑B and ASI"
  },
  {
    "year": 2023,
    "title": "Among Top 6",
    "event": "DePondFi’23 Challenge",
    "details": "Held as part of NCVPRIPG 2023 (National Conference on Computer Vision, Pattern Recognition, Image Processing and Graphics)"
  },
  {
    "year": 2024,
    "title": "Consolation Prize",
    "event": "FAER Scholar Awards",
    "details": "For the academic year 2024–25. Developed a dynamic vehicle routing system using Deep Reinforcement Learning"
  }
]

}
