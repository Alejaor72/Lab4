import "./components/export";
import {traer_api} from "./components/dataCard"
import Card, { Attribute } from "./components/Card/Card"

class AppContainer extends HTMLElement {
    StarWarsList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const datastar = await traer_api();
        console.log("datastar",datastar)
        datastar.forEach((data: any) => {
            console.log("asdf",data);
        });

        datastar.forEach((data: any) => {
            const starCard = this.ownerDocument.createElement("my-card") as Card;
              starCard.setAttribute(Attribute.gender, data.gender);
              starCard.setAttribute(Attribute.name, data.name);
              starCard.setAttribute(Attribute.house, data.house);
              starCard.setAttribute(Attribute.image, data.image);
                this.StarWarsList.push(starCard);
        });
        this.render(this.StarWarsList);
    }

    render(StarWarsList:any) {
        const starCards = this.ownerDocument.createElement("section")
        starCards.className = "StarSection"
        this.StarWarsList.forEach((starCard) => {
            starCards.appendChild(starCard)
        });
        this.shadowRoot?.appendChild(starCards);
    }
}

customElements.define("app-container", AppContainer);