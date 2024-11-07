import { Component, inject, OnInit } from '@angular/core';
import { Data1Service } from '../../services/data1.service';
import { CheckboxData } from '../../CheckboxData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css']  // Fixed plural to styleUrls
})
export class CustomCheckboxComponent implements OnInit {
  dataService = inject(Data1Service);
  checkboxData: CheckboxData[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.dataService.getCheckboxData().subscribe({
      next: (data) => {
        this.checkboxData = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching checkbox data:', error);
        this.loading = false;
      }
    });
  }
}
