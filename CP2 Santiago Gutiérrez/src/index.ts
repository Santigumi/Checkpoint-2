import Catsimages, { AttributeCats } from "./components/export";
import getDescription from "./services/dataFecthFacts";

class AppContainer extends HTMLElement {
    container: Catsimages[] = []

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        try {
        const data = await getDescription();
        console.log(data)
        this.render(data)
        } catch {
        console.log("error")
        }
    }

    render(data: string) {
    if(this.shadowRoot){
    this.shadowRoot.innerHTML = ` `
    const facts = document.createElement('my-catsfacts') as Catsimages;
    facts.setAttribute(AttributeCats.facts, data)
    this.shadowRoot?.appendChild(facts)
    }
    }
    }


customElements.define('app-container', AppContainer)