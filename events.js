AFRAME.registerComponent('markerhandler', {



    init: function() {

        const linkedMarker = document.querySelector("#links");

        const aEntity = document.querySelector("#github");
        
        const aEntity2 = document.querySelector("#twitter");

        const aEntity3 = document.querySelector("#linkedin");

        
       
        //finds position of selected element and cross-references it to the a-entity model object
        linkedMarker.addEventListener('click', function(ev, target){

            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;

            if (aEntity && intersectedElement === aEntity) {
                window.open("https://www.github.com/ar2126");
            }
            else if (aEntity2 && intersectedElement === aEntity2) {
                window.open("https://twitter.com/WoolybearTV");
            }
            else if (aEntity3 && intersectedElement === aEntity3) {
                window.open("https://www.linkedin.com/in/aidan-rubenstein-58a00b134/");
            }

        });

}});
