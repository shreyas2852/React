import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Home = () =>{
    const items = useSelector(store => store.items);
    console.log(items);
    // if (!Array.isArray(items)) {
    //     return <div>Loading...</div>;
    // }
    return (
        <>
            <main>
                <div className="items-container">
                    {items.map(item => <HomeItem key={item.id} item={item}/>)}
                </div>
            </main>
        </>
    );
}

export default Home;