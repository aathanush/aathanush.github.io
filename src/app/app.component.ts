import { Component } from '@angular/core';
import { IsActiveMatchOptions, RouterOutlet } from '@angular/router';
import {TuiAppBar} from '@taiga-ui/layout';
import { TuiSegmented } from '@taiga-ui/kit';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TuiAppBar,TuiSegmented, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  protected selected = 'a';
	 
	    protected readonly options: IsActiveMatchOptions = {
	        matrixParams: 'exact',
	        queryParams: 'exact',
	        paths: 'exact',
	        fragment: 'exact',
	    };
	 
	    protected readonly routes: any = {			
			about:"",
			achievements:"achievements",
			courses:"courses",
			experience:"experience",
			publications:"publications",
			qualifications:"qualifications"
		};
}
