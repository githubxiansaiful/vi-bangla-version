try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "92f2619e-e1f5-4c3a-9f80-46ce213931b4", o._sentryDebugIdIdentifier = "sentry-dbid-92f2619e-e1f5-4c3a-9f80-46ce213931b4")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9066], {
        59066: function(o, t, n) {
            n.r(t), n.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return _
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
                    return L
                },
                Lightbox_Download_Button_Tooltip: function() {
                    return s
                },
                Lightbox_Open_Button_Label: function() {
                    return f
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
                    return d
                }
            });
            var _ = "Fechar lightbox",
                e = "Pressionar {shortcut}",
                i = "Aproximar zoom",
                u = "Pressionar {shortcut}",
                r = "Afastar zoom",
                l = "Pressionar {shortcut}",
                b = "Resetar",
                a = "Pressionar {shortcut}",
                g = "N\xedvel de zoom",
                h = "{zoom}%",
                L = "Baixar",
                s = "Baixar",
                f = "Abrir imagem na lightbox",
                x = "lightbox da imagem",
                c = "Texto alternativo: {alt}",
                d = {
                    Lightbox_Close_Button_Label: _,
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
                    Lightbox_Open_Button_Label: f,
                    Lightbox_Dialog_Title: x,
                    Lightbox_Dialog_Description: c
                }
        }
    }
]);