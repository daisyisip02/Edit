/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'b572e3eb-742e-4282-8fcc-ec2f1e9e6ff1';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "xxx",
    "location": "xxx.html"
}, {
    "name": "Screen1",
    "location": "Screen1.html"
}];

startScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilecollapsblock_3': 'startScreen_mobilecollapsblock_3',
        'mobilecollapsblockheader_4': 'startScreen_mobilecollapsblockheader_4',
        'mobilecollapsblockcontent_5': 'startScreen_mobilecollapsblockcontent_5',
        'mobilelist_25': 'startScreen_mobilelist_25',
        'mobilelistitem_26': 'startScreen_mobilelistitem_26',
        'mobilelistitembutton_27': 'startScreen_mobilelistitembutton_27',
        'mobilelistitem_28': 'startScreen_mobilelistitem_28',
        'mobilelistitembutton_29': 'startScreen_mobilelistitembutton_29',
        'mobilecollapsblock_10': 'startScreen_mobilecollapsblock_10',
        'mobilecollapsblockheader_11': 'startScreen_mobilecollapsblockheader_11',
        'mobilecollapsblockcontent_12': 'startScreen_mobilecollapsblockcontent_12',
        'mobilelist_32': 'startScreen_mobilelist_32',
        'mobilelistitem_33': 'startScreen_mobilelistitem_33',
        'mobilelistitembutton_34': 'startScreen_mobilelistitembutton_34',
        'mobilelistitem_35': 'startScreen_mobilelistitem_35',
        'mobilelistitembutton_36': 'startScreen_mobilelistitembutton_36',
        'mobilecollapsblock_37': 'startScreen_mobilecollapsblock_37',
        'mobilecollapsblockheader_38': 'startScreen_mobilecollapsblockheader_38',
        'mobilecollapsblockcontent_39': 'startScreen_mobilecollapsblockcontent_39',
        'mobilelabel_40': 'startScreen_mobilelabel_40',
        'mobilelabel_42': 'startScreen_mobilelabel_42',
        'mobilelabel_43': 'startScreen_mobilelabel_43',
        'mobilelabel_44': 'startScreen_mobilelabel_44'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    /*
     * Events and handlers
     */

    // Before Show
    var startScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "startScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events
    var startScreen_windowEvents = function() {

            $('#startScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var startScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var startScreen_elementsExtraJS = function() {
            // screen (startScreen) extra code

            /* mobilecollapsblock_3 */

            $("#startScreen_mobilecollapsblock_3 .ui-collapsible-heading-toggle").attr("tabindex", "2");

            /* mobilelist_25 */

            listView = $("#startScreen_mobilelist_25");
            theme = listView.attr("data-theme");
            if (typeof theme !== 'undefined') {
                var themeClass = "ui-btn-up-" + theme;
                listItem = $("#startScreen_mobilelist_25 .ui-li-static");
                $.each(listItem, function(index, value) {
                    $(this).addClass(themeClass);
                });
            }

            /* mobilelistitem_26 */

            /* mobilelistitem_28 */

            /* mobilecollapsblock_10 */

            $("#startScreen_mobilecollapsblock_10 .ui-collapsible-heading-toggle").attr("tabindex", "7");

            /* mobilelist_32 */

            listView = $("#startScreen_mobilelist_32");
            theme = listView.attr("data-theme");
            if (typeof theme !== 'undefined') {
                var themeClass = "ui-btn-up-" + theme;
                listItem = $("#startScreen_mobilelist_32 .ui-li-static");
                $.each(listItem, function(index, value) {
                    $(this).addClass(themeClass);
                });
            }

            /* mobilelistitem_33 */

            /* mobilelistitem_35 */

            /* mobilecollapsblock_37 */

            $("#startScreen_mobilecollapsblock_37 .ui-collapsible-heading-toggle").attr("tabindex", "13");

        };

    // screen elements handler
    var startScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilelistitem_26"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('xxx', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilelistitem_26"]');

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilelistitem_28"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('Screen1', {
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilelistitem_28"]');

        };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});