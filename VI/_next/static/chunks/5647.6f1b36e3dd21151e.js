try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "9195cf09-2596-4de3-8bb2-6850fd26e94c", o._sentryDebugIdIdentifier = "sentry-dbid-9195cf09-2596-4de3-8bb2-6850fd26e94c")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5647], {
        85647: function(o, t, i) {
            i.r(t), i.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return _
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
                    return c
                },
                Lightbox_Open_Button_Label: function() {
                    return f
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return b
                },
                Lightbox_Reset_Zoom_Button_Tooltip: function() {
                    return g
                },
                Lightbox_Zoom_In_Button_Label: function() {
                    return e
                },
                Lightbox_Zoom_In_Button_Tooltip: function() {
                    return u
                },
                Lightbox_Zoom_Out_Button_Label: function() {
                    return l
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return r
                },
                Lightbox_Zoom_Slider_Label: function() {
                    return L
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return h
                },
                default: function() {
                    return d
                }
            });
            var n = "Chiudi lightbox",
                _ = "Premi {shortcut}",
                e = "Aumenta zoom",
                u = "Premi {shortcut}",
                l = "Diminuisci zoom",
                r = "Premi {shortcut}",
                b = "Ripristina",
                g = "Premi {shortcut}",
                L = "Livello zoom",
                h = "{zoom}%",
                a = "Scarica",
                c = "Scarica",
                f = "Apri immagine in lightbox",
                s = "Immagine lightbox",
                x = "Testo alternativo: {alt}",
                d = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: _,
                    Lightbox_Zoom_In_Button_Label: e,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: l,
                    Lightbox_Zoom_Out_Button__Tooltip: r,
                    Lightbox_Reset_Zoom_Button_Label: b,
                    Lightbox_Reset_Zoom_Button_Tooltip: g,
                    Lightbox_Zoom_Slider_Label: L,
                    Lightbox_Zoom_Slider_Tooltip: h,
                    Lightbox_Download_Button_Label: a,
                    Lightbox_Download_Button_Tooltip: c,
                    Lightbox_Open_Button_Label: f,
                    Lightbox_Dialog_Title: s,
                    Lightbox_Dialog_Description: x
                }
        }
    }
]);