const renderCertificate = (goods) => {
  const goodsWrapper = document.querySelector('.portfolio-cards-certificates');

  goodsWrapper.innerHTML = '';
  goods.forEach((item) => {
    const { id, title, reference, img, alt, category } = item;
    goodsWrapper.insertAdjacentHTML(
      'beforeend',
      `
    <div class="card">
            <a href=${reference} target="_blank" class="card-link">
              <img class="card-img" src=${img} alt=${alt}>
              <h3 class="card-title">${title}</h3>
              <p>${category}</p>
            </a>
          </div>
    `
    );
  });
  // goodsWrapper.append(a);
};

const getDataCertific = () => {
  fetch('./db/db-certificates.json')
    .then((response) => response.json())
    .then((data) => {
      renderCertificate(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
getDataCertific();
