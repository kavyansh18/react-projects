import React from 'react'
import ReactDOM from 'react-dom/client'


const device='windows' 

const reactElement= React.createElement('a',
{href: "https://www.google.com", target: '_blank'},
'Visit google',
device
)


ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    //App() also works
    reactElement

)
