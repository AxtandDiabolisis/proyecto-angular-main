import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  menuItems = [
    {
      title: 'Dashboard',
      icon: 'home',
      route: '/',
    },
    {
      title: 'Apartamentos',
      icon: 'building',
      route: '/apartments',
    },
    {
      title: 'Residentes',
      icon: 'users',
      route: '/residents',
    },
    {
      title: 'Vehiculos',
      icon: 'car',
      route: '/vehicles',
    },
  ];
}
