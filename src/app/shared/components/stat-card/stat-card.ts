import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.html',
  styleUrls: ['./stat-card.css'],
})
export class StatCardComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() label!: string;
  @Input() icon!: string;
  @Input() color: 'blue' | 'green' | 'purple' | 'orange' = 'blue';
}
