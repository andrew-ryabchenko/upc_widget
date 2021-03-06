# Universal Price Calculator Widget

![This is image of the widget](https://i.ibb.co/fX6bgb3/Calc-image.png)

Lightweight and customizable calculator widget. Written in plain JavaScript and does not depend on any third party libraries. 

Follow a simple steps to integrate onto any website including those that run on Wordpress.

### Adding to an existing page
1. Clone repository into directory of your server.
2. Include scripts and stylesheet on the page as <br>
`<script src="/pathToFileOnYourSystem/items.js" type="module"></script>` <br>
`<script src="/pathToFileOnYourSystem/action.js" type="module"></script>` <br>
`<link rel="stylesheet" href="/pathToFileOnYourSystem/calculator_style.css">` <br>
3. Add html element that will serve as widget container<br>
`<div class="main" id="main_container"></div>`

At this point the widget should appear on your page. 

### Customizing items 

`items.js` defines special data structure ` var items` that contains calculator fields in form of {"Item name": unit price}. <br> 
Follow the syntax of the existing code to add your own custom items. 


### Customizing appearance 
`calculator_style.css` defines style rules for the widget. The background is customizeable through the set of rules for `#main_container`. <br>
Lines <br>
`background: rgb(255,255,255);`<br>
`background: linear-gradient(143deg, rgba(255,255,255,1) 0%, rgba(211,255,239,1) 20%, rgba(109, 231, 255, 0.684) 100%); ` <br> 
are used to set gradient color to achieve sophisticated background coloring. The great tool to generate gradients is https://cssgradient.io/. <br>
Simply replace default rules with your custom gradient. 
