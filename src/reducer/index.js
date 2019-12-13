const reducer = (state = {}, action) => {
    switch (action.type) {
        
        
      case 'LOGIN':
          console.log(" get new called");
          
           return { ...state, loading: true };
      case 'NEWS_RECEIVED':
           return { ...state, news: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;