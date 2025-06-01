import { Component } from '@angular/core';
import { TuiRoot } from "@taiga-ui/core";
import { RouterOutlet } from '@angular/router';
import {TuiIcon} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
  selector: 'app-about',
  imports: [TuiHeader, TuiTitle,TuiIcon,TuiAvatar,TuiAppearance,TuiTitle, TuiLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
