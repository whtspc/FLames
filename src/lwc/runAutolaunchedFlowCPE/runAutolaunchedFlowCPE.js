/**
 * Created by vissewo on 01/11/2024.
 */

import { LightningElement, api } from 'lwc';

export default class MyFlowComponentPropertyEditor extends LightningElement {
    _inputVariables = [];

    @api
    get inputVariables() {
        return this._inputVariables;
    }

    set inputVariables(value) {
        this.inputValue = value ? value.find(v => v.name === 'myInputVar')?.value : '';
    }
//    @api outputVariables;
//    @api validate() {
//        return []; // Optionally implement validation if needed
//    }
//    @api isAutoOutputVariables() {
//        return false;
//    }

    inputValue;

    handleInputChange(event) {
        this.inputValue = event.target.value;
        this.dispatchEvent(new CustomEvent('configuration_editor_input_value_changed', {
            detail: {
                name: 'myInputVar',
                newValue: this.inputValue
            }
        }));
    }
}
