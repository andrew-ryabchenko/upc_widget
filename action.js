import {items} from './items.js'
window.onload = (e) => {
    var current_totals = {};
    var main_container = document.getElementById('main_container');
    var grand_total = document.createElement('div');
    grand_total.id = 'grandTotal';
    grand_total.innerText = '0.00';
    generateItems();
    generateGrandTotalLine();

    function generateItems(){
        for (const item in items){
            current_totals[item] = 0.0;

            let line = document.createElement('div');
            let title = document.createElement('div');
            let quantity = document.createElement('div');
            let total = document.createElement('div');
            let quantity_input = document.createElement('input');
    
            line.className = 'line';
            title.className = 'title';
            quantity.className = 'quantity';
            total.className = 'total';
            total.innerText = '0.00';
            quantity_input.className = 'quantity_input';
            quantity_input.type = 'number';
            quantity_input.min = 0;
            quantity_input.step = 1;
            quantity_input.defaultValue = 0;
            quantity_input.name = item;
    
            title.innerText = item;
            line.appendChild(title);
    
            quantity_input.oninput = (e) => {
                let newTotal = (e.target.valueAsNumber * items[item]);
                current_totals[e.target.name] = newTotal; 
                total.innerText = newTotal.toFixed(2);
                updateGrandTotal();
            };
            quantity.appendChild(quantity_input);
            line.appendChild(quantity);
    
            line.appendChild(total);
    
            main_container.appendChild(line);
        }
        
    }

    function updateGrandTotal(){
        let total = 0.0;
        for (const item in current_totals){
            total += current_totals[item];
        }
        grand_total.innerText = total.toFixed(2);
    }

    function generateGrandTotalLine(){

        let line = document.createElement('div');
        let title = document.createElement('div');
        let quantity = document.createElement('div');
        let quantity_input = document.createElement('input');

        title.style.visibility = 'hidden';
        quantity.style.visibility = 'hidden';


        line.className = 'line';
        title.className = 'title';
        quantity.className = 'quantity';
        quantity_input.className = 'quantity_input';
        quantity_input.type = 'number';

        title.innerText = 'invisibleline'
        line.appendChild(title);

        quantity.appendChild(quantity_input);
        line.appendChild(quantity);

        line.appendChild(grand_total);

        main_container.appendChild(line);
        
    }

}

