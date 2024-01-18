import { MdDelete } from "react-icons/md";
function Items({items,handleDeleteItem}){
  return(
    <div>
    {items.map((item)=>(
      < div class="row">
          <div class="col-6">
            {item.name}
          </div>
          <div class="col-4">
            {item.date}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger" onClick={()=>handleDeleteItem(item)}><MdDelete /></button>
          </div>
      </div>
    ))}
    </div>
  );
}
export default Items;