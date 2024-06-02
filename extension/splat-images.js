function splatter(){
  let isYachtWorld = window.location.href.startsWith('https://www.yachtworld.com/yacht');
  if(!isYachtWorld){
    alert('This extension only works on the Yacht World website');
    return;
  }
  let images = document.querySelectorAll('li img');
  function splatImage(img){
      if(img.src.endsWith('_XLARGE.jpg')) {
          window.open(img.src, '_blank');
      }
  };
  images.forEach(splatImage);
}

splatter();