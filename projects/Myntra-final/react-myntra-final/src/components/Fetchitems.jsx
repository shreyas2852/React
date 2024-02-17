import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () =>{
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();
    console.log(fetchStatus);
    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('http://localhost:8080/items',{signal})
            .then((res) => res.json())
            .then(( items ) =>{
                console.log("items",items)
                // dispatch(fetchStatusActions.toggleFetchDone());
                dispatch(itemsActions.addInitialItems(items));
        });

        return () =>{
            console.log("Done")
            controller.abort();
        };
      },[fetchStatus]);
    return (
        <>
            Fetch Done :{fetchStatus.fetchDone}
            Currently Fetching : {fetchStatus.currentlyFetching}
        </>
    );
}

export default Fetchitems;