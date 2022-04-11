import React from 'react';


const YoutubeMedia = ({ youtube,  className }) => {
    // write a function to slice the url
    const url = youtube.slice(youtube.indexOf('watch?v=') + 8, youtube.length);
    return (
      <div className={className}>
        {/* <iframe
            title="youtube"
            // src={`https://www.youtube.com/embed/${youtube}`}
            src={youtube}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        /> */}
     
       
        <a href={youtube} target="_blank" className="relative w-full">
          <img
            src={`https://img.youtube.com/vi/${url}/maxresdefault.jpg`}
            alt="video"
            className="w-full h-full max-h-72"
          />
         
        </a>
      </div>
    );
    }

    export default YoutubeMedia;



