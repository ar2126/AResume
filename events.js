AFRAME.registerComponent('markerhandler', {



    init: function() {

        const animatedMarker = document.querySelector("#links");

        const aEntity = document.querySelector("#github");



        // every click, we make our model grow in size :)

        animatedMarker.addEventListener('click', function(ev, target){

            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;

            if (aEntity && intersectedElement === aEntity) {

                window.open("https://www.github.com/ar2126");

            }

        });

}});
