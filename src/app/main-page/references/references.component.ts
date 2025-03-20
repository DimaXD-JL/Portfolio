import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      name: 'REFERENCES-1.NAME',
      position: 'REFERENCES-1.POSITION',
      references: 'REFERENCES-1.REFERENCES',
    },
    {
      name: 'REFERENCES-2.NAME',
      position: 'REFERENCES-2.POSITION',
      references: 'REFERENCES-2.REFERENCES',
    },
    {
      name: 'REFERENCES-3.NAME',
      position: 'REFERENCES-3.POSITION',
      references: 'REFERENCES-3.REFERENCES',
    },
  ];
}
