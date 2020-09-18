// поменять ссылку на нужную страницу в vkLink.setAttribute('href', 'ЗДЕСЬ');

$(document).ready(() => {
  const body = document.querySelector('body');

  const vkContainer = document.createElement('div');
  vkContainer.setAttribute('class', 'vk_container');

  const vkLink = document.createElement('a');
  vkLink.setAttribute('class', 'vk_button');
  vkLink.setAttribute('href', '');

  vkContainer.prepend(vkLink);
  body.prepend(vkContainer);
});