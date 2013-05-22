(function ($) {
    $(function () {

        var $sidebar = $('.kss-sidebar'),
            $menu = $('.kss-menu'),
            $childMenu = $('.kss-menu-child'),
            $menuItem = $menu.find('.kss-menu-item'),
            $childMenuItem = $childMenu.find('.kss-menu-item'),
            ref = $menu.data('kss-ref');

        // Dynamic menu activation
        function scrollSpy() {
            var scrollTop = $(window).scrollTop(),
                $anchors = $childMenu.find('a'),
                activeIndex;
            $anchors.each(function (index) {
                var $target = $($(this).attr('href').replace(/\./g, '\\.')),
                    offsetTop = $target.offset().top,
                    offsetBottom = offsetTop + $target.outerHeight(true);
                if (offsetTop <= scrollTop && scrollTop < offsetBottom) {
                    activeIndex = index;
                    return false;
                }
            });
            $childMenuItem.removeClass('kss-active');
            if (typeof activeIndex !== 'undefined') {
                $childMenuItem.eq(activeIndex).addClass('kss-active');
            }
        }

        // Fix sidebar position when window is large
        function fixSidebar() {
            if ($sidebar.outerHeight() <= $(window).height()) {
                $sidebar.addClass('kss-fixed');
            }
            else {
                $sidebar.removeClass('kss-fixed');
            }
        }

        // Activate current page item
        $menuItem.eq(ref).addClass('kss-active');

        // Append child menu and attach scrollSpy
        if ($childMenu.length) {
            $childMenu.show().appendTo($menuItem.eq(ref));
            $(window).scroll(scrollSpy);
            scrollSpy();
        }

        // Sidebar position
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            fixSidebar();
            $(window).resize(fixSidebar);
        }

        // Syntax hightlignting with Rainbow.js
        $('code.html').attr('data-language', 'html');
        $('code.css').attr('data-language', 'css');
        $('code.less, code.scss').attr('data-language', 'generic');

    });
}(jQuery));