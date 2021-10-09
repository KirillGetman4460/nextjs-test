import Link from "next/link"
const MainContainer = ({children}) => {
    return (
        <div>
            <div>
            <Link href="/">
                <a>Главная</a>        
            </Link>
            <Link href="/users">
                <a>Пользователи</a>           
            </Link>
        </div>
            {children}
            
        </div>
    )
}
export default MainContainer;