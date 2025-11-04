try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "225cfcea-eb46-4856-9614-a9b2e04aec27", o._sentryDebugIdIdentifier = "sentry-dbid-225cfcea-eb46-4856-9614-a9b2e04aec27")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2701], {
        12701: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return e
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return _
                },
                Lightbox_Dialog_Description: function() {
                    return d
                },
                Lightbox_Dialog_Title: function() {
                    return s
                },
                Lightbox_Download_Button_Label: function() {
                    return h
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return c
                },
                Lightbox_Open_Button_Label: function() {
                    return f
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return b
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
                    return r
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return l
                },
                Lightbox_Zoom_Slider_Label: function() {
                    return a
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return g
                },
                default: function() {
                    return x
                }
            });
            var e = "Lightbox schlie\xdfen",
                _ = "{shortcut} dr\xfccken",
                i = "Heranzoomen",
                u = "{shortcut} dr\xfccken",
                r = "Herauszoomen",
                l = "{shortcut} dr\xfccken",
                b = "Zur\xfccksetzen",
                L = "{shortcut} dr\xfccken",
                a = "Zoomstufe",
                g = "{zoom} %",
                h = "Herunterladen",
                c = "Herunterladen",
                f = "Bild in Lightbox \xf6ffnen",
                s = "Bild im Gro\xdfformat",
                d = "Alternativtext: {alt}",
                x = {
                    Lightbox_Close_Button_Label: e,
                    Lightbox_Close_Button_Tooltip: _,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: r,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: b,
                    Lightbox_Reset_Zoom_Button_Tooltip: L,
                    Lightbox_Zoom_Slider_Label: a,
                    Lightbox_Zoom_Slider_Tooltip: g,
                    Lightbox_Download_Button_Label: h,
                    Lightbox_Download_Button_Tooltip: c,
                    Lightbox_Open_Button_Label: f,
                    Lightbox_Dialog_Title: s,
                    Lightbox_Dialog_Description: d
                }
        }
    }
]);