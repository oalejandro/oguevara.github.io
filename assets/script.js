// Fetch recipes.json and build the list
fetch('recipes.json')
  .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
  .then(recipes => {
    const list = document.getElementById('recipe-list');
    recipes.forEach(rec => {
      const card = document.createElement('article');

      // Optional thumbnail
      const thumb = rec.thumb
        ? `<img class="card-thumb" src="${rec.thumb}" alt="${rec.title} thumbnail">`
        : '';

      card.innerHTML = `
        ${thumb}
        <h2><a href="${rec.file}">${rec.title}</a></h2>
        <p>${rec.description}</p>
      `;
      list.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById('recipe-list').innerHTML =
      '<p>Failed to load recipes.</p>';
    console.error(err);
  });
