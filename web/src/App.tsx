import React from 'react';
// Importando os arquivos css
import './styles/global.css';
import Routes from './/routes';







// interface TitleProps{
//     text:string;
// }

// function Title(props:TitleProps){//primeira letra tem que ser maiuscula
//     return(
//         <h1>{props.text}</h1>
//     )
// }


// function App(){
//     return(
//         <div id="page-landing">
//            <Title text="Hello Leonardo NLW"/>
//         </div>
//     );
// }


function App(){
    return(
    <Routes/>
    );
}

export default App;