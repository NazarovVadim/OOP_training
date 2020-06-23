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
            `;
        elem.textContent = 'P';
        document.body.append(elem);
    }
};

const newElem = new DomElement('.wrapper', '250px', '1000px', '#FF00FF', '44px');
newElem.createElem();