function init() {
  const render = () => {
    console.log('render')
    const App = document.getElementById('App')
    App.innerHTML = `
    <div class="app-container">
    <header class="header">
      <h1>Tags-List</h1>
      <button class="readonly-btn">readonly</button>
    </header>

    <input class="input" placeholder="new text (3 of more letters)" type="text" />
    <button class="add-btn" disabled>add</button>
    <div class="tags-list"></div>
    </div>
  `
  }
  render()

  let tags
  !localStorage.tags ? tags = [] : tags = JSON.parse(localStorage.getItem('tags'))

  const addBtn = document.querySelector('.add-btn')
  const addTagsInput = document.querySelector('.input')
  const tagsList = document.querySelector('.tags-list')
  const readonlyBtn = document.querySelector('.readonly-btn')

  function Tags(descriptions) {
    this.descriptions = descriptions
  }

  const createItem = (elem, ind) => {
    return `
    <div class="tag-item" id=${ind}>
    <div class="description">${elem.descriptions}</div>
    <button class="btn-del">X</button>
    </div>
    `
  }

  const createTagsList = () => {
    tagsList.innerHTML = ''
    if (tags.length > 0) {
      tags.forEach((elem, ind) => {
        tagsList.innerHTML += createItem(elem, ind)
      })
    }
  }
  createTagsList()

  const writeToLocalStorage = () => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }

  addTagsInput.addEventListener('input', () => {
    console.log('gg')
    if (addTagsInput.value.length > 3) {
      addBtn.removeAttribute('disabled')
    }
  })

  addBtn.addEventListener('click', () => {
    tags.push(new Tags(addTagsInput.value))
    writeToLocalStorage()
    createTagsList()
    addTagsInput.value = ''
    addBtn.setAttribute('disabled', 'disabled')
  })

  tagsList.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.className === 'btn-del') {
      let currentTag = e.target.closest('.tag-item').id
      tags.splice(currentTag, 1)
      writeToLocalStorage()
      createTagsList()
    }
  })

  readonlyBtn.addEventListener('click', (e) => {
    addTagsInput.toggleAttribute('disabled')
    let items = document.querySelectorAll('.tag-item')
    items.forEach((el) => {
      let currentElement = el.children
      currentElement[1].toggleAttribute('disabled')
    })
  })
}

init()