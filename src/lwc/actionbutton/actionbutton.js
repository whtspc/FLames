/**
 * Created by vissewo on 02/12/2022.
 */

import { api, LightningElement } from 'lwc';
import { FlowNavigationNextEvent} from "lightning/flowSupport";

export default class Actionbutton extends LightningElement {
    @api flowLabel;
    @api flowValue;
    @api lwcValue;

    handleClick(){
        this.lwcValue = this.flowValue;
        const navigateNextEvent = new FlowNavigationNextEvent();
        this.dispatchEvent(navigateNextEvent);
    }
}