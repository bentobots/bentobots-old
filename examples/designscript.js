// import { Graph, Bot } from '../lib'
var BentoBots = require("../lib")

var graph = new BentoBots.Graph({name: 'Designscript example'})

const codeBlock = { implementation: () => ({ A: 0, B: 20, C: 4 }) }

const range = {
  implementation: ({ START, END, STEP }) => {
    let SEQ = []
    for(var i = START; i <= END; i+= STEP) {
      SEQ.push(i)
    }
    return { SEQ }
  }
}

const prettyPrint = { implementation: ({ IN }) => console.log(IN) }

const pointByCoords = {
  implementation: ({ X, Y, Z }) => {
    let POINT = []
    const a = val => Array.isArray(val) ? val : [val]

    // should be returned as 2D array http://i.imgur.com/5KfmIJU.png
    a(X).forEach(_X => {
      a(Y).forEach(_Y => {
        a(Z).forEach(_Z => {
          POINT.push({ X: _X, Y: _Y, Z: _Z })
        })
      })
    })
    return { POINT }
  }
}

const bots = [
  new BentoBots.Bot('CodeBlock', codeBlock),
  new BentoBots.Bot('Range', range, { START: 'CodeBlock>A', END: 'CodeBlock>B', STEP: 'CodeBlock>C' }),
  new BentoBots.Bot('Print1', prettyPrint, { IN: 'Range>SEQ' }),
  new BentoBots.Bot('Point', pointByCoords, { X: 'Range>SEQ', Y: 'Range>SEQ', Z: 0 }),
  new BentoBots.Bot('Print2', prettyPrint, { IN: 'Point>POINT' })
]

bots.map(b => graph.addBot(b))

graph.run()
