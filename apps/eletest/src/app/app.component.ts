import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@Component({
  selector: 'app-root',
  template: `
    <input #input value="Message" />
    <button
      data-testid="show-as-component"
      (click)="popup.showAsComponent(input.value)"
    >
      Show as component
    </button>
    <button
      data-testid="show-as-element"
      (click)="popup.showAsElement(input.value)"
    >
      Show as element
    </button>
  `,
})
export class AppComponent {
  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
