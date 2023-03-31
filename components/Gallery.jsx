import React, { useEffect, useState } from 'react'
import styles from '@/styles/gallery.module.css';
// import images from './galleryImg';
import axios from '../axios';
import Modal from 'react-modal';
import Image from 'next/image';
import ModalImage from "react-modal-image";
import 'bootstrap/dist/css/bootstrap.css';

// Modal.setAppElement(image.id);

const Gallery = () => {
  const [image, setImage] = useState([])

  
    let subtitle;
    
  useEffect(() => {
        axios.post('/gallery',{
            type:"getGallery"
        })
        .then(res => {
         console.log(res.data.data)
         setImage(res.data.data)
        })
        .catch(err => {
          console.log(err)
          })
        },[])

  return (
    <>
    <section className={styles.about_us1}>
        <div className='container'>
            <div className={`${styles.clearfix} row`}>
                {image.map((data, i)=>
                <div key={data.id} className={`${styles.pic} col-md-4`}>
                {/* <Image height='200' width='200'  src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Gallery/${data.image}`} alt={data.name} className={`${styles.img_responsive} ${styles.gallery_img}`}/> */}
                    {/* <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                    <button onClick={closeModal}>*</button>
                    <Image height='200' width='200' src={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Gallery/${data.front_image}`} alt={data.name} className={`${styles.img_responsive} ${styles.gallery_img}`}/>
                  </Modal> */}

<ModalImage
  small={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Gallery/${data.image}`}
  className={`${styles.image_modal}`}
  large={`https://calibreply.jurysoftprojects.com/backend/api/uploads/Gallery/${data.image}`}
  alt={data.id}
  showRotate='true'
  hideDownload='false'
/>
                </div>
                )}
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallery