// Prérequis pour le prompteur (pas d'importance pour le cours)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// La fonction Game a terminer (ça se corse)

const WORD_LIST = ['chevre', 'vache', 'taureau', 'pierre']

class Game {
  constructor() {
    let letters = [], // letters entered by user
      lives = 5, // lives left
      word, // the current word
      missing // number of letters missing

    function init() {
      lives = 5

      word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]// TODO: récupérer un mot random depuis WORD_LIST (1 ligne)
        letters = []
        console.log(word)
      // Count without duplicated
      missing = Array.prototype.filter.call(word, (letter, i) => {
        return word.indexOf(letter) == i
      }).length
    }

    function addLetter(letter) {
      let letterTried = letters.includes(letter)
      if (letterTried === true) {
        lives--
      }else{
        letters.push(letter)
        if (word.includes(letter) === true) {
          missing--
        }else{
          lives--
        }
      }
      // TODO: cette fonction doit :nodee
      // - vérifier que la lettre n'a pas déjà été tentée auparavent
      // - si ce n'est pas le cas, l'ajouter dans le tableau `letters`
      // - modifier `lives` et `missing` en conséquence
      // - ne retourne rien
      // - (6 lignes)
    }

    function displayWord() {
      let wordDisplayed = []
      console.log(letters)
    //  Array.from(word).forEach(w => {
        // if (this.letters.indexOf(letter)) {
      //     wordDisplayed.push(w)
      //   }
      // });

      // TODO: cette fonction doit:
      // - retourner une chaine de caractère
      // - les lettres trouvées et celles manquantes remplacées par un underscore
      // - exemple : v_ch_e
      // - Utiliser une boucle for et la concaténation
      // - (9 lignes)
    }

    function prompt(cb) {
      console.log(Array(lives + 1).join('❤'))
      rl.question(displayWord() + '\r\n', cb)
    }

    function onAnswer(answer) {
      addLetter(/* TODO: appeler la fonction addLetter en envoyant la première lettre de `answer` (1 ligne) */)

      if (missing > 0 && lives > 0) {
        prompt(onAnswer)
      }
      else {
        console.log(['End of the game.', 'you', missing > 0 ? 'lose' : 'win', '!'].join(' '))
        rl.close()
      }
    }

    return {
      play() {
        init()
        console.log('Vous êtes prêts ? Devinez le mot.')
        prompt(onAnswer)
      }
    }
  }
  play() { }
}

const game = new Game()

game.play()
