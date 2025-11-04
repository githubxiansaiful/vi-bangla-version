try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "07204611-e5ee-48f9-a519-2346061bd578", o._sentryDebugIdIdentifier = "sentry-dbid-07204611-e5ee-48f9-a519-2346061bd578")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5505], {
        35505: function(o, t, _) {
            _.r(t), _.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Dialog_Description: function() {
                    return c
                },
                Lightbox_Dialog_Title: function() {
                    return x
                },
                Lightbox_Download_Button_Label: function() {
                    return a
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return f
                },
                Lightbox_Open_Button_Label: function() {
                    return s
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
                    return l
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return b
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
            var n = "关闭弹窗",
                e = "按 {shortcut}",
                i = "放大",
                u = "按 {shortcut}",
                l = "缩小",
                b = "按 {shortcut}",
                r = "重置",
                L = "按 {shortcut}",
                g = "缩放比例",
                h = "{zoom}%",
                a = "下载",
                f = "下载",
                s = "在弹窗中打开图片",
                x = "图片弹窗",
                c = "替代文本：{alt}",
                d = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: l,
                    Lightbox_Zoom_Out_Button__Tooltip: b,
                    Lightbox_Reset_Zoom_Button_Label: r,
                    Lightbox_Reset_Zoom_Button_Tooltip: L,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: h,
                    Lightbox_Download_Button_Label: a,
                    Lightbox_Download_Button_Tooltip: f,
                    Lightbox_Open_Button_Label: s,
                    Lightbox_Dialog_Title: x,
                    Lightbox_Dialog_Description: c
                }
        }
    }
]);