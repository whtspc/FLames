/**
 * Created by vissewo on 11/11/2022.
 */

import { LightningElement } from 'lwc';
import { loadStyle } from "lightning/platformResourceLoader";
import customStyle from '@salesforce/resourceUrl/wrapper';

export default class christmasWrapper extends LightningElement {

    renderedCallback(){
        Promise.all([
            loadStyle(this, customStyle)
        ])
    }

    handleStatusChange(event) {
            console.log('handleStatusChange', event.detail);
        }
}