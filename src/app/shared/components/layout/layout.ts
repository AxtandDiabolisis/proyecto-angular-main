import { Component } from '@angular/core';

import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Navbar, Sidebar, RouterModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {

}
