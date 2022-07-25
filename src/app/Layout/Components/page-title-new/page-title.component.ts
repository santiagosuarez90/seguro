import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-page-title-new',
  templateUrl: './page-title.component.html',
})
export class PageTitleNewComponent {

  faStar = faStar;
  faPlus = faPlus;

  @Input() heading;
  @Input() subheading;
  @Input() icon;

}
