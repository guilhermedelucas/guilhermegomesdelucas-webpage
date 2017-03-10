import axios from 'axios';

export function unmountLogo(){
    return {
        type: "UNMOUNT_COMPONENT"
    }
}

export function mountLogo(){
    return {
        type: "MOUNT_COMPONENT"
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
