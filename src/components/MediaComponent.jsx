import React, { useState } from "react";
import CodeComponent from './CodeComponent';
import ImageMedia from './ImageMedia';
import YoutubeMedia from './YoutubeMedia';

const styles = {
  mainContainer: `w-full h-full  border-r-2 border-gray-200 p-4 pb-8 mt-4 shadow-md bg-white`,
  imageContainer: `w-full h-full pb-2`,
  bodyContainer: `w-full h-36 overflow-y-scroll flow-hide mb-4 `,
  bodyContent: `w-full   `,
  titleContainer: `flex justify-between items-center mb-2 w-full`,
  titleDescription: `w-7/12 md:w-9/12 h-12 `,
  title: ` text-lg md:text-xl font-bold  max-w-7/12`,
  user: `text-gray-600`,
  iconContainer: ` w-5/12 md:w-3/12 h-full flex justify-end items-center`,
  icon: `text-2xl`,
  btnContainer: `flex mb-2 flex-wrap `,
  btn: `rounded-md bg-gray-200 px-2 py-1 mr-2`,
  imageStyle: `w-full h-72`,
  codeStyle: `w-full h-auto max-h-72 overflow-y-scroll bg-amber-100 p-4  flow-hide`,
  youtubeStyle: `w-full h-72 relative`,
};

const MediaComponent = ({ media }) => {

  const {name,code,body,title,image,youtube} = media;
  const imageStyle = styles.imageStyle;
  const codeStyle = styles.codeStyle;
  const youtubeStyle = styles.youtubeStyle;
// write a function to return image or youtube or code
  const getMedia = () => {
    if (image) {
      return <ImageMedia image={image} className={imageStyle} />;
    } else if (youtube) {
      return <YoutubeMedia youtube={youtube} className={youtubeStyle} />;
    } else if (code) {
      return <CodeComponent code={code} className={codeStyle} />;
    }
    else {
      return <div></div>;
    }
  };



  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <div>
          <h3 className={styles.title}>{media.title}</h3>
          <p className={styles.user}> by {media.name}</p>
        </div>
        <div>
          <button className={styles.icon}>
            {" "}
            <b>&#x1F4F7;</b>{" "}
          </button>
        </div>
      </div>
      {/* ################################################## */}
      <div className={styles.btnContainer}>
        {media.tags.map((tag, index) => (
          <button className={styles.btn} key={index}>
            {tag}
          </button>
        ))}
      </div>
      {/* ################################################## */}
      <div className={styles.bodyContainer}>
        <div className={styles.bodyContent}>
          {media.body}

    </div>
    </div>
    {/* ################################################## */}
    <div className={styles.imageContainer}>
      {getMedia()}
    </div>
    </div>
  );
    }

export default MediaComponent;
