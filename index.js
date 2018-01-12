'use strict'

const FauxMo = require('fauxmojs')
const Xbox = require('xbox-on')

const Server_ip = 'xxx.xxx.xxx.xxx'
const Xbox_ip = 'xxx.xxx.xxx.xxx'
const Xbox_live_id = 'FD00xxxxxxxxxxxx'

let fauxMo = new FauxMo(
  {
    ipAddress: Server_ip,
    devices: [
      {
        name: 'xbox',
        port: 11000,
        handler: (action) => {
          console.log('xbox action:', action)
          var xbox = new Xbox(Xbox_ip, Xbox_live_id)

            // Optional, defaults shown
          var options = {
            tries: 5,
            delay: 1000,
            waitForCallback: false
          }

          xbox.powerOn(options)
        }
      }
    ]
  })

console.log('Xbox FauxMo server started...')
