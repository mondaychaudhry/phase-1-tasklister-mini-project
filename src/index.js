const x = document.getElementById('new-task-description')
const y = document.getElementById("new-task-description").nextElementSibling
const z = document.getElementById('create-task-form')

z.addEventListener('submit', e => {
  e.preventDefault()
  handleList(e.target['task'].value)
  z.reset ()
})

function handleList (a) {
  let b = document.createElement('p')
  let c = document.createElement('button')
  c.addEventListener('click', xDelete)
  c.textContent = 'x'
  b.textContent = a
  b.appendChild (c)
  console.log(b)
  document.querySelector('#tasks').appendChild (b)
}

function xDelete(d){
  d.target.parentNode.remove()
}
 

