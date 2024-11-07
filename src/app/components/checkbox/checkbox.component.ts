import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CheckboxData } from '../../CheckboxData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Include FormsModule here
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  dataService = inject(DataService); // Inject the service
  changeDetector = inject(ChangeDetectorRef); // Inject ChangeDetectorRef
  checkboxData: CheckboxData[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    this.dataService.getCheckboxData().subscribe(data => {
      this.checkboxData = data;
      this.loading = false; // Set loading to false when data is loaded
    });
  }
}
