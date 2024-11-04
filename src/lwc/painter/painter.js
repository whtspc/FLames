/**
 * Created by vissewo on 03/11/2024.
 */

import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class Painter extends LightningElement {
    @api images = [];
    @api output;
    @api gridWidth;
    @api gridHeight;


    handleImageClick(event) {
        console.log(event.target.dataset);
        this.dispatchEvent(new FlowAttributeChangeEvent('output', event.target.dataset.id));
    }
}