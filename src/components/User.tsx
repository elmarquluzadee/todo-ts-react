import {User} from "../Types/type"

const Users: React.FC<User> = ({name,password}) => {

    return (
    <>
    <div>Hello ,{name}</div>
    <div>Password ,{password}</div>
    </>
    );
  }
  
  export default Users;