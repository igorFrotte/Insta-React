export default function CadaStories(props) {
    return (
        <div class="story">
              <div class="imagem">
                <img src={props.img} />
              </div>
              <div class="usuario">
                {props.nome}
              </div>
        </div>
    );
}