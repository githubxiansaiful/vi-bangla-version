try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "0d1210d0-7836-4fdf-ac80-2c3e62126e03", o._sentryDebugIdIdentifier = "sentry-dbid-0d1210d0-7836-4fdf-ac80-2c3e62126e03")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7622], {
        47622: function(o, t, _) {
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
                    return d
                },
                Lightbox_Download_Button_Label: function() {
                    return a
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
                    return x
                }
            });
            var n = "Закрыть всплывающее окно",
                e = "Нажмите {shortcut}",
                i = "Увеличить размер изображения",
                u = "Нажмите {shortcut}",
                l = "Уменьшить размер изображения",
                b = "Нажмите {shortcut}",
                r = "Вернуться к стандартному размеру изображения",
                L = "Нажмите {shortcut}",
                g = "Масштаб",
                h = "{zoom}%",
                a = "Загрузить",
                f = "Загрузить",
                c = "Открыть изображение в всплывающем окне",
                d = "Всплывающее окно",
                s = "Замещающий текст: {alt}",
                x = {
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
                    Lightbox_Open_Button_Label: c,
                    Lightbox_Dialog_Title: d,
                    Lightbox_Dialog_Description: s
                }
        }
    }
]);