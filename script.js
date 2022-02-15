// task-1
const topPlayers = document.querySelector('#top-players');
const topBlogs = document.querySelector('#top-blogs');

topPlayers.style.color = '#03045E';
topBlogs.style.color = '#03045E';

// task-2
const players = document.querySelectorAll('.player');
for (let player of players) {
  player.style.backgroundColor = 'rgba(202, 240, 248, 0.5)';
  player.style.marginRight = '10px';
  player.style.borderRadius = '9px';
  player.style.padding = '10px';
}

// task-3
const customList = document.querySelector('.custom-list');
customList.style.listStyle = 'point';
customList.innerHTML = `
    <li>list-1</li>
    <li>list-2</li>
    <li>list-3</li>
`;

const input = document.querySelector('#input');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = input.value;
  customList.appendChild(li);
  input.value = '';
});

// 4

const incrementBtn = document.querySelector('#increment-btn');
const incrementField = document.querySelector('#increment-field');
incrementField.value = 0;

incrementBtn.addEventListener('click', () => {
  let pre = parseInt(incrementField.value);
  if (pre < 5) {
    incrementField.value = pre + 1;
  }
});

const decrementBtn = document.querySelector('#decrement-btn');
decrementBtn.addEventListener('click', () => {
  let pre = parseInt(incrementField.value);
  if (pre > 0) {
    incrementField.value = pre - 1;
  }
});

if (parseInt(incrementField.value) === 5) {
  incrementBtn.disabled = true;
} else if (parseInt(incrementBtn.value) === 0) {
  decrementBtn.disabled = true;
} else {
  decrementBtn.disabled = false;
}

// 5
