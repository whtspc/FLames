/**
 * Created by vissewo on 29/10/2024.
 */

import { LightningElement, api, track } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class Counter extends LightningElement {
    @api output = 0; // Output variable that toggles between 0 and 1

    connectedCallback() {
        // Start the interval to flip the output every second
        this.timer = setInterval(() => {
            this.output = this.output + 1;
            // Force reactivity in Flow by notifying change
            this.notifyOutputChange();
        }, 1000);
    }

    disconnectedCallback() {
        // Clear the interval when the component is removed from the DOM
        clearInterval(this.timer);
    }

    notifyOutputChange() {
        // Dispatch a change event to notify Flow about the updated output
        const outputChangeEvent = new FlowAttributeChangeEvent('output', this.output);

        this.dispatchEvent(outputChangeEvent);
    }}