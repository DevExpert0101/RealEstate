import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

const Gallery = ({ imageUrls }) => {
  const [findImg, setFindImg] = useState();
  const [activeModal, setActiveModal] = useState(false);

  const handleModal = (itemId) => {
    setActiveModal(!activeModal);
    const find = imgArray.find((e) => e.id === itemId);
    setFindImg(find);
  };

  return (
    <>
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        findImg={findImg}
      />

      <section className="p__gallery wow fadeInUp" id="gallery">
        <div className="container">
          <hr className="divider" />
          <div className="p__gallery__area section__space">
            <div className="title__with__cta">
              <div className="row d-flex align-items-center">
                <div className="col-lg-8">
                  <h2>Property Gallery</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link
                      href="/contact-us"
                      className="button button--secondary button--effect"
                    >
                      Request info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row p__gallery__single">
              {imageUrls ? imageUrls.map((url, index) => (
                <div
                  key={index}
                  className="col-md-6 col-lg-4 gallery__single__two"
                >
                  <div onClick={() => handleModal(singleImg.id)}>
                    <Image src={ url } alt={''} width = { 416 } height = { 242 } loading="lazy"/>
                  </div>
                </div>
              )): <></>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
