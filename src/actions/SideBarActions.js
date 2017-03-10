import axios from 'axios';

export function openMenu(){
    return {
        type: "OPEN_MENU"
    }
}

export function closeMenu(){
    return {
        type: "CLOSE_MENU"
    }
}

//example for asyn
// export function fetchArticle(sku){
//     var url = 'url'
//     return function(dispatch) {
//     return axios.get(url)
//         .then((response) => {
//             dispatch({type: "FETCH_ARTICLE_FULFILLED", payload: response.data})
//         })
//         .catch((err) => {
//             dispatch({type: "FETCH_ARTICLE_REJECTED"})
//         })
//     }
// }
