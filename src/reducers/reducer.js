const initState = {
    SearchRes: [],
    SearchVal: '',
    Loading: false
}

export const reducer = (state=initState, action) => {
    switch (action.type){
        case 'SET_SEARCHRES':
            state = { ...state, SearchRes: action.payload }
            // console.log('Res ', action.payload)
            break;
        case 'SET_SEARCHVAL':
            state = { ...state, SearchVal: action.payload }
            // console.log('Val ', action.payload)
            break;
        case 'SET_LOADING':
            state = { ...state, Loading: action.payload }
            break;
    }

    return state
}
