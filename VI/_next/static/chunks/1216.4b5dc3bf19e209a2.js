try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "b7f912b8-bda0-49b1-9c63-9f1dcd5ddf1d", o._sentryDebugIdIdentifier = "sentry-dbid-b7f912b8-bda0-49b1-9c63-9f1dcd5ddf1d")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1216], {
        91216: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return _
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
                    return d
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return h
                },
                Lightbox_Open_Button_Label: function() {
                    return s
                },
                Lightbox_Reset_Zoom_Button_Label: function() {
                    return l
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
                    return b
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
            var _ = "Cerrar",
                e = "Presiona {shortcut}",
                i = "Acercar",
                u = "Presiona {shortcut}",
                r = "Alejar",
                b = "Presiona {shortcut}",
                l = "Restablecer",
                a = "Presiona {shortcut}",
                g = "Nivel del zoom",
                L = "{zoom}%",
                d = "Descargar",
                h = "Descargar",
                s = "Abrir imagen",
                c = "Imagen",
                f = "Texto alt: {alt}",
                x = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: r,
                    Lightbox_Zoom_Out_Button__Tooltip: b,
                    Lightbox_Reset_Zoom_Button_Label: l,
                    Lightbox_Reset_Zoom_Button_Tooltip: a,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: L,
                    Lightbox_Download_Button_Label: d,
                    Lightbox_Download_Button_Tooltip: h,
                    Lightbox_Open_Button_Label: s,
                    Lightbox_Dialog_Title: c,
                    Lightbox_Dialog_Description: f
                }
        }
    }
]);