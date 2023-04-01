// initial State
const initialState = [
    {
        match: 1,
        totalScore: 120
    }
];

// Action types
const INCREASE = 'INCREASE';



//reducer function

const reducer = (state = initialState, action) => {
    if (action.payload === INCREASE) {
        const neededMatch = state.find(match => match.match === action.payload.match);

        return {
            ...state,

        }
    }
    return state;
}



const store = Redux.createStore(reducer);


const render = () => {
    const state = store.getState()
    const matchesContainer = document.querySelector('.all-matches');
    console.log(state)

    state.forEach((match, index) => {
        const div = `
        <div class="match">
        <div class="wrapper">
            <button class="lws-delete">
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match ${match.match}</h3>
        </div>
        <div class="inc-dec">
            <form class="incrementForm">
                <h4>Increment</h4>
                <input type="number" name="increment" class="lws-increment" />
            </form>
            <form class="decrementForm">
                <h4>Decrement</h4>
                <input type="number" name="decrement" class="lws-decrement" />
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult">${match.totalScore}</h2>
        </div>
    </div>
        `
        matchesContainer.innerHTML += div;

    })
}

store.subscribe(render)

render();

