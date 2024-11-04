/**
 * Created by vissewo on 04/11/2024.
 */

import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class ZeroSetter extends LightningElement {
    connectedCallback() {
        this.dispatchEvent(new FlowAttributeChangeEvent('outputValue', 0));
    }

    @api
    get outputValue() {
        return 0;
    }
}