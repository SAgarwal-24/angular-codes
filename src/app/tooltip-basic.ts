import { Component } from '@angular/core';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-tooltip-basic',
  standalone: true,
  imports: [NgbDropdownModule, NgbTooltipModule],
  templateUrl: './tooltip-basic.html',
  host: { class: 'd-block' },
})
export class NgbdTooltipBasic {
  name = 'World';

  isSpecial = true;

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({ greeting });
    }
  }
}
