/**
 * Created by vissewo on 02/11/2024.
 */

import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';
import { Flow } from 'lightning/flowSupport';

export default class AutoSub extends LightningElement {
        @api input;
        @api output;

        get inputVariables() {
            return [
                               {
                                   name: 'input',
                                   type: 'String',
                                   value: 'Ja'
                               }
                           ];
        }

        handleStatusChange(event) {
                if (event.detail.status === "FINISHED_SCREEN") {
                    this.dispatchEvent(new FlowAttributeChangeEvent('output', event.detail.outputVariables[0].value));
                }
            }
}