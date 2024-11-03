/**
 * Created by vissewo on 02/11/2024.
 */

import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';
import { Flow } from 'lightning/flowSupport';

export default class FireForget extends LightningElement {
    @api output;

    connectedCallback() {
        this.dispatchZero();
    }

    handleButtonClick(event) {
        if (this.output = 1){
            this.dispatchZero();
            setTimeout(()=>{this.dispatchOne();}, 10);
        } else {
            this.dispatchOne();
        }

    }

    dispatchZero(){
        console.log(this.output);
        this.dispatchEvent(new FlowAttributeChangeEvent('output', 0));
    }

    dispatchOne(){
        console.log(this.output);
        this.dispatchEvent(new FlowAttributeChangeEvent('output', 1));
    }

}