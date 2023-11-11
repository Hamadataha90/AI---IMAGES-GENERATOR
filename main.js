const api = "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";


const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImage = async() =>{
  const methods = {
    method: 'post',
    headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${api}`
      
    },
    body: JSON.stringify({
      prompt: inp.value,
      n: 3,
      size: "256x256"
    })
    
  }
  const response = await fetch('https://api.openai.com/v1/images/generations',methods);
  const data = await response.json();
  // eslint-disable-next-line no-unused-vars
  const listImages = data.data;
  images.innerHTML = '';
  listImages.map(photo => {
    const container = document.createElement('div');
    container.classList.add('container');
    const img = document.createElement('img');
    img.src = photo.url;
    container.appendChild(img);
    images.appendChild(container);
  
  
  })
   

}

