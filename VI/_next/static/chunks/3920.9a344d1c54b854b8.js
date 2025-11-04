try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "46932e0a-bd1d-4066-9495-31ab6838717c", o._sentryDebugIdIdentifier = "sentry-dbid-46932e0a-bd1d-4066-9495-31ab6838717c")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3920], {
        73920: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return _
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
                },
                Lightbox_Dialog_Description: function() {
                    return d
                },
                Lightbox_Dialog_Title: function() {
                    return x
                },
                Lightbox_Download_Button_Label: function() {
                    return h
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return s
                },
                Lightbox_Open_Button_Label: function() {
                    return c
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
                    return L
                },
                default: function() {
                    return f
                }
            });
            var _ = "Cerrar Lightbox",
                e = "Pulsa {shortcut}",
                i = "Acercar zoom",
                u = "Pulsa {shortcut}",
                r = "Alejar zoom",
                l = "Pulsa {shortcut}",
                b = "Reiniciar",
                a = "Pulsa {shortcut}",
                g = "Nivel de zoom",
                L = "{zoom}%",
                h = "Descargar",
                s = "Descargar",
                c = "Abrir imagen en Lightbox",
                x = "Imagen en Lightbox",
                d = "Texto alternativo: {alt}",
                f = {
                    Lightbox_Close_Button_Label: _,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: r,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: b,
                    Lightbox_Reset_Zoom_Button_Tooltip: a,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: L,
                    Lightbox_Download_Button_Label: h,
                    Lightbox_Download_Button_Tooltip: s,
                    Lightbox_Open_Button_Label: c,
                    Lightbox_Dialog_Title: x,
                    Lightbox_Dialog_Description: d
                }
        }
    }
]);