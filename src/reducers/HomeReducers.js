export default function reducer(
    state={
        logoStatus: null
    }, action) {
        switch (action.type) {
            case "UNMOUNT_COMPONENT": {
                return {
                    logoStatus: false
                }
            }
            case "MOUNT_COMPONENT": {
                return {
                    logoStatus: true
                }
            }
        }
    return state
}
