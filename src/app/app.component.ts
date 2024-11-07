import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { CustomCheckboxComponent } from "./components/custom-checkbox/custom-checkbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backend';
}
