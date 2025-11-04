try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "1a11a7e0-a17c-4e1b-a02a-85afc643ed57", t._sentryDebugIdIdentifier = "sentry-dbid-1a11a7e0-a17c-4e1b-a02a-85afc643ed57")
} catch (t) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1992], {
        26756: function(t, e) {
            var s, r, n = (s = new Date, r = 4, {
                setLogLevel: function(t) {
                    t == this.debug ? r = 1 : t == this.info ? r = 2 : t == this.warn ? r = 3 : (this.error, r = 4)
                },
                debug: function(t, e) {
                    void 0 === console.debug && (console.debug = console.log), 1 >= r && console.debug("[" + n.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
                },
                log: function(t, e) {
                    this.debug(t.msg)
                },
                info: function(t, e) {
                    2 >= r && console.info("[" + n.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
                },
                warn: function(t, e) {
                    3 >= r && console.warn("[" + n.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
                },
                error: function(t, e) {
                    4 >= r && console.error("[" + n.getDurationString(new Date - s, 1e3) + "]", "[" + t + "]", e)
                }
            });
            n.getDurationString = function(t, e) {
                function s(t, e) {
                    for (var s = ("" + t).split("."); s[0].length < e;) s[0] = "0" + s[0];
                    return s.join(".")
                }
                t < 0 ? (r = !0, t = -t) : r = !1;
                var r, n = t / (e || 1),
                    a = Math.floor(n / 3600),
                    o = Math.floor((n -= 3600 * a) / 60),
                    h = 1e3 * (n -= 60 * o);
                return h -= 1e3 * (n = Math.floor(n)), h = Math.floor(h), (r ? "-" : "") + a + ":" + s(o, 2) + ":" + s(n, 2) + "." + s(h, 3)
            }, n.printRanges = function(t) {
                var e = t.length;
                if (!(e > 0)) return "(empty)";
                for (var s = "", r = 0; r < e; r++) r > 0 && (s += ","), s += "[" + n.getDurationString(t.start(r)) + "," + n.getDurationString(t.end(r)) + "]";
                return s
            };
            var a = function(t) {
                if (t instanceof ArrayBuffer) this.buffer = t, this.dataview = new DataView(t);
                else throw "Needs an array buffer";
                this.position = 0
            };
            a.prototype.getPosition = function() {
                return this.position
            }, a.prototype.getEndPosition = function() {
                return this.buffer.byteLength
            }, a.prototype.getLength = function() {
                return this.buffer.byteLength
            }, a.prototype.seek = function(t) {
                var e = Math.max(0, Math.min(this.buffer.byteLength, t));
                return this.position = isNaN(e) || !isFinite(e) ? 0 : e, !0
            }, a.prototype.isEos = function() {
                return this.getPosition() >= this.getEndPosition()
            }, a.prototype.readAnyInt = function(t, e) {
                var s = 0;
                if (this.position + t <= this.buffer.byteLength) {
                    switch (t) {
                        case 1:
                            s = e ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
                            break;
                        case 2:
                            s = e ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
                            break;
                        case 3:
                            if (e) throw "No method for reading signed 24 bits values";
                            s = this.dataview.getUint8(this.position) << 16 | this.dataview.getUint8(this.position + 1) << 8 | this.dataview.getUint8(this.position + 2);
                            break;
                        case 4:
                            s = e ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
                            break;
                        case 8:
                            if (e) throw "No method for reading signed 64 bits values";
                            s = this.dataview.getUint32(this.position) << 32 | this.dataview.getUint32(this.position + 4);
                            break;
                        default:
                            throw "readInt method not implemented for size: " + t
                    }
                    return this.position += t, s
                }
                throw "Not enough bytes in buffer"
            }, a.prototype.readUint8 = function() {
                return this.readAnyInt(1, !1)
            }, a.prototype.readUint16 = function() {
                return this.readAnyInt(2, !1)
            }, a.prototype.readUint24 = function() {
                return this.readAnyInt(3, !1)
            }, a.prototype.readUint32 = function() {
                return this.readAnyInt(4, !1)
            }, a.prototype.readUint64 = function() {
                return this.readAnyInt(8, !1)
            }, a.prototype.readString = function(t) {
                if (this.position + t <= this.buffer.byteLength) {
                    for (var e = "", s = 0; s < t; s++) e += String.fromCharCode(this.readUint8());
                    return e
                }
                throw "Not enough bytes in buffer"
            }, a.prototype.readCString = function() {
                for (var t = [];;) {
                    var e = this.readUint8();
                    if (0 !== e) t.push(e);
                    else break
                }
                return String.fromCharCode.apply(null, t)
            }, a.prototype.readInt8 = function() {
                return this.readAnyInt(1, !0)
            }, a.prototype.readInt16 = function() {
                return this.readAnyInt(2, !0)
            }, a.prototype.readInt32 = function() {
                return this.readAnyInt(4, !0)
            }, a.prototype.readInt64 = function() {
                return this.readAnyInt(8, !1)
            }, a.prototype.readUint8Array = function(t) {
                for (var e = new Uint8Array(t), s = 0; s < t; s++) e[s] = this.readUint8();
                return e
            }, a.prototype.readInt16Array = function(t) {
                for (var e = new Int16Array(t), s = 0; s < t; s++) e[s] = this.readInt16();
                return e
            }, a.prototype.readUint16Array = function(t) {
                for (var e = new Int16Array(t), s = 0; s < t; s++) e[s] = this.readUint16();
                return e
            }, a.prototype.readUint32Array = function(t) {
                for (var e = new Uint32Array(t), s = 0; s < t; s++) e[s] = this.readUint32();
                return e
            }, a.prototype.readInt32Array = function(t) {
                for (var e = new Int32Array(t), s = 0; s < t; s++) e[s] = this.readInt32();
                return e
            };
            var o = function(t, e, s) {
                this._byteOffset = e || 0, t instanceof ArrayBuffer ? this.buffer = t : "object" == typeof t ? (this.dataView = t, e && (this._byteOffset += e)) : this.buffer = new ArrayBuffer(t || 0), this.position = 0, this.endianness = null == s ? o.LITTLE_ENDIAN : s
            };
            o.prototype = {}, o.prototype.getPosition = function() {
                return this.position
            }, o.prototype._realloc = function(t) {
                if (this._dynamicSize) {
                    var e = this._byteOffset + this.position + t,
                        s = this._buffer.byteLength;
                    if (e <= s) {
                        e > this._byteLength && (this._byteLength = e);
                        return
                    }
                    for (s < 1 && (s = 1); e > s;) s *= 2;
                    var r = new ArrayBuffer(s),
                        n = new Uint8Array(this._buffer);
                    new Uint8Array(r, 0, n.length).set(n), this.buffer = r, this._byteLength = e
                }
            }, o.prototype._trimAlloc = function() {
                if (this._byteLength != this._buffer.byteLength) {
                    var t = new ArrayBuffer(this._byteLength),
                        e = new Uint8Array(t),
                        s = new Uint8Array(this._buffer, 0, e.length);
                    e.set(s), this.buffer = t
                }
            }, o.BIG_ENDIAN = !1, o.LITTLE_ENDIAN = !0, o.prototype._byteLength = 0, Object.defineProperty(o.prototype, "byteLength", {
                get: function() {
                    return this._byteLength - this._byteOffset
                }
            }), Object.defineProperty(o.prototype, "buffer", {
                get: function() {
                    return this._trimAlloc(), this._buffer
                },
                set: function(t) {
                    this._buffer = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
                }
            }), Object.defineProperty(o.prototype, "byteOffset", {
                get: function() {
                    return this._byteOffset
                },
                set: function(t) {
                    this._byteOffset = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
                }
            }), Object.defineProperty(o.prototype, "dataView", {
                get: function() {
                    return this._dataView
                },
                set: function(t) {
                    this._byteOffset = t.byteOffset, this._buffer = t.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + t.byteLength
                }
            }), o.prototype.seek = function(t) {
                var e = Math.max(0, Math.min(this.byteLength, t));
                this.position = isNaN(e) || !isFinite(e) ? 0 : e
            }, o.prototype.isEof = function() {
                return this.position >= this._byteLength
            }, o.prototype.mapUint8Array = function(t) {
                this._realloc(1 * t);
                var e = new Uint8Array(this._buffer, this.byteOffset + this.position, t);
                return this.position += 1 * t, e
            }, o.prototype.readInt32Array = function(t, e) {
                var s = new Int32Array(t = null == t ? this.byteLength - this.position / 4 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readInt16Array = function(t, e) {
                var s = new Int16Array(t = null == t ? this.byteLength - this.position / 2 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readInt8Array = function(t) {
                var e = new Int8Array(t = null == t ? this.byteLength - this.position : t);
                return o.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
            }, o.prototype.readUint32Array = function(t, e) {
                var s = new Uint32Array(t = null == t ? this.byteLength - this.position / 4 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readUint16Array = function(t, e) {
                var s = new Uint16Array(t = null == t ? this.byteLength - this.position / 2 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readUint8Array = function(t) {
                var e = new Uint8Array(t = null == t ? this.byteLength - this.position : t);
                return o.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
            }, o.prototype.readFloat64Array = function(t, e) {
                var s = new Float64Array(t = null == t ? this.byteLength - this.position / 8 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readFloat32Array = function(t, e) {
                var s = new Float32Array(t = null == t ? this.byteLength - this.position / 4 : t);
                return o.memcpy(s.buffer, 0, this.buffer, this.byteOffset + this.position, t * s.BYTES_PER_ELEMENT), o.arrayToNative(s, null == e ? this.endianness : e), this.position += s.byteLength, s
            }, o.prototype.readInt32 = function(t) {
                var e = this._dataView.getInt32(this.position, null == t ? this.endianness : t);
                return this.position += 4, e
            }, o.prototype.readInt16 = function(t) {
                var e = this._dataView.getInt16(this.position, null == t ? this.endianness : t);
                return this.position += 2, e
            }, o.prototype.readInt8 = function() {
                var t = this._dataView.getInt8(this.position);
                return this.position += 1, t
            }, o.prototype.readUint32 = function(t) {
                var e = this._dataView.getUint32(this.position, null == t ? this.endianness : t);
                return this.position += 4, e
            }, o.prototype.readUint16 = function(t) {
                var e = this._dataView.getUint16(this.position, null == t ? this.endianness : t);
                return this.position += 2, e
            }, o.prototype.readUint8 = function() {
                var t = this._dataView.getUint8(this.position);
                return this.position += 1, t
            }, o.prototype.readFloat32 = function(t) {
                var e = this._dataView.getFloat32(this.position, null == t ? this.endianness : t);
                return this.position += 4, e
            }, o.prototype.readFloat64 = function(t) {
                var e = this._dataView.getFloat64(this.position, null == t ? this.endianness : t);
                return this.position += 8, e
            }, o.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, o.memcpy = function(t, e, s, r, n) {
                var a = new Uint8Array(t, e, n),
                    o = new Uint8Array(s, r, n);
                a.set(o)
            }, o.arrayToNative = function(t, e) {
                return e == this.endianness ? t : this.flipArrayEndianness(t)
            }, o.nativeToEndian = function(t, e) {
                return this.endianness == e ? t : this.flipArrayEndianness(t)
            }, o.flipArrayEndianness = function(t) {
                for (var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), s = 0; s < t.byteLength; s += t.BYTES_PER_ELEMENT)
                    for (var r = s + t.BYTES_PER_ELEMENT - 1, n = s; r > n; r--, n++) {
                        var a = e[n];
                        e[n] = e[r], e[r] = a
                    }
                return t
            }, o.prototype.failurePosition = 0, String.fromCharCodeUint8 = function(t) {
                for (var e = [], s = 0; s < t.length; s++) e[s] = t[s];
                return String.fromCharCode.apply(null, e)
            }, o.prototype.readString = function(t, e) {
                return null == e || "ASCII" == e ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == t ? this.byteLength - this.position : t)]) : new TextDecoder(e).decode(this.mapUint8Array(t))
            }, o.prototype.readCString = function(t) {
                var e = this.byteLength - this.position,
                    s = new Uint8Array(this._buffer, this._byteOffset + this.position),
                    r = e;
                null != t && (r = Math.min(t, e));
                for (var n = 0; n < r && 0 !== s[n]; n++);
                var a = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(n)]);
                return null != t ? this.position += r - n : n != e && (this.position += 1), a
            }, o.prototype.readInt64 = function() {
                return 4294967296 * this.readInt32() + this.readUint32()
            }, o.prototype.readUint64 = function() {
                return 4294967296 * this.readUint32() + this.readUint32()
            }, o.prototype.readInt64 = function() {
                return 4294967296 * this.readUint32() + this.readUint32()
            }, o.prototype.readUint24 = function() {
                return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
            }, e.hb = o, o.prototype.save = function(t) {
                var e = new Blob([this.buffer]);
                if (window.URL && URL.createObjectURL) {
                    var s = window.URL.createObjectURL(e),
                        r = document.createElement("a");
                    document.body.appendChild(r), r.setAttribute("href", s), r.setAttribute("download", t), r.setAttribute("target", "_self"), r.click(), window.URL.revokeObjectURL(s)
                } else throw "DataStream.save: Can't create object URL."
            }, o.prototype._dynamicSize = !0, Object.defineProperty(o.prototype, "dynamicSize", {
                get: function() {
                    return this._dynamicSize
                },
                set: function(t) {
                    t || this._trimAlloc(), this._dynamicSize = t
                }
            }), o.prototype.shift = function(t) {
                var e = new ArrayBuffer(this._byteLength - t),
                    s = new Uint8Array(e),
                    r = new Uint8Array(this._buffer, t, s.length);
                s.set(r), this.buffer = e, this.position -= t
            }, o.prototype.writeInt32Array = function(t, e) {
                if (this._realloc(4 * t.length), t instanceof Int32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt32Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeInt32(t[s], e)
            }, o.prototype.writeInt16Array = function(t, e) {
                if (this._realloc(2 * t.length), t instanceof Int16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt16Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeInt16(t[s], e)
            }, o.prototype.writeInt8Array = function(t) {
                if (this._realloc(1 * t.length), t instanceof Int8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt8Array(t.length);
                else
                    for (var e = 0; e < t.length; e++) this.writeInt8(t[e])
            }, o.prototype.writeUint32Array = function(t, e) {
                if (this._realloc(4 * t.length), t instanceof Uint32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint32Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeUint32(t[s], e)
            }, o.prototype.writeUint16Array = function(t, e) {
                if (this._realloc(2 * t.length), t instanceof Uint16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint16Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeUint16(t[s], e)
            }, o.prototype.writeUint8Array = function(t) {
                if (this._realloc(1 * t.length), t instanceof Uint8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint8Array(t.length);
                else
                    for (var e = 0; e < t.length; e++) this.writeUint8(t[e])
            }, o.prototype.writeFloat64Array = function(t, e) {
                if (this._realloc(8 * t.length), t instanceof Float64Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat64Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeFloat64(t[s], e)
            }, o.prototype.writeFloat32Array = function(t, e) {
                if (this._realloc(4 * t.length), t instanceof Float32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) o.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat32Array(t.length, e);
                else
                    for (var s = 0; s < t.length; s++) this.writeFloat32(t[s], e)
            }, o.prototype.writeInt32 = function(t, e) {
                this._realloc(4), this._dataView.setInt32(this.position, t, null == e ? this.endianness : e), this.position += 4
            }, o.prototype.writeInt16 = function(t, e) {
                this._realloc(2), this._dataView.setInt16(this.position, t, null == e ? this.endianness : e), this.position += 2
            }, o.prototype.writeInt8 = function(t) {
                this._realloc(1), this._dataView.setInt8(this.position, t), this.position += 1
            }, o.prototype.writeUint32 = function(t, e) {
                this._realloc(4), this._dataView.setUint32(this.position, t, null == e ? this.endianness : e), this.position += 4
            }, o.prototype.writeUint16 = function(t, e) {
                this._realloc(2), this._dataView.setUint16(this.position, t, null == e ? this.endianness : e), this.position += 2
            }, o.prototype.writeUint8 = function(t) {
                this._realloc(1), this._dataView.setUint8(this.position, t), this.position += 1
            }, o.prototype.writeFloat32 = function(t, e) {
                this._realloc(4), this._dataView.setFloat32(this.position, t, null == e ? this.endianness : e), this.position += 4
            }, o.prototype.writeFloat64 = function(t, e) {
                this._realloc(8), this._dataView.setFloat64(this.position, t, null == e ? this.endianness : e), this.position += 8
            }, o.prototype.writeUCS2String = function(t, e, s) {
                null == s && (s = t.length);
                for (var r = 0; r < t.length && r < s; r++) this.writeUint16(t.charCodeAt(r), e);
                for (; r < s; r++) this.writeUint16(0)
            }, o.prototype.writeString = function(t, e, s) {
                var r = 0;
                if (null == e || "ASCII" == e) {
                    if (null != s) {
                        var n = Math.min(t.length, s);
                        for (r = 0; r < n; r++) this.writeUint8(t.charCodeAt(r));
                        for (; r < s; r++) this.writeUint8(0)
                    } else
                        for (r = 0; r < t.length; r++) this.writeUint8(t.charCodeAt(r))
                } else this.writeUint8Array(new TextEncoder(e).encode(t.substring(0, s)))
            }, o.prototype.writeCString = function(t, e) {
                var s = 0;
                if (null != e) {
                    var r = Math.min(t.length, e);
                    for (s = 0; s < r; s++) this.writeUint8(t.charCodeAt(s));
                    for (; s < e; s++) this.writeUint8(0)
                } else {
                    for (s = 0; s < t.length; s++) this.writeUint8(t.charCodeAt(s));
                    this.writeUint8(0)
                }
            }, o.prototype.writeStruct = function(t, e) {
                for (var s = 0; s < t.length; s += 2) {
                    var r = t[s + 1];
                    this.writeType(r, e[t[s]], e)
                }
            }, o.prototype.writeType = function(t, e, s) {
                if ("function" == typeof t) return t(this, e);
                if ("object" == typeof t && !(t instanceof Array)) return t.set(this, e, s);
                var r, n = null,
                    a = "ASCII",
                    h = this.position;
                switch ("string" == typeof t && /:/.test(t) && (t = (r = t.split(":"))[0], n = parseInt(r[1])), "string" == typeof t && /,/.test(t) && (t = (r = t.split(","))[0], a = parseInt(r[1])), t) {
                    case "uint8":
                        this.writeUint8(e);
                        break;
                    case "int8":
                        this.writeInt8(e);
                        break;
                    case "uint16":
                        this.writeUint16(e, this.endianness);
                        break;
                    case "int16":
                        this.writeInt16(e, this.endianness);
                        break;
                    case "uint32":
                        this.writeUint32(e, this.endianness);
                        break;
                    case "int32":
                        this.writeInt32(e, this.endianness);
                        break;
                    case "float32":
                        this.writeFloat32(e, this.endianness);
                        break;
                    case "float64":
                        this.writeFloat64(e, this.endianness);
                        break;
                    case "uint16be":
                        this.writeUint16(e, o.BIG_ENDIAN);
                        break;
                    case "int16be":
                        this.writeInt16(e, o.BIG_ENDIAN);
                        break;
                    case "uint32be":
                        this.writeUint32(e, o.BIG_ENDIAN);
                        break;
                    case "int32be":
                        this.writeInt32(e, o.BIG_ENDIAN);
                        break;
                    case "float32be":
                        this.writeFloat32(e, o.BIG_ENDIAN);
                        break;
                    case "float64be":
                        this.writeFloat64(e, o.BIG_ENDIAN);
                        break;
                    case "uint16le":
                        this.writeUint16(e, o.LITTLE_ENDIAN);
                        break;
                    case "int16le":
                        this.writeInt16(e, o.LITTLE_ENDIAN);
                        break;
                    case "uint32le":
                        this.writeUint32(e, o.LITTLE_ENDIAN);
                        break;
                    case "int32le":
                        this.writeInt32(e, o.LITTLE_ENDIAN);
                        break;
                    case "float32le":
                        this.writeFloat32(e, o.LITTLE_ENDIAN);
                        break;
                    case "float64le":
                        this.writeFloat64(e, o.LITTLE_ENDIAN);
                        break;
                    case "cstring":
                        this.writeCString(e, n);
                        break;
                    case "string":
                        this.writeString(e, a, n);
                        break;
                    case "u16string":
                        this.writeUCS2String(e, this.endianness, n);
                        break;
                    case "u16stringle":
                        this.writeUCS2String(e, o.LITTLE_ENDIAN, n);
                        break;
                    case "u16stringbe":
                        this.writeUCS2String(e, o.BIG_ENDIAN, n);
                        break;
                    default:
                        if (3 == t.length) {
                            for (var d = t[1], l = 0; l < e.length; l++) this.writeType(d, e[l]);
                            break
                        }
                        this.writeStruct(t, e)
                }
                null != n && (this.position = h, this._realloc(n), this.position = h + n)
            }, o.prototype.writeUint64 = function(t) {
                this.writeUint32(Math.floor(t / 4294967296)), this.writeUint32(4294967295 & t)
            }, o.prototype.writeUint24 = function(t) {
                this.writeUint8((16711680 & t) >> 16), this.writeUint8((65280 & t) >> 8), this.writeUint8(255 & t)
            }, o.prototype.adjustUint32 = function(t, e) {
                var s = this.position;
                this.seek(t), this.writeUint32(e), this.seek(s)
            }, o.prototype.mapInt32Array = function(t, e) {
                this._realloc(4 * t);
                var s = new Int32Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 4 * t, s
            }, o.prototype.mapInt16Array = function(t, e) {
                this._realloc(2 * t);
                var s = new Int16Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 2 * t, s
            }, o.prototype.mapInt8Array = function(t) {
                this._realloc(1 * t);
                var e = new Int8Array(this._buffer, this.byteOffset + this.position, t);
                return this.position += 1 * t, e
            }, o.prototype.mapUint32Array = function(t, e) {
                this._realloc(4 * t);
                var s = new Uint32Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 4 * t, s
            }, o.prototype.mapUint16Array = function(t, e) {
                this._realloc(2 * t);
                var s = new Uint16Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 2 * t, s
            }, o.prototype.mapFloat64Array = function(t, e) {
                this._realloc(8 * t);
                var s = new Float64Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 8 * t, s
            }, o.prototype.mapFloat32Array = function(t, e) {
                this._realloc(4 * t);
                var s = new Float32Array(this._buffer, this.byteOffset + this.position, t);
                return o.arrayToNative(s, null == e ? this.endianness : e), this.position += 4 * t, s
            };
            var h = function(t) {
                this.buffers = [], this.bufferIndex = -1, t && (this.insertBuffer(t), this.bufferIndex = 0)
            };
            h.prototype = new o(new ArrayBuffer, 0, o.BIG_ENDIAN), h.prototype.initialized = function() {
                var t;
                return this.bufferIndex > -1 || (this.buffers.length > 0 ? 0 === (t = this.buffers[0]).fileStart ? (this.buffer = t, this.bufferIndex = 0, n.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (n.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (n.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
            }, ArrayBuffer.concat = function(t, e) {
                n.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (t.byteLength + e.byteLength));
                var s = new Uint8Array(t.byteLength + e.byteLength);
                return s.set(new Uint8Array(t), 0), s.set(new Uint8Array(e), t.byteLength), s.buffer
            }, h.prototype.reduceBuffer = function(t, e, s) {
                var r;
                return (r = new Uint8Array(s)).set(new Uint8Array(t, e, s)), r.buffer.fileStart = t.fileStart + e, r.buffer.usedBytes = 0, r.buffer
            }, h.prototype.insertBuffer = function(t) {
                for (var e = !0, s = 0; s < this.buffers.length; s++) {
                    var r = this.buffers[s];
                    if (t.fileStart <= r.fileStart) {
                        if (t.fileStart === r.fileStart) {
                            if (t.byteLength > r.byteLength) {
                                this.buffers.splice(s, 1), s--;
                                continue
                            }
                            n.warn("MultiBufferStream", "Buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ") already appended, ignoring")
                        } else t.fileStart + t.byteLength <= r.fileStart || (t = this.reduceBuffer(t, 0, r.fileStart - t.fileStart)), n.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.splice(s, 0, t), 0 === s && (this.buffer = t);
                        e = !1;
                        break
                    }
                    if (t.fileStart < r.fileStart + r.byteLength) {
                        var a = r.fileStart + r.byteLength - t.fileStart,
                            o = t.byteLength - a;
                        if (o > 0) t = this.reduceBuffer(t, a, o);
                        else {
                            e = !1;
                            break
                        }
                    }
                }
                e && (n.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.push(t), 0 === s && (this.buffer = t))
            }, h.prototype.logBufferLevel = function(t) {
                var e, s, r, a, o, h = [],
                    d = "";
                for (e = 0, r = 0, a = 0; e < this.buffers.length; e++) s = this.buffers[e], 0 === e ? (h.push(o = {}), o.start = s.fileStart, o.end = s.fileStart + s.byteLength, d += "[" + o.start + "-") : o.end === s.fileStart ? o.end = s.fileStart + s.byteLength : ((o = {}).start = s.fileStart, d += h[h.length - 1].end - 1 + "], [" + o.start + "-", o.end = s.fileStart + s.byteLength, h.push(o)), r += s.usedBytes, a += s.byteLength;
                h.length > 0 && (d += o.end - 1 + "]"), (t ? n.info : n.debug)("MultiBufferStream", 0 === this.buffers.length ? "No more buffer in memory" : "" + this.buffers.length + " stored buffer(s) (" + r + "/" + a + " bytes), continuous ranges: " + d)
            }, h.prototype.cleanBuffers = function() {
                var t, e;
                for (t = 0; t < this.buffers.length; t++)(e = this.buffers[t]).usedBytes === e.byteLength && (n.debug("MultiBufferStream", "Removing buffer #" + t), this.buffers.splice(t, 1), t--)
            }, h.prototype.mergeNextBuffer = function() {
                if (!(this.bufferIndex + 1 < this.buffers.length) || (t = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
                var t, e = this.buffer.byteLength,
                    s = this.buffer.usedBytes,
                    r = this.buffer.fileStart;
                return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, t), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = s, this.buffer.fileStart = r, n.debug("ISOFile", "Concatenating buffer for box parsing (length: " + e + "->" + this.buffer.byteLength + ")"), !0
            }, h.prototype.findPosition = function(t, e, s) {
                var r, a = null,
                    o = -1;
                for (r = !0 === t ? 0 : this.bufferIndex; r < this.buffers.length && (a = this.buffers[r]).fileStart <= e;) o = r, s && (a.fileStart + a.byteLength <= e ? a.usedBytes = a.byteLength : a.usedBytes = e - a.fileStart, this.logBufferLevel()), r++;
                return -1 === o ? -1 : (a = this.buffers[o]).fileStart + a.byteLength >= e ? (n.debug("MultiBufferStream", "Found position in existing buffer #" + o), o) : -1
            }, h.prototype.findEndContiguousBuf = function(t) {
                var e, s, r, n = void 0 !== t ? t : this.bufferIndex;
                if (s = this.buffers[n], this.buffers.length > n + 1)
                    for (e = n + 1; e < this.buffers.length; e++)
                        if ((r = this.buffers[e]).fileStart === s.fileStart + s.byteLength) s = r;
                        else break;
                return s.fileStart + s.byteLength
            }, h.prototype.getEndFilePositionAfter = function(t) {
                var e = this.findPosition(!0, t, !1);
                return -1 !== e ? this.findEndContiguousBuf(e) : t
            }, h.prototype.addUsedBytes = function(t) {
                this.buffer.usedBytes += t, this.logBufferLevel()
            }, h.prototype.setAllUsedBytes = function() {
                this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
            }, h.prototype.seek = function(t, e, s) {
                var r;
                return -1 !== (r = this.findPosition(e, t, s)) ? (this.buffer = this.buffers[r], this.bufferIndex = r, this.position = t - this.buffer.fileStart, n.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (n.debug("MultiBufferStream", "Position " + t + " not found in buffered data"), !1)
            }, h.prototype.getPosition = function() {
                if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
                return this.buffers[this.bufferIndex].fileStart + this.position
            }, h.prototype.getLength = function() {
                return this.byteLength
            }, h.prototype.getEndPosition = function() {
                if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
                return this.buffers[this.bufferIndex].fileStart + this.byteLength
            };
            var d = function() {
                    var t = [];
                    t[3] = "ES_Descriptor", t[4] = "DecoderConfigDescriptor", t[5] = "DecoderSpecificInfo", t[6] = "SLConfigDescriptor", this.getDescriptorName = function(e) {
                        return t[e]
                    };
                    var e = this,
                        s = {};
                    return this.parseOneDescriptor = function(e) {
                        var r, a, o, h = 0,
                            d = 0;
                        for (r = e.readUint8(), h++, o = e.readUint8(), h++; 128 & o;) d = (d << 7) + (127 & o), o = e.readUint8(), h++;
                        return d = (d << 7) + (127 & o), n.debug("MPEG4DescriptorParser", "Found " + (t[r] || "Descriptor " + r) + ", size " + d + " at position " + e.getPosition()), (a = t[r] ? new s[t[r]](d) : new s.Descriptor(d)).parse(e), a
                    }, s.Descriptor = function(t, e) {
                        this.tag = t, this.size = e, this.descs = []
                    }, s.Descriptor.prototype.parse = function(t) {
                        this.data = t.readUint8Array(this.size)
                    }, s.Descriptor.prototype.findDescriptor = function(t) {
                        for (var e = 0; e < this.descs.length; e++)
                            if (this.descs[e].tag == t) return this.descs[e];
                        return null
                    }, s.Descriptor.prototype.parseRemainingDescriptors = function(t) {
                        for (var s = t.position; t.position < s + this.size;) {
                            var r = e.parseOneDescriptor(t);
                            this.descs.push(r)
                        }
                    }, s.ES_Descriptor = function(t) {
                        s.Descriptor.call(this, 3, t)
                    }, s.ES_Descriptor.prototype = new s.Descriptor, s.ES_Descriptor.prototype.parse = function(t) {
                        if (this.ES_ID = t.readUint16(), this.flags = t.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = t.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
                            var e = t.readUint8();
                            this.URL = t.readString(e), this.size -= e + 1
                        } else this.URL = "";
                        32 & this.flags ? (this.OCR_ES_ID = t.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(t)
                    }, s.ES_Descriptor.prototype.getOTI = function(t) {
                        var e = this.findDescriptor(4);
                        return e ? e.oti : 0
                    }, s.ES_Descriptor.prototype.getAudioConfig = function(t) {
                        var e = this.findDescriptor(4);
                        if (!e) return null;
                        var s = e.findDescriptor(5);
                        if (!s || !s.data) return null;
                        var r = (248 & s.data[0]) >> 3;
                        return 31 === r && s.data.length >= 2 && (r = 32 + ((7 & s.data[0]) << 3) + ((224 & s.data[1]) >> 5)), r
                    }, s.DecoderConfigDescriptor = function(t) {
                        s.Descriptor.call(this, 4, t)
                    }, s.DecoderConfigDescriptor.prototype = new s.Descriptor, s.DecoderConfigDescriptor.prototype.parse = function(t) {
                        this.oti = t.readUint8(), this.streamType = t.readUint8(), this.upStream = (this.streamType >> 1 & 1) != 0, this.streamType = this.streamType >>> 2, this.bufferSize = t.readUint24(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32(), this.size -= 13, this.parseRemainingDescriptors(t)
                    }, s.DecoderSpecificInfo = function(t) {
                        s.Descriptor.call(this, 5, t)
                    }, s.DecoderSpecificInfo.prototype = new s.Descriptor, s.SLConfigDescriptor = function(t) {
                        s.Descriptor.call(this, 6, t)
                    }, s.SLConfigDescriptor.prototype = new s.Descriptor, this
                },
                l = {
                    ERR_INVALID_DATA: -1,
                    ERR_NOT_ENOUGH_DATA: 0,
                    OK: 1,
                    BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
                    FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
                    CONTAINER_BOXES: [
                        ["moov", ["trak", "pssh"]],
                        ["trak"],
                        ["edts"],
                        ["mdia"],
                        ["minf"],
                        ["dinf"],
                        ["stbl", ["sgpd", "sbgp"]],
                        ["mvex", ["trex"]],
                        ["moof", ["traf"]],
                        ["traf", ["trun", "sgpd", "sbgp"]],
                        ["vttc"],
                        ["tref"],
                        ["iref"],
                        ["mfra", ["tfra"]],
                        ["meco"],
                        ["hnti"],
                        ["hinf"],
                        ["strk"],
                        ["strd"],
                        ["sinf"],
                        ["rinf"],
                        ["schi"],
                        ["trgr"],
                        ["udta", ["kind"]],
                        ["iprp", ["ipma"]],
                        ["ipco"],
                        ["grpl"],
                        ["j2kH"],
                        ["etyp", ["tyco"]]
                    ],
                    boxCodes: [],
                    fullBoxCodes: [],
                    containerBoxCodes: [],
                    sampleEntryCodes: {},
                    sampleGroupEntryCodes: [],
                    trackGroupTypes: [],
                    UUIDBoxes: {},
                    UUIDs: [],
                    initialize: function() {
                        l.FullBox.prototype = new l.Box, l.ContainerBox.prototype = new l.Box, l.SampleEntry.prototype = new l.Box, l.TrackGroupTypeBox.prototype = new l.FullBox, l.BASIC_BOXES.forEach(function(t) {
                            l.createBoxCtor(t)
                        }), l.FULL_BOXES.forEach(function(t) {
                            l.createFullBoxCtor(t)
                        }), l.CONTAINER_BOXES.forEach(function(t) {
                            l.createContainerBoxCtor(t[0], null, t[1])
                        })
                    },
                    Box: function(t, e, s) {
                        this.type = t, this.size = e, this.uuid = s
                    },
                    FullBox: function(t, e, s) {
                        l.Box.call(this, t, e, s), this.flags = 0, this.version = 0
                    },
                    ContainerBox: function(t, e, s) {
                        l.Box.call(this, t, e, s), this.boxes = []
                    },
                    SampleEntry: function(t, e, s, r) {
                        l.ContainerBox.call(this, t, e), this.hdr_size = s, this.start = r
                    },
                    SampleGroupEntry: function(t) {
                        this.grouping_type = t
                    },
                    TrackGroupTypeBox: function(t, e) {
                        l.FullBox.call(this, t, e)
                    },
                    createBoxCtor: function(t, e) {
                        l.boxCodes.push(t), l[t + "Box"] = function(e) {
                            l.Box.call(this, t, e)
                        }, l[t + "Box"].prototype = new l.Box, e && (l[t + "Box"].prototype.parse = e)
                    },
                    createFullBoxCtor: function(t, e) {
                        l[t + "Box"] = function(e) {
                            l.FullBox.call(this, t, e)
                        }, l[t + "Box"].prototype = new l.FullBox, l[t + "Box"].prototype.parse = function(t) {
                            this.parseFullHeader(t), e && e.call(this, t)
                        }
                    },
                    addSubBoxArrays: function(t) {
                        if (t) {
                            this.subBoxNames = t;
                            for (var e = t.length, s = 0; s < e; s++) this[t[s] + "s"] = []
                        }
                    },
                    createContainerBoxCtor: function(t, e, s) {
                        l[t + "Box"] = function(e) {
                            l.ContainerBox.call(this, t, e), l.addSubBoxArrays.call(this, s)
                        }, l[t + "Box"].prototype = new l.ContainerBox, e && (l[t + "Box"].prototype.parse = e)
                    },
                    createMediaSampleEntryCtor: function(t, e, s) {
                        l.sampleEntryCodes[t] = [], l[t + "SampleEntry"] = function(t, e) {
                            l.SampleEntry.call(this, t, e), l.addSubBoxArrays.call(this, s)
                        }, l[t + "SampleEntry"].prototype = new l.SampleEntry, e && (l[t + "SampleEntry"].prototype.parse = e)
                    },
                    createSampleEntryCtor: function(t, e, s, r) {
                        l.sampleEntryCodes[t].push(e), l[e + "SampleEntry"] = function(s) {
                            l[t + "SampleEntry"].call(this, e, s), l.addSubBoxArrays.call(this, r)
                        }, l[e + "SampleEntry"].prototype = new l[t + "SampleEntry"], s && (l[e + "SampleEntry"].prototype.parse = s)
                    },
                    createEncryptedSampleEntryCtor: function(t, e, s) {
                        l.createSampleEntryCtor.call(this, t, e, s, ["sinf"])
                    },
                    createSampleGroupCtor: function(t, e) {
                        l[t + "SampleGroupEntry"] = function(e) {
                            l.SampleGroupEntry.call(this, t, e)
                        }, l[t + "SampleGroupEntry"].prototype = new l.SampleGroupEntry, e && (l[t + "SampleGroupEntry"].prototype.parse = e)
                    },
                    createTrackGroupCtor: function(t, e) {
                        l[t + "TrackGroupTypeBox"] = function(e) {
                            l.TrackGroupTypeBox.call(this, t, e)
                        }, l[t + "TrackGroupTypeBox"].prototype = new l.TrackGroupTypeBox, e && (l[t + "TrackGroupTypeBox"].prototype.parse = e)
                    },
                    createUUIDBox: function(t, e, s, r) {
                        l.UUIDs.push(t), l.UUIDBoxes[t] = function(r) {
                            e ? l.FullBox.call(this, "uuid", r, t) : s ? l.ContainerBox.call(this, "uuid", r, t) : l.Box.call(this, "uuid", r, t)
                        }, l.UUIDBoxes[t].prototype = e ? new l.FullBox : s ? new l.ContainerBox : new l.Box, r && (e ? l.UUIDBoxes[t].prototype.parse = function(t) {
                            this.parseFullHeader(t), r && r.call(this, t)
                        } : l.UUIDBoxes[t].prototype.parse = r)
                    }
                };

            function p(t, e) {
                this.x = t, this.y = e
            }

            function f(t, e) {
                this.bad_pixel_row = t, this.bad_pixel_column = e
            }
            l.initialize(), l.TKHD_FLAG_ENABLED = 1, l.TKHD_FLAG_IN_MOVIE = 2, l.TKHD_FLAG_IN_PREVIEW = 4, l.TFHD_FLAG_BASE_DATA_OFFSET = 1, l.TFHD_FLAG_SAMPLE_DESC = 2, l.TFHD_FLAG_SAMPLE_DUR = 8, l.TFHD_FLAG_SAMPLE_SIZE = 16, l.TFHD_FLAG_SAMPLE_FLAGS = 32, l.TFHD_FLAG_DUR_EMPTY = 65536, l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, l.TRUN_FLAGS_DATA_OFFSET = 1, l.TRUN_FLAGS_FIRST_FLAG = 4, l.TRUN_FLAGS_DURATION = 256, l.TRUN_FLAGS_SIZE = 512, l.TRUN_FLAGS_FLAGS = 1024, l.TRUN_FLAGS_CTS_OFFSET = 2048, l.Box.prototype.add = function(t) {
                return this.addBox(new l[t + "Box"])
            }, l.Box.prototype.addBox = function(t) {
                return this.boxes.push(t), this[t.type + "s"] ? this[t.type + "s"].push(t) : this[t.type] = t, t
            }, l.Box.prototype.set = function(t, e) {
                return this[t] = e, this
            }, l.Box.prototype.addEntry = function(t, e) {
                var s = e || "entries";
                return this[s] || (this[s] = []), this[s].push(t), this
            }, l.parseUUID = function(t) {
                return l.parseHex16(t)
            }, l.parseHex16 = function(t) {
                for (var e = "", s = 0; s < 16; s++) {
                    var r = t.readUint8().toString(16);
                    e += 1 === r.length ? "0" + r : r
                }
                return e
            }, l.parseOneBox = function(t, e, s) {
                var r, a, o, h = t.getPosition(),
                    d = 0;
                if (t.getEndPosition() - h < 8) return n.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
                    code: l.ERR_NOT_ENOUGH_DATA
                };
                if (s && s < 8) return n.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
                    code: l.ERR_NOT_ENOUGH_DATA
                };
                var p = t.readUint32(),
                    f = t.readString(4),
                    u = f;
                if (n.debug("BoxParser", "Found box of type '" + f + "' and size " + p + " at position " + h), d = 8, "uuid" == f) {
                    if (t.getEndPosition() - t.getPosition() < 16 || s - d < 16) return t.seek(h), n.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
                        code: l.ERR_NOT_ENOUGH_DATA
                    };
                    o = l.parseUUID(t), d += 16, u = o
                }
                if (1 == p) {
                    if (t.getEndPosition() - t.getPosition() < 8 || s && s - d < 8) return t.seek(h), n.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + f + '" box'), {
                        code: l.ERR_NOT_ENOUGH_DATA
                    };
                    p = t.readUint64(), d += 8
                } else if (0 === p) {
                    if (s) p = s;
                    else if ("mdat" !== f) return n.error("BoxParser", "Unlimited box size not supported for type: '" + f + "'"), r = new l.Box(f, p), {
                        code: l.OK,
                        box: r,
                        size: r.size
                    }
                }
                return 0 !== p && p < d ? (n.error("BoxParser", "Box of type " + f + " has an invalid size " + p + " (too small to be a box)"), {
                    code: l.ERR_NOT_ENOUGH_DATA,
                    type: f,
                    size: p,
                    hdr_size: d,
                    start: h
                }) : 0 !== p && s && p > s ? (n.error("BoxParser", "Box of type '" + f + "' has a size " + p + " greater than its container size " + s), {
                    code: l.ERR_NOT_ENOUGH_DATA,
                    type: f,
                    size: p,
                    hdr_size: d,
                    start: h
                }) : 0 !== p && h + p > t.getEndPosition() ? (t.seek(h), n.info("BoxParser", "Not enough data in stream to parse the entire '" + f + "' box"), {
                    code: l.ERR_NOT_ENOUGH_DATA,
                    type: f,
                    size: p,
                    hdr_size: d,
                    start: h
                }) : e ? {
                    code: l.OK,
                    type: f,
                    size: p,
                    hdr_size: d,
                    start: h
                } : (l[f + "Box"] ? r = new l[f + "Box"](p) : "uuid" !== f ? (n.warn("BoxParser", "Unknown box type: '" + f + "'"), (r = new l.Box(f, p)).has_unparsed_data = !0) : l.UUIDBoxes[o] ? r = new l.UUIDBoxes[o](p) : (n.warn("BoxParser", "Unknown uuid type: '" + o + "'"), (r = new l.Box(f, p)).uuid = o, r.has_unparsed_data = !0), r.hdr_size = d, r.start = h, r.write === l.Box.prototype.write && "mdat" !== r.type && (n.info("BoxParser", "'" + u + "' box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(t)), r.parse(t), (a = t.getPosition() - (r.start + r.size)) < 0 ? (n.warn("BoxParser", "Parsing of box '" + u + "' did not read the entire indicated box data size (missing " + -a + " bytes), seeking forward"), t.seek(r.start + r.size)) : a > 0 && (n.error("BoxParser", "Parsing of box '" + u + "' read " + a + " more bytes than the indicated box data size, seeking backwards"), 0 !== r.size && t.seek(r.start + r.size)), {
                    code: l.OK,
                    box: r,
                    size: r.size
                })
            }, l.Box.prototype.parse = function(t) {
                "mdat" != this.type ? this.data = t.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? t.seek(t.getEndPosition()) : t.seek(this.start + this.size)
            }, l.Box.prototype.parseDataAndRewind = function(t) {
                this.data = t.readUint8Array(this.size - this.hdr_size), t.position -= this.size - this.hdr_size
            }, l.FullBox.prototype.parseDataAndRewind = function(t) {
                this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, t.position -= this.size - this.hdr_size
            }, l.FullBox.prototype.parseFullHeader = function(t) {
                this.version = t.readUint8(), this.flags = t.readUint24(), this.hdr_size += 4
            }, l.FullBox.prototype.parse = function(t) {
                this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
            }, l.ContainerBox.prototype.parse = function(t) {
                for (; t.getPosition() < this.start + this.size;) {
                    if ((e = l.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    if (s = e.box, this.boxes.push(s), this.subBoxNames && -1 != this.subBoxNames.indexOf(s.type)) this[this.subBoxNames[this.subBoxNames.indexOf(s.type)] + "s"].push(s);
                    else {
                        var e, s, r = "uuid" !== s.type ? s.type : s.uuid;
                        this[r] ? n.warn("Box of type " + r + " already stored in field of this type") : this[r] = s
                    }
                }
            }, l.Box.prototype.parseLanguage = function(t) {
                this.language = t.readUint16();
                var e = [];
                e[0] = this.language >> 10 & 31, e[1] = this.language >> 5 & 31, e[2] = 31 & this.language, this.languageString = String.fromCharCode(e[0] + 96, e[1] + 96, e[2] + 96)
            }, l.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", l.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", l.SAMPLE_ENTRY_TYPE_HINT = "Hint", l.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", l.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", l.SAMPLE_ENTRY_TYPE_SYSTEM = "System", l.SAMPLE_ENTRY_TYPE_TEXT = "Text", l.SampleEntry.prototype.parseHeader = function(t) {
                t.readUint8Array(6), this.data_reference_index = t.readUint16(), this.hdr_size += 8
            }, l.SampleEntry.prototype.parse = function(t) {
                this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
            }, l.SampleEntry.prototype.parseDataAndRewind = function(t) {
                this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, t.position -= this.size - this.hdr_size
            }, l.SampleEntry.prototype.parseFooter = function(t) {
                l.ContainerBox.prototype.parse.call(this, t)
            }, l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_HINT), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SYSTEM), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_TEXT), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, function(t) {
                var e;
                this.parseHeader(t), t.readUint16(), t.readUint16(), t.readUint32Array(3), this.width = t.readUint16(), this.height = t.readUint16(), this.horizresolution = t.readUint32(), this.vertresolution = t.readUint32(), t.readUint32(), this.frame_count = t.readUint16(), e = Math.min(31, t.readUint8()), this.compressorname = t.readString(e), e < 31 && t.readString(31 - e), this.depth = t.readUint16(), t.readUint16(), this.parseFooter(t)
            }), l.createMediaSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, function(t) {
                this.parseHeader(t), t.readUint32Array(2), this.channel_count = t.readUint16(), this.samplesize = t.readUint16(), t.readUint16(), t.readUint16(), this.samplerate = t.readUint32() / 65536, this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "dav1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "hvt1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "lhe1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "dvh1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "dvhe"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vp08"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "vp09"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "avs3"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "j2ki"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "mjp2"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "mjpg"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "uncv"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "ac-4"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "Opus"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "mha1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "mha2"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "mhm1"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "mhm2"), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "fLaC"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_TEXT, "enct"), l.createEncryptedSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, "encm"), l.createBoxCtor("a1lx", function(t) {
                var e = ((1 & t.readUint8() & 1) + 1) * 16;
                this.layer_size = [];
                for (var s = 0; s < 3; s++) 16 == e ? this.layer_size[s] = t.readUint16() : this.layer_size[s] = t.readUint32()
            }), l.createBoxCtor("a1op", function(t) {
                this.op_index = t.readUint8()
            }), l.createFullBoxCtor("auxC", function(t) {
                this.aux_type = t.readCString();
                var e = this.size - this.hdr_size - (this.aux_type.length + 1);
                this.aux_subtype = t.readUint8Array(e)
            }), l.createBoxCtor("av1C", function(t) {
                var e = t.readUint8();
                if (this.version = 127 & e, 1 !== this.version) {
                    n.error("av1C version " + this.version + " not supported");
                    return
                }
                if (e = t.readUint8(), this.seq_profile = e >> 5 & 7, this.seq_level_idx_0 = 31 & e, e = t.readUint8(), this.seq_tier_0 = e >> 7 & 1, this.high_bitdepth = e >> 6 & 1, this.twelve_bit = e >> 5 & 1, this.monochrome = e >> 4 & 1, this.chroma_subsampling_x = e >> 3 & 1, this.chroma_subsampling_y = e >> 2 & 1, this.chroma_sample_position = 3 & e, e = t.readUint8(), this.reserved_1 = e >> 5 & 7, 0 !== this.reserved_1) {
                    n.error("av1C reserved_1 parsing problem");
                    return
                }
                if (this.initial_presentation_delay_present = e >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & e;
                else if (this.reserved_2 = 15 & e, 0 !== this.reserved_2) {
                    n.error("av1C reserved_2 parsing problem");
                    return
                }
                var s = this.size - this.hdr_size - 4;
                this.configOBUs = t.readUint8Array(s)
            }), l.createBoxCtor("avcC", function(t) {
                var e, s;
                for (e = 0, this.configurationVersion = t.readUint8(), this.AVCProfileIndication = t.readUint8(), this.profile_compatibility = t.readUint8(), this.AVCLevelIndication = t.readUint8(), this.lengthSizeMinusOne = 3 & t.readUint8(), this.nb_SPS_nalus = 31 & t.readUint8(), s = this.size - this.hdr_size - 6, this.SPS = []; e < this.nb_SPS_nalus; e++) this.SPS[e] = {}, this.SPS[e].length = t.readUint16(), this.SPS[e].nalu = t.readUint8Array(this.SPS[e].length), s -= 2 + this.SPS[e].length;
                for (this.nb_PPS_nalus = t.readUint8(), s--, this.PPS = [], e = 0; e < this.nb_PPS_nalus; e++) this.PPS[e] = {}, this.PPS[e].length = t.readUint16(), this.PPS[e].nalu = t.readUint8Array(this.PPS[e].length), s -= 2 + this.PPS[e].length;
                s > 0 && (this.ext = t.readUint8Array(s))
            }), l.createBoxCtor("btrt", function(t) {
                this.bufferSizeDB = t.readUint32(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32()
            }), l.createFullBoxCtor("ccst", function(t) {
                var e = t.readUint8();
                this.all_ref_pics_intra = (128 & e) == 128, this.intra_pred_used = (64 & e) == 64, this.max_ref_per_pic = (63 & e) >> 2, t.readUint24()
            }), l.createBoxCtor("cdef", function(t) {
                var e;
                for (e = 0, this.channel_count = t.readUint16(), this.channel_indexes = [], this.channel_types = [], this.channel_associations = []; e < this.channel_count; e++) this.channel_indexes.push(t.readUint16()), this.channel_types.push(t.readUint16()), this.channel_associations.push(t.readUint16())
            }), l.createBoxCtor("clap", function(t) {
                this.cleanApertureWidthN = t.readUint32(), this.cleanApertureWidthD = t.readUint32(), this.cleanApertureHeightN = t.readUint32(), this.cleanApertureHeightD = t.readUint32(), this.horizOffN = t.readUint32(), this.horizOffD = t.readUint32(), this.vertOffN = t.readUint32(), this.vertOffD = t.readUint32()
            }), l.createBoxCtor("clli", function(t) {
                this.max_content_light_level = t.readUint16(), this.max_pic_average_light_level = t.readUint16()
            }), l.createFullBoxCtor("cmex", function(t) {
                1 & this.flags && (this.pos_x = t.readInt32()), 2 & this.flags && (this.pos_y = t.readInt32()), 4 & this.flags && (this.pos_z = t.readInt32()), 8 & this.flags && (0 == this.version ? 16 & this.flags ? (this.quat_x = t.readInt32(), this.quat_y = t.readInt32(), this.quat_z = t.readInt32()) : (this.quat_x = t.readInt16(), this.quat_y = t.readInt16(), this.quat_z = t.readInt16()) : this.version), 32 & this.flags && (this.id = t.readUint32())
            }), l.createFullBoxCtor("cmin", function(t) {
                this.focal_length_x = t.readInt32(), this.principal_point_x = t.readInt32(), this.principal_point_y = t.readInt32(), 1 & this.flags && (this.focal_length_y = t.readInt32(), this.skew_factor = t.readInt32())
            }), l.createBoxCtor("cmpd", function(t) {
                for (i = 0, this.component_count = t.readUint32(), this.component_types = [], this.component_type_urls = []; i < this.component_count; i++) {
                    var e = t.readUint16();
                    this.component_types.push(e), e >= 32768 && this.component_type_urls.push(t.readCString())
                }
            }), l.createFullBoxCtor("co64", function(t) {
                var e, s;
                if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
                    for (s = 0; s < e; s++) this.chunk_offsets.push(t.readUint64())
            }), l.createFullBoxCtor("CoLL", function(t) {
                this.maxCLL = t.readUint16(), this.maxFALL = t.readUint16()
            }), l.createBoxCtor("colr", function(t) {
                if (this.colour_type = t.readString(4), "nclx" === this.colour_type) {
                    this.colour_primaries = t.readUint16(), this.transfer_characteristics = t.readUint16(), this.matrix_coefficients = t.readUint16();
                    var e = t.readUint8();
                    this.full_range_flag = e >> 7
                } else "rICC" === this.colour_type ? this.ICC_profile = t.readUint8Array(this.size - 4) : "prof" === this.colour_type && (this.ICC_profile = t.readUint8Array(this.size - 4))
            }), l.createFullBoxCtor("cprt", function(t) {
                this.parseLanguage(t), this.notice = t.readCString()
            }), l.createFullBoxCtor("cslg", function(t) {
                0 === this.version && (this.compositionToDTSShift = t.readInt32(), this.leastDecodeToDisplayDelta = t.readInt32(), this.greatestDecodeToDisplayDelta = t.readInt32(), this.compositionStartTime = t.readInt32(), this.compositionEndTime = t.readInt32())
            }), l.createFullBoxCtor("ctts", function(t) {
                if (e = t.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
                    for (s = 0; s < e; s++) {
                        this.sample_counts.push(t.readUint32());
                        var e, s, r = t.readInt32();
                        r < 0 && n.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(r)
                    } else if (1 == this.version)
                        for (s = 0; s < e; s++) this.sample_counts.push(t.readUint32()), this.sample_offsets.push(t.readInt32())
            }), l.createBoxCtor("dac3", function(t) {
                var e = t.readUint8(),
                    s = t.readUint8(),
                    r = t.readUint8();
                this.fscod = e >> 6, this.bsid = e >> 1 & 31, this.bsmod = (1 & e) << 2 | s >> 6 & 3, this.acmod = s >> 3 & 7, this.lfeon = s >> 2 & 1, this.bit_rate_code = 3 & s | r >> 5 & 7
            }), l.createBoxCtor("dec3", function(t) {
                var e = t.readUint16();
                this.data_rate = e >> 3, this.num_ind_sub = 7 & e, this.ind_subs = [];
                for (var s = 0; s < this.num_ind_sub + 1; s++) {
                    var r = {};
                    this.ind_subs.push(r);
                    var n = t.readUint8(),
                        a = t.readUint8(),
                        o = t.readUint8();
                    r.fscod = n >> 6, r.bsid = n >> 1 & 31, r.bsmod = (1 & n) << 4 | a >> 4 & 15, r.acmod = a >> 1 & 7, r.lfeon = 1 & a, r.num_dep_sub = o >> 1 & 15, r.num_dep_sub > 0 && (r.chan_loc = (1 & o) << 8 | t.readUint8())
                }
            }), l.createFullBoxCtor("dfLa", function(t) {
                for (var e = [], s = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];;) {
                    var r = t.readUint8(),
                        n = Math.min(127 & r, s.length - 1);
                    if (n ? t.readUint8Array(t.readUint24()) : (t.readUint8Array(13), this.samplerate = t.readUint32() >> 12, t.readUint8Array(20)), e.push(s[n]), 128 & r) break
                }
                this.numMetadataBlocks = e.length + " (" + e.join(", ") + ")"
            }), l.createBoxCtor("dimm", function(t) {
                this.bytessent = t.readUint64()
            }), l.createBoxCtor("dmax", function(t) {
                this.time = t.readUint32()
            }), l.createBoxCtor("dmed", function(t) {
                this.bytessent = t.readUint64()
            }), l.createBoxCtor("dOps", function(t) {
                if (this.Version = t.readUint8(), this.OutputChannelCount = t.readUint8(), this.PreSkip = t.readUint16(), this.InputSampleRate = t.readUint32(), this.OutputGain = t.readInt16(), this.ChannelMappingFamily = t.readUint8(), 0 !== this.ChannelMappingFamily) {
                    this.StreamCount = t.readUint8(), this.CoupledCount = t.readUint8(), this.ChannelMapping = [];
                    for (var e = 0; e < this.OutputChannelCount; e++) this.ChannelMapping[e] = t.readUint8()
                }
            }), l.createFullBoxCtor("dref", function(t) {
                this.entries = [];
                for (var e, s, r = t.readUint32(), n = 0; n < r; n++) {
                    if ((e = l.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    s = e.box, this.entries.push(s)
                }
            }), l.createBoxCtor("drep", function(t) {
                this.bytessent = t.readUint64()
            }), l.createFullBoxCtor("elng", function(t) {
                this.extended_language = t.readString(this.size - this.hdr_size)
            }), l.createFullBoxCtor("elst", function(t) {
                this.entries = [];
                for (var e = t.readUint32(), s = 0; s < e; s++) {
                    var r = {};
                    this.entries.push(r), 1 === this.version ? (r.segment_duration = t.readUint64(), r.media_time = t.readInt64()) : (r.segment_duration = t.readUint32(), r.media_time = t.readInt32()), r.media_rate_integer = t.readInt16(), r.media_rate_fraction = t.readInt16()
                }
            }), l.createFullBoxCtor("emsg", function(t) {
                1 == this.version ? (this.timescale = t.readUint32(), this.presentation_time = t.readUint64(), this.event_duration = t.readUint32(), this.id = t.readUint32(), this.scheme_id_uri = t.readCString(), this.value = t.readCString()) : (this.scheme_id_uri = t.readCString(), this.value = t.readCString(), this.timescale = t.readUint32(), this.presentation_time_delta = t.readUint32(), this.event_duration = t.readUint32(), this.id = t.readUint32());
                var e = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
                1 == this.version && (e -= 4), this.message_data = t.readUint8Array(e)
            }), l.createEntityToGroupCtor = function(t, e) {
                l[t + "Box"] = function(e) {
                    l.FullBox.call(this, t, e)
                }, l[t + "Box"].prototype = new l.FullBox, l[t + "Box"].prototype.parse = function(t) {
                    if (this.parseFullHeader(t), e) e.call(this, t);
                    else
                        for (i = 0, this.group_id = t.readUint32(), this.num_entities_in_group = t.readUint32(), this.entity_ids = []; i < this.num_entities_in_group; i++) {
                            var s = t.readUint32();
                            this.entity_ids.push(s)
                        }
                }
            }, l.createEntityToGroupCtor("aebr"), l.createEntityToGroupCtor("afbr"), l.createEntityToGroupCtor("albc"), l.createEntityToGroupCtor("altr"), l.createEntityToGroupCtor("brst"), l.createEntityToGroupCtor("dobr"), l.createEntityToGroupCtor("eqiv"), l.createEntityToGroupCtor("favc"), l.createEntityToGroupCtor("fobr"), l.createEntityToGroupCtor("iaug"), l.createEntityToGroupCtor("pano"), l.createEntityToGroupCtor("slid"), l.createEntityToGroupCtor("ster"), l.createEntityToGroupCtor("tsyn"), l.createEntityToGroupCtor("wbbr"), l.createEntityToGroupCtor("prgr"), l.createEntityToGroupCtor("pymd", function(t) {
                this.group_id = t.readUint32(), this.num_entities_in_group = t.readUint32(), this.entity_ids = [];
                for (var e = 0; e < this.num_entities_in_group; e++) {
                    var s = t.readUint32();
                    this.entity_ids.push(s)
                }
                for (e = 0, this.tile_size_x = t.readUint16(), this.tile_size_y = t.readUint16(), this.layer_binning = [], this.tiles_in_layer_column_minus1 = [], this.tiles_in_layer_row_minus1 = []; e < this.num_entities_in_group; e++) this.layer_binning[e] = t.readUint16(), this.tiles_in_layer_row_minus1[e] = t.readUint16(), this.tiles_in_layer_column_minus1[e] = t.readUint16()
            }), l.createFullBoxCtor("esds", function(t) {
                var e = t.readUint8Array(this.size - this.hdr_size);
                if (void 0 !== d) {
                    var s = new d;
                    this.esd = s.parseOneDescriptor(new o(e.buffer, 0, o.BIG_ENDIAN))
                }
            }), l.createBoxCtor("fiel", function(t) {
                this.fieldCount = t.readUint8(), this.fieldOrdering = t.readUint8()
            }), l.createBoxCtor("frma", function(t) {
                this.data_format = t.readString(4)
            }), l.createBoxCtor("ftyp", function(t) {
                var e = this.size - this.hdr_size;
                this.major_brand = t.readString(4), this.minor_version = t.readUint32(), e -= 8, this.compatible_brands = [];
                for (var s = 0; e >= 4;) this.compatible_brands[s] = t.readString(4), e -= 4, s++
            }), l.createFullBoxCtor("hdlr", function(t) {
                0 === this.version && (t.readUint32(), this.handler = t.readString(4), t.readUint32Array(3), this.name = t.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
            }), l.createBoxCtor("hvcC", function(t) {
                this.configurationVersion = t.readUint8(), n = t.readUint8(), this.general_profile_space = n >> 6, this.general_tier_flag = (32 & n) >> 5, this.general_profile_idc = 31 & n, this.general_profile_compatibility = t.readUint32(), this.general_constraint_indicator = t.readUint8Array(6), this.general_level_idc = t.readUint8(), this.min_spatial_segmentation_idc = 4095 & t.readUint16(), this.parallelismType = 3 & t.readUint8(), this.chroma_format_idc = 3 & t.readUint8(), this.bit_depth_luma_minus8 = 7 & t.readUint8(), this.bit_depth_chroma_minus8 = 7 & t.readUint8(), this.avgFrameRate = t.readUint16(), n = t.readUint8(), this.constantFrameRate = n >> 6, this.numTemporalLayers = (13 & n) >> 3, this.temporalIdNested = (4 & n) >> 2, this.lengthSizeMinusOne = 3 & n, this.nalu_arrays = [];
                var e, s, r, n, a = t.readUint8();
                for (e = 0; e < a; e++) {
                    var o = [];
                    this.nalu_arrays.push(o), n = t.readUint8(), o.completeness = (128 & n) >> 7, o.nalu_type = 63 & n;
                    var h = t.readUint16();
                    for (s = 0; s < h; s++) {
                        var d = {};
                        o.push(d), r = t.readUint16(), d.data = t.readUint8Array(r)
                    }
                }
            }), l.createFullBoxCtor("iinf", function(t) {
                var e;
                0 === this.version ? this.entry_count = t.readUint16() : this.entry_count = t.readUint32(), this.item_infos = [];
                for (var s = 0; s < this.entry_count; s++) {
                    if ((e = l.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    "infe" !== e.box.type && n.error("BoxParser", "Expected 'infe' box, got " + e.box.type), this.item_infos[s] = e.box
                }
            }), l.createFullBoxCtor("iloc", function(t) {
                e = t.readUint8(), this.offset_size = e >> 4 & 15, this.length_size = 15 & e, e = t.readUint8(), this.base_offset_size = e >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & e : this.index_size = 0, this.items = [];
                var e, s = 0;
                if (this.version < 2) s = t.readUint16();
                else if (2 === this.version) s = t.readUint32();
                else throw "version of iloc box not supported";
                for (var r = 0; r < s; r++) {
                    var n = {};
                    if (this.items.push(n), this.version < 2) n.item_ID = t.readUint16();
                    else if (2 === this.version) n.item_ID = t.readUint32();
                    else throw "version of iloc box not supported";
                    switch (1 === this.version || 2 === this.version ? n.construction_method = 15 & t.readUint16() : n.construction_method = 0, n.data_reference_index = t.readUint16(), this.base_offset_size) {
                        case 0:
                            n.base_offset = 0;
                            break;
                        case 4:
                            n.base_offset = t.readUint32();
                            break;
                        case 8:
                            n.base_offset = t.readUint64();
                            break;
                        default:
                            throw "Error reading base offset size"
                    }
                    var a = t.readUint16();
                    n.extents = [];
                    for (var o = 0; o < a; o++) {
                        var h = {};
                        if (n.extents.push(h), 1 === this.version || 2 === this.version) switch (this.index_size) {
                            case 0:
                                h.extent_index = 0;
                                break;
                            case 4:
                                h.extent_index = t.readUint32();
                                break;
                            case 8:
                                h.extent_index = t.readUint64();
                                break;
                            default:
                                throw "Error reading extent index"
                        }
                        switch (this.offset_size) {
                            case 0:
                                h.extent_offset = 0;
                                break;
                            case 4:
                                h.extent_offset = t.readUint32();
                                break;
                            case 8:
                                h.extent_offset = t.readUint64();
                                break;
                            default:
                                throw "Error reading extent index"
                        }
                        switch (this.length_size) {
                            case 0:
                                h.extent_length = 0;
                                break;
                            case 4:
                                h.extent_length = t.readUint32();
                                break;
                            case 8:
                                h.extent_length = t.readUint64();
                                break;
                            default:
                                throw "Error reading extent index"
                        }
                    }
                }
            }), l.createBoxCtor("imir", function(t) {
                var e = t.readUint8();
                this.reserved = e >> 7, this.axis = 1 & e
            }), l.createFullBoxCtor("infe", function(t) {
                if ((0 === this.version || 1 === this.version) && (this.item_ID = t.readUint16(), this.item_protection_index = t.readUint16(), this.item_name = t.readCString(), this.content_type = t.readCString(), this.content_encoding = t.readCString()), 1 === this.version) {
                    this.extension_type = t.readString(4), n.warn("BoxParser", "Cannot parse extension type"), t.seek(this.start + this.size);
                    return
                }
                this.version >= 2 && (2 === this.version ? this.item_ID = t.readUint16() : 3 === this.version && (this.item_ID = t.readUint32()), this.item_protection_index = t.readUint16(), this.item_type = t.readString(4), this.item_name = t.readCString(), "mime" === this.item_type ? (this.content_type = t.readCString(), this.content_encoding = t.readCString()) : "uri " === this.item_type && (this.item_uri_type = t.readCString()))
            }), l.createFullBoxCtor("ipma", function(t) {
                var e, s;
                for (e = 0, entry_count = t.readUint32(), this.associations = []; e < entry_count; e++) {
                    var r = {};
                    this.associations.push(r), this.version < 1 ? r.id = t.readUint16() : r.id = t.readUint32();
                    var n = t.readUint8();
                    for (s = 0, r.props = []; s < n; s++) {
                        var a = t.readUint8(),
                            o = {};
                        r.props.push(o), o.essential = (128 & a) >> 7 == 1, 1 & this.flags ? o.property_index = (127 & a) << 8 | t.readUint8() : o.property_index = 127 & a
                    }
                }
            }), l.createFullBoxCtor("iref", function(t) {
                var e, s;
                for (this.references = []; t.getPosition() < this.start + this.size;) {
                    if ((e = l.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    (s = 0 === this.version ? new l.SingleItemTypeReferenceBox(e.type, e.size, e.hdr_size, e.start) : new l.SingleItemTypeReferenceBoxLarge(e.type, e.size, e.hdr_size, e.start)).write === l.Box.prototype.write && "mdat" !== s.type && (n.warn("BoxParser", s.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(t)), s.parse(t), this.references.push(s)
                }
            }), l.createBoxCtor("irot", function(t) {
                this.angle = 3 & t.readUint8()
            }), l.createFullBoxCtor("ispe", function(t) {
                this.image_width = t.readUint32(), this.image_height = t.readUint32()
            }), l.createFullBoxCtor("kind", function(t) {
                this.schemeURI = t.readCString(), this.value = t.readCString()
            }), l.createFullBoxCtor("leva", function(t) {
                var e = t.readUint8();
                this.levels = [];
                for (var s = 0; s < e; s++) {
                    var r = {};
                    this.levels[s] = r, r.track_ID = t.readUint32();
                    var a = t.readUint8();
                    switch (r.padding_flag = a >> 7, r.assignment_type = 127 & a, r.assignment_type) {
                        case 0:
                            r.grouping_type = t.readString(4);
                            break;
                        case 1:
                            r.grouping_type = t.readString(4), r.grouping_type_parameter = t.readUint32();
                            break;
                        case 2:
                        case 3:
                            break;
                        case 4:
                            r.sub_track_id = t.readUint32();
                            break;
                        default:
                            n.warn("BoxParser", "Unknown leva assignement type")
                    }
                }
            }), l.createBoxCtor("lhvC", function(t) {
                this.configurationVersion = t.readUint8(), this.min_spatial_segmentation_idc = 4095 & t.readUint16(), this.parallelismType = 3 & t.readUint8(), r = t.readUint8(), this.numTemporalLayers = (13 & r) >> 3, this.temporalIdNested = (4 & r) >> 2, this.lengthSizeMinusOne = 3 & r, this.nalu_arrays = [];
                var e, s, r, n = t.readUint8();
                for (e = 0; e < n; e++) {
                    var a = [];
                    this.nalu_arrays.push(a), r = t.readUint8(), a.completeness = (128 & r) >> 7, a.nalu_type = 63 & r;
                    var o = t.readUint16();
                    for (s = 0; s < o; s++) {
                        var h = {};
                        a.push(h);
                        var d = t.readUint16();
                        h.data = t.readUint8Array(d)
                    }
                }
            }), l.createBoxCtor("lsel", function(t) {
                this.layer_id = t.readUint16()
            }), l.createBoxCtor("maxr", function(t) {
                this.period = t.readUint32(), this.bytes = t.readUint32()
            }), p.prototype.toString = function() {
                return "(" + this.x + "," + this.y + ")"
            }, l.createBoxCtor("mdcv", function(t) {
                this.display_primaries = [], this.display_primaries[0] = new p(t.readUint16(), t.readUint16()), this.display_primaries[1] = new p(t.readUint16(), t.readUint16()), this.display_primaries[2] = new p(t.readUint16(), t.readUint16()), this.white_point = new p(t.readUint16(), t.readUint16()), this.max_display_mastering_luminance = t.readUint32(), this.min_display_mastering_luminance = t.readUint32()
            }), l.createFullBoxCtor("mdhd", function(t) {
                1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.parseLanguage(t), t.readUint16()
            }), l.createFullBoxCtor("mehd", function(t) {
                1 & this.flags && (n.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = t.readUint64() : this.fragment_duration = t.readUint32()
            }), l.createFullBoxCtor("meta", function(t) {
                this.boxes = [], l.ContainerBox.prototype.parse.call(this, t)
            }), l.createFullBoxCtor("mfhd", function(t) {
                this.sequence_number = t.readUint32()
            }), l.createFullBoxCtor("mfro", function(t) {
                this._size = t.readUint32()
            }), l.createFullBoxCtor("mskC", function(t) {
                this.bits_per_pixel = t.readUint8()
            }), l.createFullBoxCtor("mvhd", function(t) {
                1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.rate = t.readUint32(), this.volume = t.readUint16() >> 8, t.readUint16(), t.readUint32Array(2), this.matrix = t.readUint32Array(9), t.readUint32Array(6), this.next_track_id = t.readUint32()
            }), l.createBoxCtor("npck", function(t) {
                this.packetssent = t.readUint32()
            }), l.createBoxCtor("nump", function(t) {
                this.packetssent = t.readUint64()
            }), l.createFullBoxCtor("padb", function(t) {
                var e = t.readUint32();
                this.padbits = [];
                for (var s = 0; s < Math.floor((e + 1) / 2); s++) this.padbits = t.readUint8()
            }), l.createBoxCtor("pasp", function(t) {
                this.hSpacing = t.readUint32(), this.vSpacing = t.readUint32()
            }), l.createBoxCtor("payl", function(t) {
                this.text = t.readString(this.size - this.hdr_size)
            }), l.createBoxCtor("payt", function(t) {
                this.payloadID = t.readUint32();
                var e = t.readUint8();
                this.rtpmap_string = t.readString(e)
            }), l.createFullBoxCtor("pdin", function(t) {
                var e = (this.size - this.hdr_size) / 8;
                this.rate = [], this.initial_delay = [];
                for (var s = 0; s < e; s++) this.rate[s] = t.readUint32(), this.initial_delay[s] = t.readUint32()
            }), l.createFullBoxCtor("pitm", function(t) {
                0 === this.version ? this.item_id = t.readUint16() : this.item_id = t.readUint32()
            }), l.createFullBoxCtor("pixi", function(t) {
                var e;
                for (e = 0, this.num_channels = t.readUint8(), this.bits_per_channels = []; e < this.num_channels; e++) this.bits_per_channels[e] = t.readUint8()
            }), l.createBoxCtor("pmax", function(t) {
                this.bytes = t.readUint32()
            }), l.createFullBoxCtor("prdi", function(t) {
                if (this.step_count = t.readUint16(), this.item_count = [], 2 & this.flags)
                    for (var e = 0; e < this.step_count; e++) this.item_count[e] = t.readUint16()
            }), l.createFullBoxCtor("prft", function(t) {
                this.ref_track_id = t.readUint32(), this.ntp_timestamp = t.readUint64(), 0 === this.version ? this.media_time = t.readUint32() : this.media_time = t.readUint64()
            }), l.createFullBoxCtor("pssh", function(t) {
                if (this.system_id = l.parseHex16(t), this.version > 0) {
                    var e = t.readUint32();
                    this.kid = [];
                    for (var s = 0; s < e; s++) this.kid[s] = l.parseHex16(t)
                }
                var r = t.readUint32();
                r > 0 && (this.data = t.readUint8Array(r))
            }), l.createFullBoxCtor("clef", function(t) {
                this.width = t.readUint32(), this.height = t.readUint32()
            }), l.createFullBoxCtor("enof", function(t) {
                this.width = t.readUint32(), this.height = t.readUint32()
            }), l.createFullBoxCtor("prof", function(t) {
                this.width = t.readUint32(), this.height = t.readUint32()
            }), l.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), l.createBoxCtor("rtp ", function(t) {
                this.descriptionformat = t.readString(4), this.sdptext = t.readString(this.size - this.hdr_size - 4)
            }), l.createFullBoxCtor("saio", function(t) {
                1 & this.flags && (this.aux_info_type = t.readString(4), this.aux_info_type_parameter = t.readUint32());
                var e = t.readUint32();
                this.offset = [];
                for (var s = 0; s < e; s++) 0 === this.version ? this.offset[s] = t.readUint32() : this.offset[s] = t.readUint64()
            }), l.createFullBoxCtor("saiz", function(t) {
                if (1 & this.flags && (this.aux_info_type = t.readString(4), this.aux_info_type_parameter = t.readUint32()), this.default_sample_info_size = t.readUint8(), this.sample_count = t.readUint32(), this.sample_info_size = [], 0 === this.default_sample_info_size)
                    for (var e = 0; e < this.sample_count; e++) this.sample_info_size[e] = t.readUint8()
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, "mett", function(t) {
                this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, "metx", function(t) {
                this.parseHeader(t), this.content_encoding = t.readCString(), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function(t) {
                this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function(t) {
                this.parseHeader(t), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.auxiliary_mime_types = t.readCString(), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function(t) {
                this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function(t) {
                this.parseHeader(t), this.displayFlags = t.readUint32(), this.horizontal_justification = t.readInt8(), this.vertical_justification = t.readInt8(), this.bg_color_rgba = t.readUint8Array(4), this.box_record = t.readInt16Array(4), this.style_record = t.readUint8Array(12), this.parseFooter(t)
            }), l.createSampleEntryCtor(l.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function(t) {
                this.parseHeader(t), this.parseFooter(t)
            }), l.createSampleGroupCtor("alst", function(t) {
                var e, s = t.readUint16();
                for (e = 0, this.first_output_sample = t.readUint16(), this.sample_offset = []; e < s; e++) this.sample_offset[e] = t.readUint32();
                var r = this.description_length - 4 - 4 * s;
                for (e = 0, this.num_output_samples = [], this.num_total_samples = []; e < r / 4; e++) this.num_output_samples[e] = t.readUint16(), this.num_total_samples[e] = t.readUint16()
            }), l.createSampleGroupCtor("avll", function(t) {
                this.layerNumber = t.readUint8(), this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()
            }), l.createSampleGroupCtor("avss", function(t) {
                this.subSequenceIdentifier = t.readUint16(), this.layerNumber = t.readUint8();
                var e = t.readUint8();
                this.durationFlag = e >> 7, this.avgRateFlag = e >> 6 & 1, this.durationFlag && (this.duration = t.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()), this.dependency = [];
                for (var s = t.readUint8(), r = 0; r < s; r++) {
                    var n = {};
                    this.dependency.push(n), n.subSeqDirectionFlag = t.readUint8(), n.layerNumber = t.readUint8(), n.subSequenceIdentifier = t.readUint16()
                }
            }), l.createSampleGroupCtor("dtrt", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("mvif", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("prol", function(t) {
                this.roll_distance = t.readInt16()
            }), l.createSampleGroupCtor("rap ", function(t) {
                var e = t.readUint8();
                this.num_leading_samples_known = e >> 7, this.num_leading_samples = 127 & e
            }), l.createSampleGroupCtor("rash", function(t) {
                if (this.operation_point_count = t.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) n.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = t.readUint8Array(this.description_length - 2);
                else {
                    if (1 === this.operation_point_count) this.target_rate_share = t.readUint16();
                    else {
                        this.target_rate_share = [], this.available_bitrate = [];
                        for (var e = 0; e < this.operation_point_count; e++) this.available_bitrate[e] = t.readUint32(), this.target_rate_share[e] = t.readUint16()
                    }
                    this.maximum_bitrate = t.readUint32(), this.minimum_bitrate = t.readUint32(), this.discard_priority = t.readUint8()
                }
            }), l.createSampleGroupCtor("roll", function(t) {
                this.roll_distance = t.readInt16()
            }), l.SampleGroupEntry.prototype.parse = function(t) {
                n.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = t.readUint8Array(this.description_length)
            }, l.createSampleGroupCtor("scif", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("scnm", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("seig", function(t) {
                this.reserved = t.readUint8();
                var e = t.readUint8();
                this.crypt_byte_block = e >> 4, this.skip_byte_block = 15 & e, this.isProtected = t.readUint8(), this.Per_Sample_IV_Size = t.readUint8(), this.KID = l.parseHex16(t), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = t.readUint8(), this.constant_IV = t.readUint8Array(this.constant_IV_size))
            }), l.createSampleGroupCtor("stsa", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("sync", function(t) {
                var e = t.readUint8();
                this.NAL_unit_type = 63 & e
            }), l.createSampleGroupCtor("tele", function(t) {
                var e = t.readUint8();
                this.level_independently_decodable = e >> 7
            }), l.createSampleGroupCtor("tsas", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("tscl", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createSampleGroupCtor("vipr", function(t) {
                n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
            }), l.createFullBoxCtor("sbgp", function(t) {
                this.grouping_type = t.readString(4), 1 === this.version ? this.grouping_type_parameter = t.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
                for (var e = t.readUint32(), s = 0; s < e; s++) {
                    var r = {};
                    this.entries.push(r), r.sample_count = t.readInt32(), r.group_description_index = t.readInt32()
                }
            }), f.prototype.toString = function() {
                return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]"
            }, l.createFullBoxCtor("sbpm", function(t) {
                for (e = 0, this.component_count = t.readUint16(), this.component_index = []; e < this.component_count; e++) this.component_index.push(t.readUint16());
                var e, s = t.readUint8();
                for (e = 0, this.correction_applied = 128 == (128 & s), this.num_bad_rows = t.readUint32(), this.num_bad_cols = t.readUint32(), this.num_bad_pixels = t.readUint32(), this.bad_rows = [], this.bad_columns = [], this.bad_pixels = []; e < this.num_bad_rows; e++) this.bad_rows.push(t.readUint32());
                for (e = 0; e < this.num_bad_cols; e++) this.bad_columns.push(t.readUint32());
                for (e = 0; e < this.num_bad_pixels; e++) {
                    var r = t.readUint32(),
                        n = t.readUint32();
                    this.bad_pixels.push(new f(r, n))
                }
            }), l.createFullBoxCtor("schm", function(t) {
                this.scheme_type = t.readString(4), this.scheme_version = t.readUint32(), 1 & this.flags && (this.scheme_uri = t.readString(this.size - this.hdr_size - 8))
            }), l.createBoxCtor("sdp ", function(t) {
                this.sdptext = t.readString(this.size - this.hdr_size)
            }), l.createFullBoxCtor("sdtp", function(t) {
                var e, s = this.size - this.hdr_size;
                this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
                for (var r = 0; r < s; r++) e = t.readUint8(), this.is_leading[r] = e >> 6, this.sample_depends_on[r] = e >> 4 & 3, this.sample_is_depended_on[r] = e >> 2 & 3, this.sample_has_redundancy[r] = 3 & e
            }), l.createFullBoxCtor("senc"), l.createFullBoxCtor("sgpd", function(t) {
                this.grouping_type = t.readString(4), n.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = t.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = t.readUint32()), this.entries = [];
                for (var e, s = t.readUint32(), r = 0; r < s; r++) e = l[this.grouping_type + "SampleGroupEntry"] ? new l[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new l.SampleGroupEntry(this.grouping_type), this.entries.push(e), 1 === this.version && 0 === this.default_length ? e.description_length = t.readUint32() : e.description_length = this.default_length, e.write === l.SampleGroupEntry.prototype.write && (n.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), e.data = t.readUint8Array(e.description_length), t.position -= e.description_length), e.parse(t)
            }), l.createFullBoxCtor("sidx", function(t) {
                this.reference_ID = t.readUint32(), this.timescale = t.readUint32(), 0 === this.version ? (this.earliest_presentation_time = t.readUint32(), this.first_offset = t.readUint32()) : (this.earliest_presentation_time = t.readUint64(), this.first_offset = t.readUint64()), t.readUint16(), this.references = [];
                for (var e = t.readUint16(), s = 0; s < e; s++) {
                    var r = {};
                    this.references.push(r);
                    var n = t.readUint32();
                    r.reference_type = n >> 31 & 1, r.referenced_size = 2147483647 & n, r.subsegment_duration = t.readUint32(), n = t.readUint32(), r.starts_with_SAP = n >> 31 & 1, r.SAP_type = n >> 28 & 7, r.SAP_delta_time = 268435455 & n
                }
            }), l.SingleItemTypeReferenceBox = function(t, e, s, r) {
                l.Box.call(this, t, e), this.hdr_size = s, this.start = r
            }, l.SingleItemTypeReferenceBox.prototype = new l.Box, l.SingleItemTypeReferenceBox.prototype.parse = function(t) {
                this.from_item_ID = t.readUint16();
                var e = t.readUint16();
                this.references = [];
                for (var s = 0; s < e; s++) this.references[s] = {}, this.references[s].to_item_ID = t.readUint16()
            }, l.SingleItemTypeReferenceBoxLarge = function(t, e, s, r) {
                l.Box.call(this, t, e), this.hdr_size = s, this.start = r
            }, l.SingleItemTypeReferenceBoxLarge.prototype = new l.Box, l.SingleItemTypeReferenceBoxLarge.prototype.parse = function(t) {
                this.from_item_ID = t.readUint32();
                var e = t.readUint16();
                this.references = [];
                for (var s = 0; s < e; s++) this.references[s] = {}, this.references[s].to_item_ID = t.readUint32()
            }, l.createFullBoxCtor("SmDm", function(t) {
                this.primaryRChromaticity_x = t.readUint16(), this.primaryRChromaticity_y = t.readUint16(), this.primaryGChromaticity_x = t.readUint16(), this.primaryGChromaticity_y = t.readUint16(), this.primaryBChromaticity_x = t.readUint16(), this.primaryBChromaticity_y = t.readUint16(), this.whitePointChromaticity_x = t.readUint16(), this.whitePointChromaticity_y = t.readUint16(), this.luminanceMax = t.readUint32(), this.luminanceMin = t.readUint32()
            }), l.createFullBoxCtor("smhd", function(t) {
                this.balance = t.readUint16(), t.readUint16()
            }), l.createFullBoxCtor("ssix", function(t) {
                this.subsegments = [];
                for (var e = t.readUint32(), s = 0; s < e; s++) {
                    var r = {};
                    this.subsegments.push(r), r.ranges = [];
                    for (var n = t.readUint32(), a = 0; a < n; a++) {
                        var o = {};
                        r.ranges.push(o), o.level = t.readUint8(), o.range_size = t.readUint24()
                    }
                }
            }), l.createFullBoxCtor("stco", function(t) {
                var e;
                if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
                    for (var s = 0; s < e; s++) this.chunk_offsets.push(t.readUint32())
            }), l.createFullBoxCtor("stdp", function(t) {
                var e = (this.size - this.hdr_size) / 2;
                this.priority = [];
                for (var s = 0; s < e; s++) this.priority[s] = t.readUint16()
            }), l.createFullBoxCtor("sthd"), l.createFullBoxCtor("stri", function(t) {
                this.switch_group = t.readUint16(), this.alternate_group = t.readUint16(), this.sub_track_id = t.readUint32();
                var e = (this.size - this.hdr_size - 8) / 4;
                this.attribute_list = [];
                for (var s = 0; s < e; s++) this.attribute_list[s] = t.readUint32()
            }), l.createFullBoxCtor("stsc", function(t) {
                var e, s;
                if (e = t.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
                    for (s = 0; s < e; s++) this.first_chunk.push(t.readUint32()), this.samples_per_chunk.push(t.readUint32()), this.sample_description_index.push(t.readUint32())
            }), l.createFullBoxCtor("stsd", function(t) {
                var e, s, r, a;
                for (e = 1, this.entries = [], r = t.readUint32(); e <= r; e++) {
                    if ((s = l.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    l[s.type + "SampleEntry"] ? ((a = new l[s.type + "SampleEntry"](s.size)).hdr_size = s.hdr_size, a.start = s.start) : (n.warn("BoxParser", "Unknown sample entry type: " + s.type), a = new l.SampleEntry(s.type, s.size, s.hdr_size, s.start)), a.write === l.SampleEntry.prototype.write && (n.info("BoxParser", "SampleEntry " + a.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), a.parseDataAndRewind(t)), a.parse(t), this.entries.push(a)
                }
            }), l.createFullBoxCtor("stsg", function(t) {
                this.grouping_type = t.readUint32();
                var e = t.readUint16();
                this.group_description_index = [];
                for (var s = 0; s < e; s++) this.group_description_index[s] = t.readUint32()
            }), l.createFullBoxCtor("stsh", function(t) {
                var e, s;
                if (e = t.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
                    for (s = 0; s < e; s++) this.shadowed_sample_numbers.push(t.readUint32()), this.sync_sample_numbers.push(t.readUint32())
            }), l.createFullBoxCtor("stss", function(t) {
                var e, s;
                if (s = t.readUint32(), 0 === this.version)
                    for (e = 0, this.sample_numbers = []; e < s; e++) this.sample_numbers.push(t.readUint32())
            }), l.createFullBoxCtor("stsz", function(t) {
                var e;
                if (this.sample_sizes = [], 0 === this.version)
                    for (e = 0, this.sample_size = t.readUint32(), this.sample_count = t.readUint32(); e < this.sample_count; e++) 0 === this.sample_size ? this.sample_sizes.push(t.readUint32()) : this.sample_sizes[e] = this.sample_size
            }), l.createFullBoxCtor("stts", function(t) {
                var e, s, r;
                if (e = t.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
                    for (s = 0; s < e; s++) this.sample_counts.push(t.readUint32()), (r = t.readInt32()) < 0 && (n.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), r = 1), this.sample_deltas.push(r)
            }), l.createFullBoxCtor("stvi", function(t) {
                var e, s, r = t.readUint32();
                this.single_view_allowed = 3 & r, this.stereo_scheme = t.readUint32();
                var n = t.readUint32();
                for (this.stereo_indication_type = t.readString(n), this.boxes = []; t.getPosition() < this.start + this.size;) {
                    if ((e = l.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    s = e.box, this.boxes.push(s), this[s.type] = s
                }
            }), l.createBoxCtor("styp", function(t) {
                l.ftypBox.prototype.parse.call(this, t)
            }), l.createFullBoxCtor("stz2", function(t) {
                if (this.sample_sizes = [], 0 === this.version) {
                    if (this.reserved = t.readUint24(), this.field_size = t.readUint8(), s = t.readUint32(), 4 === this.field_size)
                        for (e = 0; e < s; e += 2) {
                            var e, s, r = t.readUint8();
                            this.sample_sizes[e] = r >> 4 & 15, this.sample_sizes[e + 1] = 15 & r
                        } else if (8 === this.field_size)
                            for (e = 0; e < s; e++) this.sample_sizes[e] = t.readUint8();
                        else if (16 === this.field_size)
                        for (e = 0; e < s; e++) this.sample_sizes[e] = t.readUint16();
                    else n.error("BoxParser", "Error in length field in stz2 box")
                }
            }), l.createFullBoxCtor("subs", function(t) {
                for (e = 0, r = t.readUint32(), this.entries = []; e < r; e++) {
                    var e, s, r, n, a = {};
                    if (this.entries[e] = a, a.sample_delta = t.readUint32(), a.subsamples = [], (n = t.readUint16()) > 0)
                        for (s = 0; s < n; s++) {
                            var o = {};
                            a.subsamples.push(o), 1 == this.version ? o.size = t.readUint32() : o.size = t.readUint16(), o.priority = t.readUint8(), o.discardable = t.readUint8(), o.codec_specific_parameters = t.readUint32()
                        }
                }
            }), l.createFullBoxCtor("tenc", function(t) {
                if (t.readUint8(), 0 === this.version) t.readUint8();
                else {
                    var e = t.readUint8();
                    this.default_crypt_byte_block = e >> 4 & 15, this.default_skip_byte_block = 15 & e
                }
                this.default_isProtected = t.readUint8(), this.default_Per_Sample_IV_Size = t.readUint8(), this.default_KID = l.parseHex16(t), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = t.readUint8(), this.default_constant_IV = t.readUint8Array(this.default_constant_IV_size))
            }), l.createFullBoxCtor("tfdt", function(t) {
                1 == this.version ? this.baseMediaDecodeTime = t.readUint64() : this.baseMediaDecodeTime = t.readUint32()
            }), l.createFullBoxCtor("tfhd", function(t) {
                var e = 0;
                this.track_id = t.readUint32(), this.size - this.hdr_size > e && this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = t.readUint64(), e += 8) : this.base_data_offset = 0, this.size - this.hdr_size > e && this.flags & l.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = t.readUint32(), e += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > e && this.flags & l.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = t.readUint32(), e += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > e && this.flags & l.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = t.readUint32(), e += 4) : this.default_sample_size = 0, this.size - this.hdr_size > e && this.flags & l.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = t.readUint32(), e += 4) : this.default_sample_flags = 0
            }), l.createFullBoxCtor("tfra", function(t) {
                this.track_ID = t.readUint32(), t.readUint24();
                var e = t.readUint8();
                this.length_size_of_traf_num = e >> 4 & 3, this.length_size_of_trun_num = e >> 2 & 3, this.length_size_of_sample_num = 3 & e, this.entries = [];
                for (var s = t.readUint32(), r = 0; r < s; r++) 1 === this.version ? (this.time = t.readUint64(), this.moof_offset = t.readUint64()) : (this.time = t.readUint32(), this.moof_offset = t.readUint32()), this.traf_number = t["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = t["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = t["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
            }), l.createFullBoxCtor("tkhd", function(t) {
                1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint32()), t.readUint32Array(2), this.layer = t.readInt16(), this.alternate_group = t.readInt16(), this.volume = t.readInt16() >> 8, t.readUint16(), this.matrix = t.readInt32Array(9), this.width = t.readUint32(), this.height = t.readUint32()
            }), l.createBoxCtor("tmax", function(t) {
                this.time = t.readUint32()
            }), l.createBoxCtor("tmin", function(t) {
                this.time = t.readUint32()
            }), l.createBoxCtor("totl", function(t) {
                this.bytessent = t.readUint32()
            }), l.createBoxCtor("tpay", function(t) {
                this.bytessent = t.readUint32()
            }), l.createBoxCtor("tpyl", function(t) {
                this.bytessent = t.readUint64()
            }), l.TrackGroupTypeBox.prototype.parse = function(t) {
                this.parseFullHeader(t), this.track_group_id = t.readUint32()
            }, l.createTrackGroupCtor("msrc"), l.TrackReferenceTypeBox = function(t, e, s, r) {
                l.Box.call(this, t, e), this.hdr_size = s, this.start = r
            }, l.TrackReferenceTypeBox.prototype = new l.Box, l.TrackReferenceTypeBox.prototype.parse = function(t) {
                this.track_ids = t.readUint32Array((this.size - this.hdr_size) / 4)
            }, l.trefBox.prototype.parse = function(t) {
                for (var e, s; t.getPosition() < this.start + this.size;) {
                    if ((e = l.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    (s = new l.TrackReferenceTypeBox(e.type, e.size, e.hdr_size, e.start)).write === l.Box.prototype.write && "mdat" !== s.type && (n.info("BoxParser", "TrackReference " + s.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(t)), s.parse(t), this.boxes.push(s)
                }
            }, l.createFullBoxCtor("trep", function(t) {
                for (this.track_ID = t.readUint32(), this.boxes = []; t.getPosition() < this.start + this.size;) {
                    if ((ret = l.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== l.OK) return;
                    box = ret.box, this.boxes.push(box)
                }
            }), l.createFullBoxCtor("trex", function(t) {
                this.track_id = t.readUint32(), this.default_sample_description_index = t.readUint32(), this.default_sample_duration = t.readUint32(), this.default_sample_size = t.readUint32(), this.default_sample_flags = t.readUint32()
            }), l.createBoxCtor("trpy", function(t) {
                this.bytessent = t.readUint64()
            }), l.createFullBoxCtor("trun", function(t) {
                var e = 0;
                if (this.sample_count = t.readUint32(), e += 4, this.size - this.hdr_size > e && this.flags & l.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = t.readInt32(), e += 4) : this.data_offset = 0, this.size - this.hdr_size > e && this.flags & l.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = t.readUint32(), e += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > e)
                    for (var s = 0; s < this.sample_count; s++) this.flags & l.TRUN_FLAGS_DURATION && (this.sample_duration[s] = t.readUint32()), this.flags & l.TRUN_FLAGS_SIZE && (this.sample_size[s] = t.readUint32()), this.flags & l.TRUN_FLAGS_FLAGS && (this.sample_flags[s] = t.readUint32()), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[s] = t.readUint32() : this.sample_composition_time_offset[s] = t.readInt32())
            }), l.createFullBoxCtor("tsel", function(t) {
                this.switch_group = t.readUint32();
                var e = (this.size - this.hdr_size - 4) / 4;
                this.attribute_list = [];
                for (var s = 0; s < e; s++) this.attribute_list[s] = t.readUint32()
            }), l.createFullBoxCtor("txtC", function(t) {
                this.config = t.readCString()
            }), l.createBoxCtor("tyco", function(t) {
                var e = (this.size - this.hdr_size) / 4;
                this.compatible_brands = [];
                for (var s = 0; s < e; s++) this.compatible_brands[s] = t.readString(4)
            }), l.createFullBoxCtor("udes", function(t) {
                this.lang = t.readCString(), this.name = t.readCString(), this.description = t.readCString(), this.tags = t.readCString()
            }), l.createFullBoxCtor("uncC", function(t) {
                var e;
                if (this.profile = t.readUint32(), 1 == this.version);
                else if (0 == this.version) {
                    for (e = 0, this.component_count = t.readUint32(), this.component_index = [], this.component_bit_depth_minus_one = [], this.component_format = [], this.component_align_size = []; e < this.component_count; e++) this.component_index.push(t.readUint16()), this.component_bit_depth_minus_one.push(t.readUint8()), this.component_format.push(t.readUint8()), this.component_align_size.push(t.readUint8());
                    this.sampling_type = t.readUint8(), this.interleave_type = t.readUint8(), this.block_size = t.readUint8();
                    var s = t.readUint8();
                    this.component_little_endian = s >> 7 & 1, this.block_pad_lsb = s >> 6 & 1, this.block_little_endian = s >> 5 & 1, this.block_reversed = s >> 4 & 1, this.pad_unknown = s >> 3 & 1, this.pixel_size = t.readUint32(), this.row_align_size = t.readUint32(), this.tile_align_size = t.readUint32(), this.num_tile_cols_minus_one = t.readUint32(), this.num_tile_rows_minus_one = t.readUint32()
                }
            }), l.createFullBoxCtor("url ", function(t) {
                1 !== this.flags && (this.location = t.readCString())
            }), l.createFullBoxCtor("urn ", function(t) {
                this.name = t.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = t.readCString())
            }), l.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function(t) {
                this.LiveServerManifest = t.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
            }), l.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function(t) {
                this.system_id = l.parseHex16(t);
                var e = t.readUint32();
                e > 0 && (this.data = t.readUint8Array(e))
            }), l.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), l.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function(t) {
                this.default_AlgorithmID = t.readUint24(), this.default_IV_size = t.readUint8(), this.default_KID = l.parseHex16(t)
            }), l.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function(t) {
                this.fragment_count = t.readUint8(), this.entries = [];
                for (var e = 0; e < this.fragment_count; e++) {
                    var s = {},
                        r = 0,
                        n = 0;
                    1 === this.version ? (r = t.readUint64(), n = t.readUint64()) : (r = t.readUint32(), n = t.readUint32()), s.absolute_time = r, s.absolute_duration = n, this.entries.push(s)
                }
            }), l.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function(t) {
                1 === this.version ? (this.absolute_time = t.readUint64(), this.duration = t.readUint64()) : (this.absolute_time = t.readUint32(), this.duration = t.readUint32())
            }), l.createFullBoxCtor("vmhd", function(t) {
                this.graphicsmode = t.readUint16(), this.opcolor = t.readUint16Array(3)
            }), l.createFullBoxCtor("vpcC", function(t) {
                var e;
                1 === this.version ? (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4, this.chromaSubsampling = e >> 1 & 7, this.videoFullRangeFlag = 1 & e, this.colourPrimaries = t.readUint8(), this.transferCharacteristics = t.readUint8(), this.matrixCoefficients = t.readUint8()) : (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4 & 15, this.colorSpace = 15 & e, e = t.readUint8(), this.chromaSubsampling = e >> 4 & 15, this.transferFunction = e >> 1 & 7, this.videoFullRangeFlag = 1 & e), this.codecIntializationDataSize = t.readUint16(), this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize)
            }), l.createBoxCtor("vttC", function(t) {
                this.text = t.readString(this.size - this.hdr_size)
            }), l.createFullBoxCtor("vvcC", function(t) {
                var e, s, r = {
                    held_bits: void 0,
                    num_held_bits: 0,
                    stream_read_1_bytes: function(t) {
                        this.held_bits = t.readUint8(), this.num_held_bits = 8
                    },
                    stream_read_2_bytes: function(t) {
                        this.held_bits = t.readUint16(), this.num_held_bits = 16
                    },
                    extract_bits: function(t) {
                        var e = this.held_bits >> this.num_held_bits - t & (1 << t) - 1;
                        return this.num_held_bits -= t, e
                    }
                };
                if (r.stream_read_1_bytes(t), r.extract_bits(5), this.lengthSizeMinusOne = r.extract_bits(2), this.ptl_present_flag = r.extract_bits(1), this.ptl_present_flag) {
                    if (r.stream_read_2_bytes(t), this.ols_idx = r.extract_bits(9), this.num_sublayers = r.extract_bits(3), this.constant_frame_rate = r.extract_bits(2), this.chroma_format_idc = r.extract_bits(2), r.stream_read_1_bytes(t), this.bit_depth_minus8 = r.extract_bits(3), r.extract_bits(5), r.stream_read_2_bytes(t), r.extract_bits(2), this.num_bytes_constraint_info = r.extract_bits(6), this.general_profile_idc = r.extract_bits(7), this.general_tier_flag = r.extract_bits(1), this.general_level_idc = t.readUint8(), r.stream_read_1_bytes(t), this.ptl_frame_only_constraint_flag = r.extract_bits(1), this.ptl_multilayer_enabled_flag = r.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
                        for (e = 0; e < this.num_bytes_constraint_info - 1; e++) {
                            var n = r.extract_bits(6);
                            r.stream_read_1_bytes(t);
                            var a = r.extract_bits(2);
                            this.general_constraint_info[e] = n << 2 | a
                        }
                        this.general_constraint_info[this.num_bytes_constraint_info - 1] = r.extract_bits(6)
                    } else r.extract_bits(6);
                    if (this.num_sublayers > 1) {
                        for (r.stream_read_1_bytes(t), this.ptl_sublayer_present_mask = 0, s = this.num_sublayers - 2; s >= 0; --s) {
                            var o = r.extract_bits(1);
                            this.ptl_sublayer_present_mask |= o << s
                        }
                        for (s = this.num_sublayers; s <= 8 && this.num_sublayers > 1; ++s) r.extract_bits(1);
                        for (this.sublayer_level_idc = [], s = this.num_sublayers - 2; s >= 0; --s) this.ptl_sublayer_present_mask & 1 << s && (this.sublayer_level_idc[s] = t.readUint8())
                    }
                    if (this.ptl_num_sub_profiles = t.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles)
                        for (e = 0; e < this.ptl_num_sub_profiles; e++) this.general_sub_profile_idc.push(t.readUint32());
                    this.max_picture_width = t.readUint16(), this.max_picture_height = t.readUint16(), this.avg_frame_rate = t.readUint16()
                }
                this.nalu_arrays = [];
                var h = t.readUint8();
                for (e = 0; e < h; e++) {
                    var d = [];
                    this.nalu_arrays.push(d), r.stream_read_1_bytes(t), d.completeness = r.extract_bits(1), r.extract_bits(2), d.nalu_type = r.extract_bits(5);
                    var l = 1;
                    for (13 != d.nalu_type && 12 != d.nalu_type && (l = t.readUint16()), s = 0; s < l; s++) {
                        var p = t.readUint16();
                        d.push({
                            data: t.readUint8Array(p),
                            length: p
                        })
                    }
                }
            }), l.createFullBoxCtor("vvnC", function(t) {
                var e = strm.readUint8();
                this.lengthSizeMinusOne = 3 & e
            }), l.SampleEntry.prototype.isVideo = function() {
                return !1
            }, l.SampleEntry.prototype.isAudio = function() {
                return !1
            }, l.SampleEntry.prototype.isSubtitle = function() {
                return !1
            }, l.SampleEntry.prototype.isMetadata = function() {
                return !1
            }, l.SampleEntry.prototype.isHint = function() {
                return !1
            }, l.SampleEntry.prototype.getCodec = function() {
                return this.type.replace(".", "")
            }, l.SampleEntry.prototype.getWidth = function() {
                return ""
            }, l.SampleEntry.prototype.getHeight = function() {
                return ""
            }, l.SampleEntry.prototype.getChannelCount = function() {
                return ""
            }, l.SampleEntry.prototype.getSampleRate = function() {
                return ""
            }, l.SampleEntry.prototype.getSampleSize = function() {
                return ""
            }, l.VisualSampleEntry.prototype.isVideo = function() {
                return !0
            }, l.VisualSampleEntry.prototype.getWidth = function() {
                return this.width
            }, l.VisualSampleEntry.prototype.getHeight = function() {
                return this.height
            }, l.AudioSampleEntry.prototype.isAudio = function() {
                return !0
            }, l.AudioSampleEntry.prototype.getChannelCount = function() {
                return this.channel_count
            }, l.AudioSampleEntry.prototype.getSampleRate = function() {
                return this.samplerate
            }, l.AudioSampleEntry.prototype.getSampleSize = function() {
                return this.samplesize
            }, l.SubtitleSampleEntry.prototype.isSubtitle = function() {
                return !0
            }, l.MetadataSampleEntry.prototype.isMetadata = function() {
                return !0
            }, l.decimalToHex = function(t, e) {
                var s = Number(t).toString(16);
                for (e = null == e ? e = 2 : e; s.length < e;) s = "0" + s;
                return s
            }, l.avc1SampleEntry.prototype.getCodec = l.avc2SampleEntry.prototype.getCodec = l.avc3SampleEntry.prototype.getCodec = l.avc4SampleEntry.prototype.getCodec = function() {
                var t = l.SampleEntry.prototype.getCodec.call(this);
                return this.avcC ? t + "." + l.decimalToHex(this.avcC.AVCProfileIndication) + l.decimalToHex(this.avcC.profile_compatibility) + l.decimalToHex(this.avcC.AVCLevelIndication) : t
            }, l.hev1SampleEntry.prototype.getCodec = l.hvc1SampleEntry.prototype.getCodec = function() {
                var t, e = l.SampleEntry.prototype.getCodec.call(this);
                if (this.hvcC) {
                    switch (e += ".", this.hvcC.general_profile_space) {
                        case 0:
                            e += "";
                            break;
                        case 1:
                            e += "A";
                            break;
                        case 2:
                            e += "B";
                            break;
                        case 3:
                            e += "C"
                    }
                    e += this.hvcC.general_profile_idc + ".";
                    var s = this.hvcC.general_profile_compatibility,
                        r = 0;
                    for (t = 0; t < 32 && (r |= 1 & s, 31 != t); t++) r <<= 1, s >>= 1;
                    e += l.decimalToHex(r, 0) + ".", 0 === this.hvcC.general_tier_flag ? e += "L" : e += "H", e += this.hvcC.general_level_idc;
                    var n = !1,
                        a = "";
                    for (t = 5; t >= 0; t--)(this.hvcC.general_constraint_indicator[t] || n) && (a = "." + l.decimalToHex(this.hvcC.general_constraint_indicator[t], 0) + a, n = !0);
                    e += a
                }
                return e
            }, l.vvc1SampleEntry.prototype.getCodec = l.vvi1SampleEntry.prototype.getCodec = function() {
                var t = l.SampleEntry.prototype.getCodec.call(this);
                if (this.vvcC) {
                    t += "." + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? t += ".H" : t += ".L", t += this.vvcC.general_level_idc;
                    var e = "";
                    if (this.vvcC.general_constraint_info) {
                        var s, r, n, a = [];
                        for (r = 0, s = 0 | this.vvcC.ptl_frame_only_constraint << 7 | this.vvcC.ptl_multilayer_enabled << 6; r < this.vvcC.general_constraint_info.length; ++r) s |= this.vvcC.general_constraint_info[r] >> 2 & 63, a.push(s), s && (n = r), s = this.vvcC.general_constraint_info[r] >> 2 & 3;
                        if (void 0 === n) e = ".CA";
                        else {
                            e = ".C";
                            var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                                h = 0,
                                d = 0;
                            for (r = 0; r <= n; ++r)
                                for (h = h << 8 | a[r], d += 8; d >= 5;) e += o[h >> d - 5 & 31], d -= 5, h &= (1 << d) - 1;
                            d && (h <<= 5 - d, e += o[31 & h])
                        }
                    }
                    t += e
                }
                return t
            }, l.mp4aSampleEntry.prototype.getCodec = function() {
                var t = l.SampleEntry.prototype.getCodec.call(this);
                if (!this.esds || !this.esds.esd) return t;
                var e = this.esds.esd.getOTI(),
                    s = this.esds.esd.getAudioConfig();
                return t + "." + l.decimalToHex(e) + (s ? "." + s : "")
            }, l.stxtSampleEntry.prototype.getCodec = function() {
                var t = l.SampleEntry.prototype.getCodec.call(this);
                return this.mime_format ? t + "." + this.mime_format : t
            }, l.vp08SampleEntry.prototype.getCodec = l.vp09SampleEntry.prototype.getCodec = function() {
                var t = l.SampleEntry.prototype.getCodec.call(this),
                    e = this.vpcC.level;
                0 == e && (e = "00");
                var s = this.vpcC.bitDepth;
                return 8 == s && (s = "08"), t + ".0" + this.vpcC.profile + "." + e + "." + s
            }, l.av01SampleEntry.prototype.getCodec = function() {
                var t, e = l.SampleEntry.prototype.getCodec.call(this),
                    s = this.av1C.seq_level_idx_0;
                return s < 10 && (s = "0" + s), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? t = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (t = 1 === this.av1C.high_bitdepth ? "10" : "08"), e + "." + this.av1C.seq_profile + "." + s + (this.av1C.seq_tier_0 ? "H" : "M") + "." + t
            }, l.Box.prototype.writeHeader = function(t, e) {
                this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), n.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + t.getPosition() + (e || "")), this.size > 4294967296 ? t.writeUint32(1) : (this.sizePosition = t.getPosition(), t.writeUint32(this.size)), t.writeString(this.type, null, 4), "uuid" === this.type && t.writeUint8Array(this.uuid), this.size > 4294967296 && t.writeUint64(this.size)
            }, l.FullBox.prototype.writeHeader = function(t) {
                this.size += 4, l.Box.prototype.writeHeader.call(this, t, " v=" + this.version + " f=" + this.flags), t.writeUint8(this.version), t.writeUint24(this.flags)
            }, l.Box.prototype.write = function(t) {
                "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(t), t.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(t), this.data && t.writeUint8Array(this.data))
            }, l.ContainerBox.prototype.write = function(t) {
                this.size = 0, this.writeHeader(t);
                for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && (this.boxes[e].write(t), this.size += this.boxes[e].size);
                n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
            }, l.TrackReferenceTypeBox.prototype.write = function(t) {
                this.size = 4 * this.track_ids.length, this.writeHeader(t), t.writeUint32Array(this.track_ids)
            }, l.avcCBox.prototype.write = function(t) {
                var e;
                for (e = 0, this.size = 7; e < this.SPS.length; e++) this.size += 2 + this.SPS[e].length;
                for (e = 0; e < this.PPS.length; e++) this.size += 2 + this.PPS[e].length;
                for (this.ext && (this.size += this.ext.length), this.writeHeader(t), t.writeUint8(this.configurationVersion), t.writeUint8(this.AVCProfileIndication), t.writeUint8(this.profile_compatibility), t.writeUint8(this.AVCLevelIndication), t.writeUint8(this.lengthSizeMinusOne + 252), t.writeUint8(this.SPS.length + 224), e = 0; e < this.SPS.length; e++) t.writeUint16(this.SPS[e].length), t.writeUint8Array(this.SPS[e].nalu);
                for (t.writeUint8(this.PPS.length), e = 0; e < this.PPS.length; e++) t.writeUint16(this.PPS[e].length), t.writeUint8Array(this.PPS[e].nalu);
                this.ext && t.writeUint8Array(this.ext)
            }, l.co64Box.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), e = 0; e < this.chunk_offsets.length; e++) t.writeUint64(this.chunk_offsets[e])
            }, l.cslgBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeInt32(this.compositionToDTSShift), t.writeInt32(this.leastDecodeToDisplayDelta), t.writeInt32(this.greatestDecodeToDisplayDelta), t.writeInt32(this.compositionStartTime), t.writeInt32(this.compositionEndTime)
            }, l.cttsBox.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), 1 === this.version ? t.writeInt32(this.sample_offsets[e]) : t.writeUint32(this.sample_offsets[e])
            }, l.drefBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.entries.length);
                for (var e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
                n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
            }, l.elngBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(t), t.writeString(this.extended_language)
            }, l.elstBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(t), t.writeUint32(this.entries.length);
                for (var e = 0; e < this.entries.length; e++) {
                    var s = this.entries[e];
                    t.writeUint32(s.segment_duration), t.writeInt32(s.media_time), t.writeInt16(s.media_rate_integer), t.writeInt16(s.media_rate_fraction)
                }
            }, l.emsgBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.scheme_id_uri), t.writeCString(this.value), t.writeUint32(this.timescale), t.writeUint32(this.presentation_time_delta), t.writeUint32(this.event_duration), t.writeUint32(this.id), t.writeUint8Array(this.message_data)
            }, l.ftypBox.prototype.write = function(t) {
                this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(t), t.writeString(this.major_brand, null, 4), t.writeUint32(this.minor_version);
                for (var e = 0; e < this.compatible_brands.length; e++) t.writeString(this.compatible_brands[e], null, 4)
            }, l.hdlrBox.prototype.write = function(t) {
                this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(t), t.writeUint32(0), t.writeString(this.handler, null, 4), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeCString(this.name)
            }, l.hvcCBox.prototype.write = function(t) {
                var e, s;
                for (e = 0, this.size = 23; e < this.nalu_arrays.length; e++)
                    for (this.size += 3, s = 0; s < this.nalu_arrays[e].length; s++) this.size += 2 + this.nalu_arrays[e][s].data.length;
                for (this.writeHeader(t), t.writeUint8(this.configurationVersion), t.writeUint8((this.general_profile_space << 6) + (this.general_tier_flag << 5) + this.general_profile_idc), t.writeUint32(this.general_profile_compatibility), t.writeUint8Array(this.general_constraint_indicator), t.writeUint8(this.general_level_idc), t.writeUint16(this.min_spatial_segmentation_idc + 251658240), t.writeUint8(this.parallelismType + 252), t.writeUint8(this.chroma_format_idc + 252), t.writeUint8(this.bit_depth_luma_minus8 + 248), t.writeUint8(this.bit_depth_chroma_minus8 + 248), t.writeUint16(this.avgFrameRate), t.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne), t.writeUint8(this.nalu_arrays.length), e = 0; e < this.nalu_arrays.length; e++)
                    for (t.writeUint8((this.nalu_arrays[e].completeness << 7) + this.nalu_arrays[e].nalu_type), t.writeUint16(this.nalu_arrays[e].length), s = 0; s < this.nalu_arrays[e].length; s++) t.writeUint16(this.nalu_arrays[e][s].data.length), t.writeUint8Array(this.nalu_arrays[e][s].data)
            }, l.kindBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.schemeURI), t.writeCString(this.value)
            }, l.mdhdBox.prototype.write = function(t) {
                this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint16(this.language), t.writeUint16(0)
            }, l.mehdBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.fragment_duration)
            }, l.mfhdBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.sequence_number)
            }, l.mvhdBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint32(this.rate), t.writeUint16(this.volume << 8), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32Array(this.matrix), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(this.next_track_id)
            }, l.SampleEntry.prototype.writeHeader = function(t) {
                this.size = 8, l.Box.prototype.writeHeader.call(this, t), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint16(this.data_reference_index)
            }, l.SampleEntry.prototype.writeFooter = function(t) {
                for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t), this.size += this.boxes[e].size;
                n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
            }, l.SampleEntry.prototype.write = function(t) {
                this.writeHeader(t), t.writeUint8Array(this.data), this.size += this.data.length, n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
            }, l.VisualSampleEntry.prototype.write = function(t) {
                this.writeHeader(t), this.size += 70, t.writeUint16(0), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.width), t.writeUint16(this.height), t.writeUint32(this.horizresolution), t.writeUint32(this.vertresolution), t.writeUint32(0), t.writeUint16(this.frame_count), t.writeUint8(Math.min(31, this.compressorname.length)), t.writeString(this.compressorname, null, 31), t.writeUint16(this.depth), t.writeInt16(-1), this.writeFooter(t)
            }, l.AudioSampleEntry.prototype.write = function(t) {
                this.writeHeader(t), this.size += 20, t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.channel_count), t.writeUint16(this.samplesize), t.writeUint16(0), t.writeUint16(0), t.writeUint32(this.samplerate << 16), this.writeFooter(t)
            }, l.stppSampleEntry.prototype.write = function(t) {
                this.writeHeader(t), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, t.writeCString(this.namespace), t.writeCString(this.schema_location), t.writeCString(this.auxiliary_mime_types), this.writeFooter(t)
            }, l.SampleGroupEntry.prototype.write = function(t) {
                t.writeUint8Array(this.data)
            }, l.sbgpBox.prototype.write = function(t) {
                this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(t), t.writeString(this.grouping_type, null, 4), t.writeUint32(this.grouping_type_parameter), t.writeUint32(this.entries.length);
                for (var e = 0; e < this.entries.length; e++) {
                    var s = this.entries[e];
                    t.writeInt32(s.sample_count), t.writeInt32(s.group_description_index)
                }
            }, l.sgpdBox.prototype.write = function(t) {
                var e, s;
                for (e = 0, this.flags = 0, this.size = 12; e < this.entries.length; e++) s = this.entries[e], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += s.data.length);
                for (this.writeHeader(t), t.writeString(this.grouping_type, null, 4), 1 === this.version && t.writeUint32(this.default_length), this.version >= 2 && t.writeUint32(this.default_sample_description_index), t.writeUint32(this.entries.length), e = 0; e < this.entries.length; e++) s = this.entries[e], 1 === this.version && 0 === this.default_length && t.writeUint32(s.description_length), s.write(t)
            }, l.sidxBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(t), t.writeUint32(this.reference_ID), t.writeUint32(this.timescale), t.writeUint32(this.earliest_presentation_time), t.writeUint32(this.first_offset), t.writeUint16(0), t.writeUint16(this.references.length);
                for (var e = 0; e < this.references.length; e++) {
                    var s = this.references[e];
                    t.writeUint32(s.reference_type << 31 | s.referenced_size), t.writeUint32(s.subsegment_duration), t.writeUint32(s.starts_with_SAP << 31 | s.SAP_type << 28 | s.SAP_delta_time)
                }
            }, l.smhdBox.prototype.write = function(t) {
                this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(t), t.writeUint16(this.balance), t.writeUint16(0)
            }, l.stcoBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), t.writeUint32Array(this.chunk_offsets)
            }, l.stscBox.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(t), t.writeUint32(this.first_chunk.length), e = 0; e < this.first_chunk.length; e++) t.writeUint32(this.first_chunk[e]), t.writeUint32(this.samples_per_chunk[e]), t.writeUint32(this.sample_description_index[e])
            }, l.stsdBox.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(t), t.writeUint32(this.entries.length), this.size += 4, e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
                n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
            }, l.stshBox.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(t), t.writeUint32(this.shadowed_sample_numbers.length), e = 0; e < this.shadowed_sample_numbers.length; e++) t.writeUint32(this.shadowed_sample_numbers[e]), t.writeUint32(this.sync_sample_numbers[e])
            }, l.stssBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(t), t.writeUint32(this.sample_numbers.length), t.writeUint32Array(this.sample_numbers)
            }, l.stszBox.prototype.write = function(t) {
                var e, s = !0;
                if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
                    for (e = 0; e + 1 < this.sample_sizes.length;) {
                        if (this.sample_sizes[e + 1] !== this.sample_sizes[0]) {
                            s = !1;
                            break
                        }
                        e++
                    } else s = !1;
                this.size = 8, s || (this.size += 4 * this.sample_sizes.length), this.writeHeader(t), s ? t.writeUint32(this.sample_sizes[0]) : t.writeUint32(0), t.writeUint32(this.sample_sizes.length), s || t.writeUint32Array(this.sample_sizes)
            }, l.sttsBox.prototype.write = function(t) {
                var e;
                for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), t.writeUint32(this.sample_deltas[e])
            }, l.tfdtBox.prototype.write = function(t) {
                this.version = this.baseMediaDecodeTime > 4294967295 ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(t), 1 === this.version ? t.writeUint64(this.baseMediaDecodeTime) : t.writeUint32(this.baseMediaDecodeTime)
            }, l.tfhdBox.prototype.write = function(t) {
                this.version = 0, this.size = 4, this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & l.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & l.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(t), t.writeUint32(this.track_id), this.flags & l.TFHD_FLAG_BASE_DATA_OFFSET && t.writeUint64(this.base_data_offset), this.flags & l.TFHD_FLAG_SAMPLE_DESC && t.writeUint32(this.default_sample_description_index), this.flags & l.TFHD_FLAG_SAMPLE_DUR && t.writeUint32(this.default_sample_duration), this.flags & l.TFHD_FLAG_SAMPLE_SIZE && t.writeUint32(this.default_sample_size), this.flags & l.TFHD_FLAG_SAMPLE_FLAGS && t.writeUint32(this.default_sample_flags)
            }, l.tkhdBox.prototype.write = function(t) {
                this.version = 0, this.size = 80, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.track_id), t.writeUint32(0), t.writeUint32(this.duration), t.writeUint32(0), t.writeUint32(0), t.writeInt16(this.layer), t.writeInt16(this.alternate_group), t.writeInt16(this.volume << 8), t.writeUint16(0), t.writeInt32Array(this.matrix), t.writeUint32(this.width), t.writeUint32(this.height)
            }, l.trexBox.prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeUint32(this.track_id), t.writeUint32(this.default_sample_description_index), t.writeUint32(this.default_sample_duration), t.writeUint32(this.default_sample_size), t.writeUint32(this.default_sample_flags)
            }, l.trunBox.prototype.write = function(t) {
                this.version = 0, this.size = 4, this.flags & l.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & l.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & l.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & l.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & l.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(t), t.writeUint32(this.sample_count), this.flags & l.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = t.getPosition(), t.writeInt32(this.data_offset)), this.flags & l.TRUN_FLAGS_FIRST_FLAG && t.writeUint32(this.first_sample_flags);
                for (var e = 0; e < this.sample_count; e++) this.flags & l.TRUN_FLAGS_DURATION && t.writeUint32(this.sample_duration[e]), this.flags & l.TRUN_FLAGS_SIZE && t.writeUint32(this.sample_size[e]), this.flags & l.TRUN_FLAGS_FLAGS && t.writeUint32(this.sample_flags[e]), this.flags & l.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? t.writeUint32(this.sample_composition_time_offset[e]) : t.writeInt32(this.sample_composition_time_offset[e]))
            }, l["url Box"].prototype.write = function(t) {
                this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(t), this.location && t.writeCString(this.location)
            }, l["urn Box"].prototype.write = function(t) {
                this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(t), t.writeCString(this.name), this.location && t.writeCString(this.location)
            }, l.vmhdBox.prototype.write = function(t) {
                this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(t), t.writeUint16(this.graphicsmode), t.writeUint16Array(this.opcolor)
            }, l.cttsBox.prototype.unpack = function(t) {
                var e, s, r;
                for (e = 0, r = 0; e < this.sample_counts.length; e++)
                    for (s = 0; s < this.sample_counts[e]; s++) t[r].pts = t[r].dts + this.sample_offsets[e], r++
            }, l.sttsBox.prototype.unpack = function(t) {
                var e, s, r;
                for (e = 0, r = 0; e < this.sample_counts.length; e++)
                    for (s = 0; s < this.sample_counts[e]; s++) 0 === r ? t[r].dts = 0 : t[r].dts = t[r - 1].dts + this.sample_deltas[e], r++
            }, l.stcoBox.prototype.unpack = function(t) {
                var e;
                for (e = 0; e < this.chunk_offsets.length; e++) t[e].offset = this.chunk_offsets[e]
            }, l.stscBox.prototype.unpack = function(t) {
                var e, s, r, n, a;
                for (e = 0, n = 0, a = 0; e < this.first_chunk.length; e++)
                    for (s = 0; s < (e + 1 < this.first_chunk.length ? this.first_chunk[e + 1] : 1 / 0); s++)
                        for (a++, r = 0; r < this.samples_per_chunk[e]; r++) {
                            if (!t[n]) return;
                            t[n].description_index = this.sample_description_index[e], t[n].chunk_index = a, n++
                        }
            }, l.stszBox.prototype.unpack = function(t) {
                var e;
                for (e = 0; e < this.sample_sizes.length; e++) t[e].size = this.sample_sizes[e]
            }, l.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], l.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], l.boxEqualFields = function(t, e) {
                var s;
                if (t && !e) return !1;
                for (s in t)
                    if (!(l.DIFF_BOXES_PROP_NAMES.indexOf(s) > -1)) {
                        if (t[s] instanceof l.Box || e[s] instanceof l.Box) continue;
                        if (void 0 === t[s] || void 0 === e[s] || "function" == typeof t[s] || "function" == typeof e[s] || t.subBoxNames && t.subBoxNames.indexOf(s.slice(0, 4)) > -1 || e.subBoxNames && e.subBoxNames.indexOf(s.slice(0, 4)) > -1 || "data" === s || "start" === s || "size" === s || "creation_time" === s || "modification_time" === s || l.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(s) > -1) continue;
                        if (t[s] !== e[s]) return !1
                    }
                return !0
            }, l.boxEqual = function(t, e) {
                if (!l.boxEqualFields(t, e)) return !1;
                for (var s = 0; s < l.DIFF_BOXES_PROP_NAMES.length; s++) {
                    var r = l.DIFF_BOXES_PROP_NAMES[s];
                    if (t[r] && e[r] && !l.boxEqual(t[r], e[r])) return !1
                }
                return !0
            };
            var u = function() {};
            u.prototype.parseSample = function(t) {
                var e, s, r = new a(t.buffer);
                for (e = []; !r.isEos();)(s = l.parseOneBox(r, !1)).code === l.OK && "vttc" === s.box.type && e.push(s.box);
                return e
            }, u.prototype.getText = function(t, e, s) {
                function r(t, e, s) {
                    return s = s || "0", (t += "").length >= e ? t : Array(e - t.length + 1).join(s) + t
                }

                function n(t) {
                    var e = Math.floor(t / 3600),
                        s = Math.floor((t - 3600 * e) / 60),
                        n = Math.floor(t - 3600 * e - 60 * s);
                    return "" + r(e, 2) + ":" + r(s, 2) + ":" + r(n, 2) + "." + r(Math.floor((t - 3600 * e - 60 * s - n) * 1e3), 3)
                }
                for (var a = this.parseSample(s), o = "", h = 0; h < a.length; h++) {
                    var d = a[h];
                    o += n(t) + " --> " + n(e) + "\r\n" + d.payl.text
                }
                return o
            }, (function() {}).prototype.parseSample = function(t) {
                var e, s = {};
                s.resources = [];
                var r = new a(t.data.buffer);
                if (t.subsamples && 0 !== t.subsamples.length) {
                    if (s.documentString = r.readString(t.subsamples[0].size), t.subsamples.length > 1)
                        for (e = 1; e < t.subsamples.length; e++) s.resources[e] = r.readUint8Array(t.subsamples[e].size)
                } else s.documentString = r.readString(t.data.length);
                return "undefined" != typeof DOMParser && (s.document = new DOMParser().parseFromString(s.documentString, "application/xml")), s
            };
            var _ = function() {};
            _.prototype.parseSample = function(t) {
                return new a(t.data.buffer).readString(t.data.length)
            }, _.prototype.parseConfig = function(t) {
                var e = new a(t.buffer);
                return e.readUint32(), e.readCString()
            };
            var c = function(t) {
                this.stream = t || new h, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.items = [], this.entity_groups = [], this.onSidx = null, this.sidxSent = !1
            };
            c.prototype.setSegmentOptions = function(t, e, s) {
                var r = this.getTrackById(t);
                if (r) {
                    var n = {};
                    this.fragmentedTracks.push(n), n.id = t, n.user = e, n.trak = r, r.nextSample = 0, n.segmentStream = null, n.nb_samples = 1e3, n.rapAlignement = !0, s && (s.nbSamples && (n.nb_samples = s.nbSamples), s.rapAlignement && (n.rapAlignement = s.rapAlignement))
                }
            }, c.prototype.unsetSegmentOptions = function(t) {
                for (var e = -1, s = 0; s < this.fragmentedTracks.length; s++) this.fragmentedTracks[s].id == t && (e = s);
                e > -1 && this.fragmentedTracks.splice(e, 1)
            }, c.prototype.setExtractionOptions = function(t, e, s) {
                var r = this.getTrackById(t);
                if (r) {
                    var n = {};
                    this.extractedTracks.push(n), n.id = t, n.user = e, n.trak = r, r.nextSample = 0, n.nb_samples = 1e3, n.samples = [], s && s.nbSamples && (n.nb_samples = s.nbSamples)
                }
            }, c.prototype.unsetExtractionOptions = function(t) {
                for (var e = -1, s = 0; s < this.extractedTracks.length; s++) this.extractedTracks[s].id == t && (e = s);
                e > -1 && this.extractedTracks.splice(e, 1)
            }, c.prototype.parse = function() {
                var t, e, s;
                if (!this.restoreParsePosition || this.restoreParsePosition())
                    for (;;) {
                        if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
                            if (this.processIncompleteMdat()) continue;
                            return
                        }
                        if (this.saveParsePosition && this.saveParsePosition(), (t = l.parseOneBox(this.stream, !1)).code === l.ERR_NOT_ENOUGH_DATA) {
                            if (!this.processIncompleteBox) return;
                            if (this.processIncompleteBox(t)) continue;
                            return
                        }
                        switch (s = "uuid" !== (e = t.box).type ? e.type : e.uuid, this.boxes.push(e), s) {
                            case "mdat":
                                this.mdats.push(e);
                                break;
                            case "moof":
                                this.moofs.push(e);
                                break;
                            case "moov":
                                this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
                            default:
                                void 0 !== this[s] && n.warn("ISOFile", "Duplicate Box of type: " + s + ", overriding previous occurrence"), this[s] = e
                        }
                        this.updateUsedBytes && this.updateUsedBytes(e, t)
                    }
            }, c.prototype.checkBuffer = function(t) {
                if (null == t) throw "Buffer must be defined and non empty";
                if (void 0 === t.fileStart) throw "Buffer must have a fileStart property";
                return 0 === t.byteLength ? (n.warn("ISOFile", "Ignoring empty buffer (fileStart: " + t.fileStart + ")"), this.stream.logBufferLevel(), !1) : (n.info("ISOFile", "Processing buffer (fileStart: " + t.fileStart + ")"), t.usedBytes = 0, this.stream.insertBuffer(t), this.stream.logBufferLevel(), !!this.stream.initialized() || (n.warn("ISOFile", "Not ready to start parsing"), !1))
            }, c.prototype.appendBuffer = function(t, e) {
                var s;
                if (this.checkBuffer(t)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(e), this.nextSeekPosition ? (s = this.nextSeekPosition, this.nextSeekPosition = void 0) : s = this.nextParsePosition, this.stream.getEndFilePositionAfter && (s = this.stream.getEndFilePositionAfter(s))) : s = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (n.info("ISOFile", "Done processing buffer (fileStart: " + t.fileStart + ") - next buffer to fetch should have a fileStart position of " + s), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), n.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), s
            }, c.prototype.getInfo = function() {
                var t, e, s, r, n, a, o = {},
                    h = new Date("1904-01-01T00:00:00Z").getTime();
                if (this.moov)
                    for (o.hasMoov = !0, o.duration = this.moov.mvhd.duration, o.timescale = this.moov.mvhd.timescale, o.isFragmented = null != this.moov.mvex, o.isFragmented && this.moov.mvex.mehd && (o.fragment_duration = this.moov.mvex.mehd.fragment_duration), o.isProgressive = this.isProgressive, o.hasIOD = null != this.moov.iods, o.brands = [], o.brands.push(this.ftyp.major_brand), o.brands = o.brands.concat(this.ftyp.compatible_brands), o.created = new Date(h + 1e3 * this.moov.mvhd.creation_time), o.modified = new Date(h + 1e3 * this.moov.mvhd.modification_time), o.tracks = [], o.audioTracks = [], o.videoTracks = [], o.subtitleTracks = [], o.metadataTracks = [], o.hintTracks = [], o.otherTracks = [], t = 0; t < this.moov.traks.length; t++) {
                        if (a = (s = this.moov.traks[t]).mdia.minf.stbl.stsd.entries[0], r = {}, o.tracks.push(r), r.id = s.tkhd.track_id, r.name = s.mdia.hdlr.name, r.references = [], s.tref)
                            for (e = 0; e < s.tref.boxes.length; e++) n = {}, r.references.push(n), n.type = s.tref.boxes[e].type, n.track_ids = s.tref.boxes[e].track_ids;
                        s.edts && (r.edits = s.edts.elst.entries), r.created = new Date(h + 1e3 * s.tkhd.creation_time), r.modified = new Date(h + 1e3 * s.tkhd.modification_time), r.movie_duration = s.tkhd.duration, r.movie_timescale = o.timescale, r.layer = s.tkhd.layer, r.alternate_group = s.tkhd.alternate_group, r.volume = s.tkhd.volume, r.matrix = s.tkhd.matrix, r.track_width = s.tkhd.width / 65536, r.track_height = s.tkhd.height / 65536, r.timescale = s.mdia.mdhd.timescale, r.cts_shift = s.mdia.minf.stbl.cslg, r.duration = s.mdia.mdhd.duration, r.samples_duration = s.samples_duration, r.codec = a.getCodec(), r.kind = s.udta && s.udta.kinds.length ? s.udta.kinds[0] : {
                            schemeURI: "",
                            value: ""
                        }, r.language = s.mdia.elng ? s.mdia.elng.extended_language : s.mdia.mdhd.languageString, r.nb_samples = s.samples.length, r.size = s.samples_size, r.bitrate = 8 * r.size * r.timescale / r.samples_duration, a.isAudio() ? (r.type = "audio", o.audioTracks.push(r), r.audio = {}, r.audio.sample_rate = a.getSampleRate(), r.audio.channel_count = a.getChannelCount(), r.audio.sample_size = a.getSampleSize()) : a.isVideo() ? (r.type = "video", o.videoTracks.push(r), r.video = {}, r.video.width = a.getWidth(), r.video.height = a.getHeight()) : a.isSubtitle() ? (r.type = "subtitles", o.subtitleTracks.push(r)) : a.isHint() ? (r.type = "metadata", o.hintTracks.push(r)) : a.isMetadata() ? (r.type = "metadata", o.metadataTracks.push(r)) : (r.type = "metadata", o.otherTracks.push(r))
                    } else o.hasMoov = !1;
                if (o.mime = "", o.hasMoov && o.tracks) {
                    for (o.videoTracks && o.videoTracks.length > 0 ? o.mime += 'video/mp4; codecs="' : o.audioTracks && o.audioTracks.length > 0 ? o.mime += 'audio/mp4; codecs="' : o.mime += 'application/mp4; codecs="', t = 0; t < o.tracks.length; t++) 0 !== t && (o.mime += ","), o.mime += o.tracks[t].codec;
                    o.mime += '"; profiles="', o.mime += this.ftyp.compatible_brands.join(), o.mime += '"'
                }
                return o
            }, c.prototype.setNextSeekPositionFromSample = function(t) {
                t && (this.nextSeekPosition ? this.nextSeekPosition = Math.min(t.offset + t.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = t.offset + t.alreadyRead)
            }, c.prototype.processSamples = function(t) {
                if (this.sampleProcessingStarted) {
                    if (this.isFragmentationInitialized && null !== this.onSegment)
                        for (e = 0; e < this.fragmentedTracks.length; e++) {
                            var e, s, r = this.fragmentedTracks[e];
                            for (s = r.trak; s.nextSample < s.samples.length && this.sampleProcessingStarted;) {
                                n.debug("ISOFile", "Creating media fragment on track #" + r.id + " for sample " + s.nextSample);
                                var a = this.createFragment(r.id, s.nextSample, r.segmentStream);
                                if (a) r.segmentStream = a, s.nextSample++;
                                else break;
                                if ((s.nextSample % r.nb_samples == 0 || t || s.nextSample >= s.samples.length) && (n.info("ISOFile", "Sending fragmented data on track #" + r.id + " for samples [" + Math.max(0, s.nextSample - r.nb_samples) + "," + (s.nextSample - 1) + "]"), n.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, s.nextSample, t || s.nextSample >= s.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[e])) break
                            }
                        }
                    if (null !== this.onSamples)
                        for (e = 0; e < this.extractedTracks.length; e++) {
                            var o = this.extractedTracks[e];
                            for (s = o.trak; s.nextSample < s.samples.length && this.sampleProcessingStarted;) {
                                n.debug("ISOFile", "Exporting on track #" + o.id + " sample #" + s.nextSample);
                                var h = this.getSample(s, s.nextSample);
                                if (h) s.nextSample++, o.samples.push(h);
                                else {
                                    this.setNextSeekPositionFromSample(s.samples[s.nextSample]);
                                    break
                                }
                                if ((s.nextSample % o.nb_samples == 0 || s.nextSample >= s.samples.length) && (n.debug("ISOFile", "Sending samples on track #" + o.id + " for sample " + s.nextSample), this.onSamples && this.onSamples(o.id, o.user, o.samples), o.samples = [], o !== this.extractedTracks[e])) break
                            }
                        }
                }
            }, c.prototype.getBox = function(t) {
                var e = this.getBoxes(t, !0);
                return e.length ? e[0] : null
            }, c.prototype.getBoxes = function(t, e) {
                var s = [];
                return c._sweep.call(this, t, s, e), s
            }, c._sweep = function(t, e, s) {
                for (var r in this.type && this.type == t && e.push(this), this.boxes) {
                    if (e.length && s) return;
                    c._sweep.call(this.boxes[r], t, e, s)
                }
            }, c.prototype.getTrackSamplesInfo = function(t) {
                var e = this.getTrackById(t);
                return e ? e.samples : void 0
            }, c.prototype.getTrackSample = function(t, e) {
                var s = this.getTrackById(t);
                return this.getSample(s, e)
            }, c.prototype.releaseUsedSamples = function(t, e) {
                var s = 0,
                    r = this.getTrackById(t);
                r.lastValidSample || (r.lastValidSample = 0);
                for (var a = r.lastValidSample; a < e; a++) s += this.releaseSample(r, a);
                n.info("ISOFile", "Track #" + t + " released samples up to " + e + " (released size: " + s + ", remaining: " + this.samplesDataSize + ")"), r.lastValidSample = e
            }, c.prototype.start = function() {
                this.sampleProcessingStarted = !0, this.processSamples(!1)
            }, c.prototype.stop = function() {
                this.sampleProcessingStarted = !1
            }, c.prototype.flush = function() {
                n.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
            }, c.prototype.seekTrack = function(t, e, s) {
                var r, a, o, h = 1 / 0,
                    d = 0,
                    l = 0;
                if (0 === s.samples.length) return n.info("ISOFile", "No sample in track, cannot seek! Using time " + n.getDurationString(0, 1) + " and offset: 0"), {
                    offset: 0,
                    time: 0
                };
                for (r = 0; r < s.samples.length; r++) {
                    if (a = s.samples[r], 0 === r) l = 0, o = a.timescale;
                    else if (a.cts > t * a.timescale) {
                        l = r - 1;
                        break
                    }
                    e && a.is_sync && (d = r)
                }
                for (e && (l = d), t = s.samples[l].cts, s.nextSample = l; s.samples[l].alreadyRead === s.samples[l].size && s.samples[l + 1];) l++;
                return h = s.samples[l].offset + s.samples[l].alreadyRead, n.info("ISOFile", "Seeking to " + (e ? "RAP" : "") + " sample #" + s.nextSample + " on track " + s.tkhd.track_id + ", time " + n.getDurationString(t, o) + " and offset: " + h), {
                    offset: h,
                    time: t / o
                }
            }, c.prototype.getTrackDuration = function(t) {
                var e;
                return t.samples ? ((e = t.samples[t.samples.length - 1]).cts + e.duration) / e.timescale : 1 / 0
            }, c.prototype.seek = function(t, e) {
                var s, r, a, o = this.moov,
                    h = {
                        offset: 1 / 0,
                        time: 1 / 0
                    };
                if (this.moov) {
                    for (a = 0; a < o.traks.length; a++) s = o.traks[a], !(t > this.getTrackDuration(s)) && ((r = this.seekTrack(t, e, s)).offset < h.offset && (h.offset = r.offset), r.time < h.time && (h.time = r.time));
                    return n.info("ISOFile", "Seeking at time " + n.getDurationString(h.time, 1) + " needs a buffer with a fileStart position of " + h.offset), h.offset === 1 / 0 ? h = {
                        offset: this.nextParsePosition,
                        time: 0
                    } : h.offset = this.stream.getEndFilePositionAfter(h.offset), n.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + h.offset), h
                }
                throw "Cannot seek: moov not received!"
            }, c.prototype.equal = function(t) {
                for (var e = 0; e < this.boxes.length && e < t.boxes.length;) {
                    var s = this.boxes[e],
                        r = t.boxes[e];
                    if (!l.boxEqual(s, r)) return !1;
                    e++
                }
                return !0
            }, c.prototype.lastBoxStartPosition = 0, c.prototype.parsingMdat = null, c.prototype.nextParsePosition = 0, c.prototype.discardMdatData = !1, c.prototype.processIncompleteBox = function(t) {
                var e;
                return "mdat" === t.type ? (e = new l[t.type + "Box"](t.size), this.parsingMdat = e, this.boxes.push(e), this.mdats.push(e), e.start = t.start, e.hdr_size = t.hdr_size, this.stream.addUsedBytes(e.hdr_size), this.lastBoxStartPosition = e.start + e.size, this.stream.seek(e.start + e.size, !1, this.discardMdatData)) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = e.start + e.size, !1) : ("moov" === t.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (t.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + t.size : this.nextParsePosition = this.stream.getEndPosition(), !1)
            }, c.prototype.hasIncompleteMdat = function() {
                return null !== this.parsingMdat
            }, c.prototype.processIncompleteMdat = function() {
                var t;
                return (t = this.parsingMdat, this.stream.seek(t.start + t.size, !1, this.discardMdatData)) ? (n.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
            }, c.prototype.restoreParsePosition = function() {
                return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
            }, c.prototype.saveParsePosition = function() {
                this.lastBoxStartPosition = this.stream.getPosition()
            }, c.prototype.updateUsedBytes = function(t, e) {
                this.stream.addUsedBytes && ("mdat" === t.type ? (this.stream.addUsedBytes(t.hdr_size), this.discardMdatData && this.stream.addUsedBytes(t.size - t.hdr_size)) : this.stream.addUsedBytes(t.size))
            }, c.prototype.add = l.Box.prototype.add, c.prototype.addBox = l.Box.prototype.addBox, c.prototype.init = function(t) {
                var e = t || {};
                this.add("ftyp").set("major_brand", e.brands && e.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", e.brands || ["iso4"]);
                var s = this.add("moov");
                return s.add("mvhd").set("timescale", e.timescale || 600).set("rate", e.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", e.duration || 0).set("volume", e.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), s.add("mvex"), this
            }, c.prototype.addTrack = function(t) {
                this.moov || this.init(t);
                var e = t || {};
                e.width = e.width || 320, e.height = e.height || 320, e.id = e.id || this.moov.mvhd.next_track_id, e.type = e.type || "avc1";
                var s = this.moov.add("trak");
                this.moov.mvhd.next_track_id = e.id + 1, s.add("tkhd").set("flags", l.TKHD_FLAG_ENABLED | l.TKHD_FLAG_IN_MOVIE | l.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", e.id).set("duration", e.duration || 0).set("layer", e.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", e.width << 16).set("height", e.height << 16);
                var r = s.add("mdia");
                r.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", e.timescale || 1).set("duration", e.media_duration || 0).set("language", e.language || "und"), r.add("hdlr").set("handler", e.hdlr || "vide").set("name", e.name || "Track created with MP4Box.js"), r.add("elng").set("extended_language", e.language || "fr-FR");
                var n = r.add("minf");
                if (void 0 !== l[e.type + "SampleEntry"]) {
                    var o = new l[e.type + "SampleEntry"];
                    o.data_reference_index = 1;
                    var h = "";
                    for (var d in l.sampleEntryCodes)
                        for (var p = l.sampleEntryCodes[d], f = 0; f < p.length; f++)
                            if (p.indexOf(e.type) > -1) {
                                h = d;
                                break
                            }
                    switch (h) {
                        case "Visual":
                            if (n.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), o.set("width", e.width).set("height", e.height).set("horizresolution", 4718592).set("vertresolution", 4718592).set("frame_count", 1).set("compressorname", e.type + " Compressor").set("depth", 24), e.avcDecoderConfigRecord) {
                                var u = new l.avcCBox;
                                u.parse(new a(e.avcDecoderConfigRecord)), o.addBox(u)
                            } else if (e.hevcDecoderConfigRecord) {
                                var _ = new l.hvcCBox;
                                _.parse(new a(e.hevcDecoderConfigRecord)), o.addBox(_)
                            }
                            break;
                        case "Audio":
                            n.add("smhd").set("balance", e.balance || 0), o.set("channel_count", e.channel_count || 2).set("samplesize", e.samplesize || 16).set("samplerate", e.samplerate || 65536);
                            break;
                        case "Hint":
                            n.add("hmhd");
                            break;
                        case "Subtitle":
                            n.add("sthd"), "stpp" === e.type && o.set("namespace", e.namespace || "nonamespace").set("schema_location", e.schema_location || "").set("auxiliary_mime_types", e.auxiliary_mime_types || "");
                            break;
                        default:
                            n.add("nmhd")
                    }
                    e.description && o.addBox(e.description), e.description_boxes && e.description_boxes.forEach(function(t) {
                        o.addBox(t)
                    }), n.add("dinf").add("dref").addEntry(new l["url Box"]().set("flags", 1));
                    var c = n.add("stbl");
                    return c.add("stsd").addEntry(o), c.add("stts").set("sample_counts", []).set("sample_deltas", []), c.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), c.add("stco").set("chunk_offsets", []), c.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", e.id).set("default_sample_description_index", e.default_sample_description_index || 1).set("default_sample_duration", e.default_sample_duration || 0).set("default_sample_size", e.default_sample_size || 0).set("default_sample_flags", e.default_sample_flags || 0), this.buildTrakSampleLists(s), e.id
                }
            }, l.Box.prototype.computeSize = function(t) {
                var e = t || new o;
                e.endianness = o.BIG_ENDIAN, this.write(e)
            }, c.prototype.addSample = function(t, e, s) {
                var r = s || {},
                    n = {},
                    a = this.getTrackById(t);
                if (null !== a) {
                    n.number = a.samples.length, n.track_id = a.tkhd.track_id, n.timescale = a.mdia.mdhd.timescale, n.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, n.description = a.mdia.minf.stbl.stsd.entries[n.description_index], n.data = e, n.size = e.byteLength, n.alreadyRead = n.size, n.duration = r.duration || 1, n.cts = r.cts || 0, n.dts = r.dts || 0, n.is_sync = r.is_sync || !1, n.is_leading = r.is_leading || 0, n.depends_on = r.depends_on || 0, n.is_depended_on = r.is_depended_on || 0, n.has_redundancy = r.has_redundancy || 0, n.degradation_priority = r.degradation_priority || 0, n.offset = 0, n.subsamples = r.subsamples, a.samples.push(n), a.samples_size += n.size, a.samples_duration += n.duration, void 0 === a.first_dts && (a.first_dts = r.dts), this.processSamples();
                    var o = this.createSingleSampleMoof(n);
                    return this.addBox(o), o.computeSize(), o.trafs[0].truns[0].data_offset = o.size + 8, this.add("mdat").data = new Uint8Array(e), n
                }
            }, c.prototype.createSingleSampleMoof = function(t) {
                var e = 0;
                e = t.is_sync ? 33554432 : 65536;
                var s = new l.moofBox;
                s.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
                var r = s.add("traf"),
                    n = this.getTrackById(t.track_id);
                return r.add("tfhd").set("track_id", t.track_id).set("flags", l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), r.add("tfdt").set("baseMediaDecodeTime", t.dts - (n.first_dts || 0)), r.add("trun").set("flags", l.TRUN_FLAGS_DATA_OFFSET | l.TRUN_FLAGS_DURATION | l.TRUN_FLAGS_SIZE | l.TRUN_FLAGS_FLAGS | l.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [t.duration]).set("sample_size", [t.size]).set("sample_flags", [e]).set("sample_composition_time_offset", [t.cts - t.dts]), s
            }, c.prototype.lastMoofIndex = 0, c.prototype.samplesDataSize = 0, c.prototype.resetTables = function() {
                for (t = 0, this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0; t < this.moov.traks.length; t++) {
                    (e = this.moov.traks[t]).tkhd.duration = 0, e.mdia.mdhd.duration = 0, (e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64).chunk_offsets = [], (s = e.mdia.minf.stbl.stsc).first_chunk = [], s.samples_per_chunk = [], s.sample_description_index = [], (e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2).sample_sizes = [], (r = e.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (n = e.mdia.minf.stbl.ctts) && (n.sample_counts = [], n.sample_offsets = []), a = e.mdia.minf.stbl.stss;
                    var t, e, s, r, n, a, o = e.mdia.minf.stbl.boxes.indexOf(a); - 1 != o && (e.mdia.minf.stbl.boxes[o] = null)
                }
            }, c.initSampleGroups = function(t, e, s, r, n) {
                var a, o, h, d;

                function l(t, e, s) {
                    this.grouping_type = t, this.grouping_type_parameter = e, this.sbgp = s, this.last_sample_in_run = -1, this.entry_index = -1
                }
                for (e && (e.sample_groups_info = []), t.sample_groups_info || (t.sample_groups_info = []), o = 0; o < s.length; o++) {
                    for (d = s[o].grouping_type + "/" + s[o].grouping_type_parameter, h = new l(s[o].grouping_type, s[o].grouping_type_parameter, s[o]), e && (e.sample_groups_info[d] = h), t.sample_groups_info[d] || (t.sample_groups_info[d] = h), a = 0; a < r.length; a++) r[a].grouping_type === s[o].grouping_type && (h.description = r[a], h.description.used = !0);
                    if (n)
                        for (a = 0; a < n.length; a++) n[a].grouping_type === s[o].grouping_type && (h.fragment_description = n[a], h.fragment_description.used = !0, h.is_fragment = !0)
                }
                if (e) {
                    if (n)
                        for (o = 0; o < n.length; o++) n[o].used || !(n[o].version >= 2) || (d = n[o].grouping_type + "/0", (h = new l(n[o].grouping_type, 0)).is_fragment = !0, e.sample_groups_info[d] || (e.sample_groups_info[d] = h))
                } else
                    for (o = 0; o < r.length; o++) r[o].used || !(r[o].version >= 2) || (d = r[o].grouping_type + "/0", h = new l(r[o].grouping_type, 0), t.sample_groups_info[d] || (t.sample_groups_info[d] = h))
            }, c.setSampleGroupProperties = function(t, e, s, r) {
                var n, a, o;
                for (n in e.sample_groups = [], r) e.sample_groups[n] = {}, e.sample_groups[n].grouping_type = r[n].grouping_type, e.sample_groups[n].grouping_type_parameter = r[n].grouping_type_parameter, s >= r[n].last_sample_in_run && (r[n].last_sample_in_run < 0 && (r[n].last_sample_in_run = 0), r[n].entry_index++, r[n].entry_index <= r[n].sbgp.entries.length - 1 && (r[n].last_sample_in_run += r[n].sbgp.entries[r[n].entry_index].sample_count)), r[n].entry_index <= r[n].sbgp.entries.length - 1 ? e.sample_groups[n].group_description_index = r[n].sbgp.entries[r[n].entry_index].group_description_index : e.sample_groups[n].group_description_index = -1, 0 !== e.sample_groups[n].group_description_index && (o = r[n].fragment_description ? r[n].fragment_description : r[n].description, e.sample_groups[n].group_description_index > 0 ? (a = e.sample_groups[n].group_description_index > 65535 ? (e.sample_groups[n].group_description_index >> 16) - 1 : e.sample_groups[n].group_description_index - 1, o && a >= 0 && (e.sample_groups[n].description = o.entries[a])) : o && o.version >= 2 && o.default_group_description_index > 0 && (e.sample_groups[n].description = o.entries[o.default_group_description_index - 1]))
            }, c.process_sdtp = function(t, e, s) {
                e && (t ? (e.is_leading = t.is_leading[s], e.depends_on = t.sample_depends_on[s], e.is_depended_on = t.sample_is_depended_on[s], e.has_redundancy = t.sample_has_redundancy[s]) : (e.is_leading = 0, e.depends_on = 0, e.is_depended_on = 0, e.has_redundancy = 0))
            }, c.prototype.buildSampleLists = function() {
                var t, e;
                for (t = 0; t < this.moov.traks.length; t++) e = this.moov.traks[t], this.buildTrakSampleLists(e)
            }, c.prototype.buildTrakSampleLists = function(t) {
                if (t.samples = [], t.samples_duration = 0, t.samples_size = 0, s = t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64, r = t.mdia.minf.stbl.stsc, n = t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2, a = t.mdia.minf.stbl.stts, o = t.mdia.minf.stbl.ctts, h = t.mdia.minf.stbl.stss, d = t.mdia.minf.stbl.stsd, l = t.mdia.minf.stbl.subs, u = t.mdia.minf.stbl.stdp, p = t.mdia.minf.stbl.sbgps, f = t.mdia.minf.stbl.sgpds, b = -1, S = -1, v = -1, x = -1, w = 0, E = 0, A = 0, c.initSampleGroups(t, null, p, f), void 0 !== n) {
                    for (e = 0; e < n.sample_sizes.length; e++) {
                        var e, s, r, n, a, o, h, d, l, p, f, u, _, m, g, y, U, b, S, v, x, w, E, A, B = {};
                        B.number = e, B.track_id = t.tkhd.track_id, B.timescale = t.mdia.mdhd.timescale, B.alreadyRead = 0, t.samples[e] = B, B.size = n.sample_sizes[e], t.samples_size += B.size, 0 === e ? (m = 1, _ = 0, B.chunk_index = m, B.chunk_run_index = _, U = r.samples_per_chunk[_], y = 0, g = _ + 1 < r.first_chunk.length ? r.first_chunk[_ + 1] - 1 : 1 / 0) : e < U ? (B.chunk_index = m, B.chunk_run_index = _) : (m++, B.chunk_index = m, y = 0, m <= g || (g = ++_ + 1 < r.first_chunk.length ? r.first_chunk[_ + 1] - 1 : 1 / 0), B.chunk_run_index = _, U += r.samples_per_chunk[_]), B.description_index = r.sample_description_index[B.chunk_run_index] - 1, B.description = d.entries[B.description_index], B.offset = s.chunk_offsets[B.chunk_index - 1] + y, y += B.size, e > b && (S++, b < 0 && (b = 0), b += a.sample_counts[S]), e > 0 ? (t.samples[e - 1].duration = a.sample_deltas[S], t.samples_duration += t.samples[e - 1].duration, B.dts = t.samples[e - 1].dts + t.samples[e - 1].duration) : B.dts = 0, o ? (e >= v && (x++, v < 0 && (v = 0), v += o.sample_counts[x]), B.cts = t.samples[e].dts + o.sample_offsets[x]) : B.cts = B.dts, h ? (e == h.sample_numbers[w] - 1 ? (B.is_sync = !0, w++) : (B.is_sync = !1, B.degradation_priority = 0), l && l.entries[E].sample_delta + A == e + 1 && (B.subsamples = l.entries[E].subsamples, A += l.entries[E].sample_delta, E++)) : B.is_sync = !0, c.process_sdtp(t.mdia.minf.stbl.sdtp, B, B.number), u ? B.degradation_priority = u.priority[e] : B.degradation_priority = 0, l && l.entries[E].sample_delta + A == e && (B.subsamples = l.entries[E].subsamples, A += l.entries[E].sample_delta), (p.length > 0 || f.length > 0) && c.setSampleGroupProperties(t, B, e, t.sample_groups_info)
                    }
                    e > 0 && (t.samples[e - 1].duration = Math.max(t.mdia.mdhd.duration - t.samples[e - 1].dts, 0), t.samples_duration += t.samples[e - 1].duration)
                }
            }, c.prototype.updateSampleLists = function() {
                if (void 0 !== this.moov) {
                    for (; this.lastMoofIndex < this.moofs.length;)
                        if (d = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == d.type)
                            for (t = 0; t < d.trafs.length; t++) {
                                for (p = d.trafs[t], f = this.getTrackById(p.tfhd.track_id), u = this.getTrexById(p.tfhd.track_id), r = p.tfhd.flags & l.TFHD_FLAG_SAMPLE_DESC ? p.tfhd.default_sample_description_index : u ? u.default_sample_description_index : 1, n = p.tfhd.flags & l.TFHD_FLAG_SAMPLE_DUR ? p.tfhd.default_sample_duration : u ? u.default_sample_duration : 0, a = p.tfhd.flags & l.TFHD_FLAG_SAMPLE_SIZE ? p.tfhd.default_sample_size : u ? u.default_sample_size : 0, o = p.tfhd.flags & l.TFHD_FLAG_SAMPLE_FLAGS ? p.tfhd.default_sample_flags : u ? u.default_sample_flags : 0, p.sample_number = 0, p.sbgps.length > 0 && c.initSampleGroups(f, p, p.sbgps, f.mdia.minf.stbl.sgpds, p.sgpds), e = 0; e < p.truns.length; e++) {
                                    var t, e, s, r, n, a, o, h, d, p, f, u, _, m, g = p.truns[e];
                                    for (s = 0; s < g.sample_count; s++) {
                                        (_ = {}).moof_number = this.lastMoofIndex, _.number_in_traf = p.sample_number, p.sample_number++, _.number = f.samples.length, p.first_sample_index = f.samples.length, f.samples.push(_), _.track_id = f.tkhd.track_id, _.timescale = f.mdia.mdhd.timescale, _.description_index = r - 1, _.description = f.mdia.minf.stbl.stsd.entries[_.description_index], _.size = a, g.flags & l.TRUN_FLAGS_SIZE && (_.size = g.sample_size[s]), f.samples_size += _.size, _.duration = n, g.flags & l.TRUN_FLAGS_DURATION && (_.duration = g.sample_duration[s]), f.samples_duration += _.duration, f.first_traf_merged || s > 0 ? _.dts = f.samples[f.samples.length - 2].dts + f.samples[f.samples.length - 2].duration : (p.tfdt ? _.dts = p.tfdt.baseMediaDecodeTime : _.dts = 0, f.first_traf_merged = !0), _.cts = _.dts, g.flags & l.TRUN_FLAGS_CTS_OFFSET && (_.cts = _.dts + g.sample_composition_time_offset[s]), m = o, g.flags & l.TRUN_FLAGS_FLAGS ? m = g.sample_flags[s] : 0 === s && g.flags & l.TRUN_FLAGS_FIRST_FLAG && (m = g.first_sample_flags), _.is_sync = !(m >> 16 & 1), _.is_leading = m >> 26 & 3, _.depends_on = m >> 24 & 3, _.is_depended_on = m >> 22 & 3, _.has_redundancy = m >> 20 & 3, _.degradation_priority = 65535 & m;
                                        var y = !!(p.tfhd.flags & l.TFHD_FLAG_BASE_DATA_OFFSET),
                                            U = !!(p.tfhd.flags & l.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
                                            b = !!(g.flags & l.TRUN_FLAGS_DATA_OFFSET),
                                            S = 0;
                                        S = y ? p.tfhd.base_data_offset : U ? d.start : 0 === e ? d.start : h, 0 === e && 0 === s ? b ? _.offset = S + g.data_offset : _.offset = S : _.offset = h, h = _.offset + _.size, (p.sbgps.length > 0 || p.sgpds.length > 0 || f.mdia.minf.stbl.sbgps.length > 0 || f.mdia.minf.stbl.sgpds.length > 0) && c.setSampleGroupProperties(f, _, _.number_in_traf, p.sample_groups_info)
                                    }
                                }
                                if (p.subs) {
                                    f.has_fragment_subsamples = !0;
                                    var v = p.first_sample_index;
                                    for (e = 0; e < p.subs.entries.length; e++) v += p.subs.entries[e].sample_delta, (_ = f.samples[v - 1]).subsamples = p.subs.entries[e].subsamples
                                }
                            }
                }
            }, c.prototype.getSample = function(t, e) {
                var s, r = t.samples[e];
                if (!this.moov) return null;
                if (r.data) {
                    if (r.alreadyRead == r.size) return r
                } else r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, n.debug("ISOFile", "Allocating sample #" + e + " on track #" + t.tkhd.track_id + " of size " + r.size + " (total: " + this.samplesDataSize + ")");
                for (;;) {
                    var a = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
                    if (!(a > -1)) return null;
                    var h = (s = this.stream.buffers[a]).byteLength - (r.offset + r.alreadyRead - s.fileStart);
                    if (r.size - r.alreadyRead <= h) return n.debug("ISOFile", "Getting sample #" + e + " data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - s.fileStart) + " read size: " + (r.size - r.alreadyRead) + " full size: " + r.size + ")"), o.memcpy(r.data.buffer, r.alreadyRead, s, r.offset + r.alreadyRead - s.fileStart, r.size - r.alreadyRead), s.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
                    if (0 === h) return null;
                    n.debug("ISOFile", "Getting sample #" + e + " partial data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - s.fileStart) + " read size: " + h + " full size: " + r.size + ")"), o.memcpy(r.data.buffer, r.alreadyRead, s, r.offset + r.alreadyRead - s.fileStart, h), r.alreadyRead += h, s.usedBytes += h, this.stream.logBufferLevel()
                }
            }, c.prototype.releaseSample = function(t, e) {
                var s = t.samples[e];
                return s.data ? (this.samplesDataSize -= s.size, s.data = null, s.alreadyRead = 0, s.size) : 0
            }, c.prototype.getAllocatedSampleDataSize = function() {
                return this.samplesDataSize
            }, c.prototype.getCodecs = function() {
                var t, e = "";
                for (t = 0; t < this.moov.traks.length; t++) {
                    var s = this.moov.traks[t];
                    t > 0 && (e += ","), e += s.mdia.minf.stbl.stsd.entries[0].getCodec()
                }
                return e
            }, c.prototype.getTrexById = function(t) {
                var e;
                if (!this.moov || !this.moov.mvex) return null;
                for (e = 0; e < this.moov.mvex.trexs.length; e++) {
                    var s = this.moov.mvex.trexs[e];
                    if (s.track_id == t) return s
                }
                return null
            }, c.prototype.getTrackById = function(t) {
                if (void 0 === this.moov) return null;
                for (var e = 0; e < this.moov.traks.length; e++) {
                    var s = this.moov.traks[e];
                    if (s.tkhd.track_id == t) return s
                }
                return null
            }, c.prototype.itemsDataSize = 0, c.prototype.flattenItemInfo = function() {
                var t, e, s, r = this.items,
                    a = this.entity_groups,
                    o = this.meta;
                if (null != o && void 0 !== o.hdlr && void 0 !== o.iinf) {
                    for (t = 0; t < o.iinf.item_infos.length; t++)(s = {}).id = o.iinf.item_infos[t].item_ID, r[s.id] = s, s.ref_to = [], s.name = o.iinf.item_infos[t].item_name, o.iinf.item_infos[t].protection_index > 0 && (s.protection = o.ipro.protections[o.iinf.item_infos[t].protection_index - 1]), o.iinf.item_infos[t].item_type ? s.type = o.iinf.item_infos[t].item_type : s.type = "mime", s.content_type = o.iinf.item_infos[t].content_type, s.content_encoding = o.iinf.item_infos[t].content_encoding;
                    if (o.grpl)
                        for (t = 0; t < o.grpl.boxes.length; t++)(entity_group = {}).id = o.grpl.boxes[t].group_id, entity_group.entity_ids = o.grpl.boxes[t].entity_ids, entity_group.type = o.grpl.boxes[t].type, a[entity_group.id] = entity_group;
                    if (o.iloc)
                        for (t = 0; t < o.iloc.items.length; t++) {
                            var h = o.iloc.items[t];
                            switch (s = r[h.item_ID], 0 !== h.data_reference_index && (n.warn("Item storage with reference to other files: not supported"), s.source = o.dinf.boxes[h.data_reference_index - 1]), h.construction_method) {
                                case 0:
                                case 1:
                                    break;
                                case 2:
                                    n.warn("Item storage with construction_method : not supported")
                            }
                            for (e = 0, s.extents = [], s.size = 0; e < h.extents.length; e++) s.extents[e] = {}, s.extents[e].offset = h.extents[e].extent_offset + h.base_offset, 1 == h.construction_method && (s.extents[e].offset += o.idat.start + o.idat.hdr_size), s.extents[e].length = h.extents[e].extent_length, s.extents[e].alreadyRead = 0, s.size += s.extents[e].length
                        }
                    if (o.pitm && (r[o.pitm.item_id].primary = !0), o.iref)
                        for (t = 0; t < o.iref.references.length; t++) {
                            var d = o.iref.references[t];
                            for (e = 0; e < d.references.length; e++) r[d.from_item_ID].ref_to.push({
                                type: d.type,
                                id: d.references[e]
                            })
                        }
                    if (o.iprp)
                        for (var l = 0; l < o.iprp.ipmas.length; l++) {
                            var p = o.iprp.ipmas[l];
                            for (t = 0; t < p.associations.length; t++) {
                                var f = p.associations[t];
                                if ((s = r[f.id]) || (s = a[f.id]), s)
                                    for (void 0 === s.properties && (s.properties = {}, s.properties.boxes = []), e = 0; e < f.props.length; e++) {
                                        var u = f.props[e];
                                        if (u.property_index > 0 && u.property_index - 1 < o.iprp.ipco.boxes.length) {
                                            var _ = o.iprp.ipco.boxes[u.property_index - 1];
                                            s.properties[_.type] = _, s.properties.boxes.push(_)
                                        }
                                    }
                            }
                        }
                }
            }, c.prototype.getItem = function(t) {
                if (!this.meta) return null;
                if (!(s = this.items[t]).data && s.size) s.data = new Uint8Array(s.size), s.alreadyRead = 0, this.itemsDataSize += s.size, n.debug("ISOFile", "Allocating item #" + t + " of size " + s.size + " (total: " + this.itemsDataSize + ")");
                else if (s.alreadyRead === s.size) return s;
                for (var e, s, r = 0; r < s.extents.length; r++) {
                    var a = s.extents[r];
                    if (a.alreadyRead !== a.length) {
                        var h = this.stream.findPosition(!0, a.offset + a.alreadyRead, !1);
                        if (!(h > -1)) return null;
                        var d = (e = this.stream.buffers[h]).byteLength - (a.offset + a.alreadyRead - e.fileStart);
                        if (!(a.length - a.alreadyRead <= d)) return n.debug("ISOFile", "Getting item #" + t + " extent #" + r + " partial data (alreadyRead: " + a.alreadyRead + " offset: " + (a.offset + a.alreadyRead - e.fileStart) + " read size: " + d + " full extent size: " + a.length + " full item size: " + s.size + ")"), o.memcpy(s.data.buffer, s.alreadyRead, e, a.offset + a.alreadyRead - e.fileStart, d), a.alreadyRead += d, s.alreadyRead += d, e.usedBytes += d, this.stream.logBufferLevel(), null;
                        n.debug("ISOFile", "Getting item #" + t + " extent #" + r + " data (alreadyRead: " + a.alreadyRead + " offset: " + (a.offset + a.alreadyRead - e.fileStart) + " read size: " + (a.length - a.alreadyRead) + " full extent size: " + a.length + " full item size: " + s.size + ")"), o.memcpy(s.data.buffer, s.alreadyRead, e, a.offset + a.alreadyRead - e.fileStart, a.length - a.alreadyRead), e.usedBytes += a.length - a.alreadyRead, this.stream.logBufferLevel(), s.alreadyRead += a.length - a.alreadyRead, a.alreadyRead = a.length
                    }
                }
                return s.alreadyRead === s.size ? s : null
            }, c.prototype.releaseItem = function(t) {
                var e = this.items[t];
                if (!e.data) return 0;
                this.itemsDataSize -= e.size, e.data = null, e.alreadyRead = 0;
                for (var s = 0; s < e.extents.length; s++) e.extents[s].alreadyRead = 0;
                return e.size
            }, c.prototype.processItems = function(t) {
                for (var e in this.items) {
                    var s = this.items[e];
                    this.getItem(s.id), t && !s.sent && (t(s), s.sent = !0, s.data = null)
                }
            }, c.prototype.hasItem = function(t) {
                for (var e in this.items) {
                    var s = this.items[e];
                    if (s.name === t) return s.id
                }
                return -1
            }, c.prototype.getMetaHandler = function() {
                return this.meta ? this.meta.hdlr.handler : null
            }, c.prototype.getPrimaryItem = function() {
                return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
            }, c.prototype.itemToFragmentedTrackFile = function(t) {
                var e = t || {},
                    s = null;
                if (null == (s = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem())) return null;
                var r = new c;
                r.discardMdatData = !1;
                var n = {
                    type: s.type,
                    description_boxes: s.properties.boxes
                };
                s.properties.ispe && (n.width = s.properties.ispe.image_width, n.height = s.properties.ispe.image_height);
                var a = r.addTrack(n);
                return a ? (r.addSample(a, s.data), r) : null
            }, c.prototype.write = function(t) {
                for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t)
            }, c.prototype.createFragment = function(t, e, s) {
                var r = this.getTrackById(t),
                    a = this.getSample(r, e);
                if (null == a) return this.setNextSeekPositionFromSample(r.samples[e]), null;
                var h = s || new o;
                h.endianness = o.BIG_ENDIAN;
                var d = this.createSingleSampleMoof(a);
                d.write(h), d.trafs[0].truns[0].data_offset = d.size + 8, n.debug("MP4Box", "Adjusting data_offset with new value " + d.trafs[0].truns[0].data_offset), h.adjustUint32(d.trafs[0].truns[0].data_offset_position, d.trafs[0].truns[0].data_offset);
                var p = new l.mdatBox;
                return p.data = a.data, p.write(h), h
            }, c.writeInitializationSegment = function(t, e, s, r) {
                n.debug("ISOFile", "Generating initialization segment");
                var a, h = new o;
                h.endianness = o.BIG_ENDIAN, t.write(h);
                var d = e.add("mvex");
                for (s && d.add("mehd").set("fragment_duration", s), a = 0; a < e.traks.length; a++) d.add("trex").set("track_id", e.traks[a].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", r).set("default_sample_size", 0).set("default_sample_flags", 65536);
                return e.write(h), h.buffer
            }, c.prototype.save = function(t) {
                var e = new o;
                e.endianness = o.BIG_ENDIAN, this.write(e), e.save(t)
            }, c.prototype.getBuffer = function() {
                var t = new o;
                return t.endianness = o.BIG_ENDIAN, this.write(t), t.buffer
            }, c.prototype.initializeSegmentation = function() {
                for (null === this.onSegment && n.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), e = [], t = 0; t < this.fragmentedTracks.length; t++) {
                    var t, e, s, r, a = new l.moovBox;
                    a.mvhd = this.moov.mvhd, a.boxes.push(a.mvhd), s = this.getTrackById(this.fragmentedTracks[t].id), a.boxes.push(s), a.traks.push(s), (r = {}).id = s.tkhd.track_id, r.user = this.fragmentedTracks[t].user, r.buffer = c.writeInitializationSegment(this.ftyp, a, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[t].samples.length > 0 ? this.moov.traks[t].samples[0].duration : 0), e.push(r)
                }
                return e
            }, l.Box.prototype.printHeader = function(t) {
                this.size += 8, this.size > 4294967296 && (this.size += 8), "uuid" === this.type && (this.size += 16), t.log(t.indent + "size:" + this.size), t.log(t.indent + "type:" + this.type)
            }, l.FullBox.prototype.printHeader = function(t) {
                this.size += 4, l.Box.prototype.printHeader.call(this, t), t.log(t.indent + "version:" + this.version), t.log(t.indent + "flags:" + this.flags)
            }, l.Box.prototype.print = function(t) {
                this.printHeader(t)
            }, l.ContainerBox.prototype.print = function(t) {
                this.printHeader(t);
                for (var e = 0; e < this.boxes.length; e++)
                    if (this.boxes[e]) {
                        var s = t.indent;
                        t.indent += " ", this.boxes[e].print(t), t.indent = s
                    }
            }, c.prototype.print = function(t) {
                t.indent = "";
                for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && this.boxes[e].print(t)
            }, l.mvhdBox.prototype.print = function(t) {
                l.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "timescale: " + this.timescale), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "rate: " + this.rate), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "next_track_id: " + this.next_track_id)
            }, l.tkhdBox.prototype.print = function(t) {
                l.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "track_id: " + this.track_id), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "layer: " + this.layer), t.log(t.indent + "alternate_group: " + this.alternate_group), t.log(t.indent + "width: " + this.width), t.log(t.indent + "height: " + this.height)
            };
            var m = {};
            m.createFile = function(t, e) {
                var s = new c(e);
                return s.discardMdatData = !(void 0 === t || t), s
            }, e.cn = m.createFile
        }
    }
]);