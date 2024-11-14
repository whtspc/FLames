/**
 * Created by vissewo on 12/11/2024.
 */

import { LightningElement, api } from 'lwc';

export default class CssInjection extends LightningElement {
    @api cssCode;

    connectedCallback() {
        if (this.cssCode) {
            const styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            styleElement.innerHTML = this.cssCode;
            this.template.appendChild(styleElement);
        }
    }
}
