Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});

cam=document.getElementById("camera");
Webcam.attach("#cam")