import getImagescats from "../services/dataFecthCats"

export enum AttributeCats {
    'facts' = 'facts',
    'img' = 'img'
}

class Catsimages extends HTMLElement{
    index = 0
    facts?: string
    img?: string

    constructor(){
    super()
    this.attachShadow({mode: 'open'})
    this.onButtonClicked = this.onButtonClicked.bind(this)
    }

    static get observedAttributes(){
    const attrs: Record<AttributeCats, null> = {
    facts: null,
    img: null
    }
    return Object.keys(attrs)
    }

    attributeChangedCallback(propName: AttributeCats, oldValue: string | undefined, newValue: string | undefined){
    this[propName] = newValue
    this.mount()
    }

    connectedCallback(){
    this.mount()
    }

    render(){
    if(this.shadowRoot){
    this.shadowRoot.innerHTML = `
    <h1>Cats Facts</h1>
    <p>${this.facts} </p>
    <button class="btn-cats">Mostrar gatos</button>
    ` 
    }}

    addListeners(){
    this.shadowRoot?.querySelector('.btn-cats')?.addEventListener('click', this.onButtonClicked)
    }

    mount(){
    this.render()
    this.addListeners()
    }

    async onButtonClicked(){
    try {
        const getImages = await getImagescats();
        console.log(getImages)
        const image = document.createElement('img')
        image.setAttribute('src', 'https://cataas.com/cat/says/hola')
        this.shadowRoot?.appendChild(image)
        this.index ++
    } catch {
    console.log("error")
    }
    }



}

customElements.define('my-catsfacts', Catsimages)
export default Catsimages
