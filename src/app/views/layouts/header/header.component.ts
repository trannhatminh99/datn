import {Component, Input, OnInit} from '@angular/core';
import {HeaderService} from './header.service';
import {Injectable} from '@angular/core';
import {Categories} from '../../../model/categories';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus: Categories[];
  constructor(private menuService: HeaderService) {
  }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(data => this.menus = data['data']);
    // this.menuService.getMenus().toPromise().then();
  }

}
