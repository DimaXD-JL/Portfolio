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
      link: 'https://www.linkedin.com/in/martin-bock-8aa698139/',
    },
    {
      name: 'REFERENCES-2.NAME',
      position: 'REFERENCES-2.POSITION',
      references: 'REFERENCES-2.REFERENCES',
      link: 'https://www.linkedin.com/in/michael-spari-3541a3351/',
    },
    {
      name: 'REFERENCES-3.NAME',
      position: 'REFERENCES-3.POSITION',
      references: 'REFERENCES-3.REFERENCES',
      link: 'https://www.linkedin.com/in/cem-e-4a0b6b34b/',
    },
    {
      name: 'REFERENCES-4.NAME',
      position: 'REFERENCES-4.POSITION',
      references: 'REFERENCES-4.REFERENCES',
      link: 'https://www.linkedin.com/in/red-shiba/',
    },
  ];
  pagedReferences: any[][] = [];
  currentPage = 0;

  constructor() {
    const itemsPerPage = 3;
    for (let i = 0; i < this.references.length; i += itemsPerPage) {
      this.pagedReferences.push(this.references.slice(i, i + itemsPerPage));
    }
  }

  nextPage() {
    if (this.currentPage < this.pagedReferences.length - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
