import axios from "axios";
import {getDatabase, ref, set, onValue} from "firebase/database";


class DataControl {
    constructor() {
        this.cldAPIKey = process.env.REACT_APP_CLOUDUNARY_API_KEY;
    }

    cldImgUpload = async (file) => { //서버에 파일 업로드

        let formData = new FormData();
        formData.append("api_key", this.cldAPIKey);
        formData.append("upload_preset", process.env.REACT_APP_CLOUDUNARY_PRESET_NAME);
        formData.append("timestamp", (Date.now() / 1000) | 0);
        formData.append(`file`, file);

        const cloudName = process.env.REACT_APP_CLOUDUNARY_CLOUD_NAME;

        const config = {
            header: {"Content-Type": "multipart/form-data"}
        }

        return await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData, config)
            .then(res => {
                // console.log(res);
                return res;
            })
            .catch(err => alert(err))
    }

    writeUserData(uid, data) {
        const db = getDatabase();
        set(ref(db, 'users/' + uid), {
            uid: uid,
            data: data,
        })
    }

    readUserData = (uid, callback) => {
        const db = getDatabase();
        const userRef = ref(db, `users/${uid}`);
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            callback(data);
        });
    }


}

export default DataControl;