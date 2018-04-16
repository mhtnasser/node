/* Projet - Le code du stagiaire 
~ Lisez le README.md pour plus d'informations ~
*/

import gameServer from './gameServer'

const seedURL = './seeds/seed1.seed'
const updateTime = 10000

gameServer.onMessage = (message) => {
    const messageData = message.data
        /* 
           Je comprends pas trop ce que je reçois ici quand 
           le serveur m'envoie des infos ?! 
           Ça ressemble à un objet JS mais je peux rien 
           faire avec... NUL
        */
    const obj = JSON.parse(messageData)
    const cels = obj.cells 
     document.getElementById('grid').innerHTML = ''
    for(var i in cels)
    {
      
      for(var j in cels[i])
      {
        if(cels[i][j].alive == true)
        {
          var p = document.createElement('p')
          p.innerHTML = '[]'
          p.style = 'color: blue; display: inline;'
          document.getElementById('grid').appendChild(p)
          //document.getElementById('grid').style = 'color: blue;'
        }else{
          //document.getElementById('grid').innerHTML += '[]'
          var p = document.createElement('p')
          p.innerHTML = '[]'
          p.style = 'color: darkslateblue; display: inline;'
          document.getElementById('grid').appendChild(p)
          document.getElementById('grid').style = 'background-color: darkgray;'
        }
      }
      document.getElementById('grid').innerHTML += '<br>'
    }
    //console.log('LA DATA', cels)



}

gameServer
    .loadSeed(seedURL)
    .then((seed) => {
        /* 
           Je reçois bien une seed ici !
        */
        gameServer.init(seed).then(() => {

        }).catch((error) => {
          console.log(error)
        }) // On m'a dit d'utiliser ça mais ça retourne RIEN
    })
    .catch((error) => {
        console.error(error)
    })

const interval = setInterval(() => {
    gameServer.next()
}, updateTime)
console.log(interval)