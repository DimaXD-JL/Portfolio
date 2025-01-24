import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  references = [
    {
      name: 'S.Michael',
      position: 'Team Partner',
      references:
        'Michael really kept the team together with his great organization and clear communication. We wouldnt have got this far without his commitment',
    },
    {
      name: 'E.Eichinger',
      position: 'Team Partner',
      references:
        'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
    },
    {
      name: 'I.Nuber',
      position: 'Team Partner',
      references:
        'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
    },
  ];
}
