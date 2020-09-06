import { Component, OnInit } from '@angular/core';
import {About} from '../../../model/about';
import {AboutService} from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: About;
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data => {
      this.about = data
    });
  }

}
