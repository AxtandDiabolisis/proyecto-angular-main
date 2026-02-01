
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card';
import { ActionCardComponent } from '../../../../shared/components/action-card/action-card';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule, StatCardComponent, ActionCardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {}
