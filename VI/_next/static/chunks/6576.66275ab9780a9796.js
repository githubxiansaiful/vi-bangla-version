try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "fcc6b844-c6cf-4cd4-b501-d969abc66bcc", t._sentryDebugIdIdentifier = "sentry-dbid-fcc6b844-c6cf-4cd4-b501-d969abc66bcc")
} catch (t) {}! function() {
    var t, e, s, a, n, r, i = {
            6576: function(t, e, s) {
                "use strict";
                var a = s(376),
                    n = s(94583),
                    r = s(83726),
                    i = s(58781),
                    o = s(60342),
                    d = s(47005);
                let c = 0,
                    l = "FinalizationRegistry" in globalThis ? new FinalizationRegistry(async t => {
                        t.postMessage(null), t.close()
                    }) : void 0;
                o.Y6.set("span", {
                    canHandle: t => t instanceof a.s || t ? .constructor ? .name === "SentrySpan" || t instanceof n.b || t ? .constructor ? .name === "SentryNonRecordingSpan",
                    serialize(t) {
                        let {
                            port1: e,
                            port2: s
                        } = new MessageChannel, a = new Map;
                        return e.addEventListener("message", s => {
                            if (s.data ? .event) {
                                let n = a.get(s.data.span) || t;
                                switch (s.data.event) {
                                    case "setAttribute":
                                        return n.setAttribute(s.data.key, s.data.value);
                                    case "setAttributes":
                                        return n.setAttributes(s.data.attributes);
                                    case "setStatus":
                                        return n.setStatus(s.data.status);
                                    case "updateName":
                                        return n.updateName(s.data.name);
                                    case "end":
                                        return n.end(s.data.endTimestamp), a.delete(s.data.span);
                                    case "startChildSpan":
                                        {
                                            let n = (0, r.qp)({ ...s.data.opts,
                                                parentSpan: t
                                            });
                                            return e.postMessage({
                                                event: "startChildSpan",
                                                message: s.data.message,
                                                span: (0, i.XU)(n)
                                            }),
                                            a.set(n.spanContext().spanId, n)
                                        }
                                }
                            }
                        }), l ? .register(t, e), e.start(), [{
                                port: s,
                                span: (0, i.XU)(t)
                            },
                            [s]
                        ]
                    },
                    deserialize(t) {
                        let {
                            span: e,
                            port: s
                        } = t, a = new Map, n = t => ({
                            startChildSpan(e) {
                                let n = c++,
                                    r = new d.KP;
                                return a.set(n, r), s ? .postMessage({
                                    event: "startChildSpan",
                                    opts: e,
                                    message: n,
                                    span: t.span_id
                                }), r
                            },
                            spanContext: () => ({
                                spanId: t.span_id,
                                traceId: t.trace_id,
                                traceFlags: 0
                            }),
                            setAttribute(e, a) {
                                return s ? .postMessage({
                                    event: "setAttribute",
                                    key: e,
                                    value: a,
                                    span: t.span_id
                                }), this
                            },
                            setAttributes(e) {
                                return s ? .postMessage({
                                    event: "setAttributes",
                                    attributes: e,
                                    span: t.span_id
                                }), this
                            },
                            setStatus(e) {
                                return s ? .postMessage({
                                    event: "setStatus",
                                    status: e,
                                    span: t.span_id
                                }), this
                            },
                            updateName(e) {
                                return s ? .postMessage({
                                    event: "updateName",
                                    name: e,
                                    span: t.span_id
                                }), this
                            },
                            end(e) {
                                s ? .postMessage({
                                    event: "end",
                                    endTimestamp: e,
                                    span: t.span_id
                                })
                            },
                            addEvent() {
                                return this
                            },
                            addLink() {
                                return this
                            },
                            addLinks() {
                                return this
                            },
                            isRecording: () => !1,
                            recordException() {}
                        });
                        return s ? .addEventListener("message", t => {
                            if (t.data ? .event && "startChildSpan" === t.data.event) {
                                a.has(t.data.message) && (a.get(t.data.message) ? .resolve(n(t.data.span)), a.delete(t.data.message));
                                return
                            }
                        }), s ? .start(), n(e)
                    }
                });
                var h = s(54599),
                    p = s(26756);
                let u = (t, e) => {
                        for (let s of t.getTrackById(e.id).mdia.minf.stbl.stsd.entries) {
                            let t = s.avcC || s.hvcC || s.vpcC || s.av1C;
                            if (t) {
                                let e = new p.hb(void 0, 0, p.hb.BIG_ENDIAN);
                                return t.write(e), new Uint8Array(e.buffer, 8)
                            }
                        }
                    },
                    f = {
                        SPAN_STATUS_UNSET: 0,
                        SPAN_STATUS_OK: 1,
                        SPAN_STATUS_ERROR: 2
                    };
                class b {
                    constructor({
                        id: t,
                        quiet: e,
                        videoSrc: s,
                        cacheKey: a,
                        canvas: n
                    }, r, i) {
                        this.enabled = !1, this.lastProgress = 0, this.abortController = new AbortController, this.frames = [], this.complete = !1, this.id = t, this.quiet = e, this.videoSrc = s, this.cacheKey = a, this.canvasCtx = n.getContext("2d"), this.startSpan = i, "boolean" == typeof r ? (this.preload = r, this.preload && this.loadVideo()) : r instanceof h.d_ && (this.preload = r.enabled, this.preloadController = r, this.preloadController.addEventListener("update", this.onPreloadChange.bind(this)))
                    }
                    async fetchThrough(t, e) {
                        let s = await this.parentSpan ? .startChildSpan({
                            op: "http.client",
                            name: `GET ${t}`,
                            attributes: {
                                cacheKey: this.cacheKey,
                                cache: "miss"
                            }
                        });
                        if (!this.cacheKey) {
                            let a = await fetch(t, e);
                            return s ? .setStatus({
                                code: a.ok ? f.SPAN_STATUS_OK : f.SPAN_STATUS_ERROR
                            }), s ? .end(), a
                        }
                        let a = await self.caches ? .open(this.cacheKey),
                            n = await a ? .match(t);
                        if (void 0 !== n) return s ? .setAttribute("cache", "hit"), s ? .end(), n;
                        let r = await fetch(t, e);
                        return r.ok ? a ? .put(t, r.clone()) : s ? .setStatus({
                            code: f.SPAN_STATUS_ERROR
                        }), s ? .end(), r
                    }
                    onPreloadChange(t) {
                        this.preload !== t.enabled && (this.preload = t.enabled, this.preload ? this.enabled && !this.complete && (this.reset(), this.loadVideo()) : this.abortController.abort("disable"))
                    }
                    async loadVideo() {
                        let t, e;
                        if (this.preloadController ? .start(), this.parentSpan = await this.startSpan({
                                op: "ui.task",
                                name: `scrollmation ${this.videoSrc}`,
                                attributes: {
                                    key: this.id,
                                    src: this.videoSrc,
                                    context: "worker"
                                },
                                forceTransaction: !0
                            }), this.complete) return this.parentSpan ? .end(), this.preloadController ? .complete();
                        let s = 0,
                            a = (0, p.cn)(),
                            n = new VideoDecoder({
                                error: t => {
                                    this.log("error", "Encountered error:", t), this.parentSpan ? .setStatus({
                                        code: f.SPAN_STATUS_ERROR,
                                        message: t.message
                                    }), this.preloadController ? .stop()
                                },
                                output: t => {
                                    if (this.log("info", `Received frame: ${s} - Queue size: ${n.decodeQueueSize}`), this.frames[s] = t.clone(), t.close(), this.lastProgress) {
                                        let t = Math.floor((this.frames.length - 1) * this.lastProgress);
                                        s === t && this.progress(this.lastProgress)
                                    } else 0 === s && this.progress(0);
                                    s === this.frames.length - 1 && (setTimeout(() => {
                                        "closed" !== n.state && n.close()
                                    }, 250), e.end(), this.complete = !0, this.parentSpan ? .end(), this.preloadController ? .complete(), this.log("info", "Updating completion")), s++
                                }
                            });
                        a.onSamples = async (s, a, r) => {
                            e = await this.parentSpan.startChildSpan({
                                op: "ui.task",
                                name: "video-decode"
                            }), this.log("info", `Received samples: ${r.length}`);
                            for (let t = 0; t < r.length; t += 1) {
                                let e = r[t],
                                    s = e.is_sync ? "key" : "delta",
                                    a = new EncodedVideoChunk({
                                        type: s,
                                        timestamp: e.cts,
                                        duration: e.duration,
                                        data: e.data
                                    });
                                this.log("info", `Decoding chunk - Sample: ${t+1} - Type: ${s} - Timestamp: ${e.cts} - Duration: ${e.duration}`), n.decode(a)
                            }
                            n.flush(), t ? .end()
                        }, a.onReady = e => {
                            if (e && e.videoTracks && e.videoTracks[0]) {
                                let [s] = e.videoTracks;
                                this.log("info", `Using track: ${s.codec} - ${s.track_width}x${s.track_width} - ${this.videoSrc}`), this.frames = Array(s.nb_samples);
                                let r = {
                                    codec: s.codec.startsWith("vp08") ? "vp8" : s.codec,
                                    hardwareAcceleration: "prefer-software",
                                    optimizeForLatency: !1
                                };
                                n.configure({ ...r,
                                    description: u(a, s)
                                }), t.setAttributes(r), a.setExtractionOptions(s.id, this.id, {
                                    nbSamples: s.nb_samples
                                }), a.start()
                            } else t.setStatus({
                                code: f.SPAN_STATUS_ERROR,
                                message: "Missing video track"
                            }), t.end()
                        }, this.abortController.signal.onabort = () => {
                            a.stop(), "closed" !== n.state && n.close(), this.parentSpan ? .end()
                        };
                        let r = await this.fetchThrough(this.videoSrc, {
                            signal: this.abortController.signal,
                            headers: {
                                "accept-encoding": "identity;q=0"
                            }
                        });
                        if (!r.ok) {
                            this.parentSpan ? .setStatus({
                                code: f.SPAN_STATUS_ERROR
                            }), this.preloadController ? .stop();
                            return
                        }
                        let i = r.body ? .getReader(),
                            o = 0,
                            d = t => {
                                let {
                                    value: e,
                                    done: s
                                } = t;
                                if (this.abortController.signal.aborted) {
                                    this.parentSpan ? .setStatus({
                                        code: f.SPAN_STATUS_UNSET
                                    }), this.parentSpan ? .end();
                                    return
                                }
                                if (s) {
                                    a.flush();
                                    return
                                }
                                let n = e.buffer;
                                n.fileStart = o, o += n.byteLength, a.appendBuffer(n), i ? .read().then(d)
                            };
                        return t = await this.parentSpan.startChildSpan({
                            op: "ui.task",
                            name: "video-demux"
                        }), i ? .read().then(d)
                    }
                    reset() {
                        this.abortController.abort("reset"), this.abortController = new AbortController
                    }
                    enable() {
                        this.enabled || (this.enabled = !0, this.preload && !this.complete && (this.reset(), this.loadVideo()))
                    }
                    progress(t) {
                        if (this.lastProgress = t, !this.canvasCtx) return;
                        let e = Math.floor((this.frames.length - 1) * t),
                            s = this.frames[e];
                        s && requestAnimationFrame(() => {
                            (this.canvasCtx.canvas.width !== s.displayWidth || this.canvasCtx.canvas.height !== s.displayHeight) && (this.canvasCtx.canvas.width = s.displayWidth, this.canvasCtx.canvas.height = s.displayHeight), this.canvasCtx.clearRect(0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.height), this.canvasCtx.drawImage(s, 0, 0, this.canvasCtx.canvas.width, this.canvasCtx.canvas.height)
                        })
                    }
                    updateSrc(t) {
                        t !== this.videoSrc && (this.videoSrc = t, this.complete = !1, this.disposeFrames(), this.preload && this.enabled && (this.reset(), this.loadVideo()))
                    }
                    disable() {
                        this.enabled && (this.enabled = !1, this.abortController.abort("disable"))
                    }
                    disposeFrames() {
                        this.frames.forEach(t => t.close()), this.frames = []
                    }
                    log(t) {
                        for (var e = arguments.length, s = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) s[a - 1] = arguments[a];
                        this.quiet || console[t](`[${this.id}]`, ...s)
                    }
                }(0, o.Jj)(b)
            }
        },
        o = {};

    function d(t) {
        var e = o[t];
        if (void 0 !== e) return e.exports;
        var s = o[t] = {
                id: t,
                loaded: !1,
                exports: {}
            },
            a = !0;
        try {
            i[t](s, s.exports, d), a = !1
        } finally {
            a && delete o[t]
        }
        return s.loaded = !0, s.exports
    }
    d.m = i, d.x = function() {
        var t = d.O(void 0, [4018, 1992, 1356, 1121, 6426], function() {
            return d(6576)
        });
        return d.O(t)
    }, t = [], d.O = function(e, s, a, n) {
        if (s) {
            n = n || 0;
            for (var r = t.length; r > 0 && t[r - 1][2] > n; r--) t[r] = t[r - 1];
            t[r] = [s, a, n];
            return
        }
        for (var i = 1 / 0, r = 0; r < t.length; r++) {
            for (var s = t[r][0], a = t[r][1], n = t[r][2], o = !0, c = 0; c < s.length; c++) i >= n && Object.keys(d.O).every(function(t) {
                return d.O[t](s[c])
            }) ? s.splice(c--, 1) : (o = !1, n < i && (i = n));
            if (o) {
                t.splice(r--, 1);
                var l = a();
                void 0 !== l && (e = l)
            }
        }
        return e
    }, d.d = function(t, e) {
        for (var s in e) d.o(e, s) && !d.o(t, s) && Object.defineProperty(t, s, {
            enumerable: !0,
            get: e[s]
        })
    }, d.f = {}, d.e = function(t) {
        return Promise.all(Object.keys(d.f).reduce(function(e, s) {
            return d.f[s](t, e), e
        }, []))
    }, d.u = function(t) {
        return 1992 === t ? "static/chunks/47e78f84.07b08e5dee244c68.js" : 6426 === t ? "static/chunks/6426.893f3a2363543f9c.js" : "static/chunks/" + t + "-" + ({
            1121: "316619560da6cf4d",
            1356: "307eeefdfbec3116",
            4018: "9df7531fbfe09acc"
        })[t] + ".js"
    }, d.miniCssF = function(t) {
        return "static/css/b6d6802baf698fb5.css"
    }, d.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), d.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, d.nmd = function(t) {
        return t.paths = [], t.children || (t.children = []), t
    }, d.tt = function() {
        return void 0 === e && (e = {
            createScriptURL: function(t) {
                return t
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e
    }, d.tu = function(t) {
        return d.tt().createScriptURL(t)
    }, d.p = "/VI/_next/", s = {
        6576: 1
    }, d.f.i = function(t, e) {
        s[t] || 4018 == t || importScripts(d.tu(d.p + d.u(t)))
    }, n = (a = self.webpackChunk_N_E = self.webpackChunk_N_E || []).push.bind(a), a.push = function(t) {
        var e = t[0],
            a = t[1],
            r = t[2];
        for (var i in a) d.o(a, i) && (d.m[i] = a[i]);
        for (r && r(d); e.length;) s[e.pop()] = 1;
        n(t)
    }, r = d.x, d.x = function() {
        return Promise.all([4018, 1992, 1356, 1121, 6426].map(d.e, d)).then(r)
    }, _N_E = d.x()
}();