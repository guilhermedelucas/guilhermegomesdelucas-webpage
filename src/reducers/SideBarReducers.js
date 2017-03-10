export default function reducer(
    state={
        menuLogo: "menu-logo",
        menu: "menu-list",
        logo: "initial",
        dropdown: "menu-height"
    }, action) {
        switch (action.type) {
            case "OPEN_MENU": {
                return {
                    ...state,
                    menuLogo: "menu-logo open",
                    menu: "menu-list open",
                    dropdown: "menu-height open"
                }
            }
            case "CLOSE_MENU": {
                return {
                    ...state,
                    dropdown: "menu-height",
                    menuLogo: "menu-logo",
                    menu: "menu-list"
                }
            }
        }
    return state
}
