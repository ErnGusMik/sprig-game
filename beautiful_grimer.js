/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const ground = 'g'
const background = 'b'

setLegend(
  [ player, bitmap`
................
................
.......000......
.......0.0......
......0..0......
......0...0.0...
....0003.30.0...
....0.0...000...
....0.05550.....
......0...0.....
.....0....0.....
.....0...0......
......000.......
......0.0.......
.....00.00......
................` ],
  [ ground, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CC0CCCCCCC0CCCCC
CCCCCCCCCCCCCCCC
CCCCCCC0CCCCC0CC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
C0CCC0CCCCCCCCCC
CCCCCCCCCC0CCCC0
CCCCCCCCCCCCCCCC
CCCCCCC0CCCCCCCC
CCCCCCCCCCCCCCCC
CCC0CCCCCCC0CCCC
CCCCCCCCCCCCCCCC` ],
  [ background, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
)

setSolids([ ground, player ])

setBackground(background)

let mapLine1 = `.${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}${Math.random() > 0.85 ? `g` : `.`}`
let mapLine2 = `p${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}`

let level = 0
let levels = [
  map`
  .........
  .........
  .........
  ${mapLine1}
  p${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}${Math.random() > 0.7 ? `g` : `.`}
  ggggggggg
  .........
  `
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

setInterval(() => {
  levels[0] = map`
  .........
  .........
  .........
  .${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}${Math.floor(Math.random()) > 0.85 ? `g` : `.`}
  p${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}${Math.floor(Math.random()) > 0.7 ? `g` : `.`}
  ggggggggg
  .........
  `
}, 500)

onInput("w", () => {
  getFirst(player).y -= 1
  setTimeout(() => {
    getFirst(player).y += 1
  }, 500)
})

afterInput(() => {
  
})