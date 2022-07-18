import Usuario from './Usuario';
import CadaSugestao from './CadaSugestao';

export default function SideBard() {

    const arraySugestao = [
      {img:"assets/img/bad.vibes.memes.svg", user:"bad.vibes.memes", raz:"Segue você"},
      {img:"assets/img/chibirdart.svg", user:"chibirdart", raz:"Segue você"},
      {img:"assets/img/razoesparaacreditar.svg", user:"razoesparaacreditar", raz:"Novo no Instagram"},
      {img:"assets/img/adorable_animals.svg", user:"adorable_animals", raz:"Segue você"},
      {img:"assets/img/smallcutecats.svg", user:"smallcutecats", raz:"Segue você"}
    ];

    return (
        <div class="sidebar">
          
          <Usuario img="assets/img/catanacomics.svg" nome="catanacomics" nick="Catana" />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {arraySugestao.map( e => <CadaSugestao img={e.img} nome={e.user} razao={e.raz} /> )}

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}

