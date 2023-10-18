import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import { enviromentsComponent } from './src/concepts/01-enviroments'
import { callbacksComponente } from './src/concepts/02-callbacks'
import { callbacksComponent02 } from './src/concepts/02-01-callbacks'
import { promisesComponent } from './src/concepts/03-promises'
import { promisesRaceComponent } from './src/concepts/04-promises-race'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponent } from './src/concepts/05-async-await'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generatorFunctionsComponent } from './src/concepts/09-function-generator'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    


    </div>
    <p class="read-the-docs">
    
    </p>
  </div>
`

const element = document.querySelector('.card')

// enviromentsComponent( element );
// callbacksComponente( element )
// callbacksComponent02( element )
// promisesComponent( element )
// promisesRaceComponent( element )
// asyncComponent( element )
// asyncAwaitComponent( element )
// forAwaitComponent( element )
generatorFunctionsComponent( element )

