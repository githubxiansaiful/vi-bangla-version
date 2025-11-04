try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "d7440342-cb67-4992-b3fa-22bfea4e1c0a", o._sentryDebugIdIdentifier = "sentry-dbid-d7440342-cb67-4992-b3fa-22bfea4e1c0a")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29], {
        65476: function(o, t, _) {
            _.r(t), _.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Dialog_Description: function() {
                    return x
                },
                Lightbox_Dialog_Title: function() {
                    return s
                },
                Lightbox_Download_Button_Label: function() {
                    return a
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return f
                },
                Lightbox_Open_Button_Label: function() {
                    return c
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return r
                },
                Lightbox_Reset_Zoom_Button_Tooltip: function() {
                    return L
                },
                Lightbox_Zoom_In_Button_Label: function() {
                    return i
                },
                Lightbox_Zoom_In_Button_Tooltip: function() {
                    return u
                },
                Lightbox_Zoom_Out_Button_Label: function() {
                    return b
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return l
                },
                Lightbox_Zoom_Slider_Label: function() {
                    return g
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return h
                },
                default: function() {
                    return d
                }
            });
            var n = "라이트박스 닫기",
                e = "{shortcut} 누르기",
                i = "확대",
                u = "{shortcut} 누르기",
                b = "축소",
                l = "{shortcut} 누르기",
                r = "초기화",
                L = "{shortcut} 누르기",
                g = "줌 레벨",
                h = "{zoom}%",
                a = "다운로드",
                f = "다운로드",
                c = "라이트박스에서 이미지 열기",
                s = "라이트박스 이미지",
                x = "대체 문구: {alt}",
                d = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: b,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: r,
                    Lightbox_Reset_Zoom_Button_Tooltip: L,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: h,
                    Lightbox_Download_Button_Label: a,
                    Lightbox_Download_Button_Tooltip: f,
                    Lightbox_Open_Button_Label: c,
                    Lightbox_Dialog_Title: s,
                    Lightbox_Dialog_Description: x
                }
        }
    }
]);