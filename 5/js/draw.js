// Draw elements module
const generatePictureDOM = function (picture) {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

  const pictureImageContainer = pictureTemplate.querySelector('.picture__img');
  const pictureLikesContainer = pictureTemplate.querySelector('.picture__likes');
  const pictureCommentsContainer = pictureTemplate.querySelector('.picture__comments');
  pictureImageContainer.src = picture.url;
  pictureLikesContainer.textContent = picture.likes;
  pictureCommentsContainer.textContent = picture.comments;

  return pictureTemplate;
};


const drawPicture = function (picture) {
  const pictureElement = generatePictureDOM(picture);
  const picturesList = document.querySelector('.pictures');
  picturesList.appendChild(pictureElement);
};

const drawPictures = function (pictures) {
  pictures.forEach((picture) => {drawPicture(picture);});
};


export {drawPictures};
