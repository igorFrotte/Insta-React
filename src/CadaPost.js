import React from 'react';

export default function CadaPost(props) {

    const [cor, setCor] = React.useState("black");
    const [tipo, setTipo] = React.useState("heart-outline");

    return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.img} />
                  {props.nome}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.conteudo} onDoubleClick={() => {
                  if(cor === "black"){
                    setCor("red"); setTipo("heart");
                  }else{
                    setCor("black"); setTipo("heart-outline");
                  }
                }} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon id={cor} name={tipo} onClick={() => {
                  if(cor === "black"){
                    setCor("red"); setTipo("heart");
                  }else{
                    setCor("black"); setTipo("heart-outline");
                  }
                }} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.curtidas} />
                  <div class="texto">
                    Curtido por <strong>{props.textoNome}</strong> e <strong>{props.textoNumero}</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}