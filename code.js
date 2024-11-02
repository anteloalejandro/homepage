const wrapper = document.querySelector('.wrapper');
/** @type HTMLElement[] */
const actionables = [...document.querySelectorAll('[data-action-key]')];

/** @typedef
 *  @prop {HTMLElement} parent
 *  @prop {HTMLElement[]} actionables
 */
const actionGroups =
  [...document.querySelectorAll('[data-action-group]')]
    .map(el => {
      return {
        parent: el,
        actionables: [...el.querySelectorAll('[data-action-group-key]')]
      }
    })

/** @type string*/
groupKeyPressed = null;

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('keydown', ev => {
    ev.stopPropagation();
  })
})
document.addEventListener('keydown', ev => {
  let aux;
  if (groupKeyPressed) {
    const group = actionGroups.find(el => el.parent.dataset.actionGroup == groupKeyPressed);
    group.parent.classList.remove('show-actions');
    wrapper.classList.remove('hide-non-group-actions');
    const element = group.actionables.find(el => el.dataset.actionGroupKey == ev.key);
    if (element) {
      ev.preventDefault();
      element.focus();
      element.click();
      // console.log(`group action ${ev.key}`);
    }
    groupKeyPressed = null;
  } else if (aux = actionGroups.find(el => el.parent.dataset.actionGroup == ev.key)) {
    aux.parent.classList.add('show-actions')
    wrapper.classList.add('hide-non-group-actions');
    groupKeyPressed = ev.key;
    // console.log(`group ${ev.key}. waiting for group action`);
  } else {
    groupKeyPressed = null;
    const element = actionables.find(el => el.dataset.actionKey == ev.key);
    if (element) {
      ev.preventDefault();
      element.focus();
      element.click();
      // console.log(`action ${ev.key}`);
    }
  }
});
