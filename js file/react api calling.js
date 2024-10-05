import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const url = "https://reqres.in/api/users?page=1";
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    
    try {
      const {data} = await axios.get(url);
      console.log(data.data);
      setUserData(data.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
    
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log('res',res);
        setUserData(res.data);
        setLoading(false)
      }).catch(err => {
        console.log(err)
      });
    // apiCall();
  }, []);

  return (
    <div>
       {
        loading ? 'loading...' : 
        userData.map( (item) => (
          <>
            <p>
              Email: {item.email}
              
            </p>
            <p>
            first name: {item.first_name}
             
            </p>
            <p>
            last name: {item.last_name}
            </p>
          </>
        ))
      } 


  </div>
  )
  
};
export default User;
