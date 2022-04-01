(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    1009: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(49),
        s = n.n(c),
        i = n(16),
        o = n(162),
        l = n(508),
        u = n(12),
        d = n(509),
        j = n(423),
        b = n(510),
        p = n(9),
        m = n(21),
        O = n(166),
        f = n(266),
        h = n(559),
        x = n(346),
        y = n(43),
        v = n(257),
        g = n(256),
        T = n(258),
        _ = n(151),
        D = n(1034),
        w = n(1035),
        I = n(1036),
        k = n(1037),
        E = n(1038),
        C = n(363),
        A = n(1039),
        S = n(1040),
        R = n(1041),
        P = n(223),
        L = n(551),
        N = n(129),
        F = n(74),
        Y = n(556),
        H = n(1031),
        M = n(560),
        q = n(48),
        z = n(189),
        V = n(422),
        U = n(561),
        G = n(30),
        B = n(10),
        K = n.n(B),
        W = n(23),
        J = n(511),
        Q = n.n(J).a.create({ baseURL: 'http://localhost:5000' });
      Q.interceptors.request.use(function (e) {
        return (
          localStorage.getItem('profile') &&
            (e.headers.authorization = 'Bearer '.concat(
              JSON.parse(localStorage.getItem('profile')).token
            )),
          e
        );
      });
      var $ = function (e) {
          return Q.get('/leaves/'.concat(e));
        },
        X = function (e) {
          return Q.post('/leaves/range', e);
        },
        Z = function (e) {
          return Q.post('/leaves/range/personal', e);
        },
        ee = function (e, t) {
          return Q.patch('/leaves/'.concat(e), t);
        },
        te = function (e, t, n) {
          return Q.get('/leaves/'.concat(e, '/').concat(t, '/').concat(n));
        },
        ne = function (e) {
          return Q.get('/leaves/upcoming/'.concat(e));
        },
        ae = function (e) {
          return Q.get('/leaves/history/'.concat(e));
        },
        re = function (e) {
          return Q.post('/users/signIn', e);
        },
        ce = function (e) {
          return Q.post('/users/resetPassword', e);
        },
        se = function (e, t) {
          return Q.post('/users/'.concat(e, '/changePassword'), t);
        },
        ie = function (e, t) {
          return Q.post('/users/updateSettings/'.concat(e), t);
        },
        oe = function (e) {
          return Q.get('depts/'.concat(e));
        },
        le = function (e, t) {
          return Q.post('/depts/'.concat(e), t);
        },
        ue = function (e) {
          return Q.post('/users', e);
        },
        de = function (e) {
          return Q.get('users/'.concat(e));
        },
        je = function (e, t) {
          return Q.patch('/users/'.concat(e), t);
        },
        be = function (e) {
          return Q.get('users/dept/'.concat(e));
        },
        pe = function (e) {
          return Q.post('/leaveTypes', e);
        },
        me = function (e) {
          return Q.get('/leaveTypes/'.concat(e));
        },
        Oe = function (e, t) {
          return Q.patch('/leaveTypes/'.concat(e), t);
        },
        fe = function (e) {
          return Q.get('/roles/'.concat(e));
        },
        he = function (e, t) {
          return Q.patch('/roles/'.concat(e), t);
        },
        xe = function (e) {
          return Q.get('/holidays/'.concat(e));
        },
        ye = function (e) {
          return Q.post('/holidays', e);
        },
        ve = function (e, t, n) {
          return Q.post('/holidays/'.concat(e, '/').concat(t), n);
        },
        ge = function (e, t) {
          return Q.get('/holidays/'.concat(e, '/').concat(t));
        },
        Te = function (e, t) {
          return Q.delete('/holidays/'.concat(e, '/').concat(t));
        },
        _e = function (e) {
          return Q.get('/training/'.concat(e));
        },
        De = function (e, t) {
          return Q.post('/training/'.concat(e), t);
        },
        we = function (e, t) {
          return Q.patch('/training/'.concat(e), t);
        },
        Ie = function (e, t, n) {
          return Q.get(
            '/training/ext/'.concat(e, '/').concat(t, '/').concat(n)
          );
        },
        ke = function (e, t) {
          return Q.post('/training/ext/'.concat(e), t);
        },
        Ee = function (e) {
          return Q.get('/training/history/ext/'.concat(e));
        },
        Ce = function (e) {
          return Q.get('/training/history/'.concat(e));
        },
        Ae = function (e) {
          return Q.get('/training/upcoming/'.concat(e));
        },
        Se = function (e) {
          return Q.get('/policy/dept/'.concat(e));
        },
        Re = function (e) {
          return Q.get('/policy/'.concat(e));
        },
        Pe = function (e, t) {
          return Q.patch('/policy/'.concat(e), t);
        },
        Le = function (e) {
          return Q.get('/notification/'.concat(e));
        },
        Ne = function (e, t) {
          return Q.post('/notification/'.concat(e), t);
        },
        Fe = function (e) {
          return Q.post('/notification/read/'.concat(e));
        },
        Ye = function (e) {
          return Q.get('trainingProgress/'.concat(e));
        },
        He = function (e, t) {
          return Q.post('/trainingProgress/'.concat(e), t);
        },
        Me = function (e) {
          return Q.get('trainingProgress/user/'.concat(e));
        },
        qe = function (e) {
          return Q.get('trainingProgress/dept/'.concat(e));
        },
        ze = 'CREATE_LEAVE',
        Ve = 'UPDATE_LEAVE',
        Ue = 'FETCH_ALL_LEAVE',
        Ge = 'FETCH_ONE_LEAVE',
        Be = 'FETCH_LEAVE_BY_DATERANGE_PERSONAL',
        Ke = 'FETCH_LEAVE_BY_DATERANGE',
        We = 'LEAVE_START_LOADING',
        Je = 'LEAVE_END_LOADING',
        Qe = 'LEAVE_ERROR',
        $e = 'LEAVE_SUCCESS',
        Xe = 'FETCH_LEAVE_REQUESTS',
        Ze = 'FETCH_UPCOMING_LEAVE',
        et = 'FETCH_LEAVE_HISTORY',
        tt = 'FETCH_TODAY_LEAVE',
        nt = 'AUTH',
        at = 'RESET_PASSWORD',
        rt = 'CHANGE_PASSWORD',
        ct = 'UPDATE_AUTH',
        st = 'UPDATE_SETTINGS',
        it = 'LOGOUT',
        ot = 'AUTH_START_LOADING',
        lt = 'AUTH_END_LOADING',
        ut = 'AUTH_ERROR',
        dt = 'AUTH_SUCCESS',
        jt = 'CREATE_USER',
        bt = 'UPDATE_USER',
        pt = 'FETCH_ALL_USER',
        mt = 'FETCH_ONE_USER',
        Ot = 'USER_START_LOADING',
        ft = 'USER_END_LOADING',
        ht = 'USER_ERROR',
        xt = 'USER_SUCCESS',
        yt = 'FETCH_DEPT_USER',
        vt = 'CREATE_DEPT',
        gt = 'UPDATE_DEPT',
        Tt = 'DELETE_DEPT',
        _t = 'FETCH_ALL_DEPT',
        Dt = 'DEPT_START_LOADING',
        wt = 'DEPT_END_LOADING',
        It = 'DEPT_ERROR',
        kt = 'DEPT_SUCCESS',
        Et = 'CREATE_LEAVETYPE',
        Ct = 'UPDATE_LEAVETYPE',
        At = 'FETCH_ALL_LEAVETYPE',
        St = 'FETCH_ONE_LEAVETYPE',
        Rt = 'LEAVETYPE_START_LOADING',
        Pt = 'LEAVETYPE_END_LOADING',
        Lt = 'LEAVE_ERROR',
        Nt = 'FETCH_LEAVE_COUNT',
        Ft = 'LEAVE_SUCCESS',
        Yt = 'CREATE_ROLE',
        Ht = 'UPDATE_ROLE',
        Mt = 'FETCH_ALL_ROLE',
        qt = 'FETCH_ONE_ROLE',
        zt = 'ROLE_START_LOADING',
        Vt = 'ROLE_END_LOADING',
        Ut = 'ROLE_ERROR',
        Gt = 'ROLE_SUCCESS',
        Bt = 'CREATE_HOLIDAY',
        Kt = 'UPDATE_HOLIDAY',
        Wt = 'DELETE_HOLIDAY',
        Jt = 'FETCH_ALL_HOLIDAY',
        Qt = 'FETCH_ONE_HOLIDAY',
        $t = 'HOLIDAY_START_LOADING',
        Xt = 'HOLIDAY_END_LOADING',
        Zt = 'HOLIDAY_ERROR',
        en = 'HOLIDAY_SUCCESS',
        tn = 'FETCH_HOLIDAY_BY_YEAR',
        nn = 'CREATE_TRAINING',
        an = 'FETCH_ALL_TRAINING',
        rn = 'FETCH_ONE_TRAINING',
        cn = 'TRAINING_START_LOADING',
        sn = 'TRAINING_END_LOADING',
        on = 'TRAINING_ERROR',
        ln = 'TRAINING_SUCCESS',
        un = 'UPDATE_TRAINING',
        dn = 'LEAVE_TRAINING',
        jn = 'FETCH_EXT_TRAINING',
        bn = 'UPDATE_TRAINING_STATUS',
        pn = 'FETCH_EXT_TRAINING_HISTORY',
        mn = 'FETCH_TRAINING_HISTORY',
        On = 'FETCH_UPCOMING_TRAINING',
        fn = 'FETCH_TODAY_TRAINING',
        hn = 'FETCH_TRAINING_COUNT',
        xn = 'CREATE_TRAININGPROGRESS',
        yn = 'FETCH_ALL_TRAININGPROGRESS',
        vn = 'FETCH_ONE_TRAININGPROGRESS',
        gn = 'TRAININGPROGRESS_START_LOADING',
        Tn = 'TRAININGPROGRESS_END_LOADING',
        _n = 'TRAININGPROGRESS_ERROR',
        Dn = 'TRAININGPROGRESS_SUCCESS',
        wn = 'UPDATE_TRAININGPROGRESS',
        In = 'LEAVE_TRAININGPROGRESS',
        kn = 'FETCH_DEPT_TRAININGPROGRESS',
        En = 'FETCH_USER_TRAININGPROGRESS',
        Cn = 'FETCH_EXT_TRAININGPROGRESS',
        An = 'UPDATE_TRAININGPROGRESS_STATUS',
        Sn = 'FETCH_EXT_TRAININGPROGRESS_HISTORY',
        Rn = 'FETCH_TRAININGPROGRESS_HISTORY',
        Pn = 'FETCH_UPCOMING_TRAININGPROGRESS',
        Ln = 'FETCH_TODAY_TRAININGPROGRESS',
        Nn = 'CREATE_POLICY',
        Fn = 'UPDATE_POLICY',
        Yn = 'FETCH_ALL_POLICY',
        Hn = 'FETCH_POLICY_BY_DEPT',
        Mn = 'FETCH_ONE_POLICY',
        qn = 'POLICY_START_LOADING',
        zn = 'POLICY_END_LOADING',
        Vn = 'POLICY_ERROR',
        Un = 'POLICY_SUCCESS',
        Gn = 'NOTIFICATION_START_LOADING',
        Bn = 'NOTIFICATION_END_LOADING',
        Kn = 'NOTIFICATION_ERROR',
        Wn = 'NOTIFICATION_SUCCESS',
        Jn = 'FETCH_ALL_NOTIFICATION',
        Qn = 'CLEAR_NOTIFICATION_BY_TYPE',
        $n = 'SET_NOTIFICATION_READ',
        Xn = function () {
          return (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var n, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: We }),
                            (e.next = 4),
                            Q.get('/leaves')
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: Ue, payload: a }),
                            t({ type: Je }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            t({ type: Qe, error: e.t0 });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Zn = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: We }), (t.next = 4), $(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: Ge, payload: r }),
                            n({ type: Je }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: Qe, error: t.t0 });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ea = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: We }),
                            (n.next = 4),
                            ee(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Ve, payload: c }),
                            a({ type: Je }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: Qe, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        ta = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: We }), (t.next = 4), X(e)
                          );
                        case 4:
                          (a = t.sent),
                            n({ type: Ke, payload: a }),
                            n({ type: Je }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({ type: Qe, error: t.t0 });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        na = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: We }), (t.next = 4), Z(e)
                          );
                        case 4:
                          (a = t.sent),
                            n({ type: Be, payload: a }),
                            n({ type: Je }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({ type: Qe, error: t.t0 });
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        aa = function (e, t, n) {
          return (function () {
            var a = Object(W.a)(
              K.a.mark(function a(r) {
                var c, s;
                return K.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            r({ type: We }),
                            (a.next = 4),
                            te(e, t, n)
                          );
                        case 4:
                          (c = a.sent),
                            (s = c.data),
                            r({ type: Xe, payload: s }),
                            r({ type: Je }),
                            (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            r({ type: Qe, error: a.t0 });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        ra = function () {
          return (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var n, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: We }),
                            (e.next = 4),
                            Q.get('/leaves/date/today')
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: tt, payload: a }),
                            t({ type: Je }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            t({ type: Qe, error: e.t0 });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        ca = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: cn }),
                            (t.next = 4),
                            (c = e),
                            Q.post('/training', c)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: nn, payload: r }),
                            n({ type: sn }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: on, error: t.t0 });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                    var c;
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        sa = function (e, t, n) {
          return (function () {
            var a = Object(W.a)(
              K.a.mark(function a(r) {
                var c, s;
                return K.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            r({ type: cn }),
                            (a.next = 4),
                            Ie(e, t, n)
                          );
                        case 4:
                          (c = a.sent),
                            (s = c.data),
                            r({ type: jn, payload: s }),
                            r({ type: sn }),
                            (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            r({ type: on, error: a.t0 });
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        ia = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: cn }),
                            (n.next = 4),
                            ke(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: bn, payload: c }),
                            a({ type: sn }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: on, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        oa = function () {
          return (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var n, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: Rt }),
                            (e.next = 4),
                            Q.get('/leaveTypes')
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: At, payload: a }),
                            t({ type: Pt }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            t({ type: Lt, error: e.t0 });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        la = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Rt }), (t.next = 4), pe(e)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: Et, payload: r }),
                            n({
                              type: Ft,
                              payload: {
                                success: 'Leave type successfully created',
                              },
                            }),
                            n({ type: Pt }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: Lt, error: t.t0 });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ua = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: Rt }),
                            (n.next = 4),
                            Oe(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Ct, payload: c }),
                            a({ type: Pt }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: Lt, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        da = n(11),
        ja = n.n(da),
        ba = n(1016),
        pa = n(1017),
        ma = n(525),
        Oa = n(332),
        fa = n(334),
        ha = n(333),
        xa = n(291),
        ya = n(1032),
        va = n(527),
        ga = n(286),
        Ta = (n(644), n(72)),
        _a = n(1),
        Da = function (e) {
          var t = e.props;
          return Object(_a.jsx)('div', {
            style: { paddingTop: 100, paddingBottom: 100, textAlign: 'center' },
            className: 'antdp-page-loading',
            children: Object(_a.jsx)(
              Ta.a,
              Object(p.a)({ size: 'large', tip: 'Loading...' }, t)
            ),
          });
        },
        wa = n(90),
        Ia = n.n(wa),
        ka = function (e) {
          var t = e.user,
            n = Ia()(),
            r = Object(i.c)(function (e) {
              return e.leaves;
            }),
            c = r.leaves,
            s = r.isLoading,
            o = r.todayLeaves,
            l = Object(i.c)(function (e) {
              return e.trainings;
            }).trainings,
            u =
              (Object(i.c)(function (e) {
                return e.leaveTypes;
              }).leaveTypes,
              Object(i.b)());
          Object(a.useEffect)(
            function () {
              u(Xn()),
                u(ra()),
                u(
                  (function () {
                    var e = Object(W.a)(
                      K.a.mark(function e(t) {
                        var n, a;
                        return K.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: cn }),
                                    (e.next = 4),
                                    Q.get('/training/date/today')
                                  );
                                case 4:
                                  (n = e.sent),
                                    (a = n.data),
                                    t({ type: fn, payload: a }),
                                    t({ type: sn }),
                                    (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10),
                                    (e.t0 = e.catch(0)),
                                    t({ type: on, error: e.t0 });
                                case 13:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                ),
                u(oa());
            },
            [u]
          );
          var d = [];
          t.leaveCount.forEach(function (e) {
            var t = { name: e.leaveType.name, value: e.count };
            d.push(t);
          });
          var j = t.trainingHours,
            b = t.completedHours,
            p = j - b,
            m = b / j,
            O = [
              { name: 'Hours Completed', value: b },
              { name: 'Hours Required', value: (p = p < 0 ? '' : p) },
            ],
            f = ['#0088FE', '#2ce654', '#ff00f0'],
            h = ['#0088FE', '#de0b0b'];
          return !s && c && o && l
            ? Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    children: 'Personal Dashboard',
                  }),
                  Object(_a.jsxs)(N.a, {
                    gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                    children: [
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        lg: 16,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsxs)(H.b, {
                              title: 'Profile Details',
                              bordered: !0,
                              column: { sm: 2, xs: 1 },
                              layout: n.md ? 'horizontal' : 'vertical',
                              children: [
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Name',
                                  span: 3,
                                  children: ''
                                    .concat(t.first_name, ' ')
                                    .concat(t.last_name),
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Department',
                                  span: 2,
                                  children: t.department.name,
                                }),
                                t.leaveCount.map(function (e, t) {
                                  return Object(_a.jsx)(
                                    H.b.Item,
                                    {
                                      label: e.leaveType.name,
                                      span: 2,
                                      children: e.count,
                                    },
                                    e.leaveType._id
                                  );
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Total Training Hours Required',
                                  span: 1,
                                  children: j,
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Training Hours Completed',
                                  span: 1,
                                  children: b,
                                }),
                              ],
                            }),
                            Object(_a.jsx)('br', {}),
                            !!o.some(function (e) {
                              return e.user._id === t._id;
                            }) &&
                              Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)(M.a, {
                                    message: 'You are on leave today.',
                                    type: 'info',
                                    showIcon: !0,
                                  }),
                                  Object(_a.jsx)('br', {}),
                                ],
                              }),
                            m <= 0.25
                              ? Object(_a.jsx)(M.a, {
                                  message: 'Low Training Hours Completed',
                                  description:
                                    'Please participate in more trainings in order to reach your quota!',
                                  type: 'error',
                                })
                              : m < 0.75
                              ? Object(_a.jsx)(M.a, {
                                  message: 'Moderate Training Hours Completed',
                                  description:
                                    'Keep up the good work! Participate in more trainings to reach your quota.',
                                  type: 'warning',
                                })
                              : m < 1
                              ? Object(_a.jsx)(M.a, {
                                  message: 'Great Training Hours Completed',
                                  description:
                                    'Almost there! Keep participating in trainings to reach your quota!',
                                  type: 'success',
                                })
                              : Object(_a.jsx)(M.a, {
                                  message: 'Training Quota Reached',
                                  description:
                                    'Congratulations! You have reached your training quota!',
                                  type: 'success',
                                }),
                          ],
                        }),
                      }),
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        lg: 8,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('h4', {
                              children: 'Your Leaves Remaining',
                            }),
                            Object(_a.jsx)(ba.a, {
                              minHeight: 180,
                              children: Object(_a.jsxs)(pa.a, {
                                data: d,
                                margin: {
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                },
                                children: [
                                  Object(_a.jsx)(ma.a, {
                                    fill: '#0088FE',
                                    dataKey: 'value',
                                    children: d.map(function (e, t) {
                                      return Object(_a.jsx)(
                                        Oa.a,
                                        { fill: f[t % f.length] },
                                        'cell-'.concat(t)
                                      );
                                    }),
                                  }),
                                  Object(_a.jsx)(fa.a, {}),
                                  Object(_a.jsx)(ha.a, { dataKey: 'name' }),
                                  Object(_a.jsx)(xa.a, {}),
                                ],
                              }),
                            }),
                            Object(_a.jsx)('h4', {
                              children: 'Your Training Hours',
                            }),
                            Object(_a.jsx)(ba.a, {
                              minWidth: 200,
                              minHeight: 210,
                              children: Object(_a.jsxs)(ya.a, {
                                children: [
                                  Object(_a.jsx)(va.a, {
                                    data: O,
                                    innerRadius: 40,
                                    outerRadius: 60,
                                    fill: '#8884d8',
                                    paddingAngle: 3,
                                    startAngle: -270,
                                    dataKey: 'value',
                                    isAnimationActive: !1,
                                    label: function (e) {
                                      var t = e.x,
                                        n = e.y,
                                        a = e.value;
                                      return Object(_a.jsx)('text', {
                                        x: t,
                                        y: n,
                                        fill: 'black',
                                        textAnchor: 'end',
                                        alignmentBaseline: 'auto',
                                        children: a,
                                      });
                                    },
                                    labelLine: !1,
                                    children: O.map(function (e, t) {
                                      return Object(_a.jsx)(
                                        Oa.a,
                                        { fill: h[t % h.length] },
                                        'cell-'.concat(t)
                                      );
                                    }),
                                  }),
                                  Object(_a.jsx)(xa.a, {}),
                                  Object(_a.jsx)(ga.a, {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    children: "Today's Information",
                  }),
                  Object(_a.jsxs)(N.a, {
                    gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                    children: [
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('div', {
                              style: { textAlign: 'right' },
                              children: Object(_a.jsx)(q.a, {
                                type: 'primary',
                                shape: 'round',
                                children: Object(_a.jsx)(G.b, {
                                  to: '/leaves/home',
                                  children: 'Leaves Dashboard',
                                }),
                              }),
                            }),
                            Object(_a.jsx)('b', {
                              children: 'Currently on Leave:',
                            }),
                            o &&
                              (o.length
                                ? Object(_a.jsx)(_a.Fragment, {
                                    children: Object(_a.jsxs)(V.a, {
                                      dataSource: o,
                                      rowKey: '_id',
                                      children: [
                                        Object(_a.jsx)(V.a.Column, {
                                          title: 'Name',
                                          dataIndex: 'name',
                                          render: function (e, t) {
                                            return ''
                                              .concat(t.user.first_name, ' ')
                                              .concat(t.user.last_name);
                                          },
                                        }),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Leave Type',
                                            dataIndex: 'leaveType',
                                            render: function (e, t) {
                                              return Object(_a.jsx)(U.a, {
                                                color: e.color,
                                                children:
                                                  ((n = e.code),
                                                  n.charAt(0).toUpperCase() +
                                                    n.slice(1)),
                                              });
                                              var n;
                                            },
                                          },
                                          'leaveType'
                                        ),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Date',
                                            dataIndex: 'date',
                                            render: function (e, t) {
                                              return ''
                                                .concat(
                                                  ja()(t.fromDate).format(
                                                    'YYYY-MM-DD'
                                                  ),
                                                  ' - '
                                                )
                                                .concat(
                                                  ja()(t.toDate).format(
                                                    'YYYY-MM-DD'
                                                  )
                                                );
                                            },
                                          },
                                          'date'
                                        ),
                                      ],
                                    }),
                                  })
                                : Object(_a.jsx)(z.a, {})),
                          ],
                        }),
                      }),
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('div', {
                              style: { textAlign: 'right' },
                              children: Object(_a.jsx)(q.a, {
                                type: 'primary',
                                shape: 'round',
                                children: Object(_a.jsx)(G.b, {
                                  to: '/training/home',
                                  children: 'Training Dashboard',
                                }),
                              }),
                            }),
                            Object(_a.jsx)('b', {
                              children: 'Internal Trainings Today:',
                            }),
                            l &&
                              (l.length
                                ? Object(_a.jsx)(_a.Fragment, {
                                    children: Object(_a.jsxs)(V.a, {
                                      dataSource: l,
                                      rowKey: '_id',
                                      children: [
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Organizer',
                                            dataIndex: 'organizer',
                                          },
                                          'organizer'
                                        ),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          { title: 'Tite', dataIndex: 'title' },
                                          'title'
                                        ),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Action',
                                            render: function (e, t) {
                                              return Object(_a.jsx)(
                                                y.b,
                                                {
                                                  size: 'middle',
                                                  children: Object(_a.jsx)(
                                                    G.b,
                                                    {
                                                      to: '/training/view/'.concat(
                                                        t._id
                                                      ),
                                                      children: 'View',
                                                    }
                                                  ),
                                                },
                                                t._id
                                              );
                                            },
                                          },
                                          'action'
                                        ),
                                      ],
                                    }),
                                  })
                                : Object(_a.jsx)(z.a, {})),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : Object(_a.jsx)(Da, {});
        },
        Ea = n(63),
        Ca = n(59),
        Aa = (n(763), n(177)),
        Sa =
          (L.a.Text,
          function () {
            var e = Ia()(),
              t = Object(a.useState)(!0),
              n = Object(m.a)(t, 2),
              r =
                (n[0],
                n[1],
                Object(i.c)(function (e) {
                  return e.leaves;
                })),
              c = r.leaves,
              s = r.upcomingLeave,
              o = r.isLoading,
              l =
                (Object(i.c)(function (e) {
                  return e.leaveTypes;
                }).leaveTypes,
                JSON.parse(localStorage.getItem('profile')).result),
              u = (Object(Ca.g)(), Object(i.b)()),
              d = 0,
              j = [];
            l.leaveCount.forEach(function (e) {
              var t = { name: e.leaveType.name, value: e.count };
              j.push(t);
            });
            var b = ['#0088FE', '#2ce654', '#ff00f0'];
            Object(a.useEffect)(
              function () {
                var e;
                u(
                  ((e = l._id),
                  (function () {
                    var t = Object(W.a)(
                      K.a.mark(function t(n) {
                        var a, r;
                        return K.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    n({ type: We }),
                                    (t.next = 4),
                                    ne(e)
                                  );
                                case 4:
                                  (a = t.sent),
                                    (r = a.data),
                                    n({ type: Ze, payload: r }),
                                    n({ type: Je }),
                                    (t.next = 13);
                                  break;
                                case 10:
                                  (t.prev = 10),
                                    (t.t0 = t.catch(0)),
                                    n({ type: Qe, error: t.t0 });
                                case 13:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                ),
                  u(oa()),
                  'staff' != l.roles.name &&
                    u(aa(l.roles.name, l._id, l.department.name));
              },
              [u]
            );
            var p,
              O = Object(Ea.a)(c);
            try {
              for (O.s(); !(p = O.n()).done; ) {
                'Pending' == p.value.status && d++;
              }
            } catch (f) {
              O.e(f);
            } finally {
              O.f();
            }
            return o
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Current Leave Status',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          md: 12,
                          lg: 16,
                          children: Object(_a.jsx)(Y.a, {
                            bordered: !0,
                            children: Object(_a.jsxs)(H.b, {
                              title: 'Profile Details',
                              bordered: !0,
                              column: { sm: 2, xs: 1 },
                              layout: e.md ? 'horizontal' : 'vertical',
                              children: [
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Name',
                                  span: 2,
                                  children: ''
                                    .concat(l.first_name, ' ')
                                    .concat(l.last_name),
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Department',
                                  span: 2,
                                  children: l.department.name,
                                }),
                                l.leaveCount.map(function (e, t) {
                                  return Object(_a.jsx)(
                                    H.b.Item,
                                    {
                                      label: e.leaveType.name,
                                      span: 1,
                                      children: e.count,
                                    },
                                    e.leaveType._id
                                  );
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          md: 12,
                          lg: 8,
                          children: Object(_a.jsx)(Y.a, {
                            bordered: !0,
                            children: Object(_a.jsx)(ba.a, {
                              minHeight: 215,
                              children: Object(_a.jsxs)(pa.a, {
                                data: j,
                                margin: {
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                },
                                children: [
                                  Object(_a.jsx)(ma.a, {
                                    fill: '#0088FE',
                                    dataKey: 'value',
                                    children: j.map(function (e, t) {
                                      return Object(_a.jsx)(
                                        Oa.a,
                                        { fill: b[t % b.length] },
                                        'cell-'.concat(t)
                                      );
                                    }),
                                  }),
                                  Object(_a.jsx)(fa.a, {}),
                                  Object(_a.jsx)(ha.a, { dataKey: 'name' }),
                                  Object(_a.jsx)(xa.a, {}),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Quick Overview',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 12,
                          children: Object(_a.jsxs)(Y.a, {
                            bordered: !0,
                            children: [
                              Object(_a.jsxs)('div', {
                                style: { textAlign: 'right' },
                                children: [
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    shape: 'round',
                                    style: { margin: '10px' },
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaves/create',
                                      children: 'To Leave Application',
                                    }),
                                  }),
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    shape: 'round',
                                    style: { margin: '10px' },
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaves/history',
                                      children: 'To Leave History',
                                    }),
                                  }),
                                ],
                              }),
                              Object(_a.jsx)('b', {
                                children: 'Upcoming Leaves:',
                              }),
                              s &&
                                (s.length
                                  ? Object(_a.jsx)(_a.Fragment, {
                                      children: Object(_a.jsxs)(V.a, {
                                        dataSource: s,
                                        rowKey: '_id',
                                        children: [
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Leave Type',
                                              dataIndex: 'leaveType',
                                              render: function (e, t) {
                                                return Object(_a.jsx)(U.a, {
                                                  color: e.color,
                                                  children:
                                                    ((n = e.code),
                                                    n.charAt(0).toUpperCase() +
                                                      n.slice(1)),
                                                });
                                                var n;
                                              },
                                            },
                                            'leaveType'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Reason',
                                              dataIndex: 'reason',
                                            },
                                            'reason'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Date',
                                              dataIndex: 'date',
                                              render: function (e, t) {
                                                return ''
                                                  .concat(
                                                    ja()(t.fromDate).format(
                                                      'YYYY-MM-DD'
                                                    ),
                                                    ' - '
                                                  )
                                                  .concat(
                                                    ja()(t.toDate).format(
                                                      'YYYY-MM-DD'
                                                    )
                                                  );
                                              },
                                            },
                                            'date'
                                          ),
                                        ],
                                      }),
                                    })
                                  : Object(_a.jsx)(z.a, {})),
                              Object(_a.jsx)('br', {}),
                            ],
                          }),
                        }),
                        'staff' != l.roles.name &&
                          Object(_a.jsx)(F.a, {
                            className: 'gutter-row',
                            xs: 24,
                            sm: 12,
                            children: Object(_a.jsx)(Y.a, {
                              bordered: !0,
                              children: Object(_a.jsxs)(y.b, {
                                wrap: !0,
                                align: 'baseline',
                                style: {
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                },
                                children: [
                                  Object(_a.jsxs)(L.a.Text, {
                                    children: [
                                      'Pending Leave Requests:',
                                      ' '.concat(d),
                                    ],
                                  }),
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    shape: 'round',
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaves/list',
                                      children: 'To Requests',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                });
          }),
        Ra = {
          route: {
            path: '/',
            routes: [
              {
                path: '/home',
                name: 'Personal Dashboard',
                icon: Object(_a.jsx)(D.a, {}),
                exact: !0,
              },
              {
                path: '/leaves',
                name: 'Leaves',
                icon: Object(_a.jsx)(w.a, {}),
                exact: !0,
                routes: [
                  {
                    path: 'home',
                    name: 'Leaves Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'create',
                    name: 'Apply Leave',
                    icon: Object(_a.jsx)(k.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Leave History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: '/calendar/personal',
                    name: 'Calendar View',
                    icon: Object(_a.jsx)(C.a, {}),
                  },
                ],
              },
              {
                path: '/training',
                name: 'Training',
                icon: Object(_a.jsx)(A.a, {}),
                routes: [
                  {
                    path: 'home',
                    name: 'Training Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'list',
                    name: 'Internal Training List',
                    icon: Object(_a.jsx)(S.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Training History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: '/training/submitExt',
                    name: 'External Training Request',
                    icon: Object(_a.jsx)(R.a, {}),
                  },
                  {
                    path: '/trainingProgress/history',
                    name: 'Track Training Progress',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                ],
              },
            ],
          },
          location: { pathname: '/' },
        },
        Pa = n(1042),
        La = n(1043),
        Na = n(1044),
        Fa = {
          route: {
            path: '/',
            routes: [
              {
                path: '/',
                name: 'Dashboard',
                icon: Object(_a.jsx)(Pa.a, {}),
                routes: [
                  {
                    path: '/home',
                    name: 'Personal',
                    icon: Object(_a.jsx)(D.a, {}),
                    exact: !0,
                  },
                  {
                    path: '/supervisor',
                    name: 'Department',
                    icon: Object(_a.jsx)(La.a, {}),
                    exact: !0,
                  },
                ],
              },
              {
                path: '/leaves',
                name: 'Leaves',
                icon: Object(_a.jsx)(w.a, {}),
                exact: !0,
                routes: [
                  {
                    path: 'home',
                    name: 'Leaves Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'create',
                    name: 'Apply Leave',
                    icon: Object(_a.jsx)(k.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Leave History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: 'list',
                    name: 'Leave Requests',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/calendar/personal',
                    name: 'Calendar View',
                    icon: Object(_a.jsx)(C.a, {}),
                  },
                ],
              },
              {
                path: '/training',
                name: 'Training',
                icon: Object(_a.jsx)(A.a, {}),
                routes: [
                  {
                    path: 'home',
                    name: 'Training Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'list',
                    name: 'Internal Training List',
                    icon: Object(_a.jsx)(S.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Training History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: 'submitExt',
                    name: 'External Training Request',
                    icon: Object(_a.jsx)(R.a, {}),
                  },
                  {
                    path: 'extList',
                    name: 'External Requests List',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/trainingProgress/history',
                    name: 'Track Training Progress',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/trainingProgress/list',
                    name: 'Pending Training Completion',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                ],
              },
              {
                path: '/users/dept',
                name: 'Employee',
                icon: Object(_a.jsx)(Na.a, {}),
              },
            ],
          },
          location: { pathname: '/' },
        },
        Ya = n(1045),
        Ha = n(1046),
        Ma = n(1047),
        qa = {
          route: {
            path: '/',
            routes: [
              {
                path: '/dashboard',
                name: 'Dashboard',
                icon: Object(_a.jsx)(Pa.a, {}),
                routes: [
                  {
                    path: '/home',
                    name: 'Personal',
                    icon: Object(_a.jsx)(D.a, {}),
                    exact: !0,
                  },
                  {
                    path: '/supervisor',
                    name: 'Department',
                    icon: Object(_a.jsx)(La.a, {}),
                    exact: !0,
                  },
                  {
                    path: '/admin',
                    name: 'Admin',
                    icon: Object(_a.jsx)(Ya.a, {}),
                    exact: !0,
                  },
                ],
              },
              {
                path: '/calendar',
                name: 'Calendar',
                icon: Object(_a.jsx)(C.a, {}),
                exact: !0,
              },
              {
                path: '/leaves',
                name: 'Leaves',
                icon: Object(_a.jsx)(w.a, {}),
                exact: !0,
                routes: [
                  {
                    path: 'home',
                    name: 'Leaves Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'create',
                    name: 'Apply Leave',
                    icon: Object(_a.jsx)(k.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Leave History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: 'list',
                    name: 'Leave Requests',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/calendar/personal',
                    name: 'Calendar View',
                    icon: Object(_a.jsx)(C.a, {}),
                  },
                ],
              },
              {
                path: '/training',
                name: 'Training',
                icon: Object(_a.jsx)(A.a, {}),
                routes: [
                  {
                    path: 'home',
                    name: 'Training Dashboard',
                    icon: Object(_a.jsx)(I.a, {}),
                    exact: !0,
                  },
                  {
                    path: 'create',
                    name: 'Create Internal Training',
                    icon: Object(_a.jsx)(k.a, {}),
                  },
                  {
                    path: 'list',
                    name: 'Internal Training List',
                    icon: Object(_a.jsx)(S.a, {}),
                  },
                  {
                    path: 'history',
                    name: 'Training History',
                    icon: Object(_a.jsx)(E.a, {}),
                  },
                  {
                    path: 'submitExt',
                    name: 'External Training Request',
                    icon: Object(_a.jsx)(R.a, {}),
                  },
                  {
                    path: 'extList',
                    name: 'External Requests List',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/trainingProgress/history',
                    name: 'Track Training Progress',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                  {
                    path: '/trainingProgress/list',
                    name: 'Pending Training Completion',
                    icon: Object(_a.jsx)(P.a, {}),
                  },
                ],
              },
              {
                path: '/settings',
                name: 'Settings',
                icon: Object(_a.jsx)(Ha.a, {}),
                routes: [
                  {
                    path: '/holidays',
                    name: 'Holidays',
                    icon: Object(_a.jsx)(C.a, {}),
                  },
                  {
                    path: '/depts',
                    name: 'Departments',
                    icon: Object(_a.jsx)(Ma.a, {}),
                  },
                  {
                    path: '/leaveTypes',
                    name: 'Leave Types',
                    icon: Object(_a.jsx)(Ma.a, {}),
                  },
                  {
                    path: '/policy',
                    name: 'Policy',
                    icon: Object(_a.jsx)(Ma.a, {}),
                  },
                ],
              },
              {
                path: '/users',
                name: 'Employee',
                icon: Object(_a.jsx)(Na.a, {}),
              },
            ],
          },
          location: { pathname: '/' },
        },
        za = n(1048),
        Va = n(128),
        Ua = n(75),
        Ga = n(32),
        Ba = n(4),
        Ka = n.n(Ba),
        Wa = n(106),
        Ja = n(1033),
        Qa = n(254),
        $a =
          (n(764),
          function (e) {
            var t = e.list,
              n = void 0 === t ? [] : t,
              a = e.onClick,
              r = e.onClear,
              c = e.title,
              s = e.onViewMore,
              i = e.emptyText,
              o = e.showClear,
              l = void 0 === o || o,
              u = e.clearText,
              d = e.viewMoreText,
              j = e.showViewMore,
              b = void 0 !== j && j;
            return n && 0 !== n.length
              ? Object(_a.jsxs)('div', {
                  children: [
                    Object(_a.jsx)(Ja.b, {
                      className: 'list',
                      dataSource: n,
                      renderItem: function (e, t) {
                        var n = Ka()('item', Object(Wa.a)({}, 'read', e.read)),
                          r = e.avatar
                            ? 'string' === typeof e.avatar
                              ? Object(_a.jsx)(Qa.a, {
                                  className: 'avatar',
                                  src: e.avatar,
                                })
                              : Object(_a.jsx)('span', {
                                  className: 'iconElement',
                                  children: e.avatar,
                                })
                            : null;
                        return Object(_a.jsx)(
                          Ja.b.Item,
                          {
                            className: n,
                            onClick: function () {
                              null === a || void 0 === a || a(e);
                            },
                            children: Object(_a.jsx)(Ja.b.Item.Meta, {
                              className: 'meta',
                              avatar: r,
                              title: Object(_a.jsxs)('div', {
                                className: 'title',
                                children: [
                                  e.title,
                                  Object(_a.jsx)('div', {
                                    className: 'extra',
                                    children: e.extra,
                                  }),
                                ],
                              }),
                              description: Object(_a.jsxs)('div', {
                                children: [
                                  Object(_a.jsx)('div', {
                                    className: 'description',
                                    children: ''
                                      .concat(e.sender.first_name, ' ')
                                      .concat(e.sender.last_name, ' ')
                                      .concat(e.content.message),
                                  }),
                                  Object(_a.jsx)('div', {
                                    className: 'datetime',
                                    children: e.createdAt,
                                  }),
                                ],
                              }),
                            }),
                          },
                          e.key || t
                        );
                      },
                    }),
                    Object(_a.jsxs)('div', {
                      className: 'bottomBar',
                      children: [
                        l
                          ? Object(_a.jsxs)('div', {
                              onClick: r,
                              children: [u, ' ', c],
                            })
                          : null,
                        b
                          ? Object(_a.jsx)('div', {
                              onClick: function (e) {
                                s && s(e);
                              },
                              children: d,
                            })
                          : null,
                      ],
                    }),
                  ],
                })
              : Object(_a.jsxs)('div', {
                  className: 'notFound',
                  children: [
                    Object(_a.jsx)('img', {
                      src: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                      alt: 'not found',
                    }),
                    Object(_a.jsx)('div', { children: i }),
                  ],
                });
          }),
        Xa = n(562),
        Za = n(120),
        er = (n(765), ['overlayClassName']),
        tr = function (e) {
          var t = e.overlayClassName,
            n = Object(Xa.a)(e, er);
          return Object(_a.jsx)(
            Za.a,
            Object(p.a)(
              Object(p.a)({ overlayClassName: 'container '.concat(t) }, n),
              {},
              { trigger: ['click'] }
            )
          );
        },
        nr = (n(477), Va.a.TabPane),
        ar = function (e) {
          var t = e.className,
            n = e.count,
            a = e.bell,
            c = Object(Ga.a)(!1, {
              value: e.popupVisible,
              onChange: e.onPopupVisibleChange,
            }),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1],
            l = Ka()(t, 'noticeButton'),
            u = (function () {
              var t = e.children,
                n = e.loading,
                a = e.onClear,
                c = e.onTabChange,
                s = e.onItemClick,
                i = e.onViewMore,
                o = e.clearText,
                l = e.viewMoreText;
              if (!t) return null;
              var u = [];
              return (
                r.a.Children.forEach(t, function (e) {
                  if (e) {
                    var t = e.props,
                      n = t.list,
                      r = t.title,
                      c = t.count,
                      d = t.tabKey,
                      j = t.showClear,
                      b = t.showViewMore,
                      p = n && n.length ? n.length : 0,
                      m = c || 0 === c ? c : p,
                      O = m > 0 ? ''.concat(r, ' (').concat(m, ')') : r;
                    u.push(
                      Object(_a.jsx)(
                        nr,
                        {
                          tab: O,
                          children: Object(_a.jsx)($a, {
                            clearText: o,
                            viewMoreText: l,
                            list: n,
                            tabKey: d,
                            onClear: function () {
                              return a && a(r, d);
                            },
                            onClick: function (t) {
                              return s && s(t, e.props);
                            },
                            onViewMore: function (t) {
                              return i && i(e.props, t);
                            },
                            showClear: j,
                            showViewMore: b,
                            title: r,
                          }),
                        },
                        d
                      )
                    );
                  }
                }),
                Object(_a.jsx)(_a.Fragment, {
                  children: Object(_a.jsx)(Ta.a, {
                    spinning: n,
                    delay: 300,
                    children: Object(_a.jsx)(Va.a, {
                      className: 'tabs',
                      onChange: c,
                      centered: !0,
                      children: u,
                    }),
                  }),
                })
              );
            })(),
            d = a || Object(_a.jsx)(za.a, { className: 'icon' }),
            j = Object(_a.jsx)('span', {
              className: Ka()(l, { opened: i }),
              children: Object(_a.jsx)(Ua.a, {
                count: n,
                style: { boxShadow: 'none' },
                className: 'badge',
                children: d,
              }),
            });
          return u
            ? Object(_a.jsx)(tr, {
                placement: 'bottomRight',
                overlay: u,
                overlayClassName: 'popover',
                trigger: ['click'],
                visible: i,
                onVisibleChange: o,
                children: j,
              })
            : j;
        };
      (ar.defaultProps = {
        emptyImage:
          'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      }),
        (ar.Tab = $a);
      var rr = ar,
        cr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Gn }), (t.next = 4), Le(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: Jn, payload: r }),
                            n({ type: Bn }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: Kn, error: t.t0 });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        sr = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: Gn }),
                            (n.next = 4),
                            Ne(e, t)
                          );
                        case 4:
                          return (
                            (r = n.sent),
                            r.data,
                            a({ type: Qn, payload: t }),
                            a({ type: Bn }),
                            n.abrupt('return', !0)
                          );
                        case 11:
                          return (
                            (n.prev = 11),
                            (n.t0 = n.catch(0)),
                            a({ type: Kn, error: n.t0 }),
                            n.abrupt('return', !1)
                          );
                        case 15:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        ir = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Gn }), (t.next = 4), Fe(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: $n, payload: r }),
                            n({ type: Bn }),
                            t.abrupt('return', !0)
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: Kn, error: t.t0 }),
                            t.abrupt('return', !1)
                          );
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        or = function (e) {
          var t = e.user,
            n = e.socket,
            r = Object(i.b)(),
            c = Object(Ca.f)(),
            s = Object(Ca.g)(),
            o = Object(a.useState)({ key: Math.random() }),
            l = Object(m.a)(o, 2),
            u =
              (l[0],
              l[1],
              Object(i.c)(function (e) {
                return e.notifications;
              })),
            d = u.notifications,
            j = u.isLoading,
            b = Object(a.useState)(d),
            O = Object(m.a)(b, 2),
            h = O[0],
            x = O[1],
            y = (function (e) {
              if (!e || 0 === e.length || !Array.isArray(e)) return {};
              var t = e.map(function (e) {
                var t = Object(p.a)({}, e);
                if (
                  (t.createdAt && (t.createdAt = ja()(e.createdAt).fromNow()),
                  t._id && (t.key = t._id),
                  t.content.status)
                ) {
                  var n = {
                    Pending: 'blue',
                    Rejected: 'red',
                    Approved: 'green',
                    'Waiting Completion': 'blue',
                    'Pending Approval': 'blue',
                  }[t.content.status];
                  t.extra = Object(_a.jsx)(U.a, {
                    color: n,
                    style: { marginRight: 0 },
                    children: t.content.status,
                  });
                }
                return t;
              });
              return Object(Aa.groupBy)(t, 'content.type');
            })(h),
            v = (function (e) {
              var t = {};
              return (
                Object.keys(e).forEach(function (n) {
                  var a = e[n];
                  t[n] || (t[n] = 0),
                    Array.isArray(a) &&
                      (t[n] = a.filter(function (e) {
                        return !e.read;
                      }).length);
                }),
                t
              );
            })(y || {}),
            g = (function (e) {
              var t = 0;
              for (var n in e) t += e[n];
              return t;
            })(v);
          Object(a.useEffect)(
            function () {
              t &&
                r(cr(t._id)).then(function (e) {
                  x(e);
                });
            },
            [t, c]
          ),
            Object(a.useEffect)(
              function () {
                t &&
                  (null === n ||
                    void 0 === n ||
                    n.on('newNotification', function () {
                      r(cr(t._id)).then(function (e) {
                        x(e);
                      });
                    }));
              },
              [n, t]
            );
          var T = (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t) {
                  var n;
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = h.map(function (e) {
                            var n = Object(p.a)({}, e);
                            return (
                              n._id === t &&
                                (n.read || (r(ir(t)), (n.read = !0)),
                                'leave' == n.content.type
                                  ? s('leaves/view/'.concat(n.content.id))
                                  : 'training' == n.content.type &&
                                    s('training/view/'.concat(n.content.id))),
                              n
                            );
                          })),
                            x(n);
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var e = Object(W.a)(
                K.a.mark(function e(n, a) {
                  var c;
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), r(sr(t._id, { type: a }));
                        case 2:
                          (c = h.filter(function (e) {
                            return e.content.type != a;
                          })),
                            x(c),
                            f.b.success('Clear'.concat(' ', n));
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          return Object(_a.jsxs)(rr, {
            className: 'action',
            count: g,
            onItemClick: function (e) {
              T(e._id);
            },
            onClear: function (e, t) {
              return _(e, t);
            },
            loading: j,
            clearText: 'Clear',
            viewMoreText: 'View More',
            onViewMore: function () {
              return f.b.info('Click on view more');
            },
            clearClose: !0,
            children: [
              Object(_a.jsx)(rr.Tab, {
                tabKey: 'leave',
                count: v.leave,
                list: y.leave,
                title: 'Leave',
                emptyText: 'You have no new notifiications',
              }),
              Object(_a.jsx)(rr.Tab, {
                tabKey: 'training',
                count: v.training,
                list: y.training,
                title: 'Training',
                emptyText: 'You have no new notifiications',
              }),
            ],
          });
        },
        lr = n(1049),
        ur = n(67),
        dr = n(289),
        jr = n.n(dr),
        br = function (e) {
          var t = e.user,
            n = e.logout,
            a =
              (Object(i.b)(),
              Object(Ca.g)(),
              Object(Ca.f)(),
              Object(_a.jsxs)(ur.a, {
                className: jr.a.menu,
                children: [
                  Object(_a.jsx)(
                    ur.a.Item,
                    {
                      children: Object(_a.jsx)(G.b, {
                        to: '/profile',
                        children: 'Profile',
                      }),
                    },
                    'profile'
                  ),
                  Object(_a.jsxs)(
                    ur.a.Item,
                    {
                      onClick: n,
                      children: [Object(_a.jsx)(lr.a, {}), 'Logout'],
                    },
                    'logout'
                  ),
                ],
              }));
          return t
            ? Object(_a.jsx)(tr, {
                overlay: a,
                trigger: ['click'],
                children: Object(_a.jsx)('span', {
                  className: ''.concat(jr.a.action, ' ').concat(jr.a.account),
                  children: Object(_a.jsx)('span', {
                    className: ''.concat(jr.a.name, ' anticon'),
                    children: Object(_a.jsx)(L.a.Text, {
                      ellipsis: !0,
                      style: { paddingTop: '35px', paddingBottom: '10px' },
                      children: ''
                        .concat(t.first_name, ' ')
                        .concat(t.last_name),
                    }),
                  }),
                }),
              })
            : Object(_a.jsx)(G.b, { to: '/auth', children: 'Login' });
        },
        pr = (n(766), n(554)),
        mr = n(47),
        Or = n(66),
        fr =
          (n(767),
          function (e, t) {
            return (function () {
              var t = Object(W.a)(
                K.a.mark(function t(n) {
                  var a, r;
                  return K.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0), n({ type: ot }), (t.next = 4), re(e)
                            );
                          case 4:
                            return (
                              (a = t.sent),
                              (r = a.data),
                              n({ type: nt, data: r }),
                              n({ type: lt }),
                              n({
                                type: dt,
                                payload: { success: 'Login successful' },
                              }),
                              t.abrupt('return', !0)
                            );
                          case 12:
                            return (
                              (t.prev = 12),
                              (t.t0 = t.catch(0)),
                              n({ type: ut, error: t.t0 }),
                              t.abrupt('return', !1)
                            );
                          case 16:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          }),
        hr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: ot }), (t.next = 4), ce(e)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: at, data: r }),
                            n({ type: lt }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: ut, error: t.t0 });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        xr = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: ot }),
                            (n.next = 4),
                            se(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: rt, payload: c }),
                            a({ type: lt }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: ut, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        yr = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: ot }),
                            (n.next = 4),
                            ie(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            r.data,
                            a({ type: st, payload: { settings: t } }),
                            a({ type: lt }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: ut, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        vr = L.a.Title,
        gr = function () {
          var e = Object(i.c)(function (e) {
              return e.auth;
            }),
            t = e.error,
            n = (e.success, e.isLoading, Object(i.b)()),
            a =
              (Object(Ca.g)(),
              (function () {
                var e = Object(W.a)(
                  K.a.mark(function e(a) {
                    return K.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), n(fr(a));
                          case 2:
                            e.sent || pr.a.error({ content: t });
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })());
          return Object(_a.jsxs)(_a.Fragment, {
            children: [
              Object(_a.jsx)(x.a, {
                src: '/INTI_logo.png',
                preview: !1,
                style: {
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '50%',
                },
              }),
              Object(_a.jsx)(vr, {
                level: 2,
                style: { textAlign: 'center', padding: '20px' },
                children: 'Sign In',
              }),
              Object(_a.jsxs)(mr.a, {
                labelCol: { sm: { span: 8 } },
                wrapperCol: { sm: { span: 8 } },
                name: 'basic',
                onFinish: a,
                autoComplete: 'off',
                children: [
                  Object(_a.jsx)(mr.a.Item, {
                    label: 'Email',
                    name: 'email',
                    rules: [{ required: !0, type: 'email' }],
                    children: Object(_a.jsx)(Or.a, { autoFocus: !0 }),
                  }),
                  Object(_a.jsx)(mr.a.Item, {
                    label: 'Password',
                    name: 'password',
                    rules: [
                      { required: !0 },
                      {
                        pattern:
                          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
                        message:
                          'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character',
                      },
                    ],
                    children: Object(_a.jsx)(Or.a.Password, {
                      placeholder: 'Please enter password',
                    }),
                  }),
                  Object(_a.jsx)(mr.a.Item, {
                    wrapperCol: { sm: { offset: 8 } },
                    children: Object(_a.jsx)(q.a, {
                      type: 'primary',
                      htmlType: 'submit',
                      children: 'Sign In',
                    }),
                  }),
                ],
              }),
              Object(_a.jsx)('div', {
                style: { textAlign: 'center' },
                children: Object(_a.jsx)(G.b, {
                  to: '/resetPassword',
                  children: 'Forgot Password',
                }),
              }),
            ],
          });
        },
        Tr = n(88),
        _r = n(105),
        Dr = n(1028),
        wr = (n(768), n(565)),
        Ir = n(371),
        kr = n(1050),
        Er = n(236),
        Cr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: $t }), (t.next = 4), xe(e)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: tn, payload: r }),
                            n({ type: Xt }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: Zt, error: t.t0 });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ar = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: $t }),
                            (n.next = 4),
                            Te(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: Wt, payload: c }),
                            a({
                              type: en,
                              payload: { success: 'Delete success' },
                            }),
                            a({ type: Xt }),
                            (n.next = 14);
                          break;
                        case 11:
                          (n.prev = 11),
                            (n.t0 = n.catch(0)),
                            a({ type: Zt, error: n.t0 });
                        case 14:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Sr = Or.a.TextArea,
        Rr = Tr.a.RangePicker,
        Pr = _r.a.Option,
        Lr =
          (L.a.Text,
          function (e) {
            var t = e.user,
              n = Object(Ca.g)(),
              r = Object(Ca.h)().id,
              c = Object(i.c)(function (e) {
                return e.leaves;
              }).leave,
              s = Object(a.useState)(!1),
              o = Object(m.a)(s, 2),
              l =
                (o[0],
                o[1],
                Object(i.c)(function (e) {
                  return e.leaveTypes;
                }).leaveTypes),
              u = Object(i.c)(function (e) {
                return e.holidays;
              }).holidays,
              d = mr.a.useForm(),
              j = Object(m.a)(d, 1)[0],
              b = Object(a.useState)(null),
              p = Object(m.a)(b, 2),
              O = (p[0], p[1]),
              f = Object(a.useState)(!1),
              h = Object(m.a)(f, 2),
              x = h[0],
              y = h[1],
              v = Object(i.b)();
            Object(a.useEffect)(
              function () {
                v(Cr(ja()().format('YYYY'))),
                  v(oa()),
                  r &&
                    (y(!0),
                    v(Zn(r)).then(function (e) {
                      j.setFieldsValue({
                        reason: e.reason || '',
                        leaveType: e.leaveType._id,
                        'range-picker': [ja()(e.fromDate), ja()(e.toDate)],
                      }),
                        y(!1);
                    }));
              },
              [v, r]
            );
            return x
              ? Object(_a.jsx)(Er.a, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      style: { textAlign: 'center' },
                      children: r ? 'Edit Leave' : 'Apply for Leave',
                    }),
                    Object(_a.jsxs)(mr.a, {
                      form: j,
                      labelCol: { sm: { span: 8 } },
                      wrapperCol: { sm: { span: 8 } },
                      onFinish: function (e) {
                        var a = e['range-picker'],
                          s = a[0],
                          i = a[1],
                          o = (function (e, t) {
                            for (
                              var n = ja()(e), a = 0;
                              n.isSameOrBefore(t, 'day');

                            )
                              [0, 6].includes(n.day()) || a++, n.add(1, 'd');
                            return (
                              u.lists.forEach(function (n) {
                                if (e >= n.startDate && t <= n.endDate) {
                                  var r = ja()(n.endDate).diff(
                                    ja()(n.startDate),
                                    'days'
                                  );
                                  a -= r;
                                }
                              }),
                              a
                            );
                          })(s, i);
                        if (0 != o) {
                          var d = [];
                          O(null);
                          var j = new FormData();
                          if (e.upload) {
                            var b,
                              p = Object(Ea.a)(e.upload);
                            try {
                              var f = function () {
                                var e = b.value;
                                e.originFileObj
                                  ? j.append('files', e.originFileObj)
                                  : d.push(
                                      c.attachments.find(function (t) {
                                        return t.fileId == e.uid;
                                      })
                                    );
                              };
                              for (p.s(); !(b = p.n()).done; ) f();
                            } catch (y) {
                              p.e(y);
                            } finally {
                              p.f();
                            }
                          } else r && (d = c.attachments);
                          l.find(function (t) {
                            return t._id === e.leaveType;
                          });
                          var h = t.leaveCount.find(function (t) {
                              return t.leaveType._id == e.leaveType;
                            }).count,
                            x = {
                              user_name: ''
                                .concat(t.first_name, ' ')
                                .concat(t.last_name),
                              reason: e.reason || '',
                              leaveType: e.leaveType,
                              user: t._id,
                              department: t.department._id,
                              fromDate: s.format('YYYY-MM-DD HH:mm'),
                              toDate: i.format('YYYY-MM-DD HH:mm'),
                            };
                          Object.entries(x).forEach(function (e) {
                            var t = Object(m.a)(e, 2),
                              n = t[0],
                              a = t[1];
                            j.append(n, a);
                          }),
                            h >= o
                              ? r
                                ? (j.append('attachments', JSON.stringify(d)),
                                  v(ea(r, j)),
                                  pr.a.success({
                                    content: 'Changes saved.',
                                    onOk: function () {
                                      n('/leaves/home');
                                    },
                                  }))
                                : (v(
                                    (function (e) {
                                      return (function () {
                                        var t = Object(W.a)(
                                          K.a.mark(function t(n) {
                                            var a, r;
                                            return K.a.wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.prev = 0),
                                                        n({ type: We }),
                                                        (t.next = 4),
                                                        (c = e),
                                                        Q.post('/leaves', c)
                                                      );
                                                    case 4:
                                                      (a = t.sent),
                                                        (r = a.data),
                                                        n({
                                                          type: ze,
                                                          payload: r,
                                                        }),
                                                        n({ type: Je }),
                                                        (t.next = 13);
                                                      break;
                                                    case 10:
                                                      (t.prev = 10),
                                                        (t.t0 = t.catch(0)),
                                                        n({
                                                          type: Qe,
                                                          error: t.t0,
                                                        });
                                                    case 13:
                                                    case 'end':
                                                      return t.stop();
                                                  }
                                                var c;
                                              },
                                              t,
                                              null,
                                              [[0, 10]]
                                            );
                                          })
                                        );
                                        return function (e) {
                                          return t.apply(this, arguments);
                                        };
                                      })();
                                    })(j)
                                  ),
                                  pr.a.success({
                                    content: 'Leave application submitted.',
                                    onOk: function () {
                                      n('/leaves/home');
                                    },
                                  }))
                              : O('Insufficient leave balance');
                        } else
                          pr.a.error({
                            content:
                              'Selected day is on holidays or weekend, do not need to apply!',
                          });
                      },
                      autoComplete: 'off',
                      children: [
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Leave Type',
                          name: 'leaveType',
                          rules: [{ required: !0 }],
                          children: Object(_a.jsx)(_r.a, {
                            placeholder: 'Please choose a leave type',
                            children: t.leaveCount.map(function (e) {
                              return Object(_a.jsx)(
                                Pr,
                                {
                                  value: e.leaveType._id,
                                  children: e.leaveType.name,
                                },
                                e.leaveType._id
                              );
                            }),
                          }),
                        }),
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Reason',
                          name: 'reason',
                          rules: [{ required: !0, whitespace: !0 }],
                          children: Object(_a.jsx)(Sr, {
                            rows: 4,
                            placeholder: 'Please enter reason',
                          }),
                        }),
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Date',
                          name: 'range-picker',
                          rules: [{ required: !0 }],
                          children: Object(_a.jsx)(Rr, {
                            style: { width: '100%' },
                            disabledDate: function (e) {
                              var t = j.getFieldValue('leaveType');
                              if (!t) return !0;
                              var n,
                                a,
                                r = l.find(function (e) {
                                  return e._id == t;
                                }),
                                c = r.startDate,
                                s = r.endDate;
                              if ('year' == c || 'month' == c)
                                n = ja()().startOf(c);
                              else {
                                var i = c.charAt(0),
                                  o = parseInt(c.substring(1));
                                n =
                                  '+' == i
                                    ? ja()().add(o, 'days')
                                    : ja()().subtract(o, 'days');
                              }
                              if ('year' == s || 'month' == s)
                                a = ja()().endOf(s);
                              else {
                                var u = s.charAt(0),
                                  d = parseInt(s.substring(1));
                                a =
                                  '+' == u
                                    ? ja()().add(d, 'days')
                                    : ja()().subtract(d, 'days');
                              }
                              return e < n || e > a;
                            },
                          }),
                        }),
                        Object(_a.jsx)(mr.a.Item, {
                          name: 'upload',
                          label: 'Supporting Documents',
                          valuePropName: 'fileList',
                          getValueFromEvent: function (e) {
                            return Array.isArray(e) ? e : e && e.fileList;
                          },
                          children: Object(_a.jsx)(Dr.a.Dragger, {
                            name: 'logo',
                            listType: 'picture',
                            customRequest: function (e) {
                              e.file;
                              var t = e.onSuccess;
                              setTimeout(function () {
                                t('ok');
                              }, 0);
                            },
                            defaultFileList: function () {
                              var e;
                              return r
                                ? (null === c ||
                                  void 0 === c ||
                                  null === (e = c.attachments) ||
                                  void 0 === e
                                    ? void 0
                                    : e.map(function (e) {
                                        return {
                                          uid: e.fileId,
                                          name: e.fileName,
                                          status: 'done',
                                          url: e.filePath,
                                        };
                                      })) || []
                                : null;
                            },
                            showUploadList: {
                              showDownloadIcon: !0,
                              downloadIcon: function (e) {
                                return 'done' == e.status
                                  ? Object(_a.jsx)(wr.a, {})
                                  : Object(_a.jsx)(_a.Fragment, {});
                              },
                              showRemoveIcon: !0,
                              removeIcon: function (e) {
                                return 'done' == e.status
                                  ? Object(_a.jsx)(_a.Fragment, {})
                                  : Object(_a.jsx)(Ir.a, {});
                              },
                            },
                            children: Object(_a.jsx)(q.a, {
                              icon: Object(_a.jsx)(kr.a, {}),
                              children: 'Click to upload',
                            }),
                          }),
                        }),
                        Object(_a.jsxs)(mr.a.Item, {
                          wrapperCol: { sm: { offset: 8 } },
                          children: [
                            Object(_a.jsx)(q.a, {
                              type: 'primary',
                              htmlType: 'submit',
                              children: 'Submit',
                            }),
                            Object(_a.jsx)(q.a, {
                              type: 'secondary',
                              htmlType: 'button',
                              onClick: function () {
                                return n(-1);
                              },
                              children: 'Back',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
          }),
        Nr =
          (n(770),
          function () {
            return (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t) {
                  var n, a;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              t({ type: Ot }),
                              (e.next = 4),
                              Q.get('/users')
                            );
                          case 4:
                            (n = e.sent),
                              (a = n.data),
                              t({ type: pt, payload: a }),
                              t({ type: ft }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              t({ type: ht, error: e.t0 });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          }),
        Fr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Ot }), (t.next = 4), de(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: mt, payload: r }),
                            n({ type: ft }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: ht, error: t.t0 });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Yr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Ot }), (t.next = 4), ue(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: jt, payload: r }),
                            n({ type: ft }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: ht, error: t.t0 }),
                            t.abrupt('return', !1)
                          );
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Hr = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: Ot }),
                            (n.next = 4),
                            je(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: bt, payload: c }),
                            a({ type: ft }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: ht, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        Mr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: Ot }), (t.next = 4), be(e)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: yt, payload: r }),
                            n({ type: ft }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: ht, error: t.t0 });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        qr = function (e) {
          var t = e.user,
            n = Ia()(),
            r = Object(i.c)(function (e) {
              return e.leaves;
            }),
            c = r.leave,
            s = r.isLoading,
            o = Object(i.c)(function (e) {
              return e.holidays;
            }).holidays,
            l = Object(i.b)(),
            u = Object(a.useState)(!0),
            d = Object(m.a)(u, 2),
            j = d[0],
            b = d[1],
            O = Object(Ca.g)(),
            f = Object(Ca.h)().id;
          Object(a.useEffect)(
            function () {
              l(Cr(ja()().format('YYYY'))),
                l(Zn(f)).then(function () {
                  return b(!1);
                });
            },
            [l, f]
          );
          var h,
            x = function (e) {
              l(
                ea(
                  f,
                  Object(p.a)(
                    Object(p.a)({}, c),
                    {},
                    {
                      status: e,
                      approver: t._id,
                      user_name: ''
                        .concat(t.first_name, ' ')
                        .concat(t.last_name),
                    }
                  )
                )
              ),
                'Approved' == e &&
                  l(Fr(c.user._id)).then(function (e) {
                    var t =
                        e.leaveCount.find(function (e) {
                          return e.leaveType._id == c.leaveType._id;
                        }).count -
                        (function (e, t) {
                          for (
                            var n = ja()(e), a = 0;
                            n.isSameOrBefore(t, 'day');

                          )
                            [0, 6].includes(n.day()) || a++, n.add(1, 'd');
                          return (
                            null === o ||
                              void 0 === o ||
                              o.lists.forEach(function (n) {
                                if (e >= n.startDate && t <= n.endDate) {
                                  var r = ja()(n.endDate).diff(
                                    ja()(n.startDate),
                                    'days'
                                  );
                                  a -= r;
                                }
                              }),
                            a
                          );
                        })(c.startDate, c.endDate),
                      n = e.leaveCount.map(function (e) {
                        return e.leaveType._id == c.leaveType._id
                          ? Object(p.a)(Object(p.a)({}, e), {}, { count: t })
                          : e;
                      });
                    l(Hr(e._id, { leaveCount: n }));
                  });
            };
          return j || s
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsxs)(H.b, {
                    title: 'Leave Info',
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: n.md ? 'horizontal' : 'vertical',
                    children: [
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Requester',
                        span: 3,
                        children: ''
                          .concat(c.user.first_name, ' ')
                          .concat(c.user.last_name),
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Department',
                        span: 3,
                        children: c.department.name,
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Leave Type',
                        span: 3,
                        children: Object(_a.jsx)(U.a, {
                          color: c.leaveType.color,
                          children:
                            ((h = c.leaveType.code),
                            h.charAt(0).toUpperCase() + h.slice(1)),
                        }),
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Reason',
                        span: 3,
                        children: c.reason,
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Start Date',
                        span: 1,
                        children: ja()(c.fromDate).format('YYYY-MM-DD'),
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'End Date',
                        span: 2,
                        children: ja()(c.toDate).format('YYYY-MM-DD'),
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Supporting Documents',
                        span: 3,
                        children:
                          0 != c.attachments.length
                            ? Object(_a.jsx)(_a.Fragment, {
                                children: Object(_a.jsx)(Dr.a, {
                                  className: 'showFiles',
                                  defaultFileList: function () {
                                    var e;
                                    return f
                                      ? (null === c ||
                                        void 0 === c ||
                                        null === (e = c.attachments) ||
                                        void 0 === e
                                          ? void 0
                                          : e.map(function (e) {
                                              return {
                                                uid: e.fileId,
                                                name: e.fileName,
                                                status: 'done',
                                                url: e.filePath,
                                              };
                                            })) || []
                                      : null;
                                  },
                                  showUploadList: {
                                    showDownloadIcon: !0,
                                    showRemoveIcon: !1,
                                  },
                                }),
                              })
                            : Object(_a.jsx)('div', { children: 'None' }),
                      }),
                      Object(_a.jsx)(H.b.Item, {
                        label: 'Status',
                        span: 3,
                        children: Object(_a.jsx)(Ua.a, {
                          status:
                            'Pending' == c.status
                              ? 'processing'
                              : 'Approved' == c.status
                              ? 'success'
                              : 'error',
                          text: c.status,
                        }),
                      }),
                    ],
                  }),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsxs)(y.b, {
                    size: 'middle',
                    children: [
                      Object(_a.jsx)(q.a, {
                        type: 'default',
                        onClick: function () {
                          return O(-1);
                        },
                        children: 'Back',
                      }),
                      'Pending' == c.status && c.user._id == t._id
                        ? Object(_a.jsx)(_a.Fragment, {
                            children: Object(_a.jsx)(q.a, {
                              type: 'primary',
                              danger: !0,
                              onClick: function () {
                                return x('Cancelled');
                              },
                              children: 'Cancel',
                            }),
                          })
                        : c.user._id != t._id &&
                          'Pending' == c.status &&
                          Object(_a.jsxs)(_a.Fragment, {
                            children: [
                              Object(_a.jsx)(q.a, {
                                type: 'success',
                                onClick: function () {
                                  return x('Approved');
                                },
                                children: 'Approve',
                              }),
                              Object(_a.jsx)(q.a, {
                                type: 'primary',
                                danger: !0,
                                onClick: function () {
                                  return x('Rejected');
                                },
                                children: 'Reject',
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              });
        },
        zr = function () {
          return (function () {
            var e = Object(W.a)(
              K.a.mark(function e(t) {
                var n, a;
                return K.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            t({ type: Dt }),
                            (e.next = 4),
                            Q.get('/depts')
                          );
                        case 4:
                          (n = e.sent),
                            (a = n.data),
                            t({ type: _t, payload: a }),
                            t({ type: wt }),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            t({ type: It, error: e.t0 });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Vr = n(102),
        Ur = n(86),
        Gr = n.n(Ur),
        Br = L.a.Text,
        Kr = function () {
          var e = Object(i.c)(function (e) {
              return e.holidays;
            }).holidays,
            t = Object(i.c)(function (e) {
              return e.leaves;
            }),
            n = t.leaves,
            r = t.isLoading,
            c = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            s = Object(i.c)(function (e) {
              return e.leaveTypes;
            }).leaveTypes,
            o = JSON.parse(localStorage.getItem('profile')).result,
            l = (Object(Ca.g)(), []),
            d = [],
            j = Object(i.b)();
          Object(a.useEffect)(
            function () {
              j(Cr(ja()().format('YYYY'))),
                j(aa(o.roles.name, o._id, o.department.name)),
                j(zr()),
                j(oa());
            },
            [j]
          ),
            'admin' == o.roles.name &&
              c.map(function (e) {
                l.push({ text: e.name, value: e.name });
              }),
            s.map(function (e) {
              d.push({ text: e.name, value: e.code });
            });
          var b = [
              {
                title: 'Employee Name',
                dataIndex: 'user',
                key: 'user',
                valueType: 'text',
                render: function (e, t) {
                  return ''.concat(e.first_name, ' ').concat(e.last_name);
                },
              },
              {
                title: 'Department',
                dataIndex: ['department', 'name'],
                key: 'department',
                hideInSearch: !0,
                filters: l,
                onFilter: function (e, t) {
                  return 0 === t.department.name.indexOf(e);
                },
              },
              {
                title: 'Reason',
                dataIndex: 'reason',
                key: 'reason',
                hideInSearch: !0,
                render: function (e, t) {
                  return Object(_a.jsx)(Br, { ellipsis: !0, children: e });
                },
              },
              {
                title: 'Leave Type',
                dataIndex: 'leaveType',
                key: 'leaveType',
                filters: d,
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.leaveType.code.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(U.a, {
                    color: e.color,
                    children:
                      ((n = e.code),
                      n ? n.charAt(0).toUpperCase() + n.slice(1) : n),
                  });
                  var n;
                },
              },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Total Days',
                hideInSearch: !0,
                dataIndex: 'toDate',
                key: 'totalDays',
                render: function (t, n) {
                  return (function (t, n) {
                    for (var a = ja()(t), r = 0; a.isSameOrBefore(n, 'day'); )
                      [0, 6].includes(a.day()) || r++, a.add(1, 'd');
                    return (
                      e.lists.forEach(function (e) {
                        if (t >= e.startDate && n <= e.endDate) {
                          var a = ja()(e.endDate).diff(
                            ja()(e.startDate),
                            'days'
                          );
                          r -= a;
                        }
                      }),
                      r
                    );
                  })(n.fromDate, n.toDate);
                },
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                filters: [
                  { text: 'Pending', value: 'Pending' },
                  { text: 'Approved', value: 'Approved' },
                  { text: 'Rejected', value: 'Rejected' },
                ],
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.status.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(Ua.a, {
                    status:
                      'Pending' == t.status
                        ? 'processing'
                        : 'Approved' == t.status
                        ? 'success'
                        : 'error',
                    text: t.status,
                  });
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsx)(
                    y.b,
                    {
                      size: 'middle',
                      children: Object(_a.jsx)(G.b, {
                        to: '/leaves/view/'.concat(t._id),
                        children: 'View',
                      }),
                    },
                    t._id
                  );
                },
              },
            ],
            p = Object(a.useRef)(),
            m = (function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            })(n);
          return r
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h2', { children: 'Leave Requests' }),
                  n.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(Vr.a, {
                            columns: b,
                            actionRef: p,
                            request: function (e, t, n) {
                              var a = m;
                              return (
                                e &&
                                  Object.keys(e).length > 0 &&
                                  (a = a.filter(function (t) {
                                    return Object.keys(e).every(function (n) {
                                      if (!e[n]) return !0;
                                      if ('pageSize' == n || 'current' == n)
                                        return !0;
                                      if ('all' == e[n]) return !0;
                                      var a = t[n];
                                      if ('user' == n)
                                        a = ''
                                          .concat(t.user.first_name, ' ')
                                          .concat(t.user.last_name);
                                      else if ('department' == n)
                                        a = ''.concat(t.department.name);
                                      else {
                                        if ('startTime' == n)
                                          return (
                                            ja()(t.fromDate).diff(ja()(e[n])) >=
                                            0
                                          );
                                        if ('endTime' == n)
                                          return (
                                            ja()(t.toDate).diff(
                                              ja()(e[n]),
                                              'days'
                                            ) <= 0
                                          );
                                      }
                                      return (
                                        !a ||
                                        -1 !=
                                          a.search(
                                            new RegExp('.*' + e[n] + '.*', 'gi')
                                          )
                                      );
                                    });
                                  })),
                                Promise.resolve({ data: a, success: !0 })
                              );
                            },
                            rowKey: '_id',
                            pagination: { pageSize: 10, showQuickJumper: !0 },
                            search: { labelWidth: 'auto' },
                            dateFormatter: 'string',
                            toolbar: {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            },
                            toolBarRender: function () {
                              return [
                                Object(_a.jsx)(y.b, {
                                  children: Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    shape: 'round',
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaves/create',
                                      children: 'To Leave Application',
                                    }),
                                  }),
                                }),
                              ];
                            },
                          }),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              });
        },
        Wr = function () {
          var e,
            t = Object(i.c)(function (e) {
              return e.leaves;
            }),
            n = t.leaveHistory,
            r = t.isLoading,
            c = Object(i.c)(function (e) {
              return e.leaveTypes;
            }).leaveTypes,
            s = Object(i.c)(function (e) {
              return e.holidays;
            }).holidays,
            o = JSON.parse(localStorage.getItem('profile')).result,
            l = (Object(Ca.g)(), Object(i.b)()),
            d = [];
          Object(a.useEffect)(
            function () {
              var e;
              l(
                ((e = o._id),
                (function () {
                  var t = Object(W.a)(
                    K.a.mark(function t(n) {
                      var a, r;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  n({ type: We }),
                                  (t.next = 4),
                                  ae(e)
                                );
                              case 4:
                                (a = t.sent),
                                  (r = a.data),
                                  n({ type: et, payload: r }),
                                  n({ type: Je }),
                                  (t.next = 13);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  n({ type: Qe, error: t.t0 });
                              case 13:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              ),
                l(oa()),
                l(Cr(ja()().format('YYYY')));
            },
            [l]
          ),
            c.map(function (e) {
              d.push({ text: e.name, value: e.code });
            });
          var j = Object(a.useRef)(),
            b = [
              {
                title: 'Leave Type',
                dataIndex: 'leaveType',
                key: 'leaveType',
                filters: d,
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.leaveType.code.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(U.a, {
                    color: e.color,
                    children:
                      ((n = e.code), n.charAt(0).toUpperCase() + n.slice(1)),
                  });
                  var n;
                },
              },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Total Days',
                hideInSearch: !0,
                dataIndex: 'toDate',
                key: 'totalDays',
                render: function (e, t) {
                  return (function (e, t) {
                    for (var n = ja()(e), a = 0; n.isSameOrBefore(t, 'day'); )
                      [0, 6].includes(n.day()) || a++, n.add(1, 'd');
                    return (
                      s.lists.forEach(function (n) {
                        if (e >= n.startDate && t <= n.endDate) {
                          var r = ja()(n.endDate).diff(
                            ja()(n.startDate),
                            'days'
                          );
                          a -= r;
                        }
                      }),
                      a
                    );
                  })(t.fromDate, t.toDate);
                },
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                filters: [
                  { text: 'Pending', value: 'Pending' },
                  { text: 'Approved', value: 'Approved' },
                  { text: 'Rejected', value: 'Rejected' },
                ],
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.status.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(Ua.a, {
                    status:
                      'Pending' == t.status
                        ? 'processing'
                        : 'Approved' == t.status
                        ? 'success'
                        : 'error',
                    text: t.status,
                  });
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsxs)(
                    y.b,
                    {
                      size: 'middle',
                      children: [
                        Object(_a.jsx)(G.b, {
                          to: '/leaves/view/'.concat(t._id),
                          children: 'View',
                        }),
                        'Pending' == t.status &&
                          Object(_a.jsx)(G.b, {
                            to: '/leaves/edit/'.concat(t._id),
                            children: 'Edit',
                          }),
                      ],
                    },
                    t._id
                  );
                },
              },
            ],
            p = (function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            })(n);
          return !r && n && c
            ? Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h2', { children: 'My Leave Applications' }),
                  n.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(
                            Vr.a,
                            ((e = {
                              search: { span: 24 },
                              rowKey: 'id',
                              columns: b,
                              actionRef: j,
                              request: function (e, t, n) {
                                var a = p;
                                return (
                                  e &&
                                    Object.keys(e).length > 0 &&
                                    (a = a.filter(function (t) {
                                      return Object.keys(e).every(function (n) {
                                        if (!e[n]) return !0;
                                        if ('pageSize' == n || 'current' == n)
                                          return !0;
                                        if ('all' == e[n]) return !0;
                                        var a = t[n];
                                        if ('user' == n)
                                          a = ''
                                            .concat(t.user.first_name, ' ')
                                            .concat(t.user.last_name);
                                        else if ('department' == n)
                                          a = ''.concat(t.department.name);
                                        else {
                                          if ('startTime' == n)
                                            return (
                                              ja()(t.fromDate).diff(
                                                ja()(e[n])
                                              ) >= 0
                                            );
                                          if ('endTime' == n)
                                            return (
                                              ja()(t.toDate).diff(
                                                ja()(e[n]),
                                                'days'
                                              ) <= 0
                                            );
                                        }
                                        return (
                                          !a ||
                                          -1 !=
                                            a.search(
                                              new RegExp(
                                                '.*' + e[n] + '.*',
                                                'gi'
                                              )
                                            )
                                        );
                                      });
                                    })),
                                  Promise.resolve({ data: a, success: !0 })
                                );
                              },
                            }),
                            Object(Wa.a)(e, 'rowKey', '_id'),
                            Object(Wa.a)(e, 'pagination', {
                              pageSize: 10,
                              showQuickJumper: !0,
                            }),
                            Object(Wa.a)(e, 'search', { labelWidth: 'auto' }),
                            Object(Wa.a)(e, 'dateFormatter', 'string'),
                            Object(Wa.a)(e, 'toolbar', {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            }),
                            Object(Wa.a)(e, 'toolBarRender', function () {
                              return [
                                Object(_a.jsx)(
                                  q.a,
                                  {
                                    type: 'primary',
                                    shape: 'round',
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaves/create',
                                      children: 'To Leave Application',
                                    }),
                                  },
                                  'primary'
                                ),
                              ];
                            }),
                            e)
                          ),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              })
            : Object(_a.jsx)(Da, {});
        },
        Jr = n(342),
        Qr = n(91),
        $r =
          (n(869),
          function () {
            return (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t) {
                  var n, a;
                  return K.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              t({ type: zt }),
                              (e.next = 4),
                              Q.get('/roles')
                            );
                          case 4:
                            (n = e.sent),
                              (a = n.data),
                              t({ type: Mt, payload: a }),
                              t({ type: Vt }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              t({ type: Ut, error: e.t0 });
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          }),
        Xr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: qn }), (t.next = 4), Se(e)
                          );
                        case 4:
                          (a = t.sent),
                            (r = a.data),
                            n({ type: Yn, payload: r }),
                            n({ type: zn }),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            n({ type: Vn, error: t.t0 });
                        case 13:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Zr = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: qn }), (t.next = 4), Re(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: Mn, payload: r }),
                            n({ type: zn }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: Vn, error: t.t0 }),
                            t.abrupt('return', !1)
                          );
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ec = (Or.a.TextArea, Tr.a.RangePicker, _r.a.Option),
        tc = mr.a.useForm,
        nc = function () {
          var e = Object(Ca.g)(),
            t = tc(),
            n = Object(m.a)(t, 1)[0],
            r = Object(Ca.h)().id,
            c = Object(a.useState)(!0),
            s = Object(m.a)(c, 2),
            o = s[0],
            l = s[1],
            u = Object(a.useRef)(),
            d = Object(a.useState)(!1),
            j = Object(m.a)(d, 2),
            b = j[0],
            O = j[1],
            f = Object(a.useState)({ policy: !1, employment_date: !1 }),
            h = Object(m.a)(f, 2),
            x = h[0],
            y = h[1],
            v = Object(a.useState)({}),
            g = Object(m.a)(v, 2),
            T = g[0],
            _ = g[1],
            D = Object(a.useState)('Select a policy to show description'),
            w = Object(m.a)(D, 2),
            I = w[0],
            k = w[1],
            E = Object(a.useState)(''),
            C = Object(m.a)(E, 2),
            A =
              (C[0],
              C[1],
              Object(a.useState)({
                emp_id: '',
                first_name: '',
                last_name: '',
                email: '',
                employment_date: '',
                password: '',
                department: '',
                roles: '',
              })),
            S = Object(m.a)(A, 2),
            R = (S[0], S[1], Object(i.b)());
          Object(a.useEffect)(
            function () {
              P().then(function () {
                return l(!1);
              });
            },
            [R]
          );
          var P = (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), R($r());
                        case 2:
                          return (e.next = 4), R(zr());
                        case 4:
                          return (e.next = 6), R(oa());
                        case 6:
                          if (!r) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (e.next = 9),
                            R(Fr(r)).then(
                              (function () {
                                var e = Object(W.a)(
                                  K.a.mark(function e(t) {
                                    var a;
                                    return K.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              R(Xr(t.department._id))
                                            );
                                          case 2:
                                            (a = {}),
                                              t.leaveCount.forEach(function (
                                                e
                                              ) {
                                                a[e.leaveType._id] = e.count;
                                              }),
                                              n.setFieldsValue({
                                                emp_id: t.emp_id,
                                                first_name: t.first_name,
                                                last_name: t.last_name,
                                                email: t.email,
                                                employment_date: ja()(
                                                  t.employment_date
                                                ),
                                                department: t.department._id,
                                                policy: t.policy._id,
                                                roles: t.roles._id,
                                                trainingHours: t.trainingHours,
                                                leaveType: Object(p.a)({}, a),
                                              });
                                          case 5:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 9:
                          O(!0), y({ policy: !0, employment_date: !0 });
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Y = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            H = Object(i.c)(function (e) {
              return e.roles;
            }).roles,
            M = Object(i.c)(function (e) {
              return e.policy;
            }).policies,
            z = Object(i.c)(function (e) {
              return e.leaveTypes;
            }).leaveTypes,
            V = Object(i.c)(function (e) {
              return e.users;
            }),
            U = V.user,
            B =
              (V.error,
              (function () {
                var t = Object(W.a)(
                  K.a.mark(function t(n) {
                    var a, c, s, i, o, l;
                    return K.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            for (
                              a = [], c = 0, s = Object.entries(n.leaveType);
                              c < s.length;
                              c++
                            )
                              (i = Object(m.a)(s[c], 2)),
                                (o = i[0]),
                                (l = i[1]),
                                a.push({ leaveType: o, count: l });
                            if (!r) {
                              t.next = 8;
                              break;
                            }
                            return (
                              (t.next = 5),
                              R(
                                Hr(r, {
                                  extra: { department: U.department._id },
                                  emp_id: n.emp_id,
                                  first_name: n.first_name,
                                  last_name: n.last_name,
                                  email: n.email,
                                  policy: n.policy,
                                  employment_date:
                                    n.employment_date.format('YYYY-MM-DD'),
                                  department: n.department,
                                  roles: n.roles,
                                  leaveCount: a,
                                  trainingHours: n.trainingHours,
                                })
                              )
                            );
                          case 5:
                            pr.a.success({
                              content: 'Staff Updated',
                              onOk: function () {
                                e('/users');
                              },
                            }),
                              (t.next = 12);
                            break;
                          case 8:
                            return (
                              (t.next = 10),
                              R(
                                Yr({
                                  emp_id: n.emp_id,
                                  first_name: n.first_name,
                                  last_name: n.last_name,
                                  email: n.email,
                                  policy: n.policy,
                                  employment_date:
                                    n.employment_date.format('YYYY-MM-DD'),
                                  department: n.department,
                                  roles: n.roles,
                                  leaveCount: a,
                                  trainingHours: n.trainingHours,
                                })
                              )
                            );
                          case 10:
                            t.sent
                              ? pr.a.success({
                                  content: 'Staff created',
                                  onOk: function () {
                                    e('/users');
                                  },
                                })
                              : pr.a.error({ content: 'Email already exist' });
                          case 12:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
            J = (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t) {
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            n.setFieldsValue({ policy: void 0 }),
                            k('Select a policy to show description'),
                            y(
                              Object(p.a)(
                                Object(p.a)({}, x),
                                {},
                                { policy: !1 }
                              )
                            ),
                            (e.next = 5),
                            R(Xr(t))
                          );
                        case 5:
                          O(!0);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Q = function (e, t) {
              var n = ja()().diff(e, 'years'),
                a = {};
              return (
                z.forEach(function (e) {
                  return (a[e._id] = 0);
                }),
                t.lists.forEach(function (e) {
                  var t = e.policy.filter(function (e) {
                      return 'after' == e.condition1;
                    }),
                    r = e.policy.filter(function (e) {
                      return 'every' == e.condition1;
                    }),
                    c = e.stacked,
                    s = 0,
                    i = 0;
                  t.forEach(function (e) {
                    n >= e.year &&
                      (c
                        ? (i += e.increase)
                        : e.year > s && ((i = e.increase), (s = e.year)));
                  }),
                    r.forEach(function (e) {
                      var t = Math.floor(n / e.year);
                      i += t * e.increase;
                    }),
                    e.leavetype.forEach(function (e) {
                      return (a[e._id] = i);
                    });
                }),
                console.log('inc', a),
                a
              );
            },
            $ = function () {
              var e = n.getFieldValue('employment_date'),
                t = (ja()().diff(e, 'years'), n.getFieldValue('policy'));
              console.log(M);
              var a = M.find(function (e) {
                  return e._id == t;
                }),
                c = Q(e, a);
              console.log(c, 'curInc');
              var s = {};
              z.forEach(function (e) {
                return (s[e._id] = e.count);
              });
              var i = {};
              if (
                (z.forEach(function (e) {
                  return (i[e._id] = 'Base: '.concat(
                    e.count,
                    ' Not applicable'
                  ));
                }),
                r)
              ) {
                if (U.policy._id != a) {
                  var o = {};
                  U.leaveCount.forEach(function (e) {
                    o[e.leaveType._id] = e.count;
                  }),
                    console.log('here'),
                    u.current ||
                      (u.current = Q(
                        U.employment_date,
                        M.find(function (e) {
                          return e._id == U.policy._id;
                        })
                      ));
                  var l = u.current;
                  console.log(l, c),
                    z.forEach(function (e) {
                      var t = l[e._id] - c[e._id];
                      (s[e._id] = o[e._id] - t),
                        (s[e._id] = s[e._id] > 0 ? s[e._id] : 0),
                        (i[e._id] =
                          0 == t
                            ? ' Current: '.concat(o[e._id], ' No changes')
                            : t >= 0
                            ? ' Current: '
                                .concat(o[e._id], ' Decrease: ')
                                .concat(Math.abs(t))
                            : ' Current: '
                                .concat(o[e._id], ' Increase: ')
                                .concat(Math.abs(t)));
                    }),
                    _(i),
                    n.setFieldsValue({ leaveType: s });
                }
              } else {
                for (var d = 0, j = Object.entries(c); d < j.length; d++) {
                  var b = Object(m.a)(j[d], 2),
                    p = b[0],
                    O = b[1];
                  (i[p] = 'Base: '.concat(s[p], ' + Increase: ').concat(O)),
                    (s[p] += O);
                }
                _(i), n.setFieldsValue({ leaveType: s });
              }
            },
            X = (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t) {
                  var n, a, r;
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = M.find(function (e) {
                            return e._id == t;
                          })),
                            {},
                            (a = n.lists.map(function (e, t) {
                              return Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)('b', {
                                    children: e.leavetype.map(function (e) {
                                      return ''.concat(e.name, ', ');
                                    }),
                                  }),
                                  e.stacked
                                    ? Object(_a.jsx)('p', {
                                        children: 'Stacked',
                                      })
                                    : Object(_a.jsx)(_a.Fragment, {}),
                                  e.policy.map(function (e, t) {
                                    return Object(_a.jsx)(
                                      'p',
                                      {
                                        children: ''
                                          .concat(e.condition1, ' ')
                                          .concat(
                                            e.year,
                                            ' years, increase by '
                                          )
                                          .concat(e.increase),
                                      },
                                      t
                                    );
                                  }),
                                ],
                              });
                            })),
                            k(a),
                            (r = Object(p.a)(
                              Object(p.a)({}, x),
                              {},
                              { policy: !0 }
                            )),
                            y(r),
                            r.employment_date && r.policy && $();
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return o
            ? Object(_a.jsx)(Er.a, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    style: { textAlign: 'center' },
                    children: r ? 'Edit Staff' : 'Create Staff',
                  }),
                  Object(_a.jsx)(N.a, {
                    children: Object(_a.jsx)(F.a, {
                      xl: { offset: 6, span: 12 },
                      children: Object(_a.jsxs)(mr.a, {
                        form: n,
                        name: 'basic',
                        onFinish: B,
                        autoComplete: 'off',
                        labelCol: { sm: { span: 8 } },
                        children: [
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Employee ID',
                            name: 'emp_id',
                            rules: [{ required: !0, whitespace: !0 }],
                            children: Object(_a.jsx)(Or.a, {
                              placeholder: "Please enter employee's ID",
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'First Name',
                            name: 'first_name',
                            rules: [{ required: !0, whitespace: !0 }],
                            children: Object(_a.jsx)(Or.a, {
                              placeholder: "Please enter employee's first name",
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Last Name',
                            name: 'last_name',
                            rules: [{ required: !0, whitespace: !0 }],
                            children: Object(_a.jsx)(Or.a, {
                              placeholder: "Please enter employee's last name",
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Email',
                            name: 'email',
                            rules: [
                              { required: !0, type: 'email', whitespace: !0 },
                            ],
                            children: Object(_a.jsx)(Or.a, {
                              disabled: !!r,
                              type: 'email',
                              placeholder: "Please enter employee's email",
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Employment Date',
                            name: 'employment_date',
                            rules: [{ required: !0 }],
                            children: Object(_a.jsx)(Tr.a, {
                              style: { width: '100%' },
                              onChange: function (e) {
                                var t = Object(p.a)(
                                  Object(p.a)({}, x),
                                  {},
                                  { employment_date: !0 }
                                );
                                y(t), t.employment_date && t.policy && $();
                              },
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Department',
                            name: 'department',
                            rules: [{ required: !0 }],
                            children: Object(_a.jsx)(_r.a, {
                              placeholder:
                                "Please choose employee's department",
                              onChange: J,
                              children: Y.map(function (e) {
                                return Object(_a.jsx)(
                                  ec,
                                  { value: e._id, children: e.name },
                                  e._id
                                );
                              }),
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            help: Object(_a.jsxs)(_a.Fragment, {
                              children: [
                                Object(_a.jsx)(L.a.Paragraph, {
                                  children:
                                    'Staff: Can Apply Leave and Training. Have Personal Dashboard',
                                }),
                                Object(_a.jsx)(L.a.Paragraph, {
                                  children:
                                    'Supervisor: All privilege of staff applied Can approve / reject leave.Have own department dashboard. Can view leave and training list of own department.',
                                }),
                                Object(_a.jsx)(L.a.Paragraph, {
                                  children:
                                    'Admin: All privilege of Supervisor applied. Have Admin Dashboard and view all department training and leave list. Can Create Internal Training.',
                                }),
                              ],
                            }),
                            label: 'Roles',
                            name: 'roles',
                            rules: [{ required: !0 }],
                            children: Object(_a.jsx)(_r.a, {
                              placeholder: "Please choose employee's role",
                              children: H.map(function (e) {
                                return Object(_a.jsx)(
                                  ec,
                                  { value: e._id, children: e.name },
                                  e._id
                                );
                              }),
                            }),
                          }),
                          b &&
                            Object(_a.jsx)(mr.a.Item, {
                              help: I,
                              label: 'Policy',
                              name: 'policy',
                              rules: [{ required: !0 }],
                              children: Object(_a.jsx)(_r.a, {
                                placeholder: 'Please choose a policy',
                                onChange: X,
                                children: M.map(function (e) {
                                  return Object(_a.jsx)(
                                    ec,
                                    { value: e._id, children: e.name },
                                    e._id
                                  );
                                }),
                              }),
                            }),
                          Object(_a.jsx)(Jr.a, {
                            orientation: 'center',
                            children: 'Training',
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Training Hours',
                            name: 'trainingHours',
                            initialValue: '30',
                            rules: [{ required: !0 }],
                            children: Object(_a.jsx)(Qr.a, {
                              style: { width: '100%' },
                              min: 0,
                            }),
                          }),
                          Object(_a.jsx)(Jr.a, {
                            orientation: 'center',
                            children: 'Leave',
                          }),
                          x.policy && x.employment_date
                            ? z.map(function (e) {
                                return Object(_a.jsx)(
                                  mr.a.Item,
                                  {
                                    label: e.name,
                                    name: [['leaveType'], [e._id]],
                                    initialValue: e.count,
                                    help: T[e._id]
                                      ? T[e._id]
                                      : 'Not applicable',
                                    rules: [{ required: !0 }],
                                    children: Object(_a.jsx)(Qr.a, {
                                      style: { width: '100%' },
                                      min: 0,
                                    }),
                                  },
                                  e._id
                                );
                              })
                            : Object(_a.jsx)('p', {
                                style: { textAlign: 'center' },
                                children:
                                  'Select employment date and policy to view leave count',
                              }),
                          Object(_a.jsx)('br', {}),
                          Object(_a.jsx)('br', {}),
                          Object(_a.jsx)('br', {}),
                          Object(_a.jsxs)(mr.a.Item, {
                            wrapperCol: { sm: { offset: 8 } },
                            children: [
                              Object(_a.jsx)(q.a, {
                                type: 'primary',
                                htmlType: 'submit',
                                children: 'Submit',
                              }),
                              Object(_a.jsx)(q.a, {
                                children: Object(_a.jsx)(G.b, {
                                  to: '/users',
                                  children: 'Back',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        },
        ac = (n(870), V.a.Column),
        rc = function () {
          var e = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            t = Object(i.b)();
          Object(a.useEffect)(
            function () {
              t(zr());
            },
            [t]
          );
          var n = Object(Ca.g)();
          return Object(_a.jsxs)(_a.Fragment, {
            children: [
              Object(_a.jsx)(y.b, {
                style: { marginBottom: 16 },
                children: Object(_a.jsx)(q.a, {
                  onClick: function () {
                    n('/depts/create');
                  },
                  children: 'Create New Department',
                }),
              }),
              e.length
                ? Object(_a.jsx)(_a.Fragment, {
                    children: Object(_a.jsxs)(V.a, {
                      dataSource: e,
                      rowKey: '_id',
                      children: [
                        Object(_a.jsx)(
                          ac,
                          { title: 'Name', dataIndex: 'name' },
                          'name'
                        ),
                        Object(_a.jsx)(
                          ac,
                          {
                            title: 'Action',
                            render: function (e, t) {
                              return Object(_a.jsx)(y.b, {
                                size: 'middle',
                                children: Object(_a.jsx)(q.a, {
                                  onClick: function () {
                                    return (
                                      (e = t._id),
                                      void n('/depts/edit/'.concat(e))
                                    );
                                    var e;
                                  },
                                  children: 'edit',
                                }),
                              });
                            },
                          },
                          'action'
                        ),
                      ],
                    }),
                  })
                : Object(_a.jsxs)(_a.Fragment, {
                    children: [
                      Object(_a.jsx)('br', {}),
                      Object(_a.jsx)(Ta.a, { size: 'large' }),
                    ],
                  }),
            ],
          });
        },
        cc = (n(871), n(343)),
        sc = (n(872), L.a.Title),
        ic = function (e) {
          e.user;
          var t = Object(a.useState)(!1),
            n = Object(m.a)(t, 2),
            r = n[0],
            c = n[1],
            s = Object(cc.useForm)(),
            o = Object(m.a)(s, 1)[0],
            l = Object(Ca.h)().id,
            u = Object(i.b)(),
            d = Object(Ca.g)();
          return (
            Object(a.useEffect)(
              function () {
                l &&
                  (c(!0),
                  u(
                    (function (e) {
                      return (function () {
                        var t = Object(W.a)(
                          K.a.mark(function t(n) {
                            var a, r;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        n({ type: Dt }),
                                        (t.next = 4),
                                        oe(e)
                                      );
                                    case 4:
                                      return (
                                        (a = t.sent),
                                        (r = a.data),
                                        n({
                                          type: 'FETCH_ONE_DEPT',
                                          payload: r,
                                        }),
                                        n({ type: wt }),
                                        t.abrupt('return', r)
                                      );
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(0)),
                                        n({ type: It, error: t.t0 });
                                    case 14:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(l)
                  ).then(function (e) {
                    o.setFieldsValue(e), c(!1);
                  }));
              },
              [u, l]
            ),
            r
              ? Object(_a.jsx)(Er.a, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(sc, {
                      level: 2,
                      style: { textAlign: 'center' },
                      children: 'Create Department',
                    }),
                    Object(_a.jsxs)(mr.a, {
                      labelCol: { sm: { span: 8 } },
                      wrapperCol: { sm: { span: 8 } },
                      form: o,
                      name: 'basic',
                      onFinish: function (e) {
                        var t;
                        l
                          ? (u(
                              (function (e, t) {
                                return (function () {
                                  var n = Object(W.a)(
                                    K.a.mark(function n(a) {
                                      var r, c;
                                      return K.a.wrap(
                                        function (n) {
                                          for (;;)
                                            switch ((n.prev = n.next)) {
                                              case 0:
                                                return (
                                                  (n.prev = 0),
                                                  a({ type: Dt }),
                                                  (n.next = 4),
                                                  le(e, t)
                                                );
                                              case 4:
                                                (r = n.sent),
                                                  (c = r.data),
                                                  a({ type: Tt, payload: c }),
                                                  a({ type: wt }),
                                                  (n.next = 13);
                                                break;
                                              case 10:
                                                (n.prev = 10),
                                                  (n.t0 = n.catch(0)),
                                                  a({ type: It, error: n.t0 });
                                              case 13:
                                              case 'end':
                                                return n.stop();
                                            }
                                        },
                                        n,
                                        null,
                                        [[0, 10]]
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return n.apply(this, arguments);
                                  };
                                })();
                              })(l, e)
                            ),
                            pr.a.success({
                              content: 'Department updated',
                              onOk: function () {
                                d('/depts');
                              },
                            }))
                          : u(
                              ((t = e),
                              (function () {
                                var e = Object(W.a)(
                                  K.a.mark(function e(n) {
                                    var a, r;
                                    return K.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                n({ type: Dt }),
                                                (e.next = 4),
                                                (c = t),
                                                Q.post('/depts', c)
                                              );
                                            case 4:
                                              (a = e.sent),
                                                (r = a.data),
                                                n({ type: vt, payload: r }),
                                                n({ type: wt }),
                                                (e.next = 13);
                                              break;
                                            case 10:
                                              (e.prev = 10),
                                                (e.t0 = e.catch(0)),
                                                n({ type: It, error: e.t0 });
                                            case 13:
                                            case 'end':
                                              return e.stop();
                                          }
                                        var c;
                                      },
                                      e,
                                      null,
                                      [[0, 10]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })())
                            );
                      },
                      autoComplete: 'off',
                      children: [
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Name',
                          name: 'name',
                          rules: [{ required: !0, whitespace: !0 }],
                          children: Object(_a.jsx)(Or.a, {
                            placeholder: 'Please enter name',
                          }),
                        }),
                        Object(_a.jsxs)(mr.a.Item, {
                          wrapperCol: { sm: { offset: 8 } },
                          children: [
                            Object(_a.jsx)(q.a, {
                              type: 'primary',
                              htmlType: 'submit',
                              children: 'Submit',
                            }),
                            Object(_a.jsx)(q.a, {
                              children: Object(_a.jsx)(G.b, {
                                to: '/depts',
                                children: 'Back',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        oc = n(235),
        lc = (n(934), V.a.Column),
        uc = oc.a.useBreakpoint,
        dc = function (e) {
          var t = e.user,
            n = Object(i.c)(function (e) {
              return e.users;
            }),
            r = n.users,
            c = n.isLoading,
            s = (n.error, Object(i.b)());
          Object(a.useEffect)(
            function () {
              'supervisor' == t.roles.name ? s(Mr(t.department._id)) : s(Nr());
            },
            [s]
          );
          var o = Object(Ca.g)();
          uc();
          return c
            ? Object(_a.jsx)(Er.a, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  'admin' == t.roles.name &&
                    Object(_a.jsx)(y.b, {
                      style: { marginBottom: 16 },
                      children: Object(_a.jsx)(q.a, {
                        onClick: function () {
                          o('/users/create');
                        },
                        children: 'Add User',
                      }),
                    }),
                  Object(_a.jsx)('br', {}),
                  c
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(Ta.a, { size: 'large' }),
                      })
                    : Object(_a.jsxs)(_a.Fragment, {
                        children: [
                          Object(_a.jsxs)(V.a, {
                            dataSource: r,
                            rowKey: '_id',
                            children: [
                              Object(_a.jsx)(
                                lc,
                                { title: 'Employee ID', dataIndex: 'emp_id' },
                                'emp_id'
                              ),
                              Object(_a.jsx)(
                                lc,
                                {
                                  title: 'Name',
                                  render: function (e, t) {
                                    return Object(_a.jsxs)('div', {
                                      children: [
                                        t.first_name,
                                        ' ',
                                        t.last_name,
                                      ],
                                    });
                                  },
                                },
                                'name'
                              ),
                              Object(_a.jsx)(
                                lc,
                                {
                                  title: 'Department',
                                  dataIndex: ['department', 'name'],
                                },
                                'department.name'
                              ),
                              Object(_a.jsx)(
                                lc,
                                {
                                  title: 'Roles',
                                  dataIndex: ['roles', 'name'],
                                },
                                'roles.name'
                              ),
                              Object(_a.jsx)(
                                lc,
                                {
                                  title: 'Action',
                                  render: function (e, n) {
                                    return Object(_a.jsxs)(y.b, {
                                      size: 'middle',
                                      children: [
                                        Object(_a.jsx)(q.a, {
                                          children: Object(_a.jsx)(G.b, {
                                            to: '/users/view/'.concat(n._id),
                                            children: 'View',
                                          }),
                                        }),
                                        'admin' == t.roles.name &&
                                          Object(_a.jsx)(q.a, {
                                            children: Object(_a.jsx)(G.b, {
                                              to: '/users/edit/'.concat(n._id),
                                              children: 'Edit',
                                            }),
                                          }),
                                      ],
                                    });
                                  },
                                },
                                'action'
                              ),
                            ],
                          }),
                          Object(_a.jsx)(q.a, {
                            children: Object(_a.jsx)(G.b, {
                              to: '/',
                              children: 'Back',
                            }),
                          }),
                        ],
                      }),
                ],
              });
        },
        jc =
          (n(935),
          function () {
            var e,
              t,
              n = Ia()(),
              r = Object(i.c)(function (e) {
                return e.users;
              }),
              c = r.user,
              s = (r.isLoading, Object(a.useState)(!1)),
              o = Object(m.a)(s, 2),
              l = o[0],
              u = o[1],
              d = Object(i.b)(),
              j = (Object(Ca.g)(), Object(Ca.h)().id);
            Object(a.useEffect)(function () {
              b();
            }, []);
            var b = (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return u(!0), (e.next = 3), d(Fr(j));
                        case 3:
                          u(!1);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            return l
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsxs)(H.b, {
                      title: 'User Info',
                      bordered: !0,
                      layout: n.md ? 'horizontal' : 'vertical',
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      children: [
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Employee ID',
                          children: c.emp_id,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'First Name',
                          children: c.first_name,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Last Name',
                          children: c.last_name,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Email',
                          children: c.email,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Department',
                          children:
                            null === (e = c.department) || void 0 === e
                              ? void 0
                              : e.name,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Employment Date',
                          children: ja()(c.employment_date).format(
                            'YYYY-MM-DD'
                          ),
                        }),
                      ],
                    }),
                    Object(_a.jsx)(H.b, {
                      title: 'Leave Balance',
                      bordered: !0,
                      children:
                        null === c ||
                        void 0 === c ||
                        null === (t = c.leaveCount) ||
                        void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return Object(_a.jsx)(
                                H.b.Item,
                                { label: e.leaveType.name, children: e.count },
                                e.leaveType._id
                              );
                            }),
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)(q.a, {
                      children: Object(_a.jsx)(G.b, {
                        to: '/users',
                        children: 'Back',
                      }),
                    }),
                  ],
                });
          }),
        bc = n(313),
        pc = n(500),
        mc = n(501),
        Oc = n(502),
        fc = n(503),
        hc =
          (n(936),
          n(273),
          Or.a.TextArea,
          Tr.a.RangePicker,
          function () {
            var e = Object(Ca.g)(),
              t = Object(Ca.h)().id,
              n = Object(a.useState)('#39f983'),
              r = Object(m.a)(n, 2),
              c =
                (r[0],
                r[1],
                Object(i.c)(function (e) {
                  return e.leaveTypes;
                })),
              s =
                (c.leaveType,
                c.isLoading,
                c.success,
                c.error,
                Object(a.useState)(!1)),
              o = Object(m.a)(s, 2),
              l = o[0],
              d = o[1],
              j = Object(a.useState)(!1),
              b = Object(m.a)(j, 2),
              O = b[0],
              f = b[1],
              h = Object(a.useState)(!1),
              x = Object(m.a)(h, 2),
              v = x[0],
              g = x[1],
              T = Object(a.useState)({ code: 'sample', color: 'blue' }),
              _ = Object(m.a)(T, 2),
              D = _[0],
              w = _[1],
              I = mr.a.useForm(),
              k = Object(m.a)(I, 1)[0],
              E = Object(i.b)(),
              C = (function () {
                var n = Object(W.a)(
                  K.a.mark(function n(a) {
                    var r, c, s, i, o, l, u, d;
                    return K.a.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (s =
                              'custom' == a.startDate
                                ? a.customStartDate
                                : a.startDate),
                              (i =
                                'custom' == a.endDate
                                  ? a.customEndDate
                                  : a.endDate),
                              'year' == s || 'month' == s
                                ? (r = ja()().startOf(s))
                                : ((o = s.charAt(0)),
                                  (l = parseInt(s.substring(1))),
                                  (r =
                                    '+' == o
                                      ? ja()().add(l, 'days')
                                      : ja()().subtract(l, 'days'))),
                              'year' == i || 'month' == i
                                ? (c = ja()().endOf(i))
                                : ((u = i.charAt(0)),
                                  (d = parseInt(i.substring(1))),
                                  (c =
                                    '+' == u
                                      ? ja()().add(d, 'days')
                                      : ja()().subtract(d, 'days'))),
                              c.diff(r, 'days') < 0 &&
                                pr.a.error({
                                  content:
                                    'End date must be later than start date',
                                }),
                              t
                                ? (E(
                                    ua(
                                      t,
                                      Object(p.a)(
                                        Object(p.a)({}, a),
                                        {},
                                        { startDate: s, endDate: i }
                                      )
                                    )
                                  ),
                                  pr.a.success({
                                    content: 'Leave type updated',
                                    onOk: function () {
                                      e('/leaveTypes');
                                    },
                                  }))
                                : (E(
                                    la(
                                      Object(p.a)(
                                        Object(p.a)({}, a),
                                        {},
                                        { startDate: s, endDate: i }
                                      )
                                    )
                                  ),
                                  pr.a.success({
                                    content: 'Leave type created',
                                    onOk: function () {
                                      e('/leaveTypes');
                                    },
                                  }));
                          case 6:
                          case 'end':
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })();
            Object(a.useEffect)(
              function () {
                t &&
                  (d(!0),
                  E(
                    (function (e) {
                      return (function () {
                        var t = Object(W.a)(
                          K.a.mark(function t(n) {
                            var a, r;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        n({ type: Rt }),
                                        (t.next = 4),
                                        me(e)
                                      );
                                    case 4:
                                      return (
                                        (a = t.sent),
                                        (r = a.data),
                                        n({ type: St, payload: r }),
                                        n({ type: Pt }),
                                        t.abrupt('return', r)
                                      );
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(0)),
                                        n({ type: Lt, error: t.t0 });
                                    case 14:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(t)
                  ).then(function (e) {
                    k.setFieldsValue(e),
                      d(!1),
                      w({ code: e.code, color: e.color });
                  }));
              },
              [E, t]
            );
            return l
              ? Object(_a.jsx)(Er.a, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      style: { textAlign: 'center' },
                      children: t ? 'Edit Leave Type' : 'Create Leave Type',
                    }),
                    Object(_a.jsx)(u.b, {
                      locale: Gr.a,
                      children: Object(_a.jsxs)(bc.a, {
                        onValuesChange: function (e, t) {
                          var n;
                          (e.color || e.code) &&
                            w({
                              code: e.code
                                ? e.code
                                : ((n = D.code),
                                  !n || /^\s*$/.test(n) ? 'sample' : D.code),
                              color: e.color ? e.color : D.color,
                            });
                        },
                        form: k,
                        name: 'basic',
                        layout: 'horizontal',
                        labelCol: { sm: { span: 8 } },
                        wrapperCol: { sm: { span: 8 } },
                        onFinish: C,
                        autoComplete: 'off',
                        formKey: 'base-form-use-demo',
                        submitter: {
                          resetButtonProps: { style: { display: 'none' } },
                          render: function (e, t) {
                            return Object(_a.jsx)(mr.a.Item, {
                              wrapperCol: { sm: { offset: 8 } },
                              children: Object(_a.jsx)(y.b, { children: t }),
                            });
                          },
                        },
                        children: [
                          Object(_a.jsx)(pc.a, {
                            name: 'name',
                            label: 'Name',
                            placeholder: 'Enter Name',
                            tooltip: 'Press enter to autofill short name',
                            fieldProps: {
                              onPressEnter: function (e) {
                                var t = e.target.value
                                  .toLowerCase()
                                  .split(' ')[0];
                                k.setFieldsValue({ code: t }),
                                  w(
                                    Object(p.a)(
                                      Object(p.a)({}, D),
                                      {},
                                      { code: t }
                                    )
                                  );
                              },
                            },
                            rules: [{ required: !0 }],
                          }),
                          Object(_a.jsx)(pc.a, {
                            name: 'code',
                            label: 'Short Name',
                            placeholder: 'Enter Short Name',
                            tooltip: 'This field is meant for display purpose',
                            rules: [{ required: !0 }],
                          }),
                          Object(_a.jsx)(mc.a, {
                            name: 'count',
                            label: 'Default Count',
                            placeholder: 'Enter Default count',
                            rules: [
                              { required: !0 },
                              { type: 'number', min: 0 },
                            ],
                          }),
                          Object(_a.jsx)(Oc.a, {
                            fieldProps: { disableAlpha: !0 },
                            name: 'color',
                            initialValue: 'blue',
                            label: 'color',
                            rules: [
                              { required: !0, message: 'Please enter color' },
                            ],
                          }),
                          Object(_a.jsx)(N.a, {
                            gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                            children: Object(_a.jsx)(F.a, {
                              sm: { offset: 8 },
                              children: Object(_a.jsxs)(y.b, {
                                children: [
                                  'Preview:',
                                  Object(_a.jsx)(U.a, {
                                    color: D.color,
                                    children: D.code,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(_a.jsx)('br', {}),
                          Object(_a.jsx)(fc.a.Group, {
                            fieldProps: {
                              onChange: function (e) {
                                'custom' == e.target.value ? f(!0) : f(!1);
                              },
                            },
                            initialValue: 'year',
                            options: [
                              { value: 'year', label: 'Year' },
                              { value: 'month', label: 'Month' },
                              { value: 'custom', label: 'Custom' },
                            ],
                            name: 'startDate',
                            label: 'Start Date',
                          }),
                          O &&
                            Object(_a.jsx)(pc.a, {
                              validate: !0,
                              name: 'customStartDate',
                              label: 'Start Date',
                              tooltip:
                                'Number of days from now. Format: +/- number Eg: -7',
                              placeholder: '+ or - with numbers eg: -7',
                              rules: [
                                { required: !0 },
                                {
                                  pattern: '[+-][\\d]+',
                                  message: 'Invalid Format',
                                },
                              ],
                            }),
                          Object(_a.jsx)(fc.a.Group, {
                            fieldProps: {
                              onChange: function (e) {
                                'custom' == e.target.value ? g(!0) : g(!1);
                              },
                            },
                            initialValue: 'year',
                            options: [
                              { value: 'year', label: 'Year' },
                              { value: 'month', label: 'Month' },
                              { value: 'custom', label: 'Custom' },
                            ],
                            name: 'endDate',
                            label: 'End Date',
                          }),
                          v &&
                            Object(_a.jsx)(pc.a, {
                              name: 'customEndDate',
                              label: 'End Date',
                              tooltip:
                                'Number of days from now. Format: +/- number Eg: +7',
                              placeholder: '+ or - with numbers eg: +7',
                              rules: [
                                { required: !0 },
                                {
                                  pattern: '[+-][\\d]+',
                                  message: 'Invalid Format',
                                },
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                });
          }),
        xc = (n(953), V.a.Column),
        yc = function () {
          var e = Object(i.c)(function (e) {
              return e.leaveTypes;
            }).leaveTypes,
            t = Object(i.b)();
          Object(a.useEffect)(
            function () {
              t(oa());
            },
            [t]
          );
          var n = Object(Ca.g)();
          return Object(_a.jsxs)(_a.Fragment, {
            children: [
              Object(_a.jsx)(y.b, {
                style: { marginBottom: 16 },
                children: Object(_a.jsx)(q.a, {
                  onClick: function () {
                    n('/leaveTypes/create');
                  },
                  children: 'Create New Leave Type',
                }),
              }),
              e.length
                ? Object(_a.jsxs)(_a.Fragment, {
                    children: [
                      Object(_a.jsxs)(V.a, {
                        dataSource: e,
                        rowKey: '_id',
                        children: [
                          Object(_a.jsx)(
                            xc,
                            { title: 'Code', dataIndex: 'code' },
                            'code'
                          ),
                          Object(_a.jsx)(
                            xc,
                            { title: 'Name', dataIndex: 'name' },
                            'name'
                          ),
                          Object(_a.jsx)(
                            xc,
                            { title: 'Count', dataIndex: 'count' },
                            'count'
                          ),
                          Object(_a.jsx)(
                            xc,
                            {
                              title: 'Action',
                              render: function (e, t) {
                                return Object(_a.jsx)(y.b, {
                                  size: 'middle',
                                  children: Object(_a.jsx)(q.a, {
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/leaveTypes/edit/'.concat(t._id),
                                      children: 'Edit',
                                    }),
                                  }),
                                });
                              },
                            },
                            'action'
                          ),
                        ],
                      }),
                      Object(_a.jsx)(q.a, {
                        type: 'secondary',
                        htmlType: 'button',
                        children: Object(_a.jsx)(G.b, {
                          to: '/',
                          children: 'Back',
                        }),
                      }),
                    ],
                  })
                : Object(_a.jsxs)(_a.Fragment, {
                    children: [
                      Object(_a.jsx)('br', {}),
                      Object(_a.jsx)(Ta.a, { size: 'large' }),
                    ],
                  }),
            ],
          });
        },
        vc = (n(954), V.a.Column),
        gc = function () {
          var e = Object(i.c)(function (e) {
              return e.roles;
            }).roles,
            t = Object(i.b)();
          Object(a.useEffect)(
            function () {
              t($r());
            },
            [t]
          );
          var n = Object(Ca.g)();
          return Object(_a.jsxs)(_a.Fragment, {
            children: [
              Object(_a.jsx)(y.b, {
                style: { marginBottom: 16 },
                children: Object(_a.jsx)(q.a, {
                  onClick: function () {
                    n('/roles/create');
                  },
                  children: 'Add Roles',
                }),
              }),
              Object(_a.jsx)('br', {}),
              e.length
                ? Object(_a.jsx)(_a.Fragment, {
                    children: Object(_a.jsxs)(V.a, {
                      dataSource: e,
                      rowKey: '_id',
                      children: [
                        Object(_a.jsx)(
                          vc,
                          { title: 'Roles', dataIndex: 'name' },
                          'name'
                        ),
                        Object(_a.jsx)(
                          vc,
                          {
                            title: 'Action',
                            render: function (e, t) {
                              return Object(_a.jsx)(y.b, {
                                size: 'middle',
                                children: Object(_a.jsx)(q.a, {
                                  children: Object(_a.jsx)(G.b, {
                                    to: 'roles/edit/'.concat(t._id),
                                    children: 'Edit',
                                  }),
                                }),
                              });
                            },
                          },
                          'action'
                        ),
                      ],
                    }),
                  })
                : Object(_a.jsx)(_a.Fragment, {
                    children: Object(_a.jsx)(Ta.a, { size: 'large' }),
                  }),
              Object(_a.jsx)(q.a, {
                children: Object(_a.jsx)(G.b, { to: '/', children: 'Back' }),
              }),
            ],
          });
        },
        Tc = (n(955), 'LEAVE_VIEW_ALL'),
        _c = 'LEAVE_APPROVE',
        Dc = 'ROLES_ASSIGN',
        wc = function () {
          var e = Object(Ca.h)().id,
            t = Object(i.c)(function (e) {
              return e.roles;
            }).role,
            n = mr.a.useForm(),
            r = Object(m.a)(n, 1)[0],
            c = Object(i.b)();
          return (
            Object(a.useEffect)(
              function () {
                e &&
                  (c(
                    (function (e) {
                      return (function () {
                        var t = Object(W.a)(
                          K.a.mark(function t(n) {
                            var a, r;
                            return K.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        n({ type: zt }),
                                        (t.next = 4),
                                        fe(e)
                                      );
                                    case 4:
                                      (a = t.sent),
                                        (r = a.data),
                                        n({ type: qt, payload: r }),
                                        n({ type: Vt }),
                                        (t.next = 13);
                                      break;
                                    case 10:
                                      (t.prev = 10),
                                        (t.t0 = t.catch(0)),
                                        n({ type: Ut, error: t.t0 });
                                    case 13:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 10]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(e)
                  ),
                  r.setFieldsValue(Object(p.a)({}, t)));
              },
              [c, e]
            ),
            Object(_a.jsxs)(_a.Fragment, {
              children: [
                Object(_a.jsx)(L.a.Title, {
                  level: 2,
                  style: { textAlign: 'center' },
                  children: e ? 'Edit Role' : 'Create Role',
                }),
                Object(_a.jsxs)(mr.a, {
                  form: r,
                  name: 'basic',
                  labelCol: { sm: { span: 8 } },
                  wrapperCol: { sm: { span: 8 } },
                  onFinish: function (t) {
                    c(
                      e
                        ? (function (e, t) {
                            return (function () {
                              var n = Object(W.a)(
                                K.a.mark(function n(a) {
                                  var r, c;
                                  return K.a.wrap(
                                    function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            return (
                                              (n.prev = 0),
                                              a({ type: zt }),
                                              (n.next = 4),
                                              he(e, t)
                                            );
                                          case 4:
                                            (r = n.sent),
                                              (c = r.data),
                                              a({ type: Ht, payload: c }),
                                              a({ type: Vt }),
                                              (n.next = 13);
                                            break;
                                          case 10:
                                            (n.prev = 10),
                                              (n.t0 = n.catch(0)),
                                              a({ type: Ut, error: n.t0 });
                                          case 13:
                                          case 'end':
                                            return n.stop();
                                        }
                                    },
                                    n,
                                    null,
                                    [[0, 10]]
                                  );
                                })
                              );
                              return function (e) {
                                return n.apply(this, arguments);
                              };
                            })();
                          })(e, Object(p.a)({}, t))
                        : (function (e) {
                            return (function () {
                              var t = Object(W.a)(
                                K.a.mark(function t(n) {
                                  var a, r;
                                  return K.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              n({ type: zt }),
                                              (t.next = 4),
                                              (c = e),
                                              Q.post('/roles', c)
                                            );
                                          case 4:
                                            (a = t.sent),
                                              (r = a.data),
                                              n({ type: Yt, payload: r }),
                                              n({ type: Vt }),
                                              (t.next = 13);
                                            break;
                                          case 10:
                                            (t.prev = 10),
                                              (t.t0 = t.catch(0)),
                                              n({ type: Ut, error: t.t0 });
                                          case 13:
                                          case 'end':
                                            return t.stop();
                                        }
                                      var c;
                                    },
                                    t,
                                    null,
                                    [[0, 10]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(Object(p.a)({}, t))
                    );
                  },
                  autoComplete: 'off',
                  children: [
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Name',
                      name: 'name',
                      rules: [{ required: !0 }],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter ',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      wrapperCol: { sm: { offset: 8 } },
                      children: Object(_a.jsxs)(y.b, {
                        children: [
                          Object(_a.jsx)(q.a, {
                            type: 'primary',
                            htmlType: 'submit',
                            children: 'Submit',
                          }),
                          Object(_a.jsx)(q.a, {
                            type: 'secondary',
                            htmlType: 'button',
                            children: Object(_a.jsx)(G.b, {
                              to: '/roles',
                              children: 'Back',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Ic = n(154),
        kc = (n(489), n(956), n(958), L.a.Text, mr.a.useForm),
        Ec = function (e) {
          var t = e.user,
            n = kc(),
            r = Object(m.a)(n, 1)[0],
            c = Ia()(),
            s = Object(i.b)(),
            o =
              (Object(Ca.g)(),
              (function () {
                var e = Object(W.a)(
                  K.a.mark(function e(n) {
                    var a;
                    return K.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ((a = {}).email = n.settings.includes('email')),
                              s(yr(t._id, a)),
                              pr.a.success({ content: 'Settings Updated' });
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })());
          return (
            Object(a.useEffect)(function () {
              r.setFieldsValue({
                settings: Object.keys(t.settings).filter(function (e) {
                  return t.settings[e];
                }),
              });
            }, []),
            Object(_a.jsxs)(_a.Fragment, {
              children: [
                Object(_a.jsx)(L.a.Title, {
                  level: 2,
                  style: { textAlign: 'center' },
                  children: 'Profile',
                }),
                Object(_a.jsxs)(H.b, {
                  title: Object(_a.jsx)(Jr.a, {
                    orientation: 'left',
                    children: 'Details',
                  }),
                  bordered: !0,
                  layout: c.md ? 'horizontal' : 'vertical',
                  column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                  children: [
                    Object(_a.jsx)(H.b.Item, {
                      label: 'Emoployee ID',
                      children: t.emp_id,
                    }),
                    Object(_a.jsx)(H.b.Item, {
                      label: 'First Name',
                      children: t.first_name,
                    }),
                    Object(_a.jsx)(H.b.Item, {
                      label: 'Last Name',
                      children: t.last_name,
                    }),
                    Object(_a.jsx)(H.b.Item, {
                      label: 'Department',
                      children: t.department.name,
                    }),
                    Object(_a.jsx)(H.b.Item, {
                      label: 'Employment Date',
                      children: ja()(t.employment_date).format('YYYY-MM-DD'),
                    }),
                    Object(_a.jsx)(H.b.Item, {
                      label: 'Roles',
                      children: t.roles.name,
                    }),
                  ],
                }),
                Object(_a.jsx)(H.b, {
                  title: Object(_a.jsx)(Jr.a, {
                    orientation: 'left',
                    children: 'Leave Balance',
                  }),
                  bordered: !0,
                  children: t.leaveCount.map(function (e) {
                    return Object(_a.jsx)(
                      H.b.Item,
                      { label: e.leaveType.name, children: e.count },
                      e.leaveType._id
                    );
                  }),
                }),
                Object(_a.jsx)(Jr.a, {
                  orientation: 'left',
                  children: 'Settings',
                }),
                Object(_a.jsxs)(mr.a, {
                  form: r,
                  name: 'basic',
                  onFinish: o,
                  autoComplete: 'off',
                  children: [
                    Object(_a.jsx)(mr.a.Item, {
                      name: 'settings',
                      children: Object(_a.jsx)(Ic.a.Group, {
                        children: Object(_a.jsx)(N.a, {
                          children: Object(_a.jsx)(F.a, {
                            span: 24,
                            children: Object(_a.jsx)(Ic.a, {
                              value: 'email',
                              children: 'Email',
                            }),
                          }),
                        }),
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      children: Object(_a.jsx)(q.a, {
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Save Settings',
                      }),
                    }),
                  ],
                }),
                Object(_a.jsx)('br', {}),
                Object(_a.jsx)('br', {}),
                Object(_a.jsx)('br', {}),
                Object(_a.jsx)('div', {
                  style: { textAlign: 'center', marginTop: '20px' },
                  children: Object(_a.jsx)(q.a, {
                    type: 'primary',
                    children: Object(_a.jsx)(G.b, {
                      to: '/profile/changePassword',
                      children: 'Change Password',
                    }),
                  }),
                }),
              ],
            })
          );
        },
        Cc = n(354),
        Ac = n(260),
        Sc = n(359),
        Rc = n(360),
        Pc = n(361),
        Lc = 0,
        Nc = new Date().toISOString().replace(/T.*$/, ''),
        Fc = new Date('2021-10-03'),
        Yc = new Date('2021-10-08');
      Hc(), Hc(), Hc();
      function Hc() {
        return String(Lc++);
      }
      n(963);
      var Mc = oc.a.useBreakpoint,
        qc = function () {
          var e = Object(i.b)(),
            t = Mc(),
            n = Object(Ca.g)(),
            r = Object(a.createRef)(),
            c = Object(a.useState)({ fromDate: ja()(), toDate: ja()() }),
            s = Object(m.a)(c, 2),
            o = s[0],
            l = s[1],
            u = Object(a.useState)({}),
            d = Object(m.a)(u, 2),
            j =
              (d[0],
              d[1],
              Object(i.c)(function (e) {
                return e.leaves;
              })),
            b = j.calendar,
            p = j.isLoading;
          j.error;
          Object(a.useEffect)(
            function () {
              p ||
                (t.xs
                  ? r.current.getApi().changeView('listMonth')
                  : r.current.getApi().changeView('dayGridMonth'));
            },
            [t]
          );
          var O = (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n, a, r) {
                var c, s;
                return K.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (c = ja()(n.start)),
                          (s = ja()(n.end)),
                          0 != o.fromDate.diff(c) &&
                            0 != o.toDate.diff(s) &&
                            (l({ fromDate: c, toDate: s }),
                            e(ta({ fromDate: c, toDate: s }))),
                          a(b);
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n, a) {
              return t.apply(this, arguments);
            };
          })();
          return Object(_a.jsx)(_a.Fragment, {
            children: Object(_a.jsx)('div', {
              className: 'demo-app',
              children: Object(_a.jsx)('div', {
                className: 'demo-app-main',
                children: Object(_a.jsx)(Ta.a, {
                  spinning: p,
                  children: Object(_a.jsx)(Cc.a, {
                    ref: r,
                    plugins: [Ac.b, Sc.a, Rc.a, Pc.a],
                    headerToolbar: {
                      left: 'prevYear,prev,next,nextYear',
                      center: 'title',
                      right: 'today dayGridMonth,listMonth',
                    },
                    initialView: 'dayGridMonth',
                    dayMaxEvents: !0,
                    weekends: !0,
                    businessHours: { daysOfWeek: [1, 2, 3, 4, 5] },
                    events: O,
                    eventContent: function (e) {
                      return Object(_a.jsxs)(_a.Fragment, {
                        children: [
                          Object(_a.jsx)('b', { children: e.timeText }),
                          Object(_a.jsx)('i', { children: e.event.title }),
                          Object(_a.jsx)('i', {
                            children: e.event.extendedProps.emp_id,
                          }),
                        ],
                      });
                    },
                    eventClick: function (e) {
                      'background' != e.event.display && n(e.event.url);
                    },
                  }),
                }),
              }),
            }),
          });
        };
      var zc = function (e) {
        var t = e.children,
          n = e.user,
          a = e.requiredPermissions,
          r = void 0 === a ? null : a,
          c = e.matchAllPermissions,
          s = !0;
        return (
          r &&
            (s =
              void 0 !== c && c
                ? r.every(function (e) {
                    return -1 !== [_c, Dc, Tc].indexOf(e);
                  })
                : [_c, Dc, Tc].some(function (e) {
                    return -1 !== r.indexOf(e);
                  })),
          n && s ? t : Object(_a.jsx)(Ca.a, { to: '/auth', replace: !0 })
        );
      };
      for (
        var Vc = function (e) {
            var t = e.children;
            return e.user
              ? Object(_a.jsx)(Ca.a, { to: '/home', replace: !0 })
              : t;
          },
          Uc =
            (n(964),
            _r.a.Option,
            function () {
              Object(a.useEffect)(function () {
                !(function () {
                  if (('Notification' in window))
                    if ('granted' === Notification.permission)
                      new Notification('Hi there!');
                    else
                      'denied' !== Notification.permission &&
                        Notification.requestPermission().then(function (e) {
                          if ('granted' === e) new Notification('Hi there!');
                        });
                  else
                    alert('This browser does not support desktop notification');
                })();
              }, []);
              return Object(_a.jsx)(_a.Fragment, {});
            }),
          Gc = function () {
            var e = Object(Ca.g)(),
              t = Object(a.useState)(!1),
              n = Object(m.a)(t, 2),
              r = (n[0], n[1], Object(i.b)()),
              c = Object(i.c)(function (e) {
                return e.auth;
              }),
              s =
                (c.isLoading,
                c.error,
                (function () {
                  var t = Object(W.a)(
                    K.a.mark(function t(n) {
                      return K.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              r(hr({ email: n.email })).then(function () {
                                pr.a.success({
                                  content: 'Email sent!',
                                  onOk: function () {
                                    e('/auth');
                                  },
                                });
                              });
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })());
            return Object(_a.jsxs)(_a.Fragment, {
              children: [
                Object(_a.jsx)(L.a.Title, {
                  level: 2,
                  style: { textAlign: 'center' },
                  children: 'Reset Password',
                }),
                Object(_a.jsxs)(mr.a, {
                  name: 'basic',
                  labelCol: { sm: { span: 8 } },
                  wrapperCol: { sm: { span: 8 } },
                  onFinish: s,
                  autoComplete: 'off',
                  children: [
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Email',
                      name: 'email',
                      initialValue: '',
                      rules: [{ required: !0, type: 'email', whitespace: !0 }],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter email',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      wrapperCol: { sm: { offset: 8 } },
                      children: Object(_a.jsx)(q.a, {
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Submit',
                      }),
                    }),
                  ],
                }),
                Object(_a.jsx)('div', {
                  style: { textAlign: 'center' },
                  children: Object(_a.jsx)(G.b, {
                    to: '/auth',
                    children: 'Back to Login',
                  }),
                }),
              ],
            });
          },
          Bc = n(531),
          Kc = function (e) {
            e.socket, e.user;
            var t,
              n = Object(Ca.g)(),
              r = Object(i.c)(function (e) {
                return e.holidays;
              }),
              c = r.holidays,
              s = r.isLoading,
              o = (r.success, r.error, ja()()),
              l = Object(i.b)(),
              u = Object(a.useState)(o.year().toString()),
              d = Object(m.a)(u, 2),
              j = d[0],
              b = d[1];
            Object(a.useEffect)(
              function () {
                l(Cr(j));
              },
              [l, j]
            );
            var p = (function () {
              var e = Object(W.a)(
                K.a.mark(function e(t, n) {
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          l(Ar(t, n)),
                            pr.a.success({ content: 'Holiday Deleted' });
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
            return s
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 1,
                      children: 'Holidays',
                    }),
                    Object(_a.jsx)(Tr.a, {
                      onChange: function (e, t) {
                        b(t);
                      },
                      picker: 'year',
                      defaultValue: o,
                    }),
                    Object(_a.jsx)(q.a, {
                      children: Object(_a.jsxs)(G.b, {
                        to: '/holidays/create/'.concat(j),
                        children: ['Add New Holiday for ', j],
                      }),
                    }),
                    (
                      null === c ||
                      void 0 === c ||
                      null === (t = c.lists) ||
                      void 0 === t
                        ? void 0
                        : t.length
                    )
                      ? Object(_a.jsx)(_a.Fragment, {
                          children: Object(_a.jsxs)(V.a, {
                            dataSource: c.lists,
                            rowKey: '_id',
                            style: { overflowX: 'scroll' },
                            children: [
                              Object(_a.jsx)(
                                V.a.Column,
                                { title: 'Title', dataIndex: 'title' },
                                'title'
                              ),
                              Object(_a.jsx)(
                                V.a.Column,
                                {
                                  title: 'Start Date',
                                  dataIndex: 'startDate',
                                  render: function (e, t) {
                                    return ja()(e).format('YYYY-MM-DD');
                                  },
                                },
                                'startDate'
                              ),
                              Object(_a.jsx)(
                                V.a.Column,
                                {
                                  title: 'End Date',
                                  dataIndex: 'endDate',
                                  render: function (e, t) {
                                    return ja()(e).format('YYYY-MM-DD');
                                  },
                                },
                                'endDate'
                              ),
                              Object(_a.jsx)(V.a.Column, {
                                title: 'Action',
                                dataIndex: 'option',
                                render: function (e, t) {
                                  return Object(_a.jsxs)(
                                    y.b,
                                    {
                                      size: 'middle',
                                      children: [
                                        Object(_a.jsx)(q.a, {
                                          type: 'primary',
                                          onClick: function () {
                                            return n(
                                              '/holidays/edit/'
                                                .concat(j, '/')
                                                .concat(t._id)
                                            );
                                          },
                                          children: 'Edit',
                                        }),
                                        Object(_a.jsx)(Bc.a, {
                                          title:
                                            'Are you sure you want to delete this holiday?',
                                          onConfirm: function () {
                                            return p(j, t._id);
                                          },
                                          okText: 'Yes',
                                          cancelText: 'No',
                                          children: Object(_a.jsx)(q.a, {
                                            type: 'primary',
                                            danger: !0,
                                            children: 'Delete',
                                          }),
                                        }),
                                      ],
                                    },
                                    t._id
                                  );
                                },
                              }),
                            ],
                          }),
                        })
                      : Object(_a.jsx)(z.a, {}),
                  ],
                });
          },
          Wc = (n(965), L.a.Title),
          Jc = function () {
            var e = Object(i.b)(),
              t = Object(Ca.g)(),
              n = Object(Ca.h)(),
              r = n.year,
              c = n.id,
              s = mr.a.useForm(),
              o = Object(m.a)(s, 1)[0],
              l = Object(a.useState)(!1),
              u = Object(m.a)(l, 2),
              d = u[0],
              j = u[1],
              b = Object(i.c)(function (e) {
                return e.holidays;
              });
            b.holiday, b.isLoading, b.success, b.error;
            Object(a.useEffect)(
              function () {
                c &&
                  (j(!0),
                  e(
                    (function (e, t) {
                      return (function () {
                        var n = Object(W.a)(
                          K.a.mark(function n(a) {
                            var r, c;
                            return K.a.wrap(
                              function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      return (
                                        (n.prev = 0),
                                        a({ type: $t }),
                                        (n.next = 4),
                                        ge(e, t)
                                      );
                                    case 4:
                                      return (
                                        (r = n.sent),
                                        (c = r.data),
                                        a({ type: Qt, payload: c }),
                                        a({ type: Xt }),
                                        n.abrupt('return', c)
                                      );
                                    case 11:
                                      (n.prev = 11),
                                        (n.t0 = n.catch(0)),
                                        a({ type: Zt, error: n.t0 });
                                    case 14:
                                    case 'end':
                                      return n.stop();
                                  }
                              },
                              n,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e) {
                          return n.apply(this, arguments);
                        };
                      })();
                    })(r, c)
                  ).then(function (e) {
                    j(!1);
                    var t = e[0];
                    o.setFieldsValue(
                      Object(p.a)(
                        Object(p.a)({}, t),
                        {},
                        { 'range-picker': [ja()(t.startDate), ja()(t.endDate)] }
                      )
                    );
                  }));
              },
              [e, c]
            );
            return d
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(Wc, {
                      level: 2,
                      style: { textAlign: 'center' },
                      children: c ? 'Edit Holiday' : 'Create Holiday',
                    }),
                    Object(_a.jsxs)(mr.a, {
                      labelCol: { sm: { span: 8 } },
                      wrapperCol: { sm: { span: 8 } },
                      form: o,
                      name: 'basic',
                      onFinish: function (n) {
                        var a,
                          s = n['range-picker'],
                          i = s[0],
                          o = s[1];
                        c
                          ? (e(
                              (function (e, t, n) {
                                return (function () {
                                  var a = Object(W.a)(
                                    K.a.mark(function a(r) {
                                      var c, s;
                                      return K.a.wrap(
                                        function (a) {
                                          for (;;)
                                            switch ((a.prev = a.next)) {
                                              case 0:
                                                return (
                                                  (a.prev = 0),
                                                  r({ type: $t }),
                                                  (a.next = 4),
                                                  ve(e, t, n)
                                                );
                                              case 4:
                                                return (
                                                  (c = a.sent),
                                                  (s = c.data),
                                                  r({ type: Wt, payload: s }),
                                                  r({
                                                    type: en,
                                                    payload: {
                                                      success: 'Update success',
                                                    },
                                                  }),
                                                  r({ type: Xt }),
                                                  a.abrupt('return', s)
                                                );
                                              case 12:
                                                (a.prev = 12),
                                                  (a.t0 = a.catch(0)),
                                                  r({ type: Zt, error: a.t0 });
                                              case 15:
                                              case 'end':
                                                return a.stop();
                                            }
                                        },
                                        a,
                                        null,
                                        [[0, 12]]
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return a.apply(this, arguments);
                                  };
                                })();
                              })(r, c, {
                                title: n.title,
                                description: n.description,
                                startDate: i,
                                endDate: o,
                              })
                            ),
                            pr.a.success({
                              content: 'Holiday Updated',
                              onOk: function () {
                                t('/holidays');
                              },
                            }))
                          : (e(
                              ((a = {
                                year: r,
                                holiday: {
                                  title: n.title,
                                  description: n.description,
                                  startDate: i,
                                  endDate: o,
                                },
                              }),
                              (function () {
                                var e = Object(W.a)(
                                  K.a.mark(function e(t) {
                                    var n, r;
                                    return K.a.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.prev = 0),
                                                t({ type: $t }),
                                                (e.next = 4),
                                                ye(a)
                                              );
                                            case 4:
                                              (n = e.sent),
                                                (r = n.data),
                                                t({ type: Bt, payload: r }),
                                                t({
                                                  type: en,
                                                  payload: {
                                                    success: 'Create success',
                                                  },
                                                }),
                                                t({ type: Xt }),
                                                (e.next = 14);
                                              break;
                                            case 11:
                                              (e.prev = 11),
                                                (e.t0 = e.catch(0)),
                                                t({ type: Zt, error: e.t0 });
                                            case 14:
                                            case 'end':
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 11]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })())
                            ),
                            pr.a.success({
                              content: 'Holiday created',
                              onOk: function () {
                                t('/holidays');
                              },
                            }));
                      },
                      children: [
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Title',
                          name: 'title',
                          rules: [{ required: !0, whitespace: !0 }],
                          children: Object(_a.jsx)(Or.a, {
                            placeholder: 'Please enter title',
                          }),
                        }),
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Description',
                          name: 'description',
                          rules: [{ whitespace: !0 }],
                          children: Object(_a.jsx)(Or.a.TextArea, {
                            rows: 4,
                            placeholder: 'Please enter description (optional)',
                          }),
                        }),
                        Object(_a.jsx)(mr.a.Item, {
                          label: 'Date',
                          name: 'range-picker',
                          rules: [{ required: !0 }],
                          children: Object(_a.jsx)(Tr.a.RangePicker, {}),
                        }),
                        Object(_a.jsxs)(mr.a.Item, {
                          wrapperCol: { sm: { offset: 8 } },
                          children: [
                            Object(_a.jsx)(q.a, {
                              type: 'primary',
                              htmlType: 'submit',
                              children: 'Submit',
                            }),
                            Object(_a.jsx)(q.a, {
                              onClick: function () {
                                return t(-1);
                              },
                              children: 'Back',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
          },
          Qc = n(362),
          $c = n(563),
          Xc = n(224),
          Zc = n(44),
          es = n(504),
          ts = function (e, t) {
            return isNaN(e) && isNaN(t)
              ? (e || '').localeCompare(t || '')
              : e - t;
          },
          ns = { 0: 'close', 1: 'running', 2: 'online', 3: 'error' },
          as = [],
          rs = [
            '\u4ed8\u5c0f\u5c0f',
            '\u66f2\u4e3d\u4e3d',
            '\u6797\u4e1c\u4e1c',
            '\u9648\u5e05\u5e05',
            '\u517c\u67d0\u67d0',
          ],
          cs = 0;
        cs < 100;
        cs += 1
      )
        as.push({
          key: cs,
          name: 'AppName',
          containers: Math.floor(20 * Math.random()),
          creator: rs[Math.floor(Math.random() * rs.length)],
          status: ns[Math.floor(10 * Math.random()) % 4],
          createdAt: Date.now() - Math.floor(2e3 * Math.random()),
          money: Math.floor(2e3 * Math.random()) * cs,
          progress: Math.ceil(100 * Math.random()) + 1,
          memo:
            cs % 2 === 1
              ? '\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u7684\u6587\u5b57\u8981\u5c55\u793a\u4f46\u662f\u8981\u7559\u4e0b\u5c3e\u5df4'
              : '\u7b80\u77ed\u5907\u6ce8\u6587\u6848',
        });
      _a.Fragment, Zc.a, $c.a;
      var ss = [
          {
            title: 'Index',
            dataIndex: 'index',
            valueType: 'indexBorder',
            key: 'index',
            width: 48,
          },
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: function (e, t) {
              return ''.concat(t.title, ' ').concat(t.leaveType);
            },
            sorter: function (e, t) {
              return ts(e.title, t.title);
            },
          },
          {
            title: 'Start Date',
            dataIndex: 'fromDate',
            key: 'fromDate',
            valueType: 'date',
            render: function (e, t) {
              return ja()(e).format('y-MM-DD');
            },
            sorter: function (e, t) {
              return ts(e.fromDate, t.fromDate);
            },
          },
        ],
        is = Object(_a.jsxs)(ur.a, {
          children: [
            Object(_a.jsx)(ur.a.Item, { children: '1st item' }, '1'),
            Object(_a.jsx)(ur.a.Item, { children: '2nd item' }, '2'),
            Object(_a.jsx)(ur.a.Item, { children: '3rd item' }, '3'),
          ],
        }),
        os = function () {
          var e = Object(i.c)(function (e) {
              return e.leaves;
            }).leaves,
            t = Object(a.useState)(e),
            n = Object(m.a)(t, 2),
            r = n[0],
            c = (n[1], Object(a.useRef)());
          return Object(_a.jsx)(u.b, {
            locale: Gr.a,
            children: Object(_a.jsx)(Vr.a, {
              columns: ss,
              actionRef: c,
              request: function (e, t, n) {
                var a = r;
                return (
                  n &&
                    Object.keys(n).length > 0 &&
                    (a = a.filter(function (e) {
                      return Object.keys(n).some(function (t) {
                        return !n[t] || !!n[t].includes(''.concat(e[t]));
                      });
                    })),
                  e &&
                    Object.keys(e).length > 0 &&
                    (a = a.filter(function (t) {
                      return Object.keys(e).every(function (n) {
                        return (
                          !e[n] ||
                          'pageSize' == n ||
                          'current' == n ||
                          'all' == e[n] ||
                          -1 !=
                            t[n].search(new RegExp('.*' + e[n] + '.*', 'gi'))
                        );
                      });
                    })),
                  Promise.resolve({ data: a, success: !0 })
                );
              },
              rowKey: 'key',
              pagination: { pageSize: 10, showQuickJumper: !0 },
              search: { layout: 'vertical', defaultCollapsed: !1 },
              dateFormatter: 'string',
              toolbar: {
                title: '\u9ad8\u7ea7\u8868\u683c',
                tooltip: '\u8fd9\u662f\u4e00\u4e2a\u6807\u9898\u63d0\u793a',
              },
              toolBarRender: function () {
                return [
                  Object(_a.jsx)(
                    q.a,
                    { danger: !0, children: '\u5371\u9669\u6309\u94ae' },
                    'danger'
                  ),
                  Object(_a.jsx)(
                    q.a,
                    { children: '\u67e5\u770b\u65e5\u5fd7' },
                    'show'
                  ),
                  Object(_a.jsx)(
                    q.a,
                    {
                      type: 'primary',
                      children: Object(_a.jsx)(G.b, {
                        to: '/leaves/create',
                        children: 'Apply Leave',
                      }),
                    },
                    'primary'
                  ),
                  Object(_a.jsx)(
                    Za.a,
                    {
                      overlay: is,
                      children: Object(_a.jsx)(q.a, {
                        children: Object(_a.jsx)(Xc.a, {}),
                      }),
                    },
                    'menu'
                  ),
                ];
              },
            }),
          });
        },
        ls =
          (n(967),
          function (e) {
            e.socket;
            var t = e.user,
              n = Ia()(),
              r = Object(a.useState)(!0),
              c = Object(m.a)(r, 2),
              s =
                (c[0],
                c[1],
                Object(i.c)(function (e) {
                  return e.trainings;
                })),
              o = s.trainings,
              l = s.upcomingTraining,
              u = s.isLoading,
              d = (Object(Ca.g)(), Object(i.b)()),
              j = 0,
              b = t.trainingHours,
              p = t.completedHours,
              O = b - p,
              f = p / b,
              h = [
                { name: 'Hours Completed', value: p },
                { name: 'Hours Required', value: (O = O < 0 ? '' : O) },
              ],
              x = ['#0088FE', '#de0b0b'];
            Object(a.useEffect)(
              function () {
                var e;
                d(
                  ((e = t._id),
                  (function () {
                    var t = Object(W.a)(
                      K.a.mark(function t(n) {
                        var a, r;
                        return K.a.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0),
                                    n({ type: cn }),
                                    (t.next = 4),
                                    Ae(e)
                                  );
                                case 4:
                                  (a = t.sent),
                                    (r = a.data),
                                    n({ type: On, payload: r }),
                                    n({ type: sn }),
                                    (t.next = 13);
                                  break;
                                case 10:
                                  (t.prev = 10),
                                    (t.t0 = t.catch(0)),
                                    n({ type: on, error: t.t0 });
                                case 13:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })())
                ),
                  'staff' != t.roles.name &&
                    d(sa(t.roles.name, t._id, t.department.name));
              },
              [d]
            );
            var v,
              g = Object(Ea.a)(o);
            try {
              for (g.s(); !(v = g.n()).done; ) {
                'Pending' == v.value.status && j++;
              }
            } catch (T) {
              g.e(T);
            } finally {
              g.f();
            }
            return u
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Current Training Status',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          md: 12,
                          lg: 16,
                          children: Object(_a.jsxs)(Y.a, {
                            bordered: !0,
                            children: [
                              Object(_a.jsxs)(H.b, {
                                title: 'Profile Details',
                                bordered: !0,
                                layout: n.md ? 'horizontal' : 'vertical',
                                column: { sm: 2, xs: 1 },
                                children: [
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Name',
                                    span: 2,
                                    children: ''
                                      .concat(t.first_name, ' ')
                                      .concat(t.last_name),
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Department',
                                    span: 2,
                                    children: t.department.name,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Total Training Hours Required',
                                    span: 1,
                                    children: t.trainingHours,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Training Hours Completed',
                                    span: 1,
                                    children: t.completedHours,
                                  }),
                                ],
                              }),
                              Object(_a.jsx)('br', {}),
                              f <= 0.25
                                ? Object(_a.jsx)(M.a, {
                                    message: 'Low Training Hours Completed',
                                    description:
                                      'Please participate in more trainings in order to reach your quota!',
                                    type: 'error',
                                  })
                                : f < 0.75
                                ? Object(_a.jsx)(M.a, {
                                    message:
                                      'Moderate Training Hours Completed',
                                    description:
                                      'Keep up the good work! Participate in more trainings to reach your quota.',
                                    type: 'warning',
                                  })
                                : f < 1
                                ? Object(_a.jsx)(M.a, {
                                    message: 'Great Training Hours Completed',
                                    description:
                                      'Almost there! Keep participating in trainings to reach your quota!',
                                    type: 'success',
                                  })
                                : Object(_a.jsx)(M.a, {
                                    message: 'Training Quota Reached',
                                    description:
                                      'Congratulations! You have reached your training quota!',
                                    type: 'success',
                                  }),
                            ],
                          }),
                        }),
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          md: 12,
                          lg: 8,
                          children: Object(_a.jsx)(Y.a, {
                            bordered: !0,
                            children: Object(_a.jsx)(ba.a, {
                              minWidth: 200,
                              minHeight: 300,
                              children: Object(_a.jsxs)(ya.a, {
                                children: [
                                  Object(_a.jsx)(va.a, {
                                    data: h,
                                    innerRadius: 60,
                                    outerRadius: 80,
                                    fill: '#8884d8',
                                    paddingAngle: 3,
                                    startAngle: -270,
                                    dataKey: 'value',
                                    isAnimationActive: !1,
                                    label: function (e) {
                                      var t = e.x,
                                        n = e.y,
                                        a = e.value;
                                      return Object(_a.jsx)('text', {
                                        x: t,
                                        y: n,
                                        fill: 'black',
                                        textAnchor: 'end',
                                        alignmentBaseline: 'auto',
                                        children: a,
                                      });
                                    },
                                    labelLine: !1,
                                    children: h.map(function (e, t) {
                                      return Object(_a.jsx)(
                                        Oa.a,
                                        { fill: x[t % x.length] },
                                        'cell-'.concat(t)
                                      );
                                    }),
                                  }),
                                  Object(_a.jsx)(xa.a, {}),
                                  Object(_a.jsx)(ga.a, {}),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Quick Overview',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 'staff' != t.roles.name ? 12 : 24,
                          children: Object(_a.jsxs)(Y.a, {
                            bordered: !0,
                            children: [
                              Object(_a.jsx)('div', {
                                style: { textAlign: 'right' },
                                children: Object(_a.jsx)(q.a, {
                                  type: 'primary',
                                  shape: 'round',
                                  children: Object(_a.jsx)(G.b, {
                                    to: '/training/history',
                                    children: 'To Training History',
                                  }),
                                }),
                              }),
                              Object(_a.jsx)('b', {
                                children: 'Upcoming Trainings:',
                              }),
                              l &&
                                (l.length
                                  ? Object(_a.jsx)(_a.Fragment, {
                                      children: Object(_a.jsxs)(V.a, {
                                        dataSource: l,
                                        rowKey: '_id',
                                        children: [
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Organizer',
                                              dataIndex: 'organizer',
                                            },
                                            'organizer'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Title',
                                              dataIndex: 'title',
                                            },
                                            'title'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Type',
                                              dataIndex: 'trainingType',
                                            },
                                            'trainingType'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Date',
                                              dataIndex: 'date',
                                              render: function (e, t) {
                                                return ''
                                                  .concat(
                                                    ja()(t.fromDate).format(
                                                      'YYYY-MM-DD'
                                                    ),
                                                    ' - '
                                                  )
                                                  .concat(
                                                    ja()(t.toDate).format(
                                                      'YYYY-MM-DD'
                                                    )
                                                  );
                                              },
                                            },
                                            'date'
                                          ),
                                          Object(_a.jsx)(
                                            V.a.Column,
                                            {
                                              title: 'Action',
                                              render: function (e, t) {
                                                return Object(_a.jsx)(
                                                  y.b,
                                                  {
                                                    size: 'middle',
                                                    children: Object(_a.jsx)(
                                                      G.b,
                                                      {
                                                        to: '/training/view/'.concat(
                                                          t._id
                                                        ),
                                                        children: 'View',
                                                      }
                                                    ),
                                                  },
                                                  t._id
                                                );
                                              },
                                            },
                                            'action'
                                          ),
                                        ],
                                      }),
                                    })
                                  : Object(_a.jsx)(z.a, {})),
                            ],
                          }),
                        }),
                        'staff' != t.roles.name &&
                          Object(_a.jsx)(F.a, {
                            className: 'gutter-row',
                            xs: 24,
                            sm: 12,
                            children: Object(_a.jsx)(Y.a, {
                              bordered: !0,
                              children: Object(_a.jsxs)(y.b, {
                                wrap: !0,
                                align: 'baseline',
                                style: {
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                },
                                children: [
                                  Object(_a.jsxs)(L.a.Text, {
                                    strong: !0,
                                    children: [
                                      'Pending External Training Requests:',
                                      ' '.concat(j),
                                    ],
                                  }),
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    shape: 'round',
                                    children: Object(_a.jsx)(G.b, {
                                      to: '/training/extList',
                                      children: 'To Requests',
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                });
          }),
        us = n(264),
        ds = (n(968), Or.a.TextArea),
        js =
          (Tr.a.RangePicker,
          _r.a.Option,
          L.a.Text,
          function (e) {
            e.socket;
            var t = e.user,
              n = Object(Ca.h)().id,
              r = Object(Ca.g)(),
              c = Object(i.c)(function (e) {
                return e.trainings;
              }),
              s = (c.isLoading, c.training),
              o = mr.a.useForm(),
              l = Object(m.a)(o, 1)[0],
              u = Object(a.useState)(null),
              d = Object(m.a)(u, 2),
              j = (d[0], d[1]),
              b = Object(i.b)();
            return Object(_a.jsxs)(_a.Fragment, {
              children: [
                Object(_a.jsx)(L.a.Title, {
                  level: 2,
                  style: { textAlign: 'center' },
                  children: 'Create Internal Training',
                }),
                Object(_a.jsxs)(mr.a, {
                  form: l,
                  name: 'basic',
                  labelCol: { sm: { span: 8 } },
                  wrapperCol: { sm: { span: 8 } },
                  onFinish: function (e) {
                    j(null);
                    var n = new FormData();
                    if (e.upload) {
                      var a,
                        c = Object(Ea.a)(e.upload);
                      try {
                        for (c.s(); !(a = c.n()).done; ) {
                          var s = a.value;
                          s.originFileObj && n.append('files', s.originFileObj);
                        }
                      } catch (f) {
                        c.e(f);
                      } finally {
                        c.f();
                      }
                    }
                    var i = e.date,
                      o = i[0],
                      l = i[1],
                      u = e.time,
                      d = u[0],
                      p = u[1],
                      O = {
                        user: t._id,
                        department: t.department._id,
                        organizer: e.organizer,
                        title: e.title,
                        description: e.description,
                        fromDate: o.format('YYYY-MM-DD'),
                        toDate: l.format('YYYY-MM-DD'),
                        fromTime: d.format('HH:mm'),
                        toTime: p.format('HH:mm'),
                        duration: (
                          ja.a.duration(p.diff(d)).as('hours') *
                          (ja.a.duration(l.diff(o)).as('days') + 1)
                        ).toFixed(2),
                        trainingType: 'Internal',
                      };
                    Object.entries(O).forEach(function (e) {
                      var t = Object(m.a)(e, 2),
                        a = t[0],
                        r = t[1];
                      n.append(a, r);
                    }),
                      b(ca(n)),
                      pr.a.success({
                        content: 'Training successfully created.',
                        onOk: function () {
                          r('/training/home');
                        },
                      });
                  },
                  autoComplete: 'off',
                  children: [
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Organizer',
                      name: 'organizer',
                      rules: [
                        {
                          required: !0,
                          whitespace: !0,
                          message: 'Please enter an organizer!',
                        },
                      ],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter organizer',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Title',
                      name: 'title',
                      rules: [
                        {
                          required: !0,
                          whitespace: !0,
                          message: 'Please insert a title!',
                        },
                      ],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter title',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Description',
                      name: 'description',
                      rules: [
                        {
                          required: !0,
                          message: 'Please input your training description!',
                        },
                      ],
                      children: Object(_a.jsx)(ds, {
                        rows: 4,
                        placeholder: 'Please enter training description',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Date',
                      name: 'date',
                      rules: [
                        { required: !0, message: 'Please input your date!' },
                      ],
                      children: Object(_a.jsx)(Tr.a.RangePicker, {
                        style: { width: '100%' },
                        disabledDate: function (e) {
                          return e && e < ja()().endOf('day');
                        },
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Time',
                      name: 'time',
                      rules: [
                        { required: !0, message: 'Please input your time!' },
                      ],
                      children: Object(_a.jsx)(us.a.RangePicker, {
                        style: { width: '100%' },
                        format: 'HH:mm',
                        minuteStep: 15,
                        defaultValue: ja()('00:00:00', 'HH:mm:ss'),
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      name: 'upload',
                      label: 'Supporting Documents',
                      getValueFromEvent: function (e) {
                        return Array.isArray(e) ? e : e && e.fileList;
                      },
                      children: Object(_a.jsx)(Dr.a.Dragger, {
                        name: 'logo',
                        listType: 'picture',
                        beforeUpload: function (e) {
                          return !1;
                        },
                        customRequest: function (e) {
                          e.file;
                          var t = e.onSuccess;
                          setTimeout(function () {
                            t('ok');
                          }, 0);
                        },
                        defaultFileList: function () {
                          var e;
                          return n
                            ? (null === s ||
                              void 0 === s ||
                              null === (e = s.attachments) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return {
                                      uid: e.fileId,
                                      name: e.fileName,
                                      status: 'done',
                                      url: e.filePath,
                                    };
                                  })) || []
                            : null;
                        },
                        showUploadList: {
                          showDownloadIcon: !0,
                          downloadIcon: function (e) {
                            return 'done' == e.status
                              ? Object(_a.jsx)(wr.a, {})
                              : Object(_a.jsx)(_a.Fragment, {});
                          },
                          showRemoveIcon: !0,
                          removeIcon: function (e) {
                            return 'done' == e.status
                              ? Object(_a.jsx)(_a.Fragment, {})
                              : Object(_a.jsx)(Ir.a, {});
                          },
                        },
                        children: Object(_a.jsx)(q.a, {
                          icon: Object(_a.jsx)(kr.a, {}),
                          children: 'Click to upload',
                        }),
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      wrapperCol: { sm: { offset: 8 } },
                      children: Object(_a.jsx)(q.a, {
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Submit',
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        bs = function () {
          var e = Object(i.c)(function (e) {
              return e.trainings;
            }),
            t = e.trainings,
            n = e.isLoading,
            r = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            c = (Object(Ca.g)(), []),
            s = function (e) {
              return e.filter(function (e) {
                return 'Approved' == e.status;
              }).length;
            },
            o = Object(i.b)();
          Object(a.useEffect)(
            function () {
              o(
                (function () {
                  var e = Object(W.a)(
                    K.a.mark(function e(t) {
                      var n, a;
                      return K.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: cn }),
                                  (e.next = 4),
                                  Q.get('/training')
                                );
                              case 4:
                                (n = e.sent),
                                  (a = n.data),
                                  t({ type: an, payload: a }),
                                  t({ type: sn }),
                                  (e.next = 13);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(0)),
                                  t({ type: on, error: e.t0 });
                              case 13:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
                o(zr());
            },
            [o]
          ),
            r.forEach(function (e) {
              c.push({ text: e.name, value: e.name });
            });
          var l = [
              {
                title: 'Organizer',
                dataIndex: 'organizer',
                key: 'organizer',
                valueType: 'text',
              },
              { title: 'Title', dataIndex: 'title', key: 'title' },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                hideInSearch: !0,
                render: function (e, t) {
                  return ''.concat(t.fromTime, ' - ').concat(t.toTime);
                },
              },
              {
                title: 'Total Duration(hours)',
                dataIndex: 'duration',
                key: 'duration',
                render: function (e, t) {
                  return ja.a
                    .utc(ja.a.duration(t.duration, 'hours').asMilliseconds())
                    .format('H [hours] mm [minutes]');
                },
                hideInSearch: !0,
              },
              {
                title: 'Attendants',
                dataIndex: 'attendants',
                key: 'attendants',
                hideInSearch: !0,
                sorter: function (e, t) {
                  return s(e.attendants) - s(t.attendants);
                },
                render: function (e, t) {
                  return s(t.attendants);
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsx)(
                    y.b,
                    {
                      size: 'middle',
                      children: Object(_a.jsx)(G.b, {
                        to: '/training/view/'.concat(t._id),
                        children: 'View',
                      }),
                    },
                    t._id
                  );
                },
              },
            ],
            d = Object(a.useRef)(),
            j = (function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            })(t);
          return n
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h2', { children: 'Internal Training List' }),
                  t.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(Vr.a, {
                            columns: l,
                            actionRef: d,
                            request: function (e, t, n) {
                              var a = j;
                              return (
                                e &&
                                  Object.keys(e).length > 0 &&
                                  (a = a.filter(function (t) {
                                    return Object.keys(e).every(function (n) {
                                      if (!e[n]) return !0;
                                      if ('pageSize' == n || 'current' == n)
                                        return !0;
                                      if ('all' == e[n]) return !0;
                                      var a = t[n];
                                      if ('user' == n)
                                        a = ''
                                          .concat(t.user.first_name, ' ')
                                          .concat(t.user.last_name);
                                      else if ('department' == n)
                                        a = ''.concat(t.department.name);
                                      else {
                                        if ('startTime' == n)
                                          return (
                                            ja()(t.fromDate).diff(ja()(e[n])) >=
                                            0
                                          );
                                        if ('endTime' == n)
                                          return (
                                            ja()(t.toDate).diff(
                                              ja()(e[n]),
                                              'days'
                                            ) <= 0
                                          );
                                      }
                                      return (
                                        !a ||
                                        -1 !=
                                          a.search(
                                            new RegExp('.*' + e[n] + '.*', 'gi')
                                          )
                                      );
                                    });
                                  })),
                                Promise.resolve({ data: a, success: !0 })
                              );
                            },
                            rowKey: '_id',
                            pagination: { pageSize: 10, showQuickJumper: !0 },
                            search: { labelWidth: 'auto' },
                            dateFormatter: 'string',
                            toolbar: {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            },
                          }),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              });
        },
        ps =
          (n(969),
          function (e) {
            e.socket;
            var t = e.user,
              n = Ia()(),
              r = Object(i.c)(function (e) {
                return e.trainings;
              }),
              c = r.isLoading,
              s = r.training,
              o = Object(i.b)(),
              l = Object(Ca.g)(),
              u = Object(Ca.h)().id;
            Object(a.useEffect)(
              function () {
                o(
                  (function (e) {
                    return (function () {
                      var t = Object(W.a)(
                        K.a.mark(function t(n) {
                          var a, r;
                          return K.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      n({ type: cn }),
                                      (t.next = 4),
                                      _e(e)
                                    );
                                  case 4:
                                    (a = t.sent),
                                      (r = a.data),
                                      n({ type: rn, payload: r }),
                                      n({ type: sn }),
                                      (t.next = 13);
                                    break;
                                  case 10:
                                    (t.prev = 10),
                                      (t.t0 = t.catch(0)),
                                      n({ type: on, error: t.t0 });
                                  case 13:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(u)
                );
              },
              [u]
            );
            var d,
              j = function (e) {
                o(
                  (function (e, t) {
                    return (function () {
                      var n = Object(W.a)(
                        K.a.mark(function n(a) {
                          var r, c;
                          return K.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.prev = 0),
                                      a({ type: cn }),
                                      (n.next = 4),
                                      De(e, t)
                                    );
                                  case 4:
                                    (r = n.sent),
                                      (c = r.data),
                                      a({ type: un, payload: c }),
                                      a({ type: sn }),
                                      (n.next = 13);
                                    break;
                                  case 10:
                                    (n.prev = 10),
                                      (n.t0 = n.catch(0)),
                                      a({ type: on, error: n.t0 });
                                  case 13:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })();
                  })(u, {
                    user_id: e,
                    user_name: ''.concat(t.first_name, ' ').concat(t.last_name),
                  })
                );
              },
              b = function (e) {
                o(
                  (function (e, t) {
                    return (function () {
                      var n = Object(W.a)(
                        K.a.mark(function n(a) {
                          var r, c;
                          return K.a.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.prev = 0),
                                      a({ type: cn }),
                                      (n.next = 4),
                                      we(e, t)
                                    );
                                  case 4:
                                    (r = n.sent),
                                      (c = r.data),
                                      a({ type: dn, payload: c }),
                                      a({ type: sn }),
                                      (n.next = 13);
                                    break;
                                  case 10:
                                    (n.prev = 10),
                                      (n.t0 = n.catch(0)),
                                      a({ type: on, error: n.t0 });
                                  case 13:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })();
                  })(u, { user_id: e })
                );
              },
              m = function (e) {
                o(
                  ia(
                    u,
                    Object(p.a)(
                      Object(p.a)({}, s),
                      {},
                      {
                        status: e,
                        approver: t._id,
                        user_name: ''
                          .concat(t.first_name, ' ')
                          .concat(t.last_name),
                      }
                    )
                  )
                );
              },
              O = function (e, n) {
                var a = s.attendants.map(function (t) {
                  return t.user._id === e ? { user: e, status: n } : t;
                });
                o(
                  ia(
                    u,
                    Object(p.a)(
                      Object(p.a)({}, s),
                      {},
                      {
                        approver: t._id,
                        user_name: ''
                          .concat(t.first_name, ' ')
                          .concat(t.last_name),
                        attendants: a,
                        extra: { user: e, status: n },
                      }
                    )
                  )
                );
              };
            return s
              ? c
                ? Object(_a.jsx)(Da, {})
                : Object(_a.jsxs)(_a.Fragment, {
                    children: [
                      Object(_a.jsxs)(H.b, {
                        style: { marginBottom: 16 },
                        title: 'Training Info',
                        bordered: !0,
                        layout: n.md ? 'horizontal' : 'vertical',
                        column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                        children: [
                          Object(_a.jsx)(H.b.Item, {
                            label: 'Training Type',
                            span: 3,
                            children: s.trainingType,
                          }),
                          'External' == s.trainingType
                            ? Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Requester Name',
                                    span: 3,
                                    children: ''
                                      .concat(s.user.first_name, ' ')
                                      .concat(s.user.last_name),
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Requester Department',
                                    span: 3,
                                    children: ''.concat(s.department.name),
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Organizer',
                                    span: 3,
                                    children: s.organizer,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Course Name',
                                    span: 3,
                                    children: s.title,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Reason for Attending',
                                    span: 3,
                                    children: s.description,
                                  }),
                                ],
                              })
                            : Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Organizer',
                                    span: 3,
                                    children: s.organizer,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Title',
                                    span: 3,
                                    children: s.title,
                                  }),
                                  Object(_a.jsx)(H.b.Item, {
                                    label: 'Description',
                                    span: 3,
                                    children: s.description,
                                  }),
                                ],
                              }),
                          Object(_a.jsx)(H.b.Item, {
                            label: 'Start Date',
                            span: 2,
                            children: ja()(s.fromDate).format('YYYY-MM-DD'),
                          }),
                          Object(_a.jsx)(H.b.Item, {
                            label: 'End Date',
                            span: 2,
                            children: ja()(s.toDate).format('YYYY-MM-DD'),
                          }),
                          Object(_a.jsx)(H.b.Item, {
                            label: 'Time',
                            span: 3,
                            children: ''
                              .concat(s.fromTime, ' - ')
                              .concat(s.toTime),
                          }),
                          Object(_a.jsx)(H.b.Item, {
                            label: 'Total Duration',
                            span: 3,
                            children:
                              ((d = s.duration),
                              ja.a.duration(d, 'hours').asDays() >= 1
                                ? Math.floor(d) +
                                  ja.a
                                    .utc(
                                      ja.a.duration(d, 'hours').asMilliseconds()
                                    )
                                    .format(' [hours] mm [minutes]')
                                : ja.a
                                    .utc(
                                      ja.a.duration(d, 'hours').asMilliseconds()
                                    )
                                    .format('H [hours] mm [minutes]')),
                          }),
                          'Internal' == s.trainingType
                            ? Object(_a.jsx)(H.b.Item, {
                                label: 'Attendants',
                                span: 3,
                                children:
                                  0 != s.attendants.length
                                    ? Object(_a.jsx)(_a.Fragment, {
                                        children: Object(_a.jsx)(Ja.b, {
                                          size: 'small',
                                          split: 'true',
                                          dataSource: s.attendants,
                                          renderItem: function (e) {
                                            return Object(_a.jsx)(Ja.b.Item, {
                                              children: Object(_a.jsxs)(y.b, {
                                                size: 'large',
                                                children: [
                                                  ''
                                                    .concat(
                                                      e.user.first_name,
                                                      ' '
                                                    )
                                                    .concat(e.user.last_name),
                                                  Object(_a.jsx)(Ua.a, {
                                                    status:
                                                      'Pending' == e.status
                                                        ? 'processing'
                                                        : 'Approved' == e.status
                                                        ? 'success'
                                                        : 'error',
                                                    text: e.status,
                                                  }),
                                                  'admin' == t.roles.name &&
                                                    'Pending' == e.status &&
                                                    Object(_a.jsxs)(
                                                      _a.Fragment,
                                                      {
                                                        children: [
                                                          Object(_a.jsx)(q.a, {
                                                            className:
                                                              'btn-success',
                                                            onClick:
                                                              function () {
                                                                return O(
                                                                  e.user._id,
                                                                  'Approved'
                                                                );
                                                              },
                                                            children: 'Approve',
                                                          }),
                                                          Object(_a.jsx)(q.a, {
                                                            danger: !0,
                                                            onClick:
                                                              function () {
                                                                return O(
                                                                  e.user._id,
                                                                  'Rejected'
                                                                );
                                                              },
                                                            children: 'Reject',
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                ],
                                              }),
                                            });
                                          },
                                        }),
                                      })
                                    : Object(_a.jsx)('div', {
                                        children: 'No data',
                                      }),
                              })
                            : Object(_a.jsx)(H.b.Item, {
                                label: 'Course Fee',
                                span: 3,
                                children: 'RM '.concat(s.fee),
                              }),
                          Object(_a.jsx)(H.b.Item, {
                            label: 'Supporting Documents',
                            span: 3,
                            children:
                              0 != s.attachments.length
                                ? Object(_a.jsx)(_a.Fragment, {
                                    children: Object(_a.jsx)(Dr.a, {
                                      className: 'showFiles',
                                      defaultFileList: function () {
                                        var e;
                                        return u
                                          ? (null === s ||
                                            void 0 === s ||
                                            null === (e = s.attachments) ||
                                            void 0 === e
                                              ? void 0
                                              : e.map(function (e) {
                                                  return {
                                                    uid: e.fileId,
                                                    name: e.fileName,
                                                    status: 'done',
                                                    url: e.filePath,
                                                  };
                                                })) || []
                                          : null;
                                      },
                                      showUploadList: {
                                        showDownloadIcon: !0,
                                        showRemoveIcon: !1,
                                      },
                                    }),
                                  })
                                : Object(_a.jsx)('div', { children: 'None' }),
                          }),
                          'External' == s.trainingType &&
                            Object(_a.jsx)(H.b.Item, {
                              label: 'Status',
                              span: 3,
                              children: Object(_a.jsx)(Ua.a, {
                                status:
                                  'Pending' == s.status
                                    ? 'processing'
                                    : 'Approved' == s.status
                                    ? 'success'
                                    : 'error',
                                text: s.status,
                              }),
                            }),
                        ],
                      }),
                      Object(_a.jsx)('br', {}),
                      Object(_a.jsx)('br', {}),
                      Object(_a.jsx)('br', {}),
                      Object(_a.jsxs)(y.b, {
                        children: [
                          Object(_a.jsx)(q.a, {
                            onClick: function () {
                              return l(-1);
                            },
                            children: 'Back',
                          }),
                          !s.attendants.some(function (e) {
                            return e.user._id === t._id;
                          }) &&
                          'Internal' == s.trainingType &&
                          ja()(s.fromDate) > ja()()
                            ? Object(_a.jsx)(_a.Fragment, {
                                children: Object(_a.jsx)(q.a, {
                                  type: 'success',
                                  onClick: function () {
                                    return j(t._id);
                                  },
                                  children: 'Join Training',
                                }),
                              })
                            : 'Internal' == s.trainingType &&
                              ja()(s.fromDate) > ja()()
                            ? Object(_a.jsx)(_a.Fragment, {
                                children: Object(_a.jsx)(q.a, {
                                  type: 'primary',
                                  danger: !0,
                                  onClick: function () {
                                    return b(t._id);
                                  },
                                  children: 'Cancel Attendance',
                                }),
                              })
                            : s.user._id != t._id &&
                              'External' == s.trainingType &&
                              'Pending' == s.status &&
                              Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)(q.a, {
                                    type: 'success',
                                    onClick: function () {
                                      return m('Approved');
                                    },
                                    children: 'Approve',
                                  }),
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    danger: !0,
                                    onClick: function () {
                                      return m('Rejected');
                                    },
                                    children: 'Reject',
                                  }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  })
              : null;
          }),
        ms = Or.a.TextArea,
        Os =
          (Tr.a.RangePicker,
          _r.a.Option,
          L.a.Text,
          function (e) {
            var t = e.user,
              n = Object(Ca.h)().id,
              r = Object(Ca.g)(),
              c = JSON.parse(localStorage.getItem('profile')).result,
              s = Object(i.c)(function (e) {
                return e.trainings;
              }),
              o = (s.isLoading, s.training),
              l = mr.a.useForm(),
              u = Object(m.a)(l, 1)[0],
              d = Object(a.useState)(null),
              j = Object(m.a)(d, 2),
              b = (j[0], j[1]),
              p = Object(i.b)(),
              O = (function () {
                var e = Object(W.a)(
                  K.a.mark(function e(n) {
                    var a, s, i, o, l, u, d, j, O, f, h;
                    return K.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((b(null), (a = new FormData()), n.upload)) {
                              s = Object(Ea.a)(n.upload);
                              try {
                                for (s.s(); !(i = s.n()).done; )
                                  (o = i.value).originFileObj &&
                                    a.append('files', o.originFileObj);
                              } catch (x) {
                                s.e(x);
                              } finally {
                                s.f();
                              }
                            }
                            return (
                              (l = n.date),
                              (u = l[0]),
                              (d = l[1]),
                              (j = n.time),
                              (O = j[0]),
                              (f = j[1]),
                              (h = {
                                user_name: ''
                                  .concat(t.first_name, ' ')
                                  .concat(t.last_name),
                                user: c._id,
                                department: c.department._id,
                                organizer: n.organizer,
                                title: n.title,
                                description: n.description,
                                fromDate: u.format('YYYY-MM-DD'),
                                toDate: d.format('YYYY-MM-DD'),
                                fromTime: O.format('HH:mm'),
                                toTime: f.format('HH:mm'),
                                duration: (
                                  ja.a.duration(f.diff(O)).as('hours') *
                                  (ja.a.duration(d.diff(u)).as('days') + 1)
                                ).toFixed(2),
                                trainingType: 'External',
                                status: 'Pending',
                                fee: n.fee,
                              }),
                              Object.entries(h).forEach(function (e) {
                                var t = Object(m.a)(e, 2),
                                  n = t[0],
                                  r = t[1];
                                a.append(n, r);
                              }),
                              (e.next = 13),
                              p(ca(a))
                            );
                          case 13:
                            pr.a.success({
                              content:
                                'Request successfully submitted. You can check request status at Training History.',
                              onOk: function () {
                                r('/training/home');
                              },
                            });
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return Object(_a.jsxs)(_a.Fragment, {
              children: [
                Object(_a.jsx)(L.a.Title, {
                  level: 2,
                  style: { textAlign: 'center' },
                  children: 'External Training Request',
                }),
                Object(_a.jsxs)(mr.a, {
                  form: u,
                  name: 'basic',
                  labelCol: { sm: { span: 8 } },
                  wrapperCol: { sm: { span: 8 } },
                  onFinish: O,
                  autoComplete: 'off',
                  children: [
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Course Name',
                      name: 'title',
                      rules: [{ required: !0, whitespace: !0 }],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter course name',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Organizer',
                      name: 'organizer',
                      rules: [{ required: !0, whitespace: !0 }],
                      children: Object(_a.jsx)(Or.a, {
                        placeholder: 'Please enter organizer',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Reason for attending',
                      name: 'description',
                      rules: [{ required: !0, whitespace: !0 }],
                      children: Object(_a.jsx)(ms, {
                        rows: 4,
                        placeholder: 'Please enter reason for attending',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Date',
                      name: 'date',
                      rules: [{ required: !0 }],
                      children: Object(_a.jsx)(Tr.a.RangePicker, {
                        style: { width: '100%' },
                        disabledDate: function (e) {
                          return e && e < ja()().endOf('day');
                        },
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Time',
                      name: 'time',
                      rules: [{ required: !0 }],
                      children: Object(_a.jsx)(us.a.RangePicker, {
                        style: { width: '100%' },
                        format: 'HH:mm',
                        minuteStep: 15,
                        defaultValue: ja()('00:00:00', 'HH:mm:ss'),
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      label: 'Course Fee(RM)',
                      name: 'fee',
                      rules: [{ required: !0 }],
                      children: Object(_a.jsx)(Qr.a, {
                        min: 0,
                        style: { width: '100%' },
                        placeholder: 'Please enter course fee',
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      name: 'upload',
                      label: 'Supporting Documents',
                      getValueFromEvent: function (e) {
                        return Array.isArray(e) ? e : e && e.fileList;
                      },
                      rules: [
                        {
                          required: !0,
                          message:
                            'Please provide documents for workshop details!',
                        },
                      ],
                      children: Object(_a.jsx)(Dr.a.Dragger, {
                        name: 'logo',
                        listType: 'picture',
                        beforeUpload: function (e) {
                          return !1;
                        },
                        customRequest: function (e) {
                          e.file;
                          var t = e.onSuccess;
                          setTimeout(function () {
                            t('ok');
                          }, 0);
                        },
                        defaultFileList: function () {
                          var e;
                          return n
                            ? (null === o ||
                              void 0 === o ||
                              null === (e = o.attachments) ||
                              void 0 === e
                                ? void 0
                                : e.map(function (e) {
                                    return {
                                      uid: e.fileId,
                                      name: e.fileName,
                                      status: 'done',
                                      url: e.filePath,
                                    };
                                  })) || []
                            : null;
                        },
                        showUploadList: {
                          showDownloadIcon: !0,
                          downloadIcon: function (e) {
                            return 'done' == e.status
                              ? Object(_a.jsx)(wr.a, {})
                              : Object(_a.jsx)(_a.Fragment, {});
                          },
                          showRemoveIcon: !0,
                          removeIcon: function (e) {
                            return 'done' == e.status
                              ? Object(_a.jsx)(_a.Fragment, {})
                              : Object(_a.jsx)(Ir.a, {});
                          },
                        },
                        children: Object(_a.jsx)(q.a, {
                          icon: Object(_a.jsx)(kr.a, {}),
                          children: 'Click to upload',
                        }),
                      }),
                    }),
                    Object(_a.jsx)(mr.a.Item, {
                      wrapperCol: { sm: { offset: 8 } },
                      children: Object(_a.jsx)(q.a, {
                        type: 'primary',
                        htmlType: 'submit',
                        children: 'Submit',
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
        fs = function () {
          var e = Object(i.c)(function (e) {
              return e.trainings;
            }),
            t = e.trainings,
            n = e.isLoading,
            r = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            c = JSON.parse(localStorage.getItem('profile')).result,
            s = (Object(Ca.g)(), Object(i.b)());
          Object(a.useEffect)(
            function () {
              s(sa(c.roles.name, c._id, c.department.name)), s(zr());
            },
            [s]
          );
          var o = [];
          r.forEach(function (e) {
            o.push({ text: e.name, value: e.name });
          });
          var l = [
              {
                title: 'Requester Name',
                dataIndex: 'user',
                key: 'user',
                valueType: 'text',
                render: function (e, t) {
                  return ''.concat(e.first_name, ' ').concat(e.last_name);
                },
              },
              {
                title: 'Requester Department',
                dataIndex: ['department', 'name'],
                key: 'department',
                hideInSearch: !0,
                filters: o,
                onFilter: function (e, t) {
                  return 0 === t.department.name.indexOf(e);
                },
              },
              {
                title: 'Organizer',
                dataIndex: 'organizer',
                key: 'organizer',
                valueType: 'text',
              },
              { title: 'Title', dataIndex: 'title', key: 'title' },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                hideInSearch: !0,
                render: function (e, t) {
                  return ''.concat(t.fromTime, ' - ').concat(t.toTime);
                },
              },
              {
                title: 'Total Duration',
                dataIndex: 'duration',
                key: 'duration',
                render: function (e, t) {
                  return (
                    (n = t.duration),
                    ja.a.duration(n, 'hours').asDays() >= 1
                      ? Math.floor(n) +
                        ja.a
                          .utc(ja.a.duration(n, 'hours').asMilliseconds())
                          .format(' [hours] mm [minutes]')
                      : ja.a
                          .utc(ja.a.duration(n, 'hours').asMilliseconds())
                          .format('H [hours] mm [minutes]')
                  );
                  var n;
                },
                hideInSearch: !0,
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                hideInSearch: !0,
                filters: [
                  { text: 'Pending', value: 'Pending' },
                  { text: 'Approved', value: 'Approved' },
                  { text: 'Rejected', value: 'Rejected' },
                ],
                onFilter: function (e, t) {
                  return 0 === t.status.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(Ua.a, {
                    status:
                      'Pending' == t.status
                        ? 'processing'
                        : 'Approved' == t.status
                        ? 'success'
                        : 'error',
                    text: t.status,
                  });
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsx)(
                    y.b,
                    {
                      size: 'middle',
                      children: Object(_a.jsx)(G.b, {
                        to: '/training/view/'.concat(t._id),
                        children: 'View',
                      }),
                    },
                    t._id
                  );
                },
              },
            ],
            d = Object(a.useRef)(),
            j = (function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            })(t);
          return n
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h2', {
                    children: 'Received External Training Requests',
                  }),
                  t.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(Vr.a, {
                            columns: l,
                            actionRef: d,
                            request: function (e, t, n) {
                              var a = j;
                              return (
                                e &&
                                  Object.keys(e).length > 0 &&
                                  (a = a.filter(function (t) {
                                    return Object.keys(e).every(function (n) {
                                      if (!e[n]) return !0;
                                      if ('pageSize' == n || 'current' == n)
                                        return !0;
                                      if ('all' == e[n]) return !0;
                                      var a = t[n];
                                      if ('user' == n)
                                        a = ''
                                          .concat(t.user.first_name, ' ')
                                          .concat(t.user.last_name);
                                      else if ('department' == n)
                                        a = ''.concat(t.department.name);
                                      else {
                                        if ('startTime' == n)
                                          return (
                                            ja()(t.fromDate).diff(ja()(e[n])) >=
                                            0
                                          );
                                        if ('endTime' == n)
                                          return (
                                            ja()(t.toDate).diff(
                                              ja()(e[n]),
                                              'days'
                                            ) <= 0
                                          );
                                      }
                                      return (
                                        !a ||
                                        -1 !=
                                          a.search(
                                            new RegExp('.*' + e[n] + '.*', 'gi')
                                          )
                                      );
                                    });
                                  })),
                                Promise.resolve({ data: a, success: !0 })
                              );
                            },
                            rowKey: '_id',
                            pagination: { pageSize: 10, showQuickJumper: !0 },
                            search: { labelWidth: 'auto' },
                            dateFormatter: 'string',
                            toolbar: {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            },
                          }),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              });
        },
        hs = function (e) {
          e.socket;
          var t = e.user,
            n = Object(i.c)(function (e) {
              return e.trainings;
            }),
            r = n.trainingHistory,
            c = n.extTrainings,
            s = n.isLoading,
            o = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            l = (Object(Ca.g)(), Object(i.b)());
          Object(a.useEffect)(
            function () {
              var e;
              l(
                ((e = t._id),
                (function () {
                  var t = Object(W.a)(
                    K.a.mark(function t(n) {
                      var a, r;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  n({ type: cn }),
                                  (t.next = 4),
                                  Ee(e)
                                );
                              case 4:
                                (a = t.sent),
                                  (r = a.data),
                                  n({ type: pn, payload: r }),
                                  n({ type: sn }),
                                  (t.next = 13);
                                break;
                              case 10:
                                (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  n({ type: on, error: t.t0 });
                              case 13:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              ),
                l(
                  (function (e) {
                    return (function () {
                      var t = Object(W.a)(
                        K.a.mark(function t(n) {
                          var a, r;
                          return K.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      n({ type: cn }),
                                      (t.next = 4),
                                      Ce(e)
                                    );
                                  case 4:
                                    (a = t.sent),
                                      (r = a.data),
                                      n({ type: mn, payload: r }),
                                      n({ type: sn }),
                                      (t.next = 13);
                                    break;
                                  case 10:
                                    (t.prev = 10),
                                      (t.t0 = t.catch(0)),
                                      n({ type: on, error: t.t0 });
                                  case 13:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t._id)
                ),
                l(zr());
            },
            [l]
          );
          var d = [],
            j = function (e) {
              return e.filter(function (e) {
                return 'Approved' == e.status;
              }).length;
            },
            b = function (e) {
              return ja.a.duration(e, 'hours').asDays() >= 1
                ? Math.floor(e) +
                    ja.a
                      .utc(ja.a.duration(e, 'hours').asMilliseconds())
                      .format(' [hours] mm [minutes]')
                : ja.a
                    .utc(ja.a.duration(e, 'hours').asMilliseconds())
                    .format('H [hours] mm [minutes]');
            };
          o.forEach(function (e) {
            d.push({ text: e.name, value: e.name });
          });
          var p = [
              {
                title: 'Organizer',
                dataIndex: 'organizer',
                key: 'organizer',
                valueType: 'text',
              },
              { title: 'Title', dataIndex: 'title', key: 'title' },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                hideInSearch: !0,
                render: function (e, t) {
                  return ''.concat(t.fromTime, ' - ').concat(t.toTime);
                },
              },
              {
                title: 'Total Duration',
                dataIndex: 'duration',
                key: 'duration',
                render: function (e, t) {
                  return b(t.duration);
                },
                hideInSearch: !0,
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                filters: [
                  { text: 'Pending', value: 'Pending' },
                  { text: 'Approved', value: 'Approved' },
                  { text: 'Rejected', value: 'Rejected' },
                ],
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.status.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(Ua.a, {
                    status:
                      'Pending' == t.status
                        ? 'processing'
                        : 'Approved' == t.status
                        ? 'success'
                        : 'error',
                    text: t.status,
                  });
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsx)(
                    y.b,
                    {
                      size: 'middle',
                      children: Object(_a.jsx)(G.b, {
                        to: '/training/view/'.concat(t._id),
                        children: 'View',
                      }),
                    },
                    t._id
                  );
                },
              },
            ],
            m = [
              {
                title: 'Organizer',
                dataIndex: 'organizer',
                key: 'organizer',
                valueType: 'text',
              },
              { title: 'Title', dataIndex: 'title', key: 'title' },
              {
                title: 'Start Date',
                dataIndex: 'fromDate',
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.fromDate) - ja()(t.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: 'toDate',
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.toDate) - ja()(t.toDate);
                },
                render: function (e, t) {
                  return ja()(t.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                hideInSearch: !0,
                render: function (e, t) {
                  return ''.concat(t.fromTime, ' - ').concat(t.toTime);
                },
              },
              {
                title: 'Total Duration',
                dataIndex: 'duration',
                key: 'duration',
                render: function (e, t) {
                  return b(t.duration);
                },
                hideInSearch: !0,
              },
              {
                title: 'Attendants',
                dataIndex: 'attendants',
                key: 'attendants',
                hideInSearch: !0,
                sorter: function (e, t) {
                  return j(e.attendants) - j(t.attendants);
                },
                render: function (e, t) {
                  return j(t.attendants);
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsx)(
                    y.b,
                    {
                      size: 'middle',
                      children: Object(_a.jsx)(G.b, {
                        to: '/training/view/'.concat(t._id),
                        children: 'View',
                      }),
                    },
                    t._id
                  );
                },
              },
            ],
            O = Object(a.useRef)(),
            f = function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            },
            h = f(c),
            x = f(r);
          return !s && r && c
            ? Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h3', {
                    children: 'My External Training Requests',
                  }),
                  c &&
                    (c.length
                      ? Object(_a.jsxs)(_a.Fragment, {
                          children: [
                            Object(_a.jsx)(u.b, {
                              locale: Gr.a,
                              children: Object(_a.jsx)(Vr.a, {
                                columns: p,
                                actionRef: O,
                                request: function (e, t, n) {
                                  var a = h;
                                  return (
                                    e &&
                                      Object.keys(e).length > 0 &&
                                      (a = a.filter(function (t) {
                                        return Object.keys(e).every(function (
                                          n
                                        ) {
                                          if (!e[n]) return !0;
                                          if ('pageSize' == n || 'current' == n)
                                            return !0;
                                          if ('all' == e[n]) return !0;
                                          var a = t[n];
                                          if ('user' == n)
                                            a = ''
                                              .concat(t.user.first_name, ' ')
                                              .concat(t.user.last_name);
                                          else if ('department' == n)
                                            a = ''.concat(t.department.name);
                                          else {
                                            if ('startTime' == n)
                                              return (
                                                ja()(t.fromDate).diff(
                                                  ja()(e[n])
                                                ) >= 0
                                              );
                                            if ('endTime' == n)
                                              return (
                                                ja()(t.toDate).diff(
                                                  ja()(e[n]),
                                                  'days'
                                                ) <= 0
                                              );
                                          }
                                          return (
                                            !a ||
                                            -1 !=
                                              a.search(
                                                new RegExp(
                                                  '.*' + e[n] + '.*',
                                                  'gi'
                                                )
                                              )
                                          );
                                        });
                                      })),
                                    Promise.resolve({ data: a, success: !0 })
                                  );
                                },
                                rowKey: '_id',
                                pagination: {
                                  pageSize: 5,
                                  showQuickJumper: !0,
                                },
                                search: {
                                  layout: 'vertical',
                                  defaultCollapsed: !0,
                                  span: 6,
                                },
                                dateFormatter: 'string',
                                toolbar: {
                                  title: 'Tips:',
                                  tooltip:
                                    'Use the search bar above or filter icons on the columns for easy record finding',
                                },
                                toolBarRender: function () {
                                  return [
                                    Object(_a.jsx)(y.b, {
                                      children: Object(_a.jsx)(q.a, {
                                        type: 'primary',
                                        shape: 'round',
                                        children: Object(_a.jsx)(G.b, {
                                          to: '/training/submitExt',
                                          children:
                                            'To External Training Application',
                                        }),
                                      }),
                                    }),
                                  ];
                                },
                              }),
                            }),
                            Object(_a.jsx)('br', {}),
                          ],
                        })
                      : Object(_a.jsx)(z.a, {})),
                  Object(_a.jsx)('h3', {
                    children: 'My Attending Internal Training',
                  }),
                  r.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(Vr.a, {
                            columns: m,
                            actionRef: O,
                            request: function (e, t, n) {
                              var a = x;
                              return (
                                e &&
                                  Object.keys(e).length > 0 &&
                                  (a = a.filter(function (t) {
                                    return Object.keys(e).every(function (n) {
                                      if (!e[n]) return !0;
                                      if ('pageSize' == n || 'current' == n)
                                        return !0;
                                      if ('all' == e[n]) return !0;
                                      var a = t[n];
                                      if ('user' == n)
                                        a = ''
                                          .concat(t.user.first_name, ' ')
                                          .concat(t.user.last_name);
                                      else if ('department' == n)
                                        a = ''.concat(t.department.name);
                                      else {
                                        if ('startTime' == n)
                                          return (
                                            ja()(t.fromDate).diff(ja()(e[n])) >=
                                            0
                                          );
                                        if ('endTime' == n)
                                          return (
                                            ja()(t.toDate).diff(
                                              ja()(e[n]),
                                              'days'
                                            ) <= 0
                                          );
                                      }
                                      return (
                                        !a ||
                                        -1 !=
                                          a.search(
                                            new RegExp('.*' + e[n] + '.*', 'gi')
                                          )
                                      );
                                    });
                                  })),
                                Promise.resolve({ data: a, success: !0 })
                              );
                            },
                            rowKey: '_id',
                            pagination: { pageSize: 5, showQuickJumper: !0 },
                            dateFormatter: 'string',
                            toolbar: {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            },
                          }),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              })
            : Object(_a.jsx)(Da, {});
        },
        xs = n(555),
        ys = n(1027),
        vs = n(541),
        gs = (n(76), n(1029)),
        Ts = n(540),
        _s = n(539),
        Ds =
          (n(970),
          function () {
            JSON.parse(localStorage.getItem('profile')).result;
            for (
              var e = Object(i.c)(function (e) {
                  return e.leaves;
                }),
                t = e.leaves,
                n = e.isLoading,
                r = e.leaveCount,
                c = Object(i.c)(function (e) {
                  return e.users;
                }).users,
                s = Object(i.c)(function (e) {
                  return e.trainings;
                }).trainingCount,
                o = Object(i.c)(function (e) {
                  return e.depts;
                }).depts,
                l = Object(i.c)(function (e) {
                  return e.leaveTypes;
                }).leaveTypes,
                u = Object(i.b)(),
                d = (Object(Ca.g)(), 0),
                j = function (e, n) {
                  var a = 0;
                  return (
                    t.forEach(function (t) {
                      var r = new Date(t.fromDate);
                      'Approved' == t.status &&
                        t.leaveType._id == n &&
                        r.getMonth() == ja()().add(e, 'months').month() &&
                        (d = Math.max(++a, d));
                    }),
                    a
                  );
                },
                b = [],
                m = -2;
              m < 4;
              m++
            ) {
              var O = { name: ja()().add(m, 'months').format('MMMM') };
              l.forEach(function (e) {
                var t = {};
                (t[e.name] = j(m, e._id)),
                  (O = Object(p.a)(Object(p.a)({}, O), t));
              }),
                b.push(O);
            }
            Object(a.useEffect)(
              function () {
                u(Xn()),
                  u(
                    (function () {
                      var e = Object(W.a)(
                        K.a.mark(function e(t) {
                          var n, a;
                          return K.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: cn }),
                                      (e.next = 4),
                                      Q.get('/training/count/dept')
                                    );
                                  case 4:
                                    (n = e.sent),
                                      (a = n.data),
                                      t({ type: hn, payload: a }),
                                      t({ type: sn }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(0)),
                                      t({ type: on, error: e.t0 });
                                  case 13:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                  u(
                    (function () {
                      var e = Object(W.a)(
                        K.a.mark(function e(t) {
                          var n, a;
                          return K.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: We }),
                                      (e.next = 4),
                                      Q.get('/leaves/count/dept')
                                    );
                                  case 4:
                                    (n = e.sent),
                                      (a = n.data),
                                      t({ type: Nt, payload: a }),
                                      t({ type: Je }),
                                      (e.next = 13);
                                    break;
                                  case 10:
                                    (e.prev = 10),
                                      (e.t0 = e.catch(0)),
                                      t({ type: Qe, error: e.t0 });
                                  case 13:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 10]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                  u(Nr()),
                  u(zr()),
                  u(oa());
              },
              [u]
            );
            gs.a.Divider, c.slice(0, 3);
            return !n && t && r
              ? Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Admin Dashboard',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 12,
                          children: Object(_a.jsx)(Y.a, {
                            bordered: !0,
                            children: Object(_a.jsx)(xs.a, {
                              title: 'Users Count',
                              value: c.length,
                              prefix: Object(_a.jsx)(_s.a, {}),
                            }),
                          }),
                        }),
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 12,
                          children: Object(_a.jsx)(Y.a, {
                            bordered: !0,
                            children: Object(_a.jsx)(xs.a, {
                              title: 'Departments Count',
                              value: o.length,
                              prefix: Object(_a.jsx)(Ts.a, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(_a.jsx)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 24,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsxs)('div', {
                              style: { textAlign: 'right' },
                              children: [
                                Object(_a.jsx)(q.a, {
                                  type: 'primary',
                                  shape: 'round',
                                  style: { margin: '10px' },
                                  children: Object(_a.jsx)(G.b, {
                                    to: '/calendar',
                                    children: 'View on Calendar',
                                  }),
                                }),
                                Object(_a.jsx)(q.a, {
                                  type: 'primary',
                                  shape: 'round',
                                  style: { margin: '10px' },
                                  children: Object(_a.jsx)(G.b, {
                                    to: '/leaves/list',
                                    children: 'More Details...',
                                  }),
                                }),
                              ],
                            }),
                            Object(_a.jsx)('h3', {
                              children:
                                'Leaves Taken by Month for All Employees',
                            }),
                            Object(_a.jsx)(ba.a, {
                              minHeight: 300,
                              children: Object(_a.jsxs)(ys.a, {
                                width: '100%',
                                height: '100%',
                                data: b,
                                margin: {
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                },
                                children: [
                                  Object(_a.jsx)(ha.a, { dataKey: 'name' }),
                                  Object(_a.jsx)(fa.a, {
                                    domain: [0, d + 2],
                                    allowDecimals: !1,
                                  }),
                                  Object(_a.jsx)(xa.a, {}),
                                  Object(_a.jsx)(ga.a, {
                                    wrapperStyle: { top: 0, left: 70 },
                                  }),
                                  l.map(function (e, t) {
                                    return Object(_a.jsx)(vs.a, {
                                      type: 'monotone',
                                      dataKey: e.name,
                                      stroke: e.color,
                                      activeDot: { r: 8 },
                                    });
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      children: 'Overview',
                    }),
                    Object(_a.jsxs)(N.a, {
                      gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                      children: [
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 12,
                          children: Object(_a.jsxs)(Y.a, {
                            bordered: !0,
                            children: [
                              Object(_a.jsx)('b', {
                                children: 'Leaves Taken by Department:',
                              }),
                              Object(_a.jsxs)(V.a, {
                                dataSource: r,
                                rowKey: '_id',
                                children: [
                                  Object(_a.jsx)(V.a.Column, {
                                    title: 'Name',
                                    dataIndex: ['department', 'name'],
                                    dataKey: ['department', 'name'],
                                  }),
                                  Object(_a.jsx)(V.a.Column, {
                                    title: 'Leaves Taken',
                                    dataIndex: 'count',
                                    dataKey: 'count',
                                    defaultSortOrder: 'descend',
                                    sorter: function (e, t) {
                                      return e.count - t.count;
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(_a.jsx)(F.a, {
                          className: 'gutter-row',
                          xs: 24,
                          sm: 12,
                          children: Object(_a.jsxs)(Y.a, {
                            bordered: !0,
                            children: [
                              Object(_a.jsx)('b', {
                                children:
                                  'External Trainings Attended by Department:',
                              }),
                              Object(_a.jsxs)(V.a, {
                                dataSource: s,
                                rowKey: '_id',
                                children: [
                                  Object(_a.jsx)(V.a.Column, {
                                    title: 'Name',
                                    dataIndex: ['department', 'name'],
                                    dataKey: ['department', 'name'],
                                  }),
                                  Object(_a.jsx)(V.a.Column, {
                                    title: 'Trainings Organized',
                                    dataIndex: 'count',
                                    dataKey: 'count',
                                    defaultSortOrder: 'descend',
                                    sorter: function (e, t) {
                                      return e.count - t.count;
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : Object(_a.jsx)(Da, {});
          }),
        ws = function (e) {
          var t,
            n = e.user,
            r = Ia()(),
            c = Object(i.c)(function (e) {
              return e.leaves;
            }),
            s = c.leaves,
            o = (c.isLoading, c.todayLeaves),
            l = Object(i.c)(function (e) {
              return e.users;
            }).users,
            u = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            d = Object(i.c)(function (e) {
              return e.leaveTypes;
            }).leaveTypes,
            j = _r.a.Option,
            b = Object(i.b)(),
            O = Object(Ca.g)(),
            f = Object(a.useState)(!0),
            h = Object(m.a)(f, 2),
            x = h[0],
            v = h[1],
            g = Object(a.useState)(!1),
            T = Object(m.a)(g, 2),
            _ = T[0],
            D = T[1];
          Object(a.useEffect)(
            function () {
              b(Xn()),
                b(ra()),
                b(oa()),
                b(Mr(n.department._id)).then(function () {
                  v(!1);
                }),
                'admin' == n.roles.name && (D(!0), b(zr()));
            },
            [b]
          );
          t = l.length ? l[0].department._id : n.department._id;
          var w = o.filter(function (e) {
            return e.department._id == t;
          });
          l.sort(function (e, t) {
            return t.completedHours - e.completedHours;
          });
          var I = l.slice(0, 3),
            k = [];
          l.map(function (e) {
            'supervisor' == e.roles.name &&
              k.push(''.concat(e.first_name, ' ').concat(e.last_name));
          });
          for (
            var E = 0,
              C = function (e, n) {
                var a = 0;
                return (
                  s.forEach(function (r) {
                    var c = new Date(r.fromDate);
                    'Approved' == r.status &&
                      r.department._id == t &&
                      r.leaveType._id == n &&
                      c.getMonth() == ja()().add(e, 'months').month() &&
                      (E = Math.max(++a, E));
                  }),
                  a
                );
              },
              A = [],
              S = -2;
            S < 4;
            S++
          ) {
            var R = { name: ja()().add(S, 'months').format('MMMM') };
            d.forEach(function (e) {
              var t = {};
              (t[e.name] = C(S, e._id)),
                (R = Object(p.a)(Object(p.a)({}, R), t));
            }),
              A.push(R);
          }
          return x
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)(pr.a, {
                    title: 'Select Department to View',
                    visible: _,
                    footer: [
                      Object(_a.jsx)(q.a, {
                        onClick: function () {
                          return O(-1);
                        },
                        children: 'Back',
                      }),
                      Object(_a.jsx)(
                        q.a,
                        {
                          form: 'myForm',
                          htmlType: 'submit',
                          children: 'Submit',
                        },
                        'submit'
                      ),
                    ],
                    onCancel: function () {
                      D(!1);
                    },
                    children: Object(_a.jsx)(mr.a, {
                      id: 'myForm',
                      onFinish: function (e) {
                        b(Mr(e.department)), D(!1);
                      },
                      children: Object(_a.jsx)(mr.a.Item, {
                        label: 'Departments',
                        name: 'department',
                        rules: [{ required: !0 }],
                        children: Object(_a.jsx)(_r.a, {
                          placeholder: 'Please choose a department',
                          children: u.map(function (e) {
                            return Object(_a.jsx)(
                              j,
                              { value: e._id, children: e.name },
                              e._id
                            );
                          }),
                        }),
                      }),
                    }),
                  }),
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    children: 'Department Dashboard',
                  }),
                  Object(_a.jsxs)(N.a, {
                    gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                    children: [
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsxs)(H.b, {
                              layout: r.md ? 'horizontal' : 'vertical',
                              title: 'Department Details',
                              bordered: !0,
                              contentStyle: { wordBreak: 'keep-all' },
                              column: { sm: 3, xs: 1 },
                              children: [
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Name',
                                  span: 3,
                                  children: l[0].department.name,
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'Supervisors',
                                  span: 3,
                                  children: Object(_a.jsx)(Ja.b, {
                                    dataSource: k,
                                    renderItem: function (e) {
                                      return Object(_a.jsxs)(Ja.b.Item, {
                                        children: [
                                          Object(_a.jsx)(L.a.Text, {
                                            mark: !0,
                                          }),
                                          ' ',
                                          e,
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                Object(_a.jsx)(H.b.Item, {
                                  label: 'No. of Staff',
                                  span: 3,
                                  children: l.length,
                                }),
                              ],
                            }),
                            'admin' == n.roles.name &&
                              Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  Object(_a.jsx)('br', {}),
                                  Object(_a.jsx)(q.a, {
                                    type: 'primary',
                                    onClick: function () {
                                      D(!0);
                                    },
                                    children: 'Change Departments',
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('div', {
                              style: { textAlign: 'right' },
                              children: Object(_a.jsx)(q.a, {
                                type: 'primary',
                                shape: 'round',
                                children: Object(_a.jsx)(G.b, {
                                  to: '/leaves/list',
                                  children: 'To Leaves',
                                }),
                              }),
                            }),
                            Object(_a.jsx)('h4', {
                              children:
                                'Leaves Taken by Month for Employees in Department',
                            }),
                            Object(_a.jsx)(ba.a, {
                              minHeight: 300,
                              children: Object(_a.jsxs)(ys.a, {
                                width: '100%',
                                height: '100%',
                                data: A,
                                margin: {
                                  top: 5,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                },
                                children: [
                                  Object(_a.jsx)(ha.a, { dataKey: 'name' }),
                                  Object(_a.jsx)(fa.a, {
                                    domain: [0, E + 2],
                                    allowDecimals: !1,
                                  }),
                                  Object(_a.jsx)(xa.a, {}),
                                  Object(_a.jsx)(ga.a, {
                                    wrapperStyle: { top: 0, left: 70 },
                                  }),
                                  d.map(function (e, t) {
                                    return Object(_a.jsx)(vs.a, {
                                      type: 'monotone',
                                      dataKey: e.name,
                                      stroke: e.color,
                                      activeDot: { r: 8 },
                                    });
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    children: 'Department Overview',
                  }),
                  Object(_a.jsxs)(N.a, {
                    gutter: { xs: 8, sm: 16, md: 24, lg: 32 },
                    children: [
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('b', {
                              children: 'Currently on Leave in Department:',
                            }),
                            w &&
                              (w.length
                                ? Object(_a.jsx)(_a.Fragment, {
                                    children: Object(_a.jsxs)(V.a, {
                                      dataSource: w,
                                      rowKey: '_id',
                                      children: [
                                        Object(_a.jsx)(V.a.Column, {
                                          title: 'Name',
                                          dataIndex: 'name',
                                          render: function (e, t) {
                                            return ''
                                              .concat(t.user.first_name, ' ')
                                              .concat(t.user.last_name);
                                          },
                                        }),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Leave Type',
                                            dataIndex: 'leaveType',
                                            render: function (e, t) {
                                              return Object(_a.jsx)(U.a, {
                                                color: e.color,
                                                children:
                                                  ((n = e.code),
                                                  n.charAt(0).toUpperCase() +
                                                    n.slice(1)),
                                              });
                                              var n;
                                            },
                                          },
                                          'leaveType'
                                        ),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Action',
                                            render: function (e, t) {
                                              return Object(_a.jsx)(
                                                y.b,
                                                {
                                                  size: 'middle',
                                                  children: Object(_a.jsx)(
                                                    G.b,
                                                    {
                                                      to: '/leaves/view/'.concat(
                                                        t._id
                                                      ),
                                                      children: 'View',
                                                    }
                                                  ),
                                                },
                                                t._id
                                              );
                                            },
                                          },
                                          'action'
                                        ),
                                      ],
                                    }),
                                  })
                                : Object(_a.jsx)(z.a, {})),
                          ],
                        }),
                      }),
                      Object(_a.jsx)(F.a, {
                        className: 'gutter-row',
                        xs: 24,
                        sm: 12,
                        children: Object(_a.jsxs)(Y.a, {
                          bordered: !0,
                          children: [
                            Object(_a.jsx)('b', {
                              children: 'Top Training Hours Completed:',
                            }),
                            I &&
                              (I.length
                                ? Object(_a.jsx)(_a.Fragment, {
                                    children: Object(_a.jsxs)(V.a, {
                                      dataSource: I,
                                      rowKey: '_id',
                                      children: [
                                        Object(_a.jsx)(V.a.Column, {
                                          title: 'Name',
                                          dataIndex: 'name',
                                          render: function (e, t) {
                                            return ''
                                              .concat(t.first_name, ' ')
                                              .concat(t.last_name);
                                          },
                                        }),
                                        Object(_a.jsx)(
                                          V.a.Column,
                                          {
                                            title: 'Hours Completed',
                                            dataIndex: 'completedHours',
                                            sorter: function (e, t) {
                                              return (
                                                e.completedHours -
                                                t.completedHours
                                              );
                                            },
                                            defaultSortOrder: 'desc',
                                          },
                                          'completedHours'
                                        ),
                                      ],
                                    }),
                                  })
                                : Object(_a.jsx)(z.a, {})),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
        },
        Is = n(1051),
        ks = n(425),
        Es = _r.a.Option,
        Cs = function () {
          var e = Object(a.useState)(!1),
            t = Object(m.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(a.useState)([]),
            s = Object(m.a)(c, 2),
            o = s[0],
            l = s[1],
            u = Object(cc.useForm)(),
            d = Object(m.a)(u, 1)[0],
            j = Object(Ca.h)().id,
            b = Object(i.b)(),
            O = Object(Ca.g)(),
            f = Object(i.c)(function (e) {
              return e.depts;
            }).depts,
            h = Object(i.c)(function (e) {
              return e.policy;
            }),
            x =
              (h.policy,
              h.isLoading,
              Object(i.c)(function (e) {
                return e.leaveTypes;
              }).leaveTypes),
            v = x.filter(function (e) {
              return !o.includes(e._id);
            });
          Object(a.useEffect)(function () {
            g();
          }, []);
          var g = (function () {
              var e = Object(W.a)(
                K.a.mark(function e() {
                  var t, n, a;
                  return K.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return r(!0), (e.next = 3), b(zr());
                        case 3:
                          if (!j) {
                            e.next = 10;
                            break;
                          }
                          return (e.next = 6), b(oa());
                        case 6:
                          return (e.next = 8), b(Zr(j));
                        case 8:
                          (t = e.sent) &&
                            ((n = []),
                            (a = Object(p.a)(
                              Object(p.a)({}, t),
                              {},
                              {
                                lists: t.lists.map(function (e) {
                                  var t = e.leavetype.map(function (e) {
                                    var t = x.find(function (t) {
                                      return t._id == e;
                                    });
                                    return (
                                      n.push(e),
                                      {
                                        key: t._id,
                                        value: t._id,
                                        label: t.name,
                                      }
                                    );
                                  });
                                  return Object(p.a)(
                                    Object(p.a)({}, e),
                                    {},
                                    { leavetype: t }
                                  );
                                }),
                              }
                            )),
                            l(n),
                            d.setFieldsValue(a));
                        case 10:
                          r(!1);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            T = function () {
              var e = d.getFieldValue('lists').reduce(function (e, t) {
                var n;
                return e.concat(
                  null === (n = t.leavetype) || void 0 === n
                    ? void 0
                    : n.map(function (e) {
                        return e.key;
                      })
                );
              }, []);
              l(e);
            };
          return n
            ? Object(_a.jsx)(Er.a, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)(L.a.Title, {
                    level: 2,
                    style: { textAlign: 'center' },
                    children: j ? 'Edit Policy' : 'Create Policy',
                  }),
                  Object(_a.jsx)(N.a, {
                    children: Object(_a.jsx)(F.a, {
                      sm: { offset: 7, span: 10 },
                      children: Object(_a.jsxs)(mr.a, {
                        style: { width: '100%' },
                        form: d,
                        name: 'dynamic_form_nest_item',
                        onFinish: function (e) {
                          var t,
                            n = Object(p.a)(
                              Object(p.a)({}, e),
                              {},
                              {
                                lists: e.lists.map(function (e) {
                                  return Object(p.a)(
                                    Object(p.a)({}, e),
                                    {},
                                    {
                                      leavetype: e.leavetype.map(function (e) {
                                        return e.key;
                                      }),
                                    }
                                  );
                                }),
                              }
                            );
                          j
                            ? (b(
                                (function (e, t) {
                                  return (function () {
                                    var n = Object(W.a)(
                                      K.a.mark(function n(a) {
                                        var r, c;
                                        return K.a.wrap(
                                          function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  return (
                                                    (n.prev = 0),
                                                    a({ type: qn }),
                                                    (n.next = 4),
                                                    Pe(e, t)
                                                  );
                                                case 4:
                                                  (r = n.sent),
                                                    (c = r.data),
                                                    a({ type: Fn, payload: c }),
                                                    a({ type: zn }),
                                                    (n.next = 13);
                                                  break;
                                                case 10:
                                                  (n.prev = 10),
                                                    (n.t0 = n.catch(0)),
                                                    a({
                                                      type: Vn,
                                                      error: n.t0,
                                                    });
                                                case 13:
                                                case 'end':
                                                  return n.stop();
                                              }
                                          },
                                          n,
                                          null,
                                          [[0, 10]]
                                        );
                                      })
                                    );
                                    return function (e) {
                                      return n.apply(this, arguments);
                                    };
                                  })();
                                })(j, n)
                              ),
                              pr.a.success({
                                content: 'Policy updated',
                                onOk: function () {
                                  O('/policy');
                                },
                              }))
                            : (b(
                                ((t = n),
                                (function () {
                                  var e = Object(W.a)(
                                    K.a.mark(function e(n) {
                                      var a, r;
                                      return K.a.wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                return (
                                                  (e.prev = 0),
                                                  n({ type: qn }),
                                                  (e.next = 4),
                                                  (c = t),
                                                  Q.post('/policy', c)
                                                );
                                              case 4:
                                                (a = e.sent),
                                                  (r = a.data),
                                                  n({ type: Nn, payload: r }),
                                                  n({ type: zn }),
                                                  (e.next = 13);
                                                break;
                                              case 10:
                                                (e.prev = 10),
                                                  (e.t0 = e.catch(0)),
                                                  n({ type: Vn, error: e.t0 });
                                              case 13:
                                              case 'end':
                                                return e.stop();
                                            }
                                          var c;
                                        },
                                        e,
                                        null,
                                        [[0, 10]]
                                      );
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })())
                              ),
                              pr.a.success({
                                content: 'Policy created',
                                onOk: function () {
                                  O('/policy');
                                },
                              }));
                        },
                        autoComplete: 'off',
                        children: [
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Name',
                            name: 'name',
                            rules: [
                              { required: !0 },
                              function (e) {
                                var t = e.getFieldValue;
                                return {
                                  validator: function (e, n) {
                                    return t('lists') && t('lists').length
                                      ? Promise.resolve()
                                      : Promise.reject('Please add Policy');
                                  },
                                };
                              },
                            ],
                            children: Object(_a.jsx)(Or.a, {
                              placeholder: 'Please enter policy name',
                            }),
                          }),
                          Object(_a.jsx)(mr.a.Item, {
                            label: 'Departments',
                            name: 'departments',
                            rules: [{ required: !0 }],
                            children: Object(_a.jsx)(_r.a, {
                              allowClear: !0,
                              placeholder: 'Choose department',
                              mode: 'multiple',
                              rules: [{ required: !0 }],
                              children:
                                null === f || void 0 === f
                                  ? void 0
                                  : f.map(function (e) {
                                      return Object(_a.jsx)(
                                        Es,
                                        { value: e._id, children: e.name },
                                        e._id
                                      );
                                    }),
                            }),
                          }),
                          Object(_a.jsx)(mr.a.List, {
                            name: 'lists',
                            children: function (e, t) {
                              var n = t.add,
                                a = t.remove;
                              return Object(_a.jsxs)(_a.Fragment, {
                                children: [
                                  e.map(function (e) {
                                    return Object(_a.jsxs)(
                                      'div',
                                      {
                                        children: [
                                          Object(_a.jsx)(
                                            mr.a.Item,
                                            Object(p.a)(
                                              Object(p.a)({}, e),
                                              {},
                                              {
                                                label: 'Leave Types',
                                                name: [e.name, 'leavetype'],
                                                fieldKey: [
                                                  e.fieldKey,
                                                  'leavetype',
                                                ],
                                                rules: [
                                                  {
                                                    required: !0,
                                                    message:
                                                      'Please choose leave type',
                                                  },
                                                  function (t) {
                                                    var n = t.getFieldValue;
                                                    return {
                                                      validator: function (
                                                        t,
                                                        a
                                                      ) {
                                                        return n([
                                                          'lists',
                                                          e.name,
                                                          'policy',
                                                        ]) &&
                                                          n([
                                                            'lists',
                                                            e.name,
                                                            'policy',
                                                          ]).length
                                                          ? Promise.resolve()
                                                          : Promise.reject(
                                                              'Please add Condition'
                                                            );
                                                      },
                                                    };
                                                  },
                                                ],
                                                children: Object(_a.jsx)(_r.a, {
                                                  allowClear: !0,
                                                  placeholder:
                                                    'Choose leave type',
                                                  mode: 'multiple',
                                                  onChange: T,
                                                  labelInValue: !0,
                                                  optionLabelProp: 'label',
                                                  rules: [{ required: !0 }],
                                                  children:
                                                    null === v || void 0 === v
                                                      ? void 0
                                                      : v.map(function (e) {
                                                          return Object(_a.jsx)(
                                                            Es,
                                                            {
                                                              value: e._id,
                                                              label: e.name,
                                                              children: e.name,
                                                            },
                                                            e._id
                                                          );
                                                        }),
                                                }),
                                              }
                                            )
                                          ),
                                          Object(_a.jsx)(mr.a.Item, {
                                            name: [e.name, 'stacked'],
                                            valuePropName: 'checked',
                                            initialValue: !1,
                                            children: Object(_a.jsx)(Ic.a, {
                                              children: 'Stacked',
                                            }),
                                          }),
                                          Object(_a.jsx)(M.a, {
                                            style: { marginBottom: '50px' },
                                            description:
                                              "If stacked is selected, all 'After' conditions will apply cumulatively. If stacked is not selected, only the highest 'After' condition will apply",
                                            type: 'info',
                                            showIcon: !0,
                                          }),
                                          Object(_a.jsx)(mr.a.List, {
                                            name: [e.name, 'policy'],
                                            children: function (e, t) {
                                              var n = t.add,
                                                a = t.remove;
                                              return Object(_a.jsxs)(
                                                _a.Fragment,
                                                {
                                                  children: [
                                                    e.map(function (e) {
                                                      return Object(_a.jsxs)(
                                                        y.b,
                                                        {
                                                          style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            marginBottom: 8,
                                                          },
                                                          align: 'baseline',
                                                          children: [
                                                            Object(_a.jsx)(
                                                              mr.a.Item,
                                                              Object(p.a)(
                                                                Object(p.a)(
                                                                  {},
                                                                  e
                                                                ),
                                                                {},
                                                                {
                                                                  name: [
                                                                    e.name,
                                                                    'condition1',
                                                                  ],
                                                                  fieldKey: [
                                                                    e.fieldKey,
                                                                    'condition1',
                                                                  ],
                                                                  rules: [
                                                                    {
                                                                      required:
                                                                        !0,
                                                                      message:
                                                                        'Please choose a condition',
                                                                    },
                                                                  ],
                                                                  children:
                                                                    Object(
                                                                      _a.jsxs
                                                                    )(_r.a, {
                                                                      allowClear:
                                                                        !0,
                                                                      placeholder:
                                                                        'Choose a condition',
                                                                      children:
                                                                        [
                                                                          Object(
                                                                            _a.jsx
                                                                          )(
                                                                            Es,
                                                                            {
                                                                              value:
                                                                                'after',
                                                                              children:
                                                                                'After',
                                                                            }
                                                                          ),
                                                                          Object(
                                                                            _a.jsx
                                                                          )(
                                                                            Es,
                                                                            {
                                                                              value:
                                                                                'every',
                                                                              children:
                                                                                'Every',
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }),
                                                                }
                                                              )
                                                            ),
                                                            Object(_a.jsx)(
                                                              mr.a.Item,
                                                              Object(p.a)(
                                                                Object(p.a)(
                                                                  {},
                                                                  e
                                                                ),
                                                                {},
                                                                {
                                                                  name: [
                                                                    e.name,
                                                                    'year',
                                                                  ],
                                                                  fieldKey: [
                                                                    e.fieldKey,
                                                                    'year',
                                                                  ],
                                                                  rules: [
                                                                    {
                                                                      required:
                                                                        !0,
                                                                      message:
                                                                        'Please enter year',
                                                                    },
                                                                  ],
                                                                  children:
                                                                    Object(
                                                                      _a.jsx
                                                                    )(Qr.a, {
                                                                      min: 1,
                                                                      style: {
                                                                        width:
                                                                          '100%',
                                                                      },
                                                                      placeholder:
                                                                        'Please enter years',
                                                                    }),
                                                                }
                                                              )
                                                            ),
                                                            Object(_a.jsx)(
                                                              _a.Fragment,
                                                              {
                                                                children:
                                                                  'years, increase by ',
                                                              }
                                                            ),
                                                            Object(_a.jsx)(
                                                              mr.a.Item,
                                                              Object(p.a)(
                                                                Object(p.a)(
                                                                  {},
                                                                  e
                                                                ),
                                                                {},
                                                                {
                                                                  name: [
                                                                    e.name,
                                                                    'increase',
                                                                  ],
                                                                  fieldKey: [
                                                                    e.fieldKey,
                                                                    'increase',
                                                                  ],
                                                                  rules: [
                                                                    {
                                                                      required:
                                                                        !0,
                                                                      message:
                                                                        'Please enter a number',
                                                                    },
                                                                  ],
                                                                  children:
                                                                    Object(
                                                                      _a.jsx
                                                                    )(Qr.a, {
                                                                      min: 1,
                                                                      style: {
                                                                        width:
                                                                          '100%',
                                                                      },
                                                                      placeholder:
                                                                        'Enter increase count',
                                                                    }),
                                                                }
                                                              )
                                                            ),
                                                            Object(_a.jsx)(
                                                              Is.a,
                                                              {
                                                                onClick:
                                                                  function () {
                                                                    return a(
                                                                      e.name
                                                                    );
                                                                  },
                                                              }
                                                            ),
                                                          ],
                                                        },
                                                        'policy' + e.key
                                                      );
                                                    }),
                                                    Object(_a.jsx)(mr.a.Item, {
                                                      children: Object(_a.jsx)(
                                                        q.a,
                                                        {
                                                          type: 'dashed',
                                                          onClick: function () {
                                                            return n();
                                                          },
                                                          icon: Object(_a.jsx)(
                                                            ks.a,
                                                            {}
                                                          ),
                                                          children:
                                                            'Add Condition',
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }
                                              );
                                            },
                                          }),
                                          Object(_a.jsx)(mr.a.Item, {
                                            children: Object(_a.jsx)(q.a, {
                                              type: 'dashed',
                                              onClick: function () {
                                                return a(e.name);
                                              },
                                              block: !0,
                                              icon: Object(_a.jsx)(Is.a, {}),
                                              children: 'Remove Policy',
                                            }),
                                          }),
                                        ],
                                      },
                                      e.key
                                    );
                                  }),
                                  Object(_a.jsx)(mr.a.Item, {
                                    children: Object(_a.jsx)(q.a, {
                                      type: 'dashed',
                                      onClick: function () {
                                        return n();
                                      },
                                      block: !0,
                                      icon: Object(_a.jsx)(ks.a, {}),
                                      children: 'Add Policy',
                                    }),
                                  }),
                                ],
                              });
                            },
                          }),
                          Object(_a.jsxs)(mr.a.Item, {
                            wrapperCol: { sm: { offset: 8 } },
                            children: [
                              Object(_a.jsx)(q.a, {
                                type: 'primary',
                                htmlType: 'submit',
                                children: 'Submit',
                              }),
                              Object(_a.jsx)(q.a, {
                                type: 'secondary',
                                htmlType: 'button',
                                onClick: function () {
                                  return O(-1);
                                },
                                children: 'Back',
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        },
        As = V.a.Column,
        Ss = function () {
          var e = Object(a.useState)(!1),
            t = Object(m.a)(e, 2),
            n = t[0],
            r = t[1],
            c = Object(Ca.g)(),
            s = Object(i.c)(function (e) {
              return e.policy;
            }).policies,
            o = Object(i.b)();
          Object(a.useEffect)(function () {
            l();
          }, []);
          var l = (function () {
            var e = Object(W.a)(
              K.a.mark(function e() {
                return K.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0),
                          (e.next = 3),
                          o(
                            (function () {
                              var e = Object(W.a)(
                                K.a.mark(function e(t) {
                                  var n, a;
                                  return K.a.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              t({ type: qn }),
                                              (e.next = 4),
                                              Q.get('/policy')
                                            );
                                          case 4:
                                            (n = e.sent),
                                              (a = n.data),
                                              t({ type: Yn, payload: a }),
                                              t({ type: zn }),
                                              (e.next = 13);
                                            break;
                                          case 10:
                                            (e.prev = 10),
                                              (e.t0 = e.catch(0)),
                                              t({ type: Vn, error: e.t0 });
                                          case 13:
                                          case 'end':
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    null,
                                    [[0, 10]]
                                  );
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        );
                      case 3:
                        r(!1);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return n
            ? Object(_a.jsx)(Er.a, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)(y.b, {
                    style: { marginBottom: 16 },
                    children: Object(_a.jsx)(q.a, {
                      onClick: function () {
                        c('/policy/create');
                      },
                      children: 'Add Policy',
                    }),
                  }),
                  Object(_a.jsx)('br', {}),
                  Object(_a.jsx)(_a.Fragment, {
                    children: Object(_a.jsxs)(V.a, {
                      dataSource: s,
                      rowKey: '_id',
                      children: [
                        Object(_a.jsx)(
                          As,
                          { title: 'Name', dataIndex: 'name' },
                          'name'
                        ),
                        Object(_a.jsx)(
                          As,
                          {
                            title: 'Departments',
                            dataIndex: 'departments',
                            render: function (e, t) {
                              return e.map(function (e, t) {
                                return Object(_a.jsx)(
                                  'p',
                                  { children: e.name },
                                  e._id
                                );
                              });
                            },
                          },
                          'departments'
                        ),
                        Object(_a.jsx)(
                          As,
                          {
                            title: 'Policy',
                            dataIndex: 'lists',
                            render: function (e, t) {
                              return e.map(function (e, t) {
                                return Object(_a.jsxs)(_a.Fragment, {
                                  children: [
                                    Object(_a.jsx)('b', {
                                      children: e.leavetype.map(function (e) {
                                        return ''.concat(e.name, ', ');
                                      }),
                                    }),
                                    e.stacked
                                      ? Object(_a.jsx)('p', {
                                          children: 'Stacked',
                                        })
                                      : Object(_a.jsx)(_a.Fragment, {}),
                                    e.policy.map(function (e, t) {
                                      return Object(_a.jsx)(
                                        'p',
                                        {
                                          children: ''
                                            .concat(e.condition1, ' ')
                                            .concat(
                                              e.year,
                                              ' years, increase by '
                                            )
                                            .concat(e.increase),
                                        },
                                        t
                                      );
                                    }),
                                  ],
                                });
                              });
                            },
                          },
                          'lists'
                        ),
                        Object(_a.jsx)(
                          As,
                          {
                            title: 'Action',
                            render: function (e, t) {
                              return Object(_a.jsx)(y.b, {
                                size: 'middle',
                                children: Object(_a.jsx)(q.a, {
                                  children: Object(_a.jsx)(G.b, {
                                    to: '/policy/edit/'.concat(t._id),
                                    children: 'Edit',
                                  }),
                                }),
                              });
                            },
                          },
                          'action'
                        ),
                      ],
                    }),
                  }),
                  Object(_a.jsx)(q.a, {
                    children: Object(_a.jsx)(G.b, {
                      to: '/',
                      children: 'Back',
                    }),
                  }),
                ],
              });
        },
        Rs = n(352),
        Ps = function () {
          var e = Object(Ca.g)();
          return Object(_a.jsx)(Rs.a, {
            status: '404',
            title: '404',
            subTitle: 'Sorry, the page you visited does not exist.',
            extra: Object(_a.jsx)(q.a, {
              onClick: function () {
                e('/');
              },
              type: 'primary',
              children: 'Back Home',
            }),
          });
        },
        Ls = n(542),
        Ns = n(550),
        Fs = (n(988), oc.a.useBreakpoint),
        Ys = function (e) {
          var t = e.user,
            n = Object(i.b)(),
            r = Fs(),
            c = Object(Ca.g)(),
            s = Object(a.createRef)(),
            o = Object(a.useState)({ fromDate: ja()(), toDate: ja()() }),
            l = Object(m.a)(o, 2),
            u = l[0],
            d = l[1],
            j = Object(a.useState)({}),
            b = Object(m.a)(j, 2),
            p =
              (b[0],
              b[1],
              Object(i.c)(function (e) {
                return e.leaves;
              })),
            O = p.calendar,
            f = p.isLoading;
          p.error;
          Object(a.useEffect)(
            function () {
              f ||
                (r.xs
                  ? s.current.getApi().changeView('listMonth')
                  : s.current.getApi().changeView('dayGridMonth'));
            },
            [r]
          );
          var h = (function () {
            var e = Object(W.a)(
              K.a.mark(function e(a, r, c) {
                var s, i;
                return K.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (s = ja()(a.start)),
                          (i = ja()(a.end)),
                          0 != u.fromDate.diff(s) &&
                            0 != u.toDate.diff(i) &&
                            (d({ fromDate: s, toDate: i }),
                            n(na({ id: t._id, fromDate: s, toDate: i }))),
                          r(O);
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, a) {
              return e.apply(this, arguments);
            };
          })();
          return Object(_a.jsx)(_a.Fragment, {
            children: Object(_a.jsx)('div', {
              className: 'demo-app',
              children: Object(_a.jsx)('div', {
                className: 'demo-app-main',
                children: Object(_a.jsx)(Ta.a, {
                  spinning: f,
                  children: Object(_a.jsx)(Cc.a, {
                    ref: s,
                    plugins: [Ac.b, Sc.a, Rc.a, Pc.a],
                    headerToolbar: {
                      left: 'prevYear,prev,next,nextYear',
                      center: 'title',
                      right: 'today dayGridMonth,listMonth',
                    },
                    initialView: 'dayGridMonth',
                    dayMaxEvents: !0,
                    weekends: !0,
                    businessHours: { daysOfWeek: [1, 2, 3, 4, 5] },
                    events: h,
                    eventContent: function (e) {
                      return Object(_a.jsxs)(_a.Fragment, {
                        children: [
                          Object(_a.jsx)('b', { children: e.timeText }),
                          Object(_a.jsx)('i', { children: e.event.title }),
                          Object(_a.jsx)('i', {
                            children: e.event.extendedProps.emp_id,
                          }),
                        ],
                      });
                    },
                    eventClick: function (e) {
                      'background' != e.event.display && c(e.event.url);
                    },
                  }),
                }),
              }),
            }),
          });
        },
        Hs = function (e) {
          return (function () {
            var t = Object(W.a)(
              K.a.mark(function t(n) {
                var a, r;
                return K.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0), n({ type: gn }), (t.next = 4), Ye(e)
                          );
                        case 4:
                          return (
                            (a = t.sent),
                            (r = a.data),
                            n({ type: vn, payload: r }),
                            n({ type: Tn }),
                            t.abrupt('return', r)
                          );
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({ type: _n, error: t.t0 });
                        case 14:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        Ms = function (e, t) {
          return (function () {
            var n = Object(W.a)(
              K.a.mark(function n(a) {
                var r, c;
                return K.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            a({ type: gn }),
                            (n.next = 4),
                            He(e, t)
                          );
                        case 4:
                          (r = n.sent),
                            (c = r.data),
                            a({ type: wn, payload: c }),
                            a({ type: Tn }),
                            (n.next = 13);
                          break;
                        case 10:
                          (n.prev = 10),
                            (n.t0 = n.catch(0)),
                            a({ type: _n, error: n.t0 });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        qs =
          (Or.a.TextArea,
          Tr.a.RangePicker,
          _r.a.Option,
          L.a.Text,
          function (e) {
            e.user;
            var t = Ia()(),
              n = Object(Ca.g)(),
              r = Object(Ca.h)().id,
              c = Object(i.c)(function (e) {
                return e.trainingProgress;
              }).trainingProgress,
              s = Object(a.useState)(!1),
              o = Object(m.a)(s, 2),
              l = o[0],
              u = o[1],
              d = mr.a.useForm(),
              j = Object(m.a)(d, 1)[0],
              b = Object(a.useState)(null),
              p = Object(m.a)(b, 2),
              O = (p[0], p[1]),
              f = Object(i.b)();
            Object(a.useEffect)(
              function () {
                r &&
                  (u(!0),
                  f(Hs(r)).then(function () {
                    u(!1);
                  }));
              },
              [f, r]
            );
            return l
              ? Object(_a.jsx)(Er.a, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)(L.a.Title, {
                      level: 2,
                      style: { textAlign: 'center' },
                      children: 'Training Progress Certification Upload',
                    }),
                    Object(_a.jsxs)(H.b, {
                      bordered: !0,
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      layout: t.md ? 'horizontal' : 'vertical',
                      children: [
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Name',
                          span: 3,
                          children: ''
                            .concat(c.user.first_name, ' ')
                            .concat(c.user.last_name),
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Course Name',
                          span: 3,
                          children: c.training.title,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Reason for Attending',
                          span: 3,
                          children: c.training.description,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Training Type',
                          span: 3,
                          children: c.training.trainingType,
                        }),
                      ],
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsxs)(mr.a, {
                      labelCol: { sm: { span: 8 } },
                      wrapperCol: { sm: { span: 8 } },
                      form: j,
                      name: 'basic',
                      onFinish: function (e) {
                        var t = [];
                        O(null);
                        var a = new FormData();
                        if (e.upload) {
                          var s,
                            i = Object(Ea.a)(e.upload);
                          try {
                            var o = function () {
                              var e = s.value;
                              e.originFileObj
                                ? a.append('files', e.originFileObj)
                                : t.push(
                                    c.attachments.find(function (t) {
                                      return t.fileId == e.uid;
                                    })
                                  );
                            };
                            for (i.s(); !(s = i.n()).done; ) o();
                          } catch (l) {
                            i.e(l);
                          } finally {
                            i.f();
                          }
                        } else r && (t = c.attachments);
                        a.append('status', 'Pending Approval'),
                          a.append('attachments', JSON.stringify(t)),
                          f(Ms(r, a)),
                          pr.a.success({
                            content: 'Changes saved.',
                            onOk: function () {
                              n('/trainingProgress/history');
                            },
                          });
                      },
                      autoComplete: 'off',
                      children: [
                        Object(_a.jsx)(mr.a.Item, {
                          name: 'upload',
                          label: 'Certifications',
                          getValueFromEvent: function (e) {
                            return Array.isArray(e) ? e : e && e.fileList;
                          },
                          rules: [
                            function () {
                              return {
                                validator: function (e, t) {
                                  return 0 !=
                                    (null === c || void 0 === c
                                      ? void 0
                                      : c.attachments.length) || 0 != t.length
                                    ? Promise.resolve()
                                    : Promise.reject(
                                        new Error('Upload cannot be empty')
                                      );
                                },
                              };
                            },
                          ],
                          children: Object(_a.jsx)(Dr.a.Dragger, {
                            name: 'logo',
                            listType: 'picture',
                            beforeUpload: function (e) {
                              return !1;
                            },
                            customRequest: function (e) {
                              e.file;
                              var t = e.onSuccess;
                              setTimeout(function () {
                                t('ok');
                              }, 0);
                            },
                            defaultFileList: function () {
                              var e;
                              return r
                                ? (null === c ||
                                  void 0 === c ||
                                  null === (e = c.attachments) ||
                                  void 0 === e
                                    ? void 0
                                    : e.map(function (e) {
                                        return {
                                          uid: e.fileId,
                                          name: e.fileName,
                                          status: 'done',
                                          url: e.filePath,
                                        };
                                      })) || []
                                : null;
                            },
                            showUploadList: {
                              showDownloadIcon: !0,
                              downloadIcon: function (e) {
                                return 'done' == e.status
                                  ? Object(_a.jsx)(wr.a, {})
                                  : Object(_a.jsx)(_a.Fragment, {});
                              },
                              showRemoveIcon: !0,
                              removeIcon: function (e) {
                                return 'done' == e.status
                                  ? Object(_a.jsx)(_a.Fragment, {})
                                  : Object(_a.jsx)(Ir.a, {});
                              },
                            },
                            children: Object(_a.jsx)(q.a, {
                              icon: Object(_a.jsx)(kr.a, {}),
                              children: 'Click to upload',
                            }),
                          }),
                        }),
                        Object(_a.jsxs)(mr.a.Item, {
                          wrapperCol: { sm: { offset: 8 } },
                          children: [
                            Object(_a.jsx)(q.a, {
                              type: 'primary',
                              htmlType: 'submit',
                              children: 'Submit',
                            }),
                            Object(_a.jsx)(q.a, {
                              type: 'secondary',
                              htmlType: 'button',
                              onClick: function () {
                                return n(-1);
                              },
                              children: 'Back',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                });
          }),
        zs =
          (n(989),
          function (e) {
            var t = e.user,
              n = Ia()(),
              r = Object(i.c)(function (e) {
                return e.trainingProgress;
              }),
              c = r.trainingProgress,
              s = r.isLoading,
              o = Object(i.b)(),
              l = Object(a.useState)(!0),
              u = Object(m.a)(l, 2),
              d = u[0],
              j = u[1],
              b = Object(Ca.g)(),
              p = Object(Ca.h)().id;
            Object(a.useEffect)(
              function () {
                o(Hs(p)).then(function () {
                  return j(!1);
                });
              },
              [o, p]
            );
            return d || s
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsxs)(H.b, {
                      title: 'Leave Info',
                      bordered: !0,
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      layout: n.md ? 'horizontal' : 'vertical',
                      children: [
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Name',
                          span: 3,
                          children: ''
                            .concat(c.user.first_name, ' ')
                            .concat(c.user.last_name),
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Course Name',
                          span: 3,
                          children: c.training.title,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Reason for Attending',
                          span: 3,
                          children: c.training.description,
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Training Type',
                          span: 3,
                          children: c.training.trainingType,
                        }),
                        Object(_a.jsxs)(H.b.Item, {
                          label: 'Training Total Duration',
                          span: 3,
                          children: [c.training.duration, ' hours'],
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Supporting Documents',
                          span: 3,
                          children:
                            0 != c.attachments.length
                              ? Object(_a.jsx)(_a.Fragment, {
                                  children: Object(_a.jsx)(Dr.a, {
                                    className: 'showFiles',
                                    defaultFileList: function () {
                                      var e;
                                      return p
                                        ? (null === c ||
                                          void 0 === c ||
                                          null === (e = c.attachments) ||
                                          void 0 === e
                                            ? void 0
                                            : e.map(function (e) {
                                                return {
                                                  uid: e.fileId,
                                                  name: e.fileName,
                                                  status: 'done',
                                                  url: e.filePath,
                                                };
                                              })) || []
                                        : null;
                                    },
                                    showUploadList: {
                                      showDownloadIcon: !0,
                                      showRemoveIcon: !1,
                                    },
                                  }),
                                })
                              : Object(_a.jsx)('div', { children: 'None' }),
                        }),
                        Object(_a.jsx)(H.b.Item, {
                          label: 'Status',
                          span: 3,
                          children: Object(_a.jsx)(Ua.a, {
                            status:
                              'Pending Approval' == c.status ||
                              'Waiting Completion' == c.status
                                ? 'processing'
                                : 'Approved' == c.status
                                ? 'success'
                                : 'error',
                            text: c.status,
                          }),
                        }),
                      ],
                    }),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsx)('br', {}),
                    Object(_a.jsxs)(y.b, {
                      size: 'middle',
                      children: [
                        Object(_a.jsx)(q.a, {
                          onClick: function () {
                            return b(-1);
                          },
                          children: 'Back',
                        }),
                        c.user._id != t._id &&
                          'Pending Approval' == c.status &&
                          Object(_a.jsx)(_a.Fragment, {
                            children: Object(_a.jsx)(q.a, {
                              type: 'success',
                              onClick: function () {
                                return (
                                  o(Ms(p, { status: (e = 'Approved') })),
                                  void (
                                    'Approved' == e &&
                                    o(Fr(c.user._id)).then(function (e) {
                                      o(
                                        Hr(e._id, {
                                          completedHours:
                                            parseFloat(e.completedHours) +
                                            parseFloat(c.training.duration),
                                        })
                                      );
                                    })
                                  )
                                );
                                var e;
                              },
                              children: 'Approve',
                            }),
                          }),
                      ],
                    }),
                  ],
                });
          }),
        Vs = function (e) {
          var t,
            n = e.user,
            r = Object(i.c)(function (e) {
              return e.trainingProgress;
            }),
            c = r.trainingProgresses,
            s = r.isLoading,
            o = (Object(Ca.g)(), Object(i.b)());
          Object(a.useEffect)(
            function () {
              var e;
              o(
                ((e = n._id),
                (function () {
                  var t = Object(W.a)(
                    K.a.mark(function t(n) {
                      var a, r;
                      return K.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  n({ type: gn }),
                                  (t.next = 4),
                                  Me(e)
                                );
                              case 4:
                                return (
                                  (a = t.sent),
                                  (r = a.data),
                                  n({ type: En, payload: r }),
                                  n({ type: Tn }),
                                  t.abrupt('return', r)
                                );
                              case 11:
                                (t.prev = 11),
                                  (t.t0 = t.catch(0)),
                                  n({ type: _n, error: t.t0 });
                              case 14:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })())
              );
            },
            [o]
          );
          var l = Object(a.useRef)(),
            d = [
              {
                title: 'Title',
                dataIndex: ['training', 'title'],
                key: 'title',
              },
              {
                title: 'Start Date',
                dataIndex: ['training', 'fromDate'],
                key: 'fromDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.training.fromDate) - ja()(t.training.fromDate);
                },
                render: function (e, t) {
                  return ja()(t.training.fromDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Start Date to End Date',
                dataIndex: 'fromDate',
                valueType: 'dateRange',
                key: 'somehtin',
                hideInTable: !0,
                search: {
                  transform: function (e) {
                    return { startTime: e[0], endTime: e[1] };
                  },
                },
              },
              {
                title: 'End Date',
                dataIndex: ['training', 'toDate'],
                key: 'toDate',
                valueType: 'date',
                sorter: function (e, t) {
                  return ja()(e.training.toDate) - ja()(t.training.toDate);
                },
                render: function (e, t) {
                  return ja()(t.training.toDate).format('YYYY-MM-DD');
                },
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                filters: [
                  { text: 'Waiting Completion', value: 'Waiting Completion' },
                  { text: 'Pending Approval', value: 'Pending Approval' },
                  { text: 'Approved', value: 'Approved' },
                  { text: 'Rejected', value: 'Rejected' },
                ],
                hideInSearch: !0,
                onFilter: function (e, t) {
                  return 0 === t.status.indexOf(e);
                },
                render: function (e, t) {
                  return Object(_a.jsx)(Ua.a, {
                    status:
                      'Pending Approval' == t.status ||
                      'Waiting Completion' == t.status
                        ? 'processing'
                        : 'Approved' == t.status
                        ? 'success'
                        : 'error',
                    text: t.status,
                  });
                },
              },
              {
                title: 'Action',
                key: '_id',
                valueType: 'option',
                render: function (e, t) {
                  return Object(_a.jsxs)(
                    y.b,
                    {
                      size: 'middle',
                      children: [
                        Object(_a.jsx)(G.b, {
                          to: '/trainingProgress/view/'.concat(t._id),
                          children: 'View',
                        }),
                        ('Pending Approval' == t.status ||
                          'Waiting Completion' == t.status) &&
                          Object(_a.jsx)(G.b, {
                            to: '/trainingProgress/edit/'.concat(t._id),
                            children: 'Edit',
                          }),
                      ],
                    },
                    t._id
                  );
                },
              },
            ],
            j = (function (e) {
              var t = new Array();
              if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
              return t;
            })(c);
          return s || !c
            ? Object(_a.jsx)(Da, {})
            : Object(_a.jsxs)(_a.Fragment, {
                children: [
                  Object(_a.jsx)('h2', { children: 'My Training Progress' }),
                  c.length
                    ? Object(_a.jsx)(_a.Fragment, {
                        children: Object(_a.jsx)(u.b, {
                          locale: Gr.a,
                          children: Object(_a.jsx)(
                            Vr.a,
                            ((t = {
                              search: { span: 24 },
                              rowKey: 'id',
                              columns: d,
                              actionRef: l,
                              request: function (e, t, n) {
                                var a = j;
                                return (
                                  e &&
                                    Object.keys(e).length > 0 &&
                                    (a = a.filter(function (t) {
                                      return Object.keys(e).every(function (n) {
                                        if (!e[n]) return !0;
                                        if ('pageSize' == n || 'current' == n)
                                          return !0;
                                        if ('all' == e[n]) return !0;
                                        var a = t[n];
                                        if ('user' == n)
                                          a = ''
                                            .concat(t.user.first_name, ' ')
                                            .concat(t.user.last_name);
                                        else if ('department' == n)
                                          a = ''.concat(t.department.name);
                                        else {
                                          if ('startTime' == n)
                                            return (
                                              ja()(t.training.fromDate).diff(
                                                ja()(e[n])
                                              ) >= 0
                                            );
                                          if ('endTime' == n)
                                            return (
                                              ja()(t.training.toDate).diff(
                                                ja()(e[n]),
                                                'days'
                                              ) <= 0
                                            );
                                        }
                                        return (
                                          !a ||
                                          -1 !=
                                            a.search(
                                              new RegExp(
                                                '.*' + e[n] + '.*',
                                                'gi'
                                              )
                                            )
                                        );
                                      });
                                    })),
                                  Promise.resolve({ data: a, success: !0 })
                                );
                              },
                            }),
                            Object(Wa.a)(t, 'rowKey', '_id'),
                            Object(Wa.a)(t, 'pagination', {
                              pageSize: 10,
                              showQuickJumper: !0,
                            }),
                            Object(Wa.a)(t, 'search', { labelWidth: 'auto' }),
                            Object(Wa.a)(t, 'dateFormatter', 'string'),
                            Object(Wa.a)(t, 'toolbar', {
                              title: 'Tips:',
                              tooltip:
                                'Use the search bar above or filter icons on the columns for easy record finding',
                            }),
                            t)
                          ),
                        }),
                      })
                    : Object(_a.jsx)(z.a, {}),
                ],
              });
        },
        Us =
          (L.a.Text,
          function (e) {
            var t = e.user,
              n = Object(i.c)(function (e) {
                return e.depts;
              }).depts,
              r = Object(i.c)(function (e) {
                return e.trainingProgress;
              }),
              c = r.trainingProgresses,
              s = r.isLoading,
              o = Object(a.useState)(!1),
              l = Object(m.a)(o, 2),
              d = (l[0], l[1]),
              j = (Object(Ca.g)(), []),
              b = Object(i.b)();
            Object(a.useEffect)(
              function () {
                var e;
                d(!0),
                  b(zr()),
                  'admin' == t.roles.name
                    ? b(
                        (function () {
                          var e = Object(W.a)(
                            K.a.mark(function e(t) {
                              var n, a;
                              return K.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          t({ type: gn }),
                                          (e.next = 4),
                                          Q.get('/trainingProgress')
                                        );
                                      case 4:
                                        (n = e.sent),
                                          (a = n.data),
                                          t({ type: yn, payload: a }),
                                          t({ type: Tn }),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          t({ type: _n, error: e.t0 });
                                      case 13:
                                      case 'end':
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 10]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ).then(function () {
                        return d(!1);
                      })
                    : b(
                        ((e = t.department._id),
                        (function () {
                          var t = Object(W.a)(
                            K.a.mark(function t(n) {
                              var a, r;
                              return K.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          n({ type: gn }),
                                          (t.next = 4),
                                          qe(e)
                                        );
                                      case 4:
                                        return (
                                          (a = t.sent),
                                          (r = a.data),
                                          n({ type: kn, payload: r }),
                                          n({ type: Tn }),
                                          t.abrupt('return', r)
                                        );
                                      case 11:
                                        (t.prev = 11),
                                          (t.t0 = t.catch(0)),
                                          n({ type: _n, error: t.t0 });
                                      case 14:
                                      case 'end':
                                        return t.stop();
                                    }
                                },
                                t,
                                null,
                                [[0, 11]]
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })())
                      ).then(function () {
                        return d(!1);
                      });
              },
              [b]
            ),
              'admin' == t.roles.name &&
                n.map(function (e) {
                  j.push({ text: e.name, value: e.name });
                });
            var p = c.filter(function (e) {
                return e.user._id != t._id;
              }),
              O = [
                {
                  title: 'Employee Name',
                  dataIndex: 'user',
                  key: 'user',
                  valueType: 'text',
                  render: function (e, t) {
                    return ''.concat(e.first_name, ' ').concat(e.last_name);
                  },
                },
                {
                  title: 'Department',
                  dataIndex: ['user', 'department', 'name'],
                  key: 'department',
                  hideInSearch: !0,
                  filters: j,
                  onFilter: function (e, t) {
                    return 0 === t.user.department.name.indexOf(e);
                  },
                },
                {
                  title: 'Training Type',
                  dataIndex: ['training', 'trainingType'],
                  key: 'trainingType',
                  filters: [
                    { text: 'Internal', value: 'Internal' },
                    { text: 'External', value: 'External' },
                  ],
                  hideInSearch: !0,
                  onFilter: function (e, t) {
                    return 0 === t.training.trainingType.indexOf(e);
                  },
                },
                {
                  title: 'Start Date',
                  dataIndex: ['training', 'fromDate'],
                  key: 'fromDate',
                  valueType: 'date',
                  sorter: function (e, t) {
                    return (
                      ja()(e.training.fromDate) - ja()(t.training.fromDate)
                    );
                  },
                  render: function (e, t) {
                    return ja()(t.training.fromDate).format('YYYY-MM-DD');
                  },
                },
                {
                  title: 'Start Date to End Date',
                  dataIndex: 'fromDate',
                  valueType: 'dateRange',
                  key: 'somehtin',
                  hideInTable: !0,
                  search: {
                    transform: function (e) {
                      return { startTime: e[0], endTime: e[1] };
                    },
                  },
                },
                {
                  title: 'End Date',
                  dataIndex: ['training', 'toDate'],
                  key: 'toDate',
                  valueType: 'date',
                  sorter: function (e, t) {
                    return ja()(e.training.toDate) - ja()(t.training.toDate);
                  },
                  render: function (e, t) {
                    return ja()(t.training.toDate).format('YYYY-MM-DD');
                  },
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  hideInSearch: !0,
                  filters: [
                    { text: 'Wating Completion', value: 'Waiting Completion' },
                    { text: 'Pending Approval', value: 'Pending Approval' },
                    { text: 'Approved', value: 'Approved' },
                    { text: 'Rejected', value: 'Rejected' },
                  ],
                  onFilter: function (e, t) {
                    return 0 === t.status.indexOf(e);
                  },
                  render: function (e, t) {
                    return Object(_a.jsx)(Ua.a, {
                      status:
                        'Pending Approval' == t.status ||
                        'Waiting Completion' == t.status
                          ? 'processing'
                          : 'Approved' == t.status
                          ? 'success'
                          : 'error',
                      text: t.status,
                    });
                  },
                },
                {
                  title: 'Action',
                  key: '_id',
                  valueType: 'option',
                  render: function (e, t) {
                    return Object(_a.jsx)(
                      y.b,
                      {
                        size: 'middle',
                        children: Object(_a.jsx)(G.b, {
                          to: '/trainingProgress/view/'.concat(t._id),
                          children: 'View',
                        }),
                      },
                      t._id
                    );
                  },
                },
              ],
              f = Object(a.useRef)(),
              h = (function (e) {
                var t = new Array();
                if (e) for (var n = e.length - 1; n >= 0; n--) t.push(e[n]);
                return t;
              })(p);
            return s
              ? Object(_a.jsx)(Da, {})
              : Object(_a.jsxs)(_a.Fragment, {
                  children: [
                    Object(_a.jsx)('h2', {
                      children: 'Employee Training Completion',
                    }),
                    p.length
                      ? Object(_a.jsx)(_a.Fragment, {
                          children: Object(_a.jsx)(u.b, {
                            locale: Gr.a,
                            children: Object(_a.jsx)(Vr.a, {
                              columns: O,
                              actionRef: f,
                              request: function (e, t, n) {
                                var a = h;
                                return (
                                  e &&
                                    Object.keys(e).length > 0 &&
                                    (a = a.filter(function (t) {
                                      return Object.keys(e).every(function (n) {
                                        if (!e[n]) return !0;
                                        if ('pageSize' == n || 'current' == n)
                                          return !0;
                                        if ('all' == e[n]) return !0;
                                        var a = t[n];
                                        if ('user' == n)
                                          a = ''
                                            .concat(t.user.first_name, ' ')
                                            .concat(t.user.last_name);
                                        else if ('department' == n)
                                          a = ''.concat(t.department.name);
                                        else {
                                          if ('startTime' == n)
                                            return (
                                              ja()(t.training.fromDate).diff(
                                                ja()(e[n])
                                              ) >= 0
                                            );
                                          if ('endTime' == n)
                                            return (
                                              ja()(t.training.toDate).diff(
                                                ja()(e[n]),
                                                'days'
                                              ) <= 0
                                            );
                                        }
                                        return (
                                          !a ||
                                          -1 !=
                                            a.search(
                                              new RegExp(
                                                '.*' + e[n] + '.*',
                                                'gi'
                                              )
                                            )
                                        );
                                      });
                                    })),
                                  Promise.resolve({ data: a, success: !0 })
                                );
                              },
                              rowKey: '_id',
                              pagination: { pageSize: 10, showQuickJumper: !0 },
                              search: { labelWidth: 'auto' },
                              dateFormatter: 'string',
                              toolbar: {
                                title: 'Tips:',
                                tooltip:
                                  'Use the search bar above or filter icons on the columns for easy record finding',
                              },
                            }),
                          }),
                        })
                      : Object(_a.jsx)(z.a, {}),
                  ],
                });
          }),
        Gs = function (e) {
          var t = e.user,
            n = Object(a.useState)(!1),
            r = Object(m.a)(n, 2),
            c = (r[0], r[1], Object(i.b)()),
            s = Object(i.c)(function (e) {
              return e.users;
            }),
            o =
              (s.isLoading,
              s.error,
              (function () {
                var e = Object(W.a)(
                  K.a.mark(function e(n) {
                    return K.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c(xr(t._id, { password: n.password }));
                          case 1:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })());
          return Object(_a.jsxs)(_a.Fragment, {
            children: [
              Object(_a.jsx)(L.a.Title, {
                level: 2,
                style: { textAlign: 'center' },
                children: 'Change Password',
              }),
              Object(_a.jsxs)(mr.a, {
                name: 'basic',
                labelCol: { sm: { span: 8 } },
                wrapperCol: { sm: { span: 8 } },
                onFinish: o,
                autoComplete: 'off',
                children: [
                  Object(_a.jsx)(mr.a.Item, {
                    name: 'password',
                    label: 'Password',
                    rules: [
                      { required: !0 },
                      {
                        pattern:
                          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
                        message:
                          'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character',
                      },
                    ],
                    hasFeedback: !0,
                    children: Object(_a.jsx)(Or.a.Password, {
                      autoFocus: !0,
                      placeholder: 'Please enter new password',
                    }),
                  }),
                  Object(_a.jsx)(mr.a.Item, {
                    name: 'confirm',
                    label: 'Confirm Password',
                    dependencies: ['password'],
                    hasFeedback: !0,
                    rules: [
                      { required: !0 },
                      {
                        pattern:
                          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$',
                        message:
                          'Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character',
                      },
                      function (e) {
                        var t = e.getFieldValue;
                        return {
                          validator: function (e, n) {
                            return n && t('password') !== n
                              ? Promise.reject(
                                  new Error(
                                    'The two passwords that you entered do not match!'
                                  )
                                )
                              : Promise.resolve();
                          },
                        };
                      },
                    ],
                    children: Object(_a.jsx)(Or.a.Password, {
                      placeholder: 'Please enter password again',
                    }),
                  }),
                  Object(_a.jsx)(mr.a.Item, {
                    wrapperCol: { sm: { offset: 8 } },
                    children: Object(_a.jsx)(q.a, {
                      type: 'primary',
                      htmlType: 'submit',
                      children: 'Submit',
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Bs =
          (O.a.Header,
          O.a.Footer,
          O.a.Sider,
          O.a.Content,
          function () {
            var e,
              t,
              n = Object(i.b)(),
              r = Object(a.useState)(!0),
              c = Object(m.a)(r, 2),
              s = c[0],
              o = c[1],
              l = Object(a.useState)({
                fixSiderbar: !0,
                navTheme: 'light',
                primaryColor: '#1890ff',
                layout: 'side',
                contentWidth: 'Fluid',
                splitMenus: !1,
              }),
              u = Object(m.a)(l, 2),
              d = u[0],
              j = (u[1], Object(a.useState)('/')),
              b = Object(m.a)(j, 2),
              O = b[0],
              D = b[1],
              w = Object(a.useState)(null),
              I = Object(m.a)(w, 2),
              k = I[0],
              E = I[1],
              C = Object(i.c)(function (e) {
                return e.auth;
              }).authData,
              A = null === C || void 0 === C ? void 0 : C.result,
              S = Object(Ca.f)(),
              R = Ra,
              P = Object(Ca.g)(),
              L = function () {
                null === k || void 0 === k || k.emit('removeUser'),
                  n({ type: it }),
                  P('/auth');
              };
            return (
              Object(a.useEffect)(
                function () {
                  D(S.pathname);
                  var e = null === A || void 0 === A ? void 0 : A.token;
                  e &&
                    1e3 * Object(Ls.a)(e).exp < new Date().getTime() &&
                    (f.b.error('Session expired. Please login again'), L());
                },
                [S]
              ),
              Object(a.useEffect)(function () {
                E(Object(Ns.a)('http://localhost:5000'));
              }, []),
              Object(a.useEffect)(
                function () {
                  return (
                    k &&
                      A &&
                      (null === k || void 0 === k || k.emit('newUser', A),
                      null === k || void 0 === k || k.emit('listUser'),
                      null === k ||
                        void 0 === k ||
                        k.on('newNotification', function (e) {
                          var t = 'Notification',
                            n = '',
                            a = Object(_a.jsx)(v.a, {});
                          'leave' == e.content.type
                            ? ((n += '/leaves/view'),
                              'Pending' == e.content.status
                                ? (t = 'Leave Request')
                                : 'Approved' == e.content.status
                                ? ((t = 'Leave Approval'),
                                  (a = Object(_a.jsx)(g.a, {})))
                                : 'Rejected' == e.content.status &&
                                  ((t = 'Leave Approval'),
                                  (a = Object(_a.jsx)(T.a, {}))))
                            : 'training' == e.content.type &&
                              ((n += '/training/view'),
                              'Pending' == e.content.status
                                ? (t = 'Training Request')
                                : 'Approved' == e.content.status
                                ? ((t = 'Training Approval'),
                                  (a = Object(_a.jsx)(g.a, {})))
                                : 'Rejected' == e.content.status &&
                                  ((t = 'Training Approval'),
                                  (a = Object(_a.jsx)(T.a, {})))),
                            h.a.open({
                              message: t,
                              description: ''
                                .concat(e.sender, ' ')
                                .concat(e.content.message),
                              icon: a,
                              placement: 'bottomRight',
                              duration: 300,
                              onClick: function () {
                                P(''.concat(n, '/').concat(e.content.id)),
                                  h.a.destroy();
                              },
                            });
                        })),
                    function () {
                      null === k || void 0 === k || k.off('newNotification'),
                        null === k || void 0 === k || k.disconnect();
                    }
                  );
                },
                [k, A]
              ),
              (R =
                'supervisor' ==
                (null === A ||
                void 0 === A ||
                null === (e = A.roles) ||
                void 0 === e
                  ? void 0
                  : e.name)
                  ? Fa
                  : 'admin' ==
                    (null === A ||
                    void 0 === A ||
                    null === (t = A.roles) ||
                    void 0 === t
                      ? void 0
                      : t.name)
                  ? qa
                  : Ra),
              Object(_a.jsx)('div', {
                id: 'test-pro-layout',
                style: { height: '100vh', background: 'black' },
                children: Object(_a.jsx)(
                  _.a,
                  Object(p.a)(
                    Object(p.a)(
                      Object(p.a)(
                        {
                          title: !1,
                          logo: function () {
                            return (
                              !!s &&
                              Object(_a.jsx)(x.a, {
                                className: 'logo',
                                src: '/INTI_Logo.png',
                                preview: !1,
                              })
                            );
                          },
                          onCollapse: function (e) {
                            return o(!e);
                          },
                        },
                        R
                      ),
                      {},
                      {
                        location: { pathname: O },
                        menuRender: function (e, t) {
                          return !!A && t;
                        },
                        menuItemRender: function (e, t) {
                          return Object(_a.jsx)(G.b, {
                            to: e.path || '/',
                            children: t,
                          });
                        },
                        rightContentRender: function () {
                          return Object(_a.jsxs)(y.b, {
                            size: 'large',
                            children: [
                              A && Object(_a.jsx)(or, { user: A, socket: k }),
                              Object(_a.jsx)(br, { user: A, logout: L }),
                            ],
                          });
                        },
                        locale: 'en-US',
                      },
                      d
                    ),
                    {},
                    {
                      children: Object(_a.jsx)('div', {
                        className: 'site-layout-background',
                        children: Object(_a.jsxs)(Ca.d, {
                          children: [
                            Object(_a.jsx)(Ca.b, {
                              path: '/home',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ka, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/supervisor',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ws, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/admin',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Ds, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/home',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Sa, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Lr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/view/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(qr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Lr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/list',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Kr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaves/history',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Wr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaveTypes',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(yc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaveTypes/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(hc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/leaveTypes/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(hc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/depts',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(rc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/depts/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ic, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/depts/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ic, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/profile',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Ec, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/profile/changePassword',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Gs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/users',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(dc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/users/dept',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(dc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/users/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(nc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/users/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(nc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/users/view/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(jc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/roles',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(gc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/roles/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(wc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/roles/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(wc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/calendar',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(qc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/calendar/personal',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Ys, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/holidays',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Kc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/holidays/create/:year',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Jc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/holidays/edit/:year/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Jc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/home',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ls, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(js, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/list',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(bs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/view/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(ps, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/submitExt',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Os, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/extList',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(fs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/training/history',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(hs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/trainingProgress/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(qs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/trainingProgress/view/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(zs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/trainingProgress/history',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Vs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/trainingProgress/list',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Us, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/policy',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Ss, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/policy/create',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Cs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/policy/edit/:id',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Cs, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/auth',
                              element: Object(_a.jsx)(Vc, {
                                user: A,
                                children: Object(_a.jsx)(gr, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/resetPassword',
                              element: Object(_a.jsx)(Gc, {
                                socket: k,
                                user: A,
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/test',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(Uc, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/test2',
                              element: Object(_a.jsx)(zc, {
                                user: A,
                                children: Object(_a.jsx)(os, {
                                  socket: k,
                                  user: A,
                                }),
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '/',
                              element: Object(_a.jsx)(Ca.a, {
                                to: '/auth',
                                replace: !0,
                              }),
                            }),
                            Object(_a.jsx)(Ca.b, {
                              path: '*',
                              element: Object(_a.jsx)(Ps, {}),
                            }),
                          ],
                        }),
                      }),
                    }
                  )
                ),
              })
            );
          }),
        Ks = n(83),
        Ws = function (e) {
          try {
            return e.response
              ? e.response.data.message.toString()
              : e.request
              ? e.request.toString()
              : e.message.toString();
          } catch (t) {
            return e;
          }
        },
        Js = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { error: null, isLoading: !0, authData: null, success: null },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case ot:
              return Object(p.a)(
                Object(p.a)({}, e),
                {},
                { isLoading: !0, error: null, success: null }
              );
            case lt:
              return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
            case ut:
              return Object(p.a)(
                Object(p.a)({}, e),
                {},
                { error: Ws(t.error) || '', isLoading: !1 }
              );
            case dt:
              return Object(p.a)(
                Object(p.a)({}, e),
                {},
                { success: t.payload.success }
              );
            case nt:
              return (
                localStorage.setItem(
                  'profile',
                  JSON.stringify(
                    Object(p.a)(
                      {},
                      null === t || void 0 === t ? void 0 : t.data
                    )
                  )
                ),
                Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { authData: null === t || void 0 === t ? void 0 : t.data }
                )
              );
            case ct:
              return Object(p.a)(
                Object(p.a)({}, e),
                {},
                {
                  authData: Object(p.a)(
                    Object(p.a)({}, e.authData),
                    {},
                    { result: t.payload }
                  ),
                }
              );
            case st:
              return Object(p.a)(
                Object(p.a)({}, e),
                {},
                {
                  authData: Object(p.a)(
                    Object(p.a)({}, e.authData),
                    {},
                    {
                      result: Object(p.a)(
                        Object(p.a)({}, e.authData.result),
                        {},
                        { settings: t.payload.settings }
                      ),
                    }
                  ),
                }
              );
            case it:
              return (
                localStorage.clear(),
                Object(p.a)(Object(p.a)({}, e), {}, { authData: null })
              );
            case rt:
            case at:
            default:
              return e;
          }
        },
        Qs = Object(o.combineReducers)({
          leaves: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      error: null,
                      isLoading: !0,
                      leaves: [],
                      calendar: [],
                      leave: null,
                      success: null,
                    },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case We:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Je:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Qe:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case $e:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Ve:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    leaves: e.leaves.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                    leave: t.payload,
                  }
                );
              case Ge:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leave: t.payload }
                );
              case Ke:
                var n =
                    t.payload.data.leaves.map(function (e) {
                      var t = e.leaveType;
                      return {
                        id: e._id,
                        title: ''
                          .concat(e.user.first_name, ' ')
                          .concat(e.user.last_name, ' (')
                          .concat(t.code, ')'),
                        start: e.fromDate,
                        url: '/leaves/view/'.concat(e._id),
                        end: e.toDate,
                        extendedProps: { emp_id: e.emp_id },
                        allDay: !0,
                        color: t.color,
                      };
                    }) || [],
                  a =
                    t.payload.data.holidays.map(function (e) {
                      return {
                        id: e._id,
                        title: e.title,
                        start: e.startDate,
                        end: e.endDate,
                        allDay: !0,
                        display: 'background',
                      };
                    }) || [];
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { calendar: [].concat(Object(Ks.a)(a), Object(Ks.a)(n)) }
                );
              case Be:
                var r =
                    t.payload.data.leaves.map(function (e) {
                      var t = e.leaveType;
                      return {
                        id: e._id,
                        title: ''
                          .concat(e.user.first_name, ' ')
                          .concat(e.user.last_name, ' (')
                          .concat(t.code, ') [')
                          .concat(e.status, ']'),
                        start: e.fromDate,
                        url: '/leaves/view/'.concat(e._id),
                        end: e.toDate,
                        extendedProps: { emp_id: e.emp_id },
                        allDay: !0,
                        color: t.color,
                      };
                    }) || [],
                  c =
                    t.payload.data.holidays.map(function (e) {
                      return {
                        id: e._id,
                        title: e.title,
                        start: e.startDate,
                        end: e.endDate,
                        allDay: !0,
                        display: 'background',
                      };
                    }) || [];
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { calendar: [].concat(Object(Ks.a)(c), Object(Ks.a)(r)) }
                );
              case Ue:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaves: t.payload }
                );
              case ze:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaves: [].concat(Object(Ks.a)(e.leaves), [t.payload]) }
                );
              case Xe:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaves: t.payload }
                );
              case Ze:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { upcomingLeave: t.payload }
                );
              case et:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaveHistory: t.payload }
                );
              case tt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { todayLeaves: t.payload }
                );
              case Nt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaveCount: t.payload }
                );
              default:
                return e;
            }
          },
          auth: Js,
          depts: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { error: null, isLoading: !0, depts: [], success: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Dt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case wt:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case It:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case kt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case gt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    depts: e.depts.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                  }
                );
              case _t:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { depts: t.payload }
                );
              case vt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { depts: [].concat(Object(Ks.a)(e.depts), [t.payload]) }
                );
              case Tt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    depts: e.depts.filter(function (e) {
                      return e._id !== t.payload;
                    }),
                  }
                );
              default:
                return e;
            }
          },
          users: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [], user: null, success: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ot:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case ft:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case ht:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case xt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case bt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    users: e.users.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                  }
                );
              case mt:
                return Object(p.a)(Object(p.a)({}, e), {}, { user: t.payload });
              case pt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { users: t.payload }
                );
              case jt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { users: [].concat(Object(Ks.a)(e.users), [t.payload]) }
                );
              case yt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { users: t.payload }
                );
              default:
                return e;
            }
          },
          leaveTypes: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      error: null,
                      isLoading: !0,
                      leaveTypes: [],
                      success: null,
                    },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Rt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Pt:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Ft:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Lt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case Ct:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    leaveTypes: e.leaveTypes.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                  }
                );
              case St:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaveType: t.payload, isLoading: !1 }
                );
              case At:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { leaveTypes: t.payload }
                );
              case Et:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    leaveTypes: [].concat(Object(Ks.a)(e.leaveTypes), [
                      t.payload,
                    ]),
                  }
                );
              default:
                return e;
            }
          },
          roles: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { error: null, isLoading: !0, roles: [], success: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case zt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Vt:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Ut:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case Gt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Ht:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    roles: e.roles.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                  }
                );
              case qt:
                return Object(p.a)(Object(p.a)({}, e), {}, { role: t.payload });
              case Mt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { roles: t.payload }
                );
              case Yt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { roles: [].concat(Object(Ks.a)(e.roles), [t.payload]) }
                );
              default:
                return e;
            }
          },
          holidays: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { error: null, isLoading: !0, holidays: [], success: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case $t:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Xt:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Zt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case en:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Kt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    holidays: Object(p.a)(
                      Object(p.a)({}, e.holidays),
                      {},
                      {
                        lists: e.holidays.lists.map(function (e) {
                          return e._id === t.payload._id ? t.payload : e;
                        }),
                      }
                    ),
                  }
                );
              case tn:
              case Jt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { holidays: t.payload }
                );
              case Qt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { holiday: t.payload }
                );
              case Bt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    holidays: Object(p.a)(
                      Object(p.a)({}, e.holidays),
                      {},
                      {
                        lists: [].concat(Object(Ks.a)(e.holidays.lists), [
                          t.payload,
                        ]),
                      }
                    ),
                  }
                );
              case Wt:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { holidays: t.payload }
                );
              default:
                return e;
            }
          },
          trainings: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      error: null,
                      isLoading: !0,
                      trainings: [],
                      success: null,
                    },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case cn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case sn:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case on:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case ln:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case rn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { training: t.payload }
                );
              case an:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainings: t.payload }
                );
              case nn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    trainings: [].concat(Object(Ks.a)(e.trainings), [
                      t.payload,
                    ]),
                  }
                );
              case un:
              case dn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { training: t.payload }
                );
              case jn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainings: t.payload }
                );
              case bn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    trainings: e.trainings.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                    training: t.payload,
                  }
                );
              case pn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { extTrainings: t.payload }
                );
              case mn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingHistory: t.payload }
                );
              case On:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { upcomingTraining: t.payload }
                );
              case fn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainings: t.payload }
                );
              case hn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingCount: t.payload }
                );
              default:
                return e;
            }
          },
          trainingProgress: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      error: null,
                      isLoading: !0,
                      trainingProgresses: [],
                      success: null,
                    },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case gn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Tn:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case _n:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case vn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgress: t.payload }
                );
              case yn:
              case kn:
              case En:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgresses: t.payload }
                );
              case xn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    trainingProgresses: [].concat(
                      Object(Ks.a)(e.trainingProgress),
                      [t.payload]
                    ),
                  }
                );
              case Dn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case wn:
              case In:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgress: t.payload }
                );
              case Cn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgresses: t.payload }
                );
              case An:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    trainingProgresses: e.trainingProgress.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                    trainingProgress: t.payload,
                  }
                );
              case Sn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { extTrainingProgress: t.payload }
                );
              case Rn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgresses: t.payload }
                );
              case Pn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { upcomingTrainingProgress: t.payload }
                );
              case Ln:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { trainingProgresses: t.payload }
                );
              default:
                return e;
            }
          },
          policy: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { error: null, isLoading: !0, policies: [], success: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case qn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case zn:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Vn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case Un:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Fn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    policies: e.policies.map(function (e) {
                      return e._id === t.payload._id ? t.payload : e;
                    }),
                  }
                );
              case Mn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { policy: t.payload }
                );
              case Yn:
              case Hn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { policies: t.payload }
                );
              case Nn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { policies: [].concat(Object(Ks.a)(e.policies), [t.payload]) }
                );
              default:
                return e;
            }
          },
          notifications: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      error: null,
                      isLoading: !0,
                      notifications: [],
                      success: null,
                    },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Gn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { isLoading: !0, error: null, success: null }
                );
              case Bn:
                return Object(p.a)(Object(p.a)({}, e), {}, { isLoading: !1 });
              case Kn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { error: Ws(t.error) || '', isLoading: !1 }
                );
              case Wn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { success: t.payload.success }
                );
              case Jn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  { notifications: t.payload }
                );
              case Qn:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    notifications: e.notifications.filter(function (e) {
                      return e.content.type != t.payload.type;
                    }),
                  }
                );
              case $n:
                return Object(p.a)(
                  Object(p.a)({}, e),
                  {},
                  {
                    notifications: e.notifications.map(function (e) {
                      return e._id == t.payload._id
                        ? Object(p.a)(Object(p.a)({}, e), {}, { read: !0 })
                        : e;
                    }),
                  }
                );
              default:
                return e;
            }
          },
        }),
        $s = n(549),
        Xs = n.n($s),
        Zs =
          (n(1007),
          n(1008),
          Boolean(
            'localhost' === window.location.hostname ||
              '[::1]' === window.location.hostname ||
              window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
              )
          ));
      function ei(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function () {
                  'installed' === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          'New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.'
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log('Content is cached for offline use.'),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error('Error during service worker registration:', e);
          });
      }
      var ti = { key: 'root', storage: Xs.a },
        ni = Object(j.a)(ti, function (e, t) {
          return t.type === it && (e = void 0), Qs(e, t);
        }),
        ai = Object(o.createStore)(
          ni,
          Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))
        ),
        ri = Object(j.b)(ai);
      s.a.render(
        Object(_a.jsx)(i.a, {
          store: ai,
          children: Object(_a.jsx)(b.a, {
            loading: null,
            persistor: ri,
            children: Object(_a.jsx)(u.b, {
              locale: Gr.a,
              children: Object(_a.jsx)(G.a, {
                children: Object(_a.jsx)(Bs, {}),
              }),
            }),
          }),
        }),
        document.getElementById('root')
      ),
        (function (e) {
          if ('serviceWorker' in navigator) {
            if (
              new URL('', window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener('load', function () {
              var t = ''.concat('', '/service-worker.js');
              Zs
                ? (!(function (e, t) {
                    fetch(e, { headers: { 'Service-Worker': 'script' } })
                      .then(function (n) {
                        var a = n.headers.get('content-type');
                        404 === n.status ||
                        (null != a && -1 === a.indexOf('javascript'))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : ei(e, t);
                      })
                      .catch(function () {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA'
                    );
                  }))
                : ei(t, e);
            });
          }
        })();
    },
    289: function (e, t, n) {},
    477: function (e, t, n) {},
    644: function (e, t, n) {},
    763: function (e, t, n) {},
    764: function (e, t, n) {},
    765: function (e, t, n) {},
    766: function (e, t, n) {},
    767: function (e, t, n) {},
    768: function (e, t, n) {},
    770: function (e, t, n) {},
    869: function (e, t, n) {},
    870: function (e, t, n) {},
    871: function (e, t, n) {},
    934: function (e, t, n) {},
    935: function (e, t, n) {},
    936: function (e, t, n) {},
    953: function (e, t, n) {},
    954: function (e, t, n) {},
    955: function (e, t, n) {},
    958: function (e, t, n) {},
    963: function (e, t, n) {},
    964: function (e, t, n) {},
    965: function (e, t, n) {},
    967: function (e, t, n) {},
    968: function (e, t, n) {},
    969: function (e, t, n) {},
    970: function (e, t, n) {},
    988: function (e, t, n) {},
    989: function (e, t, n) {},
  },
  [[1009, 1, 2]],
]);
//# sourceMappingURL=main.87cea467.chunk.js.map
