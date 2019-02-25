//register the active marker
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#links");

        animatedMarker.addEventListener('click', function(ev){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                window.open("https://www.github.com");
                /*if(ev.target.getAttribute('id') === "github"){
                    
                }
                
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                
                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
                */
            }
        });
}});
