try {
    let o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new o.Error).stack;
    t && (o._sentryDebugIds = o._sentryDebugIds || {}, o._sentryDebugIds[t] = "622c1c1b-0aa3-429d-96a0-bf0d5a26b660", o._sentryDebugIdIdentifier = "sentry-dbid-622c1c1b-0aa3-429d-96a0-bf0d5a26b660")
} catch (o) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4750], {
        64750: function(o, t, _) {
            _.r(t), _.d(t, {
                Lightbox_Close_Button_Label: function() {
                    return n
                },
                Lightbox_Close_Button_Tooltip: function() {
                    return e
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
                    return b
                },
                Lightbox_Zoom_Out_Button__Tooltip: function() {
                    return l
                },
                Lightbox_Zoom_Slider_Label: function() {
                    return g
                },
                Lightbox_Zoom_Slider_Tooltip: function() {
                    return a
                },
                default: function() {
                    return x
                }
            });
            var n = "ライトボックスを閉じる",
                e = "{shortcut}を押す",
                i = "ズームイン",
                u = "{shortcut}を押す",
                b = "ズームアウト",
                l = "{shortcut}を押す",
                r = "リセット",
                L = "{shortcut}を押す",
                g = "ズームの度合",
                a = "{zoom}%",
                h = "ダウンロード",
                c = "ダウンロード",
                f = "ライトボックス内のイメージを開く",
                s = "ライトボックスのイメージ",
                d = "Altテキスト：{alt}",
                x = {
                    Lightbox_Close_Button_Label: n,
                    Lightbox_Close_Button_Tooltip: e,
                    Lightbox_Zoom_In_Button_Label: i,
                    Lightbox_Zoom_In_Button_Tooltip: u,
                    Lightbox_Zoom_Out_Button_Label: b,
                    Lightbox_Zoom_Out_Button__Tooltip: l,
                    Lightbox_Reset_Zoom_Button_Label: r,
                    Lightbox_Reset_Zoom_Button_Tooltip: L,
                    Lightbox_Zoom_Slider_Label: g,
                    Lightbox_Zoom_Slider_Tooltip: a,
                    Lightbox_Download_Button_Label: h,
                    Lightbox_Download_Button_Tooltip: c,
                    Lightbox_Open_Button_Label: f,
                    Lightbox_Dialog_Title: s,
                    Lightbox_Dialog_Description: d
                }
        }
    }
]);