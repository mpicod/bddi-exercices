function getUsers() {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      resolve(['Pierre', 'Paul', 'Jaques'])
    }, Math.round(Math.random() * 5000))
  })
}

function createUser(name) {
  return new Promise((resolve, reject) => {
    // We simulate an async xhr call with setTimeout
    setTimeout(() => {
      console.log(`${name} is created`)
      resolve(name)
    }, Math.round(Math.random() * 5000))
  })
}

function createUsers(users) {
  return users.map((user) => {
    return createUser(user)
  })
}

// Votre code ici (8 lignes)

const collectPromise = (res) => {
    Promise.all(res)
    .then(() => console.log('Tous le monde est là'))
}

getUsers()
.then(createUsers)
.then(collectPromise)

