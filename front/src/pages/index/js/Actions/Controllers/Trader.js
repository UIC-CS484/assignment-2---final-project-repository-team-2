import { ModalProcedures } from "../../UI/Components/ModalProcedures";

const Trader = {
    traderBtnHandler
}


async function traderBtnHandler(e) {
    e.preventDefault();
    ModalProcedures.showTraderWindow();
}

export { Trader };
