import axios from "axios";
import { getPrivateRoomsMultiUsersAction } from "../redux/actions/getPrivateRoomsMultiUsersAction";

//ф--------------функция для асинхронного запроса
export const getPrivateRoomsAPI  = (value) => {
    return function(dispatch) {
        const privateRooms = axios.get(`http://127.0.0.1:8000/api/privaterooms/?privateRoomMembers=${value}`);
        privateRooms.then(response => {

            //диспатчим ActionCreator

            dispatch(getPrivateRoomsMultiUsersAction(response.data)) 

        })
    }
}


