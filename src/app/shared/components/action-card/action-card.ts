import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-action-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './action-card.html',
  styleUrls: ['./action-card.css'],
})
export class ActionCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() route!: string;
  @Input() icon!: string;
  @Input() variant: 'products' | 'clients' | 'sales' = 'products';
}
