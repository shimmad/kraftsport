import React from 'react';

function getYoutubeThumb(url) {
  const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export default function VideoCard({ ejercicio }) {
  const thumb = getYoutubeThumb(ejercicio.video_url);

  const handleClick = () => {
    window.open(ejercicio.video_url, '_blank');
  };

  return (
    <div className="video-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {thumb ? (
        <img src={thumb} alt={ejercicio.nombre} className="video-thumb" />
      ) : (
        <div className="no-thumb">Abrir video</div>
      )}
      <div className="video-info">
        <strong>{ejercicio.nombre}</strong>
        <p>{ejercicio.descripcion}</p>
      </div>
    </div>
  );
}