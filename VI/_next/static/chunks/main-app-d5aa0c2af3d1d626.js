try {
    let _ = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new _.Error).stack;
    e && (_._sentryDebugIds = _._sentryDebugIds || {}, _._sentryDebugIds[e] = "3544819b-49f4-4b23-8724-ac562931e66b", _._sentryDebugIdIdentifier = "sentry-dbid-3544819b-49f4-4b23-8724-ac562931e66b")
} catch (_) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744], {
        57920: function(_, e, E) {
            Promise.resolve().then(E.t.bind(E, 89746, 23)), Promise.resolve().then(E.t.bind(E, 38282, 23)), Promise.resolve().then(E.t.bind(E, 13771, 23)), Promise.resolve().then(E.t.bind(E, 6391, 23)), Promise.resolve().then(E.t.bind(E, 70650, 23)), Promise.resolve().then(E.t.bind(E, 86643, 23))
        },
        93651: function(_, e, E) {
            "use strict";
            var t = E(61017),
                s = E(72583);
            globalThis._sentryRewritesTunnelPath = void 0, globalThis.SENTRY_RELEASE = {
                id: "768957320d66ec00b42b1c7dcab29ef8dba42887"
            }, globalThis._sentryBasePath = void 0, globalThis._sentryRewriteFramesAssetPrefixPath = "/VI", globalThis._sentryAssetPrefix = void 0, globalThis._sentryExperimentalThirdPartyOriginStackFrames = void 0, s.O.NEXT_PUBLIC_SENTRY_ENABLED && t.S1({
                sampleRate: s.O.NEXT_PUBLIC_SENTRY_SAMPLERATE_EVENTS,
                tracesSampleRate: s.O.NEXT_PUBLIC_SENTRY_SAMPLERATE_TRACES,
                dsn: s.O.NEXT_PUBLIC_SENTRY_DSN,
                environment: s.O.NEXT_PUBLIC_ENV
            })
        },
        72583: function(_, e, E) {
            "use strict";
            E.d(e, {
                O: function() {
                    return s
                }
            });
            var t = E(68873);
            let s = (0, E(64419).D)({
                skipValidation: !1,
                client: {
                    NEXT_PUBLIC_ENV: t.z.string(),
                    NEXT_PUBLIC_GA4_DEBUG_MODE: t.z.boolean(),
                    NEXT_PUBLIC_GTM_ID: t.z.string(),
                    NEXT_PUBLIC_RSG_GATEWAY_URL: t.z.string(),
                    NEXT_PUBLIC_RSG_PING_BEARER_URL: t.z.string(),
                    NEXT_PUBLIC_SCAPI_BASE_URL: t.z.string(),
                    NEXT_PUBLIC_SCAUTH_SILENT_CHECK_URL: t.z.string(),
                    NEXT_PUBLIC_SCAUTH_LOGIN_BASE_URL: t.z.string(),
                    NEXT_PUBLIC_SCAUTH_SETTINGS_URL: t.z.string(),
                    NEXT_PUBLIC_LOAD_TIMEOUT: t.z.number(),
                    NEXT_PUBLIC_SENTRY_DSN: t.z.string(),
                    NEXT_PUBLIC_SENTRY_ENABLED: t.z.boolean(),
                    NEXT_PUBLIC_SENTRY_SAMPLERATE_EVENTS: t.z.number(),
                    NEXT_PUBLIC_SENTRY_SAMPLERATE_TRACES: t.z.number(),
                    NEXT_PUBLIC_BASE_PATH: t.z.string(),
                    NEXT_PUBLIC_LOG_LEVEL: t.z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
                    NEXT_PUBLIC_DOWNLOADS_BASE: t.z.string()
                },
                runtimeEnv: {
                    NEXT_PUBLIC_ENV: "prod",
                    NEXT_PUBLIC_BASE_PATH: "/VI",
                    NEXT_PUBLIC_GA4_DEBUG_MODE: !1,
                    NEXT_PUBLIC_GTM_ID: "GTM-NSXXFR",
                    NEXT_PUBLIC_RSG_GATEWAY_URL: "https://www.rockstargames.com/auth/gateway.json",
                    NEXT_PUBLIC_RSG_PING_BEARER_URL: "https://www.rockstargames.com/auth/ping-bearer.json",
                    NEXT_PUBLIC_SCAPI_BASE_URL: "https://scapi.rockstargames.com",
                    NEXT_PUBLIC_SCAUTH_SILENT_CHECK_URL: "https://signin.rockstargames.com/connect/cors/check/rsg",
                    NEXT_PUBLIC_SCAUTH_LOGIN_BASE_URL: "https://signin.rockstargames.com/connect/authorize/rsg",
                    NEXT_PUBLIC_SCAUTH_SETTINGS_URL: "https://socialclub.rockstargames.com/settings/email",
                    NEXT_PUBLIC_LOAD_TIMEOUT: Number("15000"),
                    NEXT_PUBLIC_SENTRY_DSN: "https://3d6cfd95619f43d03694cd511ccd5318@o432808.ingest.us.sentry.io/4509254690865152",
                    NEXT_PUBLIC_SENTRY_ENABLED: !0,
                    NEXT_PUBLIC_SENTRY_SAMPLERATE_EVENTS: Number("0.01"),
                    NEXT_PUBLIC_SENTRY_SAMPLERATE_TRACES: Number("0.002"),
                    NEXT_PUBLIC_LOG_LEVEL: "info",
                    NEXT_PUBLIC_DOWNLOADS_BASE: "https://media-rockstargames-com.akamaized.net/VI/downloads"
                }
            })
        }
    },
    function(_) {
        var e = function(e) {
            return _(_.s = e)
        };
        _.O(0, [1293, 1121, 6851], function() {
            return e(93651), e(71773), e(57920)
        }), _N_E = _.O()
    }
]);