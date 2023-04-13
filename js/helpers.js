const createElement = (tag, className) => {
      const el = document.createElement(tag);
      el.classList.add(className);
      return el;
};

const createList = (items, className) => {
      const ul = createElement('ul', className);
      items.forEach((item) => {
            const li = createElement('li', `${className}-item`);
            li.innerText = item;
            ul.appendChild(li);
      });

      return ul;
};

const createButton = (className, id, text) => {
      const btn = createElement('button', className);
      btn.classList = 'btn see-project';
      btn.id = id;
      btn.innerText = text;
      return btn;
};