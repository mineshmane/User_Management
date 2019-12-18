import axios from 'axios'


export default class AxiosService {

    loginService(data) {
        console.log(" data", data.data);

        return new Promise(async (resolve, reject) => {

            axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data.data).then((result) => {
                console.log(" data ", result);

                resolve(result);
            }).catch((error) => {
                reject(error)
            })
        })

    }

}