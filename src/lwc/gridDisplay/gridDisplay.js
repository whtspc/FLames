/**
 * Created by vissewo on 31/10/2024.
 */

import { LightningElement, api } from 'lwc';

export default class GridDisplay extends LightningElement {
    @api width = 3; // default number of columns
    @api height = 3; // default number of rows
    @api textTemplates = []; // collection of rich text templates

    get uniqueItems() {
       // Return items as an array of objects with unique keys
       return this.textTemplates?.map((item, index) => ({ id: `item-${index}`, value: item })) || [];
    }

    renderedCallback() {
        this.renderTemplates();
    }

    get gridStyle() {
        // Dynamically create the grid layout based on width (columns) and height (rows)
        return `grid-template-columns: repeat(${this.width}, 50px); grid-template-rows: repeat(${this.height}, 50px);
    justify-content: center;`;
    }

    renderTemplates() {
        // Fill each cell with rich text from the templates array
        const cells = this.template.querySelectorAll('.grid-item');
        cells.forEach((cell, index) => {
            if (index < this.textTemplates.length) {
                cell.innerHTML = this.textTemplates[index]; // Inject rich text template into the cell
            } else {
                cell.innerHTML = ''; // Clear cell if no template is available
            }
        });
    }
}

