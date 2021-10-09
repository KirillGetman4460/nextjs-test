import axios from 'axios';
import Link from "next/link"
import MainContainer from "../components/MainContainer"
const Users = ({users}) =>{
    return (
        <MainContainer keywords={'users page'}>
             <div className="users">
            {users.map(user =>
               
                <div>
                     <Link href={`/users/${user.id}`}>
                        <a>
                        {user.name}
                        </a>
                     </Link>
                    
                </div>
            )}
        </div>
        </MainContainer>
       
    )
}
export default Users;

export async function getStaticProps(context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = response.data
    return {
      props: {users}, 
    }
}