
//导航菜单

(function (window, document) {
var menu = document.getElementById('menu'),
    WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

function toggleHorizontal() {
    [].forEach.call(
        document.getElementById('menu').querySelectorAll('.custom-can-transform'),
        function(el){
            el.classList.toggle('menu-horizontal');
        }
    );
};

function toggleMenu() {
    // set timeout so that the panel has a chance to roll up
    // before the menu switches states
    if (menu.classList.contains('open')) {
        setTimeout(toggleHorizontal, 500);
    }
    else {
        toggleHorizontal();
    }
    menu.classList.toggle('open');
    document.getElementById('toggle').classList.toggle('x');
};

function closeMenu() {
    if (menu.classList.contains('open')) {
        toggleMenu();
    }
}

document.getElementById('toggle').addEventListener('click', function (e) {
    toggleMenu();
    e.preventDefault();
});

window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);

//固定导航栏

(function(){

    
    $.fn.navbar = function( options ) {

        // adding a class to users div
        $(this).addClass('navbar')

        var settings = $.extend({
            'scrollSpeed '  : 500
            }, options);


        return $('.navbar a').each( function() {

            
            if ( settings.scrollSpeed ) {

                var scrollSpeed = settings.scrollSpeed

            }


            // get initial top offset for the menu 
            var stickyTop = $('.navbar').offset().top;  

            // check position and make sticky if needed
            var stickyMenu = function(){
                
                // current distance top
                var scrollTop = $(window).scrollTop(); 
                            
                // if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
                if (scrollTop > stickyTop) { 
                    $('.navbar').css({ 'position': 'fixed', 'top':0 }).addClass('fixed');

                    } else {
                        $('.navbar').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fixed'); 
                    }   
            };
                    
            // run function
            stickyMenu();
                    
            // run function every time you scroll
            $(window).scroll(function() {
                 stickyMenu();
            });

            ///////////////////////////////////////
    
        
            $(this).on('click', function(e){


                // gets the height of the users div. This is used for off-setting the scroll so th emenu doesnt overlap any content in the div they jst scrolled to
                var selectorHeight = $('.navbar').height();   

                // stops empty hrefs making the page jump when clicked
                e.preventDefault();

                // get id pf the button you just clicked
                var id = $(this).attr('id');
                
                // gets the distance from top of the div class that matches your button id minus the height of the nav menu. This means the nav wont initially overlap the content.
                var goTo =  $('section.'+ id).offset().top -selectorHeight;
                
                // Scroll the page to the desired position!
                $("html, body").animate({ scrollTop: goTo }, scrollSpeed);

            }); 

            

        });

    }

})();
