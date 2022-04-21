const ulEl = document.querySelector('ul')
for (let i =0; i<10; i +=1 ){
  const liEl = document.createElement('li')
  liEl.textContent = i
  ulEl.appendChild(liEl)
}