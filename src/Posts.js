import CadaPost from './CadaPost';

export default function Posts() {

    const arrayPosts = [
        {   
            img:"assets/img/meowed.svg", 
            user:"meowed",
            cont:"assets/img/gato-telefone.svg",
            curt:"assets/img/respondeai.svg",
            txt1:"respondeai",
            txt2:"outras 101.523 pessoas"
        },  
        {   
            img:"assets/img/barked.svg", 
            user:"barked",
            cont:"assets/img/dog.svg",
            curt:"assets/img/adorable_animals.svg",
            txt1:"adorable_animals",
            txt2:"outras 99.159 pessoas"
        }
    ];

    return (
        <div class="posts">
            
            {arrayPosts.map( e => <CadaPost img={e.img} nome={e.user} conteudo={e.cont} 
            curtidas={e.curt} textoNome={e.txt1} textoNumero={e.txt2} /> )}

        </div>
    );
}