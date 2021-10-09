import { useRouter } from "next/router"
import Link from "next/link"
import axios from 'axios';
import MainContainer from "../../components/MainContainer"
export default function({user}){
    const {query} = useRouter()
    console.log(user);
    return(
        <MainContainer keywords={user.name}>          
            Пользователь : {query.id} <br /> {user.name} <br /> {user.username} <br /> {user.email}   
            <br />   
            <Link href="/users"><a>Назад</a></Link>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = response.data
    return {
      props: {user}, 
    }
}