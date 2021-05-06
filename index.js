(function(scrollBottom,disconnect,target,options,threshold,x) {

    var height;

    var observer = new MutationObserver(function() {
        
        height = document.documentElement.getBoundingClientRect().height;

        console.log('callback that runs when observer is triggered');

        window.scroll(x, height);

    });

    window.onscroll = function() {

        height = document.documentElement.getBoundingClientRect().height;

        scrollBottom = (document.documentElement.scrollTop + window.innerHeight);

        console.log('scrollataan, scrollBottom: ', scrollBottom, ', clientHeight: ', height);

        if (scrollBottom >= (height - threshold)) {

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


})(0,function(b){b();},document.getElementsByClassName('replies')[0],{subtree:false, childList: true},100);
