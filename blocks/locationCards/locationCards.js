import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */

  console.log('PRINING INSIDE DECORATE() ==== locationCards.JS');
  console.log('printing block for locationCards', block);

  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'locationCards-card-image';
      else div.className = 'locationCards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
