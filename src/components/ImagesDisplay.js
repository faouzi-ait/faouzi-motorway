import { getPublicationDate } from '../utils';

const ImagesDisplay = ({ images, setShow, setImage }) => {
  return (
    <div className="image-details-layout">
      {images &&
        images.map((img) => (
          <div key={img.id} className="image-display">
            <div>
              <div className="image-details">
                <img
                  className="user-image"
                  src={`${img.user.profile_image}.webp`}
                  alt={img.alt_description}
                />
                <div className="flex-layout description-text">
                  <span>@{img.user.username}</span>
                  <span>{`${img.user.name}`}</span>
                </div>
              </div>
              <img
                className="car-image"
                src={`${img.url}.jpg`}
                alt={img.alt_description}
                onClick={() => {
                  setImage(img);
                  setShow(true);
                }}
              />
              <div className="image-info">
                <span className="description-text">{`${getPublicationDate(
                  img.created_at
                )}`}</span>

                <div className="image-likes">
                  <span
                    style={{
                      marginRight: '.2rem',
                      fontSize: '.85rem',
                    }}>{`${img.likes}`}</span>
                  <img
                    src="https://img.icons8.com/fluency/17/null/hearts.png"
                    alt="likes"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImagesDisplay;
