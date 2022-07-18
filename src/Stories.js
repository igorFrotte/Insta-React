import CadaStories from './CadaStories';

export default function Stories() {

    const arrayStories = [
        {img:"assets/img/9gag.svg", user:"9gag"},
        {img:"assets/img/meowed.svg", user:"meowed"},
        {img:"assets/img/barked.svg", user:"barked"},
        {img:"assets/img/nathanwpylestrangeplanet.svg", user:" nathanwpylestrangeplanet"},
        {img:"assets/img/wawawicomics.svg", user:"wawawicomics"},
        {img:"assets/img/respondeai.svg", user:"respondeai"},
        {img:"assets/img/filomoderna.svg", user:"filomoderna"},
        {img:"assets/img/memeriagourmet.svg", user:"memeriagourmet"}
    ];

    return (
        <div class="stories">

            {arrayStories.map( e => <CadaStories img={e.img} nome={e.user} /> )}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}


