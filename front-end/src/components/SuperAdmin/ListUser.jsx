import axios from "axios";
import { useEffect, useState } from "react";


const ListUser = () => {

    const [userData, setUserData] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3001/getUsers").then((response) => {
        setUserData(response.data);
      });
    }, []);


  return (
    <div></div>
  );
};

export default ListUser;
