import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckboxData } from '../CheckboxData';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private checkboxData: CheckboxData[] = [
    { id: 1, label: 'Option 1', checked: false },
    { id: 2, label: 'Option 2', checked: false },
    { id: 3, label: 'Option 3', checked: false },
    { id: 4, label: 'Option 4', checked: false },
  ];

  constructor() {}

  getCheckboxData(): Observable<CheckboxData[]> {
    return of(this.checkboxData);
  }

  updateCheckboxState(id: number, checked: boolean): Observable<CheckboxData[]> {
    const checkbox = this.checkboxData.find(c => c.id === id);
    if (checkbox) {
      checkbox.checked = checked;  // Update the checkbox state
    }
    return of(this.checkboxData);  // Return the updated data array
  }
}
