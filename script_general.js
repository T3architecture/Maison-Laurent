(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","class":"Player","scrollBarColor":"#000000","toolTipHorizontalAlign":"center","backgroundColorRatios":[0],"scrollBarWidth":10,"width":"100%","gap":10,"mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"propagateClick":false,"id":"rootPlayer","paddingBottom":0,"horizontalAlign":"left","downloadEnabled":false,"overflow":"hidden","paddingRight":0,"verticalAlign":"top","defaultVRPointer":"gaze","definitions": [{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_camera"},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","paddingRight":0,"height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"transparencyActive":true,"mode":"toggle","minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"shadow":false,"borderSize":0},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_camera"},{"items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_camera","class":"PanoramaPlayListItem","media":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_camera","class":"PanoramaPlayListItem","media":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_camera","class":"PanoramaPlayListItem","media":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC"}],"class":"PlayList","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","paddingRight":0,"height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"transparencyActive":true,"mode":"toggle","minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"shadow":false,"borderSize":0},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC","hfovMax":130,"label":trans('panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC.label'),"adjacentPanoramas":[{"distance":54.02,"yaw":-88.37,"select":"this.overlay_CD79053D_DEC5_EB35_41C1_607C38CB6447.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CD79053D_DEC5_EB35_41C1_607C38CB6447"},"class":"AdjacentPanorama","panorama":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD"},{"distance":47.54,"yaw":-50.34,"select":"this.overlay_CD134039_DEC5_693D_41E3_3BDD1A3B484B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CD134039_DEC5_693D_41E3_3BDD1A3B484B"},"class":"AdjacentPanorama","panorama":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03"}],"hfov":360,"overlays":["this.overlay_CD79053D_DEC5_EB35_41C1_607C38CB6447","this.overlay_CD134039_DEC5_693D_41E3_3BDD1A3B484B"],"thumbnailUrl":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_t.jpg","frames":[{"thumbnailUrl":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Jardin"},"partial":false},{"class":"Label","textDecoration":"none","toolTipHorizontalAlign":"center","width":280,"backgroundOpacity":0,"paddingTop":0,"fontFamily":"Arial","horizontalAlign":"center","propagateClick":false,"paddingLeft":0,"paddingBottom":0,"id":"label4056","top":17,"paddingRight":0,"height":50,"verticalAlign":"middle","maxHeight":50,"borderRadius":0,"maxWidth":280,"fontColor":"#FFFFFF","fontSize":30,"fontStyle":"normal","text":trans('label4056.text'),"minHeight":50,"right":"0.47%","minWidth":280,"shadow":false,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","top":"6.78%","paddingRight":0,"height":60,"verticalAlign":"middle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"maxWidth":60,"borderRadius":0,"transparencyActive":true,"mode":"toggle","minHeight":60,"right":"0.05%","minWidth":60,"shadow":false,"borderSize":0,"data":{"name":"image button menu"}},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_D450696D_DEC5_FB55_41EA_3011F29342CD","hfovMax":130,"label":trans('panorama_D450696D_DEC5_FB55_41EA_3011F29342CD.label'),"adjacentPanoramas":[{"distance":10.28,"yaw":-19.99,"select":"this.overlay_CCFC93F8_DECC_EF3A_41E5_3F2E6A28C7B9.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CCFC93F8_DECC_EF3A_41E5_3F2E6A28C7B9"},"class":"AdjacentPanorama","panorama":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03"},{"distance":28.29,"yaw":88.49,"select":"this.overlay_CD92B343_DECB_EF4E_41E5_A5D0DFDF09A3.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CD92B343_DECB_EF4E_41E5_A5D0DFDF09A3"},"class":"AdjacentPanorama","panorama":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC"}],"hfov":360,"overlays":["this.overlay_CCFC93F8_DECC_EF3A_41E5_3F2E6A28C7B9","this.overlay_CD92B343_DECB_EF4E_41E5_A5D0DFDF09A3"],"thumbnailUrl":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_t.jpg","frames":[{"thumbnailUrl":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Salon"},"partial":false},{"items":["this.PanoramaPlayListItem_CA6DF1DF_DECB_AB75_41D8_079DBB344E44","this.PanoramaPlayListItem_CA6D31DF_DECB_AB75_41E2_35F30840A90D","this.PanoramaPlayListItem_CA6D11DF_DECB_AB75_41D1_DC9809C38C26"],"class":"PlayList","id":"mainPlayList"},{"class":"IconButton","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","paddingRight":0,"height":60,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","maxHeight":60,"borderRadius":0,"maxWidth":60,"transparencyActive":true,"mode":"push","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"shadow":false,"borderSize":0},{"scrollBarVisible":"rollOver","scrollBarColor":"#000000","class":"Container","toolTipHorizontalAlign":"center","scrollBarWidth":10,"width":85,"gap":3,"backgroundOpacity":0,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","overflow":"scroll","top":"14.6%","paddingRight":0,"scrollBarMargin":2,"height":320,"verticalAlign":"top","creationPolicy":"inAdvance","layout":"vertical","maxHeight":320,"borderRadius":0,"maxWidth":60,"scrollBarOpacity":0.5,"contentOpaque":false,"minHeight":320,"right":"0%","minWidth":60,"shadow":false,"borderSize":0,"data":{"name":"-button set"}},{"class":"ViewerArea","vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesShadow":false,"playbackBarProgressOpacity":1,"subtitlesBottom":50,"toolTipFontWeight":"normal","playbackBarHeadShadowVerticalLength":0,"toolTipBorderRadius":3,"data":{"name":"Main Viewer"},"toolTipShadowOpacity":1,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowBlurRadius":3,"playbackBarProgressBackgroundColor":["#222222","#444444"],"paddingRight":0,"progressRight":10,"id":"MainViewer","transitionMode":"blending","playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":12,"playbackBarHeadBorderColor":"#000000","progressOpacity":1,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTextShadowVerticalLength":1,"toolTipTextShadowColor":"#666666","subtitlesTop":0,"subtitlesHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"subtitlesTextShadowBlurRadius":0,"playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"subtitlesGap":0,"progressBorderColor":"#AAAAAA","subtitlesTextShadowColor":"#000000","displayTooltipInSurfaceSelection":true,"progressBarBackgroundColor":["#222222","#444444"],"subtitlesOpacity":1,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"toolTipBorderColor":"#767676","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#999999","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderSize":2,"playbackBarHeadBorderSize":0,"progressBarOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","progressBottom":1,"subtitlesBorderSize":0,"subtitlesPaddingBottom":5,"minHeight":50,"subtitlesPaddingRight":5,"playbackBarBottom":10,"progressHeight":20,"borderSize":0,"progressBorderSize":2,"translationTransitionDuration":1000,"subtitlesTextDecoration":"none","minWidth":100,"progressBarBorderRadius":4,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundOpacity":1,"progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"playbackBarHeight":20,"playbackBarRight":0,"surfaceReticleColor":"#FFFFFF","subtitlesPaddingTop":5,"playbackBarBorderColor":"#AAAAAA","paddingTop":0,"playbackBarBorderRadius":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"transitionDuration":500,"paddingBottom":0,"toolTipFontColor":"#606060","toolTipShadowVerticalLength":0,"progressBorderRadius":4,"progressLeft":10,"surfaceReticleOpacity":0.6,"playbackBarBackgroundOpacity":1,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","displayTooltipInTouchScreens":true,"surfaceReticleSelectionColor":"#FFFFFF","top":0,"subtitlesFontWeight":"normal","toolTipShadowHorizontalLength":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadHeight":30,"bottom":0,"toolTipTextShadowBlurRadius":3,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333333","firstTransitionDuration":0,"vrPointerSelectionTime":1500,"playbackBarProgressBorderRadius":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadShadowHorizontalLength":0,"toolTipBorderSize":1,"playbackBarHeadShadow":true,"toolTipPaddingTop":4,"toolTipDisplayTime":600,"toolTipFontStyle":"normal","toolTipOpacity":0.5,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"borderRadius":0,"left":0,"subtitlesPaddingLeft":5,"playbackBarLeft":0,"right":0,"subtitlesEnabled":true,"shadow":false,"playbackBarHeadOpacity":1},{"class":"IconButton","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","paddingRight":0,"height":60,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","maxHeight":60,"borderRadius":0,"maxWidth":60,"transparencyActive":true,"mode":"push","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"shadow":false,"borderSize":0},{"scrollBarVisible":"rollOver","shadow":false,"minHeight":20,"class":"ThumbnailList","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","toolTipHorizontalAlign":"center","scrollBarWidth":10,"itemMode":"normal","gap":10,"itemBackgroundColorRatios":[],"backgroundOpacity":0,"itemThumbnailWidth":75,"paddingTop":10,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","horizontalAlign":"left","propagateClick":false,"itemThumbnailShadowSpread":1,"paddingBottom":10,"paddingLeft":20,"rollOverItemBackgroundOpacity":0,"itemLabelTextDecoration":"none","itemThumbnailOpacity":1,"itemThumbnailShadowVerticalLength":3,"paddingRight":20,"selectedItemLabelFontWeight":"bold","id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","bottom":"0.02%","itemThumbnailBorderRadius":50,"scrollBarMargin":2,"rollOverItemLabelFontWeight":"normal","verticalAlign":"top","itemThumbnailShadowBlurRadius":8,"itemLabelFontStyle":"normal","itemLabelFontFamily":"Arial","height":135.02,"itemLabelHorizontalAlign":"center","itemThumbnailShadowOpacity":0.54,"itemPaddingBottom":3,"itemLabelFontColor":"#FFFFFF","itemThumbnailShadow":true,"itemBackgroundColor":[],"itemHorizontalAlign":"center","itemOpacity":1,"itemBackgroundOpacity":0,"itemPaddingTop":3,"itemThumbnailScaleMode":"fit_outside","itemLabelFontWeight":"normal","layout":"horizontal","itemPaddingRight":3,"selectedItemLabelFontColor":"#FFCC00","itemLabelFontSize":14,"itemThumbnailHeight":75,"scrollBarOpacity":0.5,"itemBorderRadius":0,"itemPaddingLeft":3,"itemLabelPosition":"bottom","borderRadius":5,"borderSize":0,"data":{"name":"ThumbnailList35762"},"itemBackgroundColorDirection":"vertical","minWidth":20,"itemVerticalAlign":"middle","itemLabelGap":9,"left":"0.01%","right":"0.12%","itemThumbnailShadowHorizontalLength":3},{"class":"Image","toolTipHorizontalAlign":"center","width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"left","propagateClick":true,"paddingBottom":0,"paddingLeft":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","top":21.17,"verticalAlign":"top","paddingRight":0,"height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"borderRadius":0,"left":26.3,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"shadow":false,"borderSize":0,"scaleMode":"fill"},{"class":"Panorama","hfovMin":"135%","vfov":180,"pitch":0,"id":"panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03","hfovMax":130,"label":trans('panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03.label'),"adjacentPanoramas":[{"distance":9.23,"yaw":82.02,"select":"this.overlay_CDA3E177_DEC4_AB35_41A2_A63A48F44C74.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CDA3E177_DEC4_AB35_41A2_A63A48F44C74"},"class":"AdjacentPanorama","panorama":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD"},{"distance":42.81,"yaw":8.67,"select":"this.overlay_CD733879_DEC4_B93D_41DD_07B9C8CACF9D.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_CD733879_DEC4_B93D_41DD_07B9C8CACF9D"},"class":"AdjacentPanorama","panorama":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC"}],"hfov":360,"overlays":["this.overlay_CDA3E177_DEC4_AB35_41A2_A63A48F44C74","this.overlay_CD733879_DEC4_B93D_41DD_07B9C8CACF9D"],"thumbnailUrl":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_t.jpg","frames":[{"thumbnailUrl":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_t.jpg","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"rowCount":4,"url":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_0/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":48,"tags":"ondemand"},{"width":12288,"rowCount":2,"url":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_0/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":24,"tags":"ondemand"},{"width":6144,"rowCount":1,"url":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_0/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":12,"tags":["ondemand","preload"]},{"width":24576,"rowCount":1,"url":"media/panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_0/vr2gen/{column}.jpg","class":"TiledImageResourceLevel","height":2048,"colCount":12,"tags":"mobilevr2gen"}]},"class":"CubicPanoramaFrame"}],"data":{"label":"Salle \u00e0 manger"},"partial":false},{"class":"IconButton","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","toolTipHorizontalAlign":"center","width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"horizontalAlign":"center","propagateClick":true,"paddingLeft":0,"pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","paddingRight":0,"height":60,"verticalAlign":"middle","maxHeight":60,"borderRadius":0,"maxWidth":60,"transparencyActive":true,"mode":"toggle","minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"shadow":false,"borderSize":0},{"arrowKeysAction":"translate","viewerArea":"this.MainViewer","class":"PanoramaPlayer","buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","zoomEnabled":true,"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeVerticalDraggingEnabled":true,"gyroscopeEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"hoverFactor":0,"id":"panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_camera"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CC1E65B7_DEC5_EB35_41D5_7A127401EFC0"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":-88.37,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-1.79,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CD79053D_DEC5_EB35_41C1_607C38CB6447"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CD26D061_DEC5_694D_41E4_C7FB5C770E42"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":-50.34,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.04,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CD134039_DEC5_693D_41E3_3BDD1A3B484B"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CCC7E480_DECC_E9CB_41C1_A031D5222D20"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":-19.99,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-9.38,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CCFC93F8_DECC_EF3A_41E5_3F2E6A28C7B9"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CDAEE34B_DECB_EF5D_41D5_168E060A8711"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":88.49,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-3.43,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CD92B343_DECB_EF4E_41E5_A5D0DFDF09A3"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD_camera","media":"this.panorama_D450696D_DEC5_FB55_41EA_3011F29342CD","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_CA6DF1DF_DECB_AB75_41D8_079DBB344E44"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03_camera","media":"this.panorama_D45D8E8D_DEC5_99D5_41DA_030EDC0A8D03","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_CA6D31DF_DECB_AB75_41E2_35F30840A90D"},{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC_camera","media":"this.panorama_D54F0F72_DEC5_B74F_41E8_5CC42ACBBFEC","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_CA6D11DF_DECB_AB75_41D1_DC9809C38C26"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CC1E31FC_DEC4_AB3B_41C7_1B6FDAAD235A"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":82.02,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-10.43,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CDA3E177_DEC4_AB35_41A2_A63A48F44C74"},{"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_CD0F5888_DEC4_B9DB_41CE_7671798A0D4C"],"items":[{"image":"this.res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD","distance":50,"yaw":8.67,"class":"HotspotPanoramaOverlayImage","hfov":6,"horizontalAlign":"center","vfov":6,"data":{"label":"link"},"verticalAlign":"middle","pitch":-2.26,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"link"},"id":"overlay_CD733879_DEC4_B93D_41DD_07B9C8CACF9D"},{"id":"HotspotPanoramaOverlayArea_CC1E65B7_DEC5_EB35_41D5_7A127401EFC0","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6DF1DF_DECB_AB75_41D8_079DBB344E44, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"levels":[{"height":141,"width":141,"url":"media/res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_CA9032BB_DEC4_E93D_41E8_CE28B9CB78BD"},{"id":"HotspotPanoramaOverlayArea_CD26D061_DEC5_694D_41E4_C7FB5C770E42","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6D31DF_DECB_AB75_41E2_35F30840A90D, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_CCC7E480_DECC_E9CB_41C1_A031D5222D20","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6D31DF_DECB_AB75_41E2_35F30840A90D, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_CDAEE34B_DECB_EF5D_41D5_168E060A8711","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6D11DF_DECB_AB75_41D1_DC9809C38C26, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_CC1E31FC_DEC4_AB3B_41C7_1B6FDAAD235A","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6DF1DF_DECB_AB75_41D8_079DBB344E44, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_CD0F5888_DEC4_B9DB_41CE_7671798A0D4C","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_CA6D11DF_DECB_AB75_41D1_DC9809C38C26, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"scrollBarMargin":2,"backgroundPreloadEnabled":true,"height":"100%","backgroundColor":["#000000"],"children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"scripts":{"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getKey":TDV.Tour.Script.getKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getMainViewer":TDV.Tour.Script.getMainViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"downloadFile":TDV.Tour.Script.downloadFile,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"mixObject":TDV.Tour.Script.mixObject,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"existsKey":TDV.Tour.Script.existsKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"historyGoForward":TDV.Tour.Script.historyGoForward,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPixels":TDV.Tour.Script.getPixels,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"showWindow":TDV.Tour.Script.showWindow,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"setValue":TDV.Tour.Script.setValue,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"initQuiz":TDV.Tour.Script.initQuiz,"isPanorama":TDV.Tour.Script.isPanorama,"translate":TDV.Tour.Script.translate,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion},"layout":"absolute","mobileMipmappingEnabled":false,"creationPolicy":"inAdvance","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","borderRadius":0,"scrollBarOpacity":0.5,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","contentOpaque":false,"minHeight":20,"data":{"initialScale":0.65,"defaultLocale":"fr","name":"Player28156","locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1}},"minWidth":20,"shadow":false,"desktopMipmappingEnabled":false,"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Jun 3 2024