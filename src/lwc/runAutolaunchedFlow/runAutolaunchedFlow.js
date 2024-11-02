/**
 * Created by vissewo on 01/11/2024.
 */

import { LightningElement, api, wire } from 'lwc';
import { FlowAttributeChangeEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';
import { Flow } from 'lightning/flowSupport';

export default class RunAutolaunchflow extends LightningElement {
    @api flowName = ''; // Name of the autolaunched flow to run
    @api input; // Input variables for the flow
    @api output; // Name of the output variable from the flow

    get inputVariables() {
        return [
                           {
                               name: 'input',
                               type: 'String',
                               value: this.input
                           }
                       ];
    }

    handleButtonClick() {
        // Run the autolaunched flow
        this.flowName = 'doubler';
    }

    handleStatusChange(event) {
        // Handle the output from the flow
        this.flowName = '';
        if (event.detail.status === "FINISHED_SCREEN") {
            console.log(event.detail.outputVariables);
            this.dispatchEvent(new FlowAttributeChangeEvent('output', event.detail.outputVariables[0].value));
        }
    }
}
