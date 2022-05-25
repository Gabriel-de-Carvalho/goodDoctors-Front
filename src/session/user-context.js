import React from "react"
export const user = {
        "_id": "62814d14bc76ee2bc724b51f",
        "name": "Sammara Beserra",
        "age": "1997-11-01T00:00:00.000Z",
        "cpf": "071760804278",
        "email": "sammarra@gmail.com",
        "zipCode": "58428-795",
        "city": "Campina Grande",
        "street": "Rodrigues alves",
        "number": "1663",
        "adress": "Universitario",
        "phone": "83 98151-0181",
        "createdAt": "2022-05-15T18:57:24.015Z",
        "updatedAt": "2022-05-15T18:57:24.015Z",
        "__v": 0,
        "token": "bearer "

}

 export const UserContext = React.createContext(
     {
         userLogged: user,
         isLogged: false,
         setUser: () => {}
        }
 )  