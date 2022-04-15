import React, { useState, useEffect } from "react";

const imagesUrl = [
  "https://res.cloudinary.com/www-daniekeys-com/image/upload/v1649721162/banner_3-2_1_b20rlj.png",
  "https://res.cloudinary.com/www-daniekeys-com/image/upload/v1649721162/banner-newbanner-2-copy-4_1_kuhpha.png",
  "https://res.cloudinary.com/www-daniekeys-com/image/upload/v1649721162/giveawayfive_fvk8ns.png",
  "https://res.cloudinary.com/www-daniekeys-com/image/upload/v1649721162/banner_newbanner_2_copy_4_1_sqgnm9.png",
];

const styles = {
  container: "w-full h-72 bg-white flex justify-center items-center transition-all ease-in-out",
  image: "w-full h-full ",
};
const AddsCard = () => {
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(imagesUrl[0]);

  useEffect(() => {
    const interval = setInterval(() => {
    if (index === imagesUrl.length - 1) {
      setIndex(0);
      setImage(imagesUrl[index]);

    } else {
        
        setIndex(index + 1);
        setImage(imagesUrl[index]);
        }
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.container}>
      <img src={image} alt="adds" className={styles.image} />
    </div>
  );
};

export default AddsCard;
