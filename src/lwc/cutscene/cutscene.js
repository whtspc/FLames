/**
 * Created by vissewo on 20/11/2022.
 */

import { LightningElement, api } from 'lwc';
import { FlowNavigationNextEvent} from "lightning/flowSupport";

export default class Cutscene extends LightningElement {
    @api interval
    connectedCallback(){
        const navigateNextEvent = new FlowNavigationNextEvent();
        setTimeout(()=>{this.dispatchEvent(navigateNextEvent);}, this.interval);
    }

}