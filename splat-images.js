let images = document.querySelectorAll('li img');
function splatImage(img){
    if(img.src.endsWith('_XLARGE.jpg')) {
        window.open(img.src, '_blank');
    }
};
images.forEach(splatImage);