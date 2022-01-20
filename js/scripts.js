const resultCalc = document.querySelector('.result-calc');
const cssLink = document.querySelector('#css-link');
const toggles = document.querySelectorAll('.toggle-button');
const toggleActive = document.querySelector('.toggle-button.active');
const keys = document.querySelectorAll('.key-calc');
const reset = document.querySelector('.reset');
const del = document.querySelector('.del');
const equal = document.querySelector('.equal');

if (sessionStorage.getItem('prefers-color-scheme') !== null) {
  const theme = sessionStorage.getItem('prefers-color-scheme');
  cssLink.href = 'css/colors-' + theme + '.css';
  document.querySelector('.active').classList.remove('active');
  document
    .querySelector('[data-theme="' + theme + '"]')
    .classList.add('active');
}

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', function () {
    toggleActive.classList.remove('active');
    let clickedTheme = toggles[i].dataset.theme;
    cssLink.href = 'css/colors-' + clickedTheme + '.css';
    sessionStorage.setItem('prefers-color-scheme', clickedTheme);
    toggles[i].classList.add('active');
  });
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function () {
    resultCalc.innerHTML = resultCalc.innerHTML + keys[i].innerHTML;
  });
}

reset.addEventListener('click', function () {
  resultCalc.innerHTML = '';
});

del.addEventListener('click', function () {
  let lengthMinusOne = resultCalc.innerHTML.length - 1;
  resultCalc.innerHTML = resultCalc.innerHTML.slice(0, lengthMinusOne);
});

equal.addEventListener('click', function () {
  resultCalc.innerHTML = resultCalc.innerHTML.replace('x', '*');
  let commas = (resultCalc.innerHTML = eval(resultCalc.innerHTML));

  function numberWithCommas(x) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join(',');
  }
  resultCalc.innerHTML = numberWithCommas(commas);
});
