import RendererInterface from './RendererInterface.js';

export default class Step2Renderer extends RendererInterface {
    constructor(parentElement) {
        super(parentElement);
    }

    generateInfoPane(prevEvent, nextEvent, index) {
        if(prevEvent.location == nextEvent.location) {
            return `
                <div class="info-pane">
                    <p class="same-location-msg">Same location</p>
                </div>
            `;
        } else {
            return `
                <div class="info-pane">
                    <input type="radio" name="options-${index}" id="walk-option" value="car" />
                    <label for="walk-option">Walk</label>
                    <input type="radio" name="options-${index}" id="public-transportation-option" value="public-transportation" />
                    <label for="public-transportation-option">Public Transportation</label>
                    <input type="radio" name="options-${index}" id="car-option" value="car" />
                    <label for="car-option">Car</label>
                    <input type="radio" name="options-${index}" id="bike-option" value="car" />
                    <label for="bike-option">Bike</label>
                </div>
            `;
        }
    }

    render(events) {
        this.parentElement.innerHTML = '';

        for(let i = 0; i < events.length; i++) {
            const event = events[i];

            this.parentElement.innerHTML += `
                <div class="event-container">
                    <h3>${event.name}</h3>
                    <p>${event.startingTime} - ${event.endingTime}</p>
                    <p>${event.location}</p>
                </div>
            `;

            if(i < events.length - 1) { // is an intermediate event
                this.parentElement.innerHTML += `
                    <div class="intermediate-info">
                        <div class="bubbles-container">
                            <div class="bubble"></div>
                            <div class="bubble"></div>
                            <div class="bubble"></div>
                        </div>
                        ${this.generateInfoPane(event, events[i + 1], i)}
                    </div>
                `;
            }
        }
    }
}