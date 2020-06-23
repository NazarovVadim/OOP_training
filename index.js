'use strict';

const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createElem = function(){
    let elem;
    if(this.selector.startsWith('.')){
        elem = document.createElement('div');
        elem.classList.add(`${this.selector.substring(1, this.selector.length-1)}`);
        elem.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            position: absolute;
            `;
        elem.textContent = 'DIV';
        document.body.append(elem);
    } else if (this.selector.startsWith('#')){
        elem = document.createElement('p');
        elem.id = this.selector.substring(1, this.selector.length-1);
        elem.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            position: absolute;
            `;
        elem.textContent = 'P';
        document.body.append(elem);
    }
};

const newElem = new DomElement('.rect', '100px', '100px', '#FF00FF', '44px');

document.addEventListener('DOMContentLoaded', newElem.createElem());
const elem = document.querySelector('div');
console.log(elem);

let x = 0, y = 0;

document.addEventListener('keydown', event => {
    switch (event.key){
        case 'ArrowRight':
            x += 10;
            elem.style.left = `${x}px`;
        break;
        case 'ArrowLeft': 
            x -= 10;
            elem.style.left = `${x}px`;
        break;
        case 'ArrowUp': 
            y -= 10;
            elem.style.top = `${y}px`;
        break;
        case 'ArrowDown': 
            y += 10;
            elem.style.top = `${y}px`;
        break;
    }
});