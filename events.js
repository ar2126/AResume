AFRAME.registerComponent('markerhandler', {



    init: function() {

        const animatedMarker = document.querySelector("#links");

        const aEntity = document.querySelector("#github");
        
        const aEntity2 = document.querySelector("#twitter");

        const aEntity3 = document.querySelector("#linkedin");



        // every click, we make our model grow in size :)

        animatedMarker.addEventListener('click', function(ev, target){

            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;

            if (aEntity && intersectedElement === aEntity) {
                window.open("https://www.github.com/ar2126");
            }
            else if (aEntity2 && intersectedElement === aEntity2) {
                const scale = aEntity2.getAttribute('scale');

                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);

                aEntity2.setAttribute('scale', scale);
            }
            else if (aEntity3 && intersectedElement === aEntity3) {
                const scale = aEntity3.getAttribute('scale');

                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);

                aEntity3.setAttribute('scale', scale);
            }

        });

}});
