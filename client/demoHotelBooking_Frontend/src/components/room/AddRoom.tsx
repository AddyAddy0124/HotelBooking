import React, { ChangeEvent, FormEvent, useState } from 'react'
import { addRoom } from '../utils/ApiFunctions';

const AddRoom = () => {
    interface newRoomType {
        photo: any,
        roomType: string,
        roomPrice: number | string
    }

    const[newRoom, setNewRoom] = useState<newRoomType>({
        photo: null,
        roomType: "",
        roomPrice: ""
    })

    const [imagePreview, setImagePreview] = useState<any>("");
    const [successMessage, setSuccessMessage] = useState<String>("");
    const [errorMessage, setErrorMessage] = useState<String>("");

    const handleRoomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        let value: string | number = e.target.value;
        if(name === "roomPrice"){
            if (!isNaN(Number(value))) {
                value = parseInt(value as string);
            }else {
                value="";
            }
        }
        setNewRoom({...newRoom, [name]: value})
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedImage = e.target.files?.[0]
        if(selectedImage !== null && selectedImage !== undefined) {
            setNewRoom({...newRoom, photo: selectedImage as Blob})
            setImagePreview(URL.createObjectURL(selectedImage))
        }
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try { 
            const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice) 
            if(success !== undefined) {
                setSuccessMessage("A new room was added to the database");
                setNewRoom({
                    photo: null,
                    roomType: "",
                    roomPrice: ""
                })
                setImagePreview("")
                setErrorMessage("")
            } else {
                setErrorMessage("Error adding room")
            }
        } catch(error: any) {
            setErrorMessage(error.message)
        }
    }

  return (
    <>
        <section className="container, mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="mt-5 mb-2">Add a New Room</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor='roomType' className="form-label">Room Type</label>
                            <div></div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor='roomPrice' className="form-label">Room Price</label>
                            <input
                             className='form-control'
                             required
                             id='roomPrice'
                             type='number'
                             name='roomPrice'
                             value={newRoom.roomPrice}
                             onChange={handleRoomInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='photo' className="form-label">Room Photo</label>
                            <input 
                            id="photo"
                            name="photo"
                            type="file"
                            className="form-control"
                            onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img src={imagePreview} 
                                 alt="Preview Room Photo" 
                                 style={{maxWidth: "400px", maxHeight: "400px"}}
                                 className="mb-3"
                                 />
                            )}
                        </div>

                        <div className="d-grid d-md-flex mt-2">
                            <button className="btn btn-outline-primary ml-5">
                                Save Room
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default AddRoom