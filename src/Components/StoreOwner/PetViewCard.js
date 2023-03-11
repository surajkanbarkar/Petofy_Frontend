import React, { useEffect, useState } from "react";
import PetService from "../../Services/PetService";

const PetViewCard = ({modalInfo}) => {
    console.log(modalInfo)
    const [img, setImg] = useState(null);
    useEffect(() => {
        getPetImage(modalInfo.petImgUrl)
    }, [])
    const getPetImage = (imgName) =>{
        console.log(imgName)
        PetService.loadPetImage(modalInfo.storeInfo.users.userId, imgName)
        .then(response =>{
            let result = response.data;
            setImg(result.data)
            document.getElementById("img").src = result;
            console.log(result)
        })
    }
    return <>
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img} id="img" alt="Card image cap" />
            <div className="card-body">
                <h2 className="card-title">{modalInfo.petBreed}</h2>
                <p className="card-text">{modalInfo.petOrigin}</p>
                <p className="card-text">{modalInfo.petBreedGroup}</p>
                <h4 className="card-text">{modalInfo.petPrice}</h4>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>

}


export default PetViewCard;