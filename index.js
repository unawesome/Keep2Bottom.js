(function(scrollBottom,disconnect,target,options) {

    var height;

    var observer = new MutationObserver(function() {
        
        height = document.documentElement.getBoundingClientRect().height;

        console.log('callback that runs when observer is triggered');

        window.scroll(0, height);

    });

    observer.observe(target,options);

    window.onscroll = function() {

        height = document.documentElement.getBoundingClientRect().height;

        scrollBottom = (document.documentElement.scrollTop + window.innerHeight);

        console.log('scrollataan, scrollBottom: ', scrollBottom, ', clientHeight: ', height);

        if (scrollBottom >= (height - 100)) {

            console.log('scrollaa loppuun');

            observer.observe(target,options);

        } else {

            console.log('scrollattu ylöspäin');

            disconnect(function() {
                observer.disconnect();
                console.log('disconnect');
            });

        }

    }


})(0,function(b){b();},document.getElementsByClassName('replies')[0],{subtree:false, childList: true});
