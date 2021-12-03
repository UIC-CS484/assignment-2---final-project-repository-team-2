import { Modal, StateController } from "../../../../../js/export";
import { Item as ItemModel } from "../../Models/Item";
import UIController from "../../UI/UIController";

const Item = {
    sellItemHandler,
    buyItemHandler
}

async function buyItemHandler(e) {
    const record_id = $(e.target).data("record_id") ? $(e.target).data("record_id") : $($(e.target).parent()).data("record_id");
    const buyRes = await ItemModel.buyItem(record_id);
    // TODO add flag check for buyRes
    Modal.hideAndClear();
    // reload items & profile data
    UIController.refetchItems();
    UIController.refetchProfile();
}

async function sellItemHandler(e) {
    let local_arr_idx = 
        $($(e.target).parent()).data("local_arr_idx") === undefined
            ? $($(e.target)).data("local_arr_idx")
            : $($(e.target).parent()).data("local_arr_idx");
    
    // get db_id and record_id from local state
    const item = StateController.get().items[local_arr_idx];
    const { db_id, record_id } = item;
    const payload = {
        db_id, record_id
    }
    // send request to backend with payload(db_id, record_id)
    const sellRes = await ItemModel.sellItem(payload);
    if(!sellRes.success)
        console.error("Error on the back when selling item!");
    
    // refetch items
    UIController.refetchItems();
    // refetch profile as well
    UIController.refetchProfile();
}

export default Item;