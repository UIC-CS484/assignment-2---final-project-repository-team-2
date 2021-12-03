import { StateController } from "../../../../../js/export";
import { Profile as ProfileUI } from "../../UI/Components/Profile";
import ProfileModel from "../../Models/Profile";
import { ModalProcedures } from "../../UI/Components/ModalProcedures";



const Profile = {
    updateBtnHandler,
    deleteBtnHandler
}

// user related 
async function updateBtnHandler(e) {
    const data = {
        newUsername:  ProfileUI.getUsername()
    }

    const newProfileData = await ProfileModel.update(data);

    StateController.set({ profile: newProfileData })
}

async function deleteBtnHandler(e) {

    e.preventDefault();

    const deleteRes = await ProfileModel._delete(); 
    document.location.href = deleteRes.redirectUrl

}


export default Profile;

