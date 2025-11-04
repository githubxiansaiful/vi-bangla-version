try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "9044ab48-58ba-4030-802b-c52804eb814e", o._sentryDebugIdIdentifier = "sentry-dbid-9044ab48-58ba-4030-802b-c52804eb814e")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8823], {
        8823: function(o, t, _) {
            _.r(t), _.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Dialog_Description: function() {
                    return f
                },
                Lightbox_Dialog_Title: function() {
                    return c
                },
                Lightbox_Download_Button_Label: function() {
                    return L
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return s
                },
                Lightbox_Open_Button_Label: function() {
                    return x
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return b
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
                    return r
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
                    return p
                }
            });
            var n = "Fermer la lightbox",
                e = "Appuyer sur {shortcut}",
                i = "Zoom avant",
                u = "Appuyer sur {shortcut}",
                r = "Zoom arri\xe8re",
                l = "Appuyer sur {shortcut}",
                b = "R\xe9initialiser",
                a = "Appuyer sur {shortcut}",
                g = "Niveau de zoom",
                h = "{zoom}\xa0%",
                L = "T\xe9l\xe9charger",
                s = "T\xe9l\xe9charger",
                x = "Ouvrir l'image dans la lightbox",
                c = "Image de la lightbox",
                f = "Text alternatif : {alt}",
                p = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: r,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: b,
                    Lightbox_Reset_Zoom_Button_Tooltip: a,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: h,
                    Lightbox_Download_Button_Label: L,
                    Lightbox_Download_Button_Tooltip: s,
                    Lightbox_Open_Button_Label: x,
                    Lightbox_Dialog_Title: c,
                    Lightbox_Dialog_Description: f
                }
        }
    }
]);