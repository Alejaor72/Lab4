export enum Attribute {
    "name" = "name",
    "gender" = "gender",
    "house" = "house",
    "image" = "image"

}

class Card extends HTMLElement {
    name?: string;
    gender?: string;
    house?: string;
    image?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            gender: null,
            name: null,
            house: null,
            image: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="">
                <section>
                <h1>Name: ${this.name}</h1>
                <p>Role: ${this.gender}</p>
                <p>House: ${this.house}</p>
                <img src="${this.image}" alt="">
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;