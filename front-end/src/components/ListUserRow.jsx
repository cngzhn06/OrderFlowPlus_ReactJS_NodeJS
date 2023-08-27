import React from "react";
import UserModal from "./UserModal";

const ListUserRow = ({ user }) => {

    const roleText =(role) => {
        if(role === 0){
            return "Personel"
        } else if (role === 1){
            return "Dağıtım İşçisi"
        } else if (role === 2 ){
            return "Yönetici"
        }
    }
    
    return(
        <tr>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.floor}</td>
            <td>{user.username}</td>
            <td>{roleText(user.role)}</td>
            <td><UserModal user={user}/></td>
        </tr>
    )
}

export default ListUserRow;