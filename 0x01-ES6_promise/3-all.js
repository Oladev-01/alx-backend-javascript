import { uploadPhoto, createUser } from utils.js
export default function handleProfileSignup() {
    uploadPhoto.then((response) => {
        console.log(body);
    })
    createUser.then((response) => {
        console.log(firstName);
        console.log(lastName);
    })
    .catch((error) => {
        console.log(Signup system offline);
    });
}
