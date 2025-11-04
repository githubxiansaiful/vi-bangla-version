try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "427d10cf-ca3d-4d4d-97ba-7170dbf9c3b7", o._sentryDebugIdIdentifier = "sentry-dbid-427d10cf-ca3d-4d4d-97ba-7170dbf9c3b7")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [104], {
        20104: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return _
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Download_Button_Label: function() {
                    return i
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return u
                },
                Lightbox_Open_Button_Label: function() {
                    return b
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return l
                },
                Lightbox_Reset_Zoom_Button_Tooltip: function() {
                    return r
                },
                Lightbox_Zoom_In_Button_Label: function() {
                    return s
                },
                Lightbox_Zoom_In_Button_Tooltip: function() {
                    return d
                },
                Lightbox_Zoom_Out_Button_Label: function() {
                    return L
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return h
                },
                Lightbox_Zoom_Slider_Label: function() {
                    return g
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return a
                },
                default: function() {
                    return f
                }
            });
            var _ = "Close lightbox",
                e = "Press {shortcut}",
                i = "Download",
                u = "Download",
                b = "{description} - View image in lightbox",
                l = "Reset",
                r = "Press {shortcut}",
                s = "Zoom in",
                d = "Press {shortcut}",
                L = "Zoom out",
                h = "Press {shortcut}",
                g = "Zoom level",
                a = "{zoom}%",
                f = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Download_Button_Label: i,
                    Lightbox_Download_Button_Tooltip: u,
                    Lightbox_Open_Button_Label: b,
                    Lightbox_Reset_Zoom_Button_Label: l,
                    Lightbox_Reset_Zoom_Button_Tooltip: r,
                    Lightbox_Zoom_In_Button_Label: s,
                    Lightbox_Zoom_In_Button_Tooltip: d,
                    Lightbox_Zoom_Out_Button_Label: L,
                    Lightbox_Zoom_Out_Button__Tooltip: h,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: a
                }
        }
    }
]);