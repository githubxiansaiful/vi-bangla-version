try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "2cca7e6d-aed6-4d95-a5ec-4f07aab604ab", o._sentryDebugIdIdentifier = "sentry-dbid-2cca7e6d-aed6-4d95-a5ec-4f07aab604ab")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2305], {
        2305: function(o, t, _) {
            _.r(t), _.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Dialog_Description: function() {
                    return s
                },
                Lightbox_Dialog_Title: function() {
                    return f
                },
                Lightbox_Download_Button_Label: function() {
                    return h
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return c
                },
                Lightbox_Open_Button_Label: function() {
                    return d
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return r
                },
                Lightbox_Reset_Zoom_Button_Tooltip: function() {
                    return a
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
                    return L
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return g
                },
                default: function() {
                    return x
                }
            });
            var n = "關閉燈箱",
                e = "按 {shortcut}",
                i = "放大",
                u = "按 {shortcut}",
                b = "縮小",
                l = "按 {shortcut}",
                r = "重設",
                a = "按 {shortcut}",
                L = "縮放比例",
                g = "{zoom}%",
                h = "下載",
                c = "下載",
                d = "在燈箱中開啟圖片",
                f = "圖片燈箱",
                s = "圖片替代文字：{alt}",
                x = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: b,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: r,
                    Lightbox_Reset_Zoom_Button_Tooltip: a,
                    Lightbox_Zoom_Slider_Label: L,
                    Lightbox_Zoom_Slider_Tooltip: g,
                    Lightbox_Download_Button_Label: h,
                    Lightbox_Download_Button_Tooltip: c,
                    Lightbox_Open_Button_Label: d,
                    Lightbox_Dialog_Title: f,
                    Lightbox_Dialog_Description: s
                }
        }
    }
]);