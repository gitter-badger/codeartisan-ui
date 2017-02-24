(function ($) {

    "use strict";

    var MaterialTab = function (element) {
        this.$tab = $(element);
        // Initialize instance.
        this.init();
    };

    MaterialTab.prototype.init = function () {
        console.log(this.getAnchorsNumber());
        /*this.$drawerElement = this.$tab.find('.'+this.CssClasses_.DRAWER);
        this.$drawerShadow = this.$tab.find('.'+this.CssClasses_.SHADOW);
        this.boundShowDrawer = this.showDrawer_.bind(this);
        this.boundOnTouchStart = this.onTouchStart_.bind(this);
        this.boundIgnoreClicks = this.ignoreClick_.bind(this);
        this.boundHideDrawer = this.hideDrawer_.bind(this);
        this.boundOnTouchMove = this.onTouchMove_.bind(this);
        this.boundOnTransitionEnd = this.onTransitionEnd_.bind(this);
        this.update = this.update.bind(this);
        this.boundOnTouchEnd = this.onTouchEnd_.bind(this);

        this.$drawerBtn.on('click',this.boundShowDrawer);
        this.$drawerElement.on('click',this.boundIgnoreClicks);
        this.$tab.on('click',this.boundHideDrawer);
        this.$tab.on('touchstart',this.boundOnTouchStart);
        this.$tab.on('touchmove',this.boundOnTouchMove);
        this.$tab.on('touchend',this.boundOnTouchEnd);*/

        this.startX = 0;
        this.currentX = 0;
        this.touchingDrawer = false;
        //this.drawerWidth = this.$drawerElement.width();
    };

    MaterialTab.VERSION = '1.0';

    MaterialTab.prototype.Keycodes_ = {
        ENTER: 13,
        ESCAPE: 27,
        SPACE: 32,
        UP_ARROW: 38,
        DOWN_ARROW: 40
    };

    MaterialTab.prototype.Constant_ = {
        TRANSITION_DURATION_SECONDS: 0.3,
        TRANSITION_DURATION_FRACTION: 0.8,
        CLOSE_TIMEOUT: 300
    };

    MaterialTab.prototype.CssClasses_ = {
        TAB: 'md-tabs__tab',
        TAB_PANEL: 'md-tabs__panel',
        OUTER_WRAPPER: 'md-tabs__wrapper-outer',
        INNER_WRAPPER: 'md-tabs__wrapper-inner',
        IS_UPGRADED: 'is-upgraded',
        IS_ANIMATING: 'is-animating',
        IS_ACTIVE: 'is-active'
    };

    MaterialTab.prototype.getAnchorsNumber = function(){
        return this.$tab.find('.'+this.CssClasses_.TAB).length;
    };

    function Plugin() {
        return this.each(function () {
            var $this = $(this);
            var data  = $this.data('ca.tab');
            if (!data) $this.data('ca.tab', (data = new MaterialTab(this)));
        });
    }

    $.fn.MaterialTab = Plugin;
    $.fn.MaterialTab.Constructor = MaterialTab;

    $(window).on('load', function () {
        $('[data-toggle="tab"]').each(function () {
            var $tab = $(this);
            Plugin.call($tab)
        })
    });

}( jQuery ));