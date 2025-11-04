try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "e1118b2c-fad4-40ca-b713-727d2bbf6f1f", o._sentryDebugIdIdentifier = "sentry-dbid-e1118b2c-fad4-40ca-b713-727d2bbf6f1f")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [404], {
        20404: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return _
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return i
                },
                Lightbox_Dialog_Description: function() {
                    return s
                },
                Lightbox_Dialog_Title: function() {
                    return d
                },
                Lightbox_Download_Button_Label: function() {
                    return h
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
                    return a
                },
                Lightbox_Zoom_In_Button_Label: function() {
                    return e
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
                    return L
                },
                default: function() {
                    return x
                }
            });
            var _ = "Zamknij podgląd",
                i = "Naciśnij {shortcut}",
                e = "Powiększ",
                u = "Naciśnij {shortcut}",
                b = "Pomniejsz",
                l = "Naciśnij {shortcut}",
                r = "Zresetuj",
                a = "Naciśnij {shortcut}",
                g = "Poziom powiększenia",
                L = "{zoom}%",
                h = "Pobierz",
                f = "Pobierz",
                c = "Otw\xf3rz obraz w podglądzie",
                d = "Podgląd obrazu",
                s = "Tekst alternatywny: {alt}",
                x = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: i,
                    Lightbox_Zoom_In_Button_Label: e,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: b,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: r,
                    Lightbox_Reset_Zoom_Button_Tooltip: a,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: L,
                    Lightbox_Download_Button_Label: h,
                    Lightbox_Download_Button_Tooltip: f,
                    Lightbox_Open_Button_Label: c,
                    Lightbox_Dialog_Title: d,
                    Lightbox_Dialog_Description: s
                }
        }
    }
]);