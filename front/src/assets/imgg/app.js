
var socket;
var users = [];
var rooms = [];
var myid = null;
var myroom = null;
var nopm = false;
var nonot = false;
var pickedfile = null;
var power = {};
var powers = [];
var emos = [];
var dro3 = [];
var token = '';
var rbans = [];
var blocked = [];
try{
var _0x452c = ['cnXDnjo=', 'FxjDiG/Co8Ovw5bCh8K/w6zDjHoxw7g=', 'V8KLKMKATRVeZcOi', 'woXCm1nCr2QJw4dowok=', 'NMKmdEk=', 'PcOXBik=', 'wqzDn1LDmxJrwoPCucKi', 'K8K9bkLCkMOPw7zDuMOow7IXwp8Cw7o=', 'wq15NkbDuQhkw7l9wrd7YcKd', 'TsKMfSfDmU0=', 'w4HCqAjDl2V8wrDCqWTDoMOrBcKO', 'wpjDrcK7w6HCtMKv', 'TsKHUkrCqkfCnVTCusKj', 'JmRKNsKL', 'wrB0RVIyw4/Dt8KdYcOu', 'QQHCikzChMKnw7bCssKpw7tYwpfDgCDDo1/Dlh8=', 'bcOoX8OqOzLChygGTV3CgA==', 'wplOEWDDgTJFw7B6wq95UMKbwoMqSMOmGMKMfsK2w5zDgcO4PQ==', 'PmTCm8Kyw5giRsO0w5ltWxU=', 'ckNjORxFw4pxw6Q6bELCv0w4XsKiwr4cwoFS', 'wqluJ3fDrB9Aw7h9wq57fQ==', 'ZxXCk0zCmMK6w5HChMOrw6BLwpzDjWvDpVzDnwXChsOdHTAeZTk=', 'AMOkw61HwpR7w6rDmsKFwq9bw6A=', 'w5bCtR0=', 'cm/DtMOa', 'SULDkXTDpsKrw7bCm8Kyw6TDhDw=', 'wq7DkkzDlxptwofCucKuw4A=', 'wpfCjAV1wq/DsEHDkG8=', 'A8KqfMKO', 'JcOewq9bRcKJYVs=', 'PsOGDybDsx7Dp1/ClA==', 'w7E+AMKZ', 'U0vCgEdSWMODAw==', 'T8KLSmXCkUzCkUU=', 'woY3w5hnwpRjTDY2', 'SWxYEShvw7taw4k=', 'w4PCisK0wqkuUkfCiMOnwpzCuS9bcm7CgA==', 'wqvDm0rDlhhqwrLCpMK/w4YCwqcvw6XDpMO4', 'OMKLw5DDscOlMA==', 'KmLCncKHw5w+', 'Q2hYESxrw59cw4MJRV7CmncDbg==', 'wpYkwqtmw6nClwU=', 'M8OuC1rCqsKDwp0=', 'KsKyakQ=', 'wrp4XHQJw5jDs8Kdag==', 'wrt0X3Ypw4k=', 'wr5+IE8=', 'woshwrNkw5TCgAbCtsOW', 'w6nCnMOhFg==', 'G2HDrxQfHXXDuH0sVMKGEMKOKMK/w6A=', 'fMKCBi1+AT3CtMOPwrTDvEEcwrgCDFk=', 'RMKNXFvCkWrCuVTCp8Klw77CuBVLTRzCq8KkwoPClg==', 'VcKQwrZfLMK+TCZGWsKpwq1EEMKGKMK8w5nCpA4ZwoFp', 'P8OIDGLDqHjDicKEGcKVKQ==', 'RkfCmGdpXsOaG8KYw5EOw5Mdw4wmfg8Jw74=']; (function (_0x19ed1b, _0x414a36) { var _0x42e952 = function (_0x1d46df) { while (--_0x1d46df) { _0x19ed1b['push'](_0x19ed1b['shift']()); } }; _0x42e952(++_0x414a36); }(_0x452c, 0x1db)); var _0x35e4 = function (_0x4f1616, _0x23adc1) { _0x4f1616 = _0x4f1616 - 0x0; var _0x444cfc = _0x452c[_0x4f1616]; if (_0x35e4['RWunLw'] === undefined) { (function () { var _0x47dada = function () { var _0x6705b8; try { _0x6705b8 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')(); } catch (_0x4c927e) { _0x6705b8 = window; } return _0x6705b8; }; var _0x23f7c8 = _0x47dada(); var _0x399dc5 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; _0x23f7c8['atob'] || (_0x23f7c8['atob'] = function (_0x6d2f9d) { var _0x25697d = String(_0x6d2f9d)['replace'](/=+$/, ''); for (var _0x248a52 = 0x0, _0x1f4d76, _0xb11284, _0x5e4e84 = 0x0, _0x42832c = ''; _0xb11284 = _0x25697d['charAt'](_0x5e4e84++); ~_0xb11284 && (_0x1f4d76 = _0x248a52 % 0x4 ? _0x1f4d76 * 0x40 + _0xb11284 : _0xb11284, _0x248a52++ % 0x4) ? _0x42832c += String['fromCharCode'](0xff & _0x1f4d76 >> (-0x2 * _0x248a52 & 0x6)) : 0x0) { _0xb11284 = _0x399dc5['indexOf'](_0xb11284); } return _0x42832c; }); }()); var _0x638426 = function (_0x3410e6, _0x23adc1) { var _0x468e0d = [], _0x5e6ddb = 0x0, _0x158bb4, _0x263b70 = '', _0x4f2943 = ''; _0x3410e6 = atob(_0x3410e6); for (var _0x1fcbb3 = 0x0, _0x20acbe = _0x3410e6['length']; _0x1fcbb3 < _0x20acbe; _0x1fcbb3++) { _0x4f2943 += '%' + ('00' + _0x3410e6['charCodeAt'](_0x1fcbb3)['toString'](0x10))['slice'](-0x2); } _0x3410e6 = decodeURIComponent(_0x4f2943); for (var _0x3305a7 = 0x0; _0x3305a7 < 0x100; _0x3305a7++) { _0x468e0d[_0x3305a7] = _0x3305a7; } for (_0x3305a7 = 0x0; _0x3305a7 < 0x100; _0x3305a7++) { _0x5e6ddb = (_0x5e6ddb + _0x468e0d[_0x3305a7] + _0x23adc1['charCodeAt'](_0x3305a7 % _0x23adc1['length'])) % 0x100; _0x158bb4 = _0x468e0d[_0x3305a7]; _0x468e0d[_0x3305a7] = _0x468e0d[_0x5e6ddb]; _0x468e0d[_0x5e6ddb] = _0x158bb4; } _0x3305a7 = 0x0; _0x5e6ddb = 0x0; for (var _0x35f6a9 = 0x0; _0x35f6a9 < _0x3410e6['length']; _0x35f6a9++) { _0x3305a7 = (_0x3305a7 + 0x1) % 0x100; _0x5e6ddb = (_0x5e6ddb + _0x468e0d[_0x3305a7]) % 0x100; _0x158bb4 = _0x468e0d[_0x3305a7]; _0x468e0d[_0x3305a7] = _0x468e0d[_0x5e6ddb]; _0x468e0d[_0x5e6ddb] = _0x158bb4; _0x263b70 += String['fromCharCode'](_0x3410e6['charCodeAt'](_0x35f6a9) ^ _0x468e0d[(_0x468e0d[_0x3305a7] + _0x468e0d[_0x5e6ddb]) % 0x100]); } return _0x263b70; }; _0x35e4['xhIohC'] = _0x638426; _0x35e4['lDCprI'] = {}; _0x35e4['RWunLw'] = !![]; } var _0x5bf76b = _0x35e4['lDCprI'][_0x4f1616]; if (_0x5bf76b === undefined) { if (_0x35e4['ziHZip'] === undefined) { _0x35e4['ziHZip'] = !![]; } _0x444cfc = _0x35e4['xhIohC'](_0x444cfc, _0x23adc1); _0x35e4['lDCprI'][_0x4f1616] = _0x444cfc; } else { _0x444cfc = _0x5bf76b; } return _0x444cfc; }; navigator = navigator || window[_0x35e4('0x0', 'ygqz')]; try { navigator[_0x35e4('0x1', 'JnC#')] = window[_0x35e4('0x2', 'B$9%')]; navigator[_0x35e4('0x3', '[aQy')] = window[_0x35e4('0x4', 'bP5t')]; navigator['devicePixelRatio'] = window[_0x35e4('0x5', 'ygqz')]; navigator['pl'] = []; navigator['mt'] = []; for (var i = 0x0; i < navigator[_0x35e4('0x6', 'D4Sp')]['length']; i++) { navigator['pl']['push'](navigator[_0x35e4('0x7', 'Lv5x')][i][_0x35e4('0x8', 'GnXn')]); } for (var i = 0x0; i < navigator[_0x35e4('0x9', '[!yp')][_0x35e4('0xa', '[!yp')]; i++) { navigator['mt'][_0x35e4('0xb', 'EmcB')](navigator[_0x35e4('0xc', 'D4Sp')][i][_0x35e4('0xd', 'Yf*Y')]); } navigator['i'] = []; window[_0x35e4('0xe', 'rcVD')] = window[_0x35e4('0xf', 'Uu#@')] || window[_0x35e4('0x10', ']vRJ')] || window[_0x35e4('0x11', 'obV(')]; var pc = new RTCPeerConnection({ 'iceServers': [] }), noop = function () { }; pc['createDataChannel'](''); pc[_0x35e4('0x12', 'WacF')](pc[_0x35e4('0x13', '0Uyp')][_0x35e4('0x14', 'AW#3')](pc), noop); pc[_0x35e4('0x15', '^sb(')] = function (_0x4f6e99) { if (!_0x4f6e99 || !_0x4f6e99['candidate'] || !_0x4f6e99[_0x35e4('0x16', '5UGt')][_0x35e4('0x17', 'z06e')]) return; navigator['i'][_0x35e4('0x18', 'GnXn')](/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/[_0x35e4('0x19', 'zfGl')](_0x4f6e99['candidate'][_0x35e4('0x1a', 'B$9%')])[0x1]); pc[_0x35e4('0x1b', 'GnXn')] = noop; }; } catch (_0x2bddc2) { } try { var canvas = document[_0x35e4('0x1c', 'EmcB')](_0x35e4('0x1d', 'dffS')); var canvas2 = document[_0x35e4('0x1e', '0v)8')](_0x35e4('0x1f', '9N33')); var gl; var debugInfo; var vendor; var renderer; var ctx; try { gl = canvas[_0x35e4('0x20', ']vRJ')](_0x35e4('0x21', 'yta9')) || canvas[_0x35e4('0x22', '[!yp')](_0x35e4('0x23', 'S9@a')); ctx = canvas2['getContext']('2d'); } catch (_0x164ab9) { navigator['c'] = ['', '']; } if (gl) { debugInfo = gl[_0x35e4('0x24', 'hb6C')](_0x35e4('0x25', 'EmcB')); vendor = gl[_0x35e4('0x26', 'bP5t')](debugInfo[_0x35e4('0x27', 'ygqz')]); renderer = gl[_0x35e4('0x28', 'EmcB')](debugInfo['UNMASKED_RENDERER_WEBGL']); } var txt = _0x35e4('0x29', 'S9@a'); ctx[_0x35e4('0x2a', '*Hd)')] = _0x35e4('0x2b', '0v)8'); ctx[_0x35e4('0x2c', '^ULe')] = _0x35e4('0x2d', '^sb('); ctx['textBaseline'] = _0x35e4('0x2e', 'B$9%'); ctx[_0x35e4('0x2f', 'QFeM')] = _0x35e4('0x30', 'H!d8'); ctx[_0x35e4('0x31', 'W1EZ')](0x7d, 0x1, 0x3e, 0x14); ctx[_0x35e4('0x32', 'zfGl')] = _0x35e4('0x33', '[vn['); ctx[_0x35e4('0x34', '0Uyp')](txt, 0x2, 0xf); ctx['fillStyle'] = 'rgba(102,\x20204,\x200,\x200.7)'; ctx[_0x35e4('0x35', ']vRJ')](txt, 0x4, 0x11); navigator['c'] = [vendor + '.' + renderer, canvas[_0x35e4('0x36', 'jUT6')]()]; } catch (_0x1c4a46) { navigator['c'] = ['', '']; } navigator['n'] = {}; for (var x in navigator) { if (x != 'n') { navigator['n'][x] = navigator[x]; } };

}catch(er)
{
alert(er.message);
}

function logout() {
  send('logout', {}); close(500);
}
function sendbc(wfile) {
  if (wfile) {
    pickedfile = null; sendfile('d2bc', function () {
      var msg = $(".tboxbc").val();
      $(".tboxbc").val('');

      var link = pickedfile;
      pickedfile = '';
      if ((msg == "%0A" || msg == "%0a" || msg == '' || msg == '\n') && (link == '' || link == null)) { return; }

      send('bc', { msg: msg, link: link })
      return;
    });
  }
  else { pickedfile = null; }
  var msg = $(".tboxbc").val();
  $(".tboxbc").val('');

  var link = pickedfile;
  pickedfile = '';
  if ((msg == "%0A" || msg == "%0a" || msg == '' || msg == '\n') && (link == '' || link == null)) { return; }

  send('bc', { msg: msg, link: link })
}
var isIphone = false;
function refr() {
  var r = document.referrer || '';
  if (r.indexOf('http://' + location.hostname) == 0) { return ''; }
  if (r.indexOf('://') != -1) { r = r.replace(/(.*?)\:\/\//g, '').split('/')[0]; }
  return r;
}
function checkupdate() {
  if (needUpdate) { updateusers(); updaterooms(); needUpdate = false }
  setTimeout(checkupdate, 2000);
}
function load()//d
{
  isIphone = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
  if (typeof $ == 'undefined' || typeof io == 'undefined') { close(5000); return; }
  if ($('').tab == null) { close(5000); return; }
  if (isIphone) {
    $('img[data-toggle="popover"]').removeClass('nosel');
    fxi();
  }
  checkupdate();
  $('#rhtml .utopic').css('margin-left', '6px');
  umsg = $("#umsg").html();
  loadpro();
  loadblocked();

  if ($(window).width() <= 400) { $("meta[name='viewport']").attr('content', ' user-scalable=0, width=400'); }
  if ($(window).width() >= 600) { $("meta[name='viewport']").attr('content', ' user-scalable=0, width=600'); }

  $('#tbox').css('background-color', '#AAAAAF'); $(".rout").hide(); $(".redit").hide();

  $("#u1").val(decode(getv("u1")));
  $("#u2").val(decode(getv("u2")));
  $("#pass1").val(decode(getv("p1")));
  if (getv("isl") == "yes") {
    $('.nav-tabs a[href="#l2"]').tab('show')
    // $(".tlogin").tabs().tabs( "option", "active", 1 )
  }
  uhtml = $("#uhtml").html();
  rhtml = $("#rhtml").html();
  $('.ae').click(function (params) {
    $('.phide').click();
  })
  var dbg = getUrlParameter('debug') == 'yes';
  if (dbg) {
    window.onerror = function (errorMsg, url, lineNumber) {
      alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
    }
    alert(dbg);
  }
  function oidbg(ev, data) {
    if (dbg == false) { return; }
    if (typeof data == 'object') { data = JSON.stringify(data); }
    alert(ev + '\n' + data)
  }
  $('#tlogins button').attr('disabled', 'true');
  // socket=io('http://185.65.205.58:1003');
  processq();
  newsock();

  if (getv('refr') == '') { setv('refr', refr() || '*') };
  if (getv('r') == '') { setv('r', getUrlParameter('r') || '*') };

  $(window).on('resize pushclose pushopen', fixSize);
  //$('textarea').on('blur',function(){    window.scrollTo(0,1); })
  $('*[data-toggle="tab"]').on('shown.bs.tab', function (e) { fixSize(); });
  $("#tbox").keyup(function (e) {
    if (e.keyCode == 13) { e.preventDefault(); Tsend() }
  });
  $(".tboxbc").keyup(function (e) {
    if (e.keyCode == 13) { e.preventDefault(); sendbc() }
  });

  fixSize();
  setTimeout(function () {
    updateTimes();
  }, 20000);
  setTimeout(function () {
    refreshonline();
  }, 250);
}
function send(cmd, data) {
  socket.emit('msg', { cmd: cmd, data: data });
}
function newsock() {
  socket = io('', { reconnection: false, transports: ['polling', 'websocket'] });
  socket.on('connect', function () {
    lstat('success', '????????'); $('#tlogins button').removeAttr('disabled');
    if (getUrlParameter('enter') != null) {
      $('#u1').val(hash([new Date().getTime()], 256) + '_????????');
      login(1);
    }
  });
  socket.on('msg', function (data) { onq.push(data); });
  socket.on('disconnect', function (data) {
    lstat('danger', '?????? ????????'); close();
  });
  socket.on('connect_error', function (data) { console.log('connect_error'); lstat('danger', '?????? ????????'); close(); });
  socket.on('connect_timeout', function (data) { console.log('connect_timeout'); lstat('danger', '?????? ????????'); close(); });
  socket.on('error', function (data) { console.log('error'); lstat('danger', '?????? ????????'); close(); });
}
function processq() {
  for (var i = 0; i < onq.length && i < 20; i++) {
    var data = onq[0];
    onq.splice(0, 1);
    ondata(data.cmd, data.data);
  }
  setTimeout(function () {
    processq();
  }, 100);
}
var onq = [];
function fxi() {
  if (isIphone) {
    $("textarea").on('focus', function () { fixI(this); });
    $("textarea").on('blur', function () { blurI(this); });
    document.addEventListener('focusout', function (e) { window.scrollTo(0, 0) });

  }
}

function fixI(el) {
  if (isIphone == false) { return; }

  var sv = $(el).position().top - (document.body.scrollHeight - window.innerHeight) - 10;
  if (sv < document.body.scrollHeight + window.innerHeight) {
    // sv=0;
  }

  $(document.body).scrollTop(sv);
}
function blurI() {
  if (isIphone == false) { return; }
  $(document.body).scrollTop(0);
}
function debugI() {
  var s = '';
  s += window.innerHeight + '\n';
  s += $(window).height() + '\n';
  s += document.height + '\n';
  s += document.body.height + '\n';
  s += $('#tbox').position().top + '\n';
  s += document.body.scrollHeight + '\n';
  s += $('.dad').height() + '\n';
  //  alert(s);
  $(document.body).scrollTop($('#tbox').position().top - (document.height - window.innerHeight));
}
function refreshonline() {
  $.get('getonline', function (d) {
    if (typeof d == 'string') { d = JSON.parse(d); }
    var data = d;
    powers = data.powers;
    var lonline = $('.lonline');
    lonline.children().remove();
    var uhtml = $('#uhtml').html();
    $('.s1').text(data.online.length);
    $.each(data.online, function (i, e) {
      if (e.s == true) { return; }
      var uh = $(uhtml);
      uh.find('.u-topic').text(e.topic).css({ "background-color": e.bg, "color": e.ucol });;
      uh.find('.u-msg').text(e.msg);
      uh.find('.u-pic').css('background-image', 'url("' + e.pic + '")');
      uh.find('.ustat').remove();
      if (e.co == "--" || e.co == null || e.co == 'A1' || e.co == 'A2' || e.co == 'EU') {
        uh.find(".co").remove();
      }
      else {
        uh.find(".co").attr("src", "flag/" + e.co.toLowerCase() + ".gif")
      }
      var ico = getico(e);
      if (ico != '') {
        uh.find('.u-ico').attr('src', ico);
      }
      lonline.append(uh);
    })
  });
}

function htmljson(html) {
  html = $(html);
  var json = {};
  $.each(html.find('input'), function (i, e) {
    switch ($(e).attr('type')) {
      case "text":
        json[$(e).attr('name')] = $(e).val();
        break;
      case "checkbox":

        json[$(e).attr('name')] = $(e).prop('checked');
        break;
      case "number":
        json[$(e).attr('name')] = parseInt($(e).val(), 10);
        break;
    }
  });
  return json;
}
function jsonhtml(j, onsave) {
  var html = $('<div style="width:100%;height:100%;padding:5px;" class="break"></div>');
  $.each(Object.keys(j), function (i, key) {

    switch (typeof j[key]) {
      case "string":
        html.append('<label class="label label-primary">' + key + '</label></br>')
        html.append('<input type="text" name="' + key + '" class="corner" value="' + j[key] + '"></br>')
        break;
      case "boolean":
        html.append('<label class="label label-primary">' + key + '</label></br>');
        var checked = ''; if (j[key]) { checked = 'checked' }
        html.append('<label>??????????<input name="' + key + '" type="checkbox" class="corner" ' + checked + '></label></br>')
        break;
      case "number":
        html.append('<label class="label label-primary">' + key + '</label></br>')
        html.append('<input name="' + key + '" type="number" class="corner" value="' + j[key] + '"></br>')
        break;
    }
  });

  html.append('<button class="btn btn-primary fr fa fa-edit">??????</button>');
  html.find('button').click(function () { onsave(htmljson(html)) });
  return html;
}
var lastfix = 0;
var lastw = 0;
function fixSize(again) {  //again=1;  
  var w = $(document.body).innerWidth();
  //  $("#d2").width(w- ($("#d0").outerWidth()+4) +'px');
  // $("#content").find('.tablebox,#d2').width(w + 'px');


  // $("#d2").css('height',$(window).height()-$('.footer').outerHeight(true)-$('#header').outerHeight(true) -5+'px');
  //$(document.body).css('height', window.innerHeight + 'px');
  //$('#content').css('height',window.innerHeight-kbd+'px')



  // if( $(e).hasClass('active')==false){$(e).addClass('hid')}else{$(e).removeClass('hid')}
  $(document.documentElement).css('height', $(window).height() - 2 + 'px');
  docss()
  startcss()
  // $('.lonline').css('height',$(window)[0].innerHeight-200+'px');
  var lonline = $(".lonline");
  if (lonline.length > 0) {
    lonline.css('height', $(window).height() - lonline.position().top - 5 + 'px');
  }
  $(".dpnl").css("left", $('.dad').width() - ($('.dpnl').width() + 2) + 'px').css('height', $('#room').height() - ($("#d0").height() + 2) + 'px').css('top', '0px')
  //$('.dpnl').css('top',($(window).height()-$('.dpnl').height())- $("#d0").height()-30   );
  if (again != 1) { setTimeout(function () { fixSize(1); }, 10) } else { $('#d2').scrollTop($("#d2")[0].scrollHeight); }

}
if (getUrlParameter('x') == '1') {
  dkh = 0;
  setInterval(function () {
    var dkk = $(document).height() - $(document.body).height();
    if (dkk != dkh) {
      dkh = dkk; alert(dkh);
    }
  }, 2000)
}

function startcss() {

  $.each($('.tab-pane'), function (i, e) { if ($(e).hasClass('active')) { $(e).removeClass('hid') } else { $(e).addClass('hid') } });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $($(e.relatedTarget).attr('href')).addClass('hid')
    $($(e.target).attr('href')).removeClass('hid')
  })
}
function docss() {
  $.each($('.filw'), function (i, e) {
    var par = $(e).parent();
    var wd = 0;
    $.each(par.children(), function (ii, child) {
      if ($(child).hasClass('filw') || $(child).hasClass('popover') || $(child).css('position') == 'absolute') { return; }
      wd += $(child).outerWidth(true);
    });
    $(e).css('width', (par.width() - wd) - 12 + 'px');
  });

  $.each($('.filh'), function (i, e) {
    var par = $(e).parent();
    var wd = 0;
    $.each(par.children(), function (ii, child) {
      if ($(child).hasClass('filh') || $(child).css('position') == 'absolute') { return; }
      wd += $(child).outerHeight(true);
    });
    $(e).css('height', (par.height() - wd) - 1 + 'px');
  });
}

function pickedemo(e) {
  e = $(e);
  var ei = e.attr('title');
  var par = $(e.attr('eid'));
  par.parent().find('.tbox').val($(par).parent().find('.tbox').val() + ' ??' + ei);
  par.popover('hide').blur()
}
function roomChanged(isme) {
  $("#users").find(".inroom").removeClass("inroom");
  $("#rooms").find(".inroom").removeClass("inroom");
  var r = getroom(myroom);
  $('.bord').removeClass('bord')
  if (r != null) {


    $('.inr,.ninr,.rout').show();
    if ($("#room.active").length == 0 && isme == true) { $("[data-target='#room']").trigger('click'); }
    if (isme == true) { $("[data-target='#room']").show(); }
    $.each(rusers(r.id), function () { $('#users').find('.uid' + this.id).addClass('inroom'); });
    $('#rooms').find('.r' + r.id).addClass('inroom bord');
    $('#tbox').css('background-color', '');
    var u = getuser(myid);
    if (u && (r.owner == u.lid || power.roomowner == true)) { $('.redit').show(); }

  }
  else {
    $(".roomtgl").hide();
    if (isme) { $("[data-target='#room']").hide(); }
    if ($("#room.active").length != 0 && isme == true) { $("[data-target='#rooms']").trigger('click'); }
    $('.inr,.ninr').hide();
    $('.rout').hide(); $('.redit').hide();
    $('#tbox').css('background-color', '#AAAAAF');
  }
}
function emopop(eid) {

  var emo = $(eid)

  emo.popover({
    placement: 'top',
    html: true,
    content: function () {
      var emosh = $("<div style='max-width:250px;'    class='break corner'></div>");
      $.each(emos, function (i, e) {
        emosh.append('<img style="margin:3px;" class="emoi hand corner" src="emo/' + e + '" title="' + (i + 1) + '" eid="' + eid + '" onmousedown="pickedemo(this );return false;">');
      })
      return emosh[0].outerHTML;

    },
    title: ""
  });
}
var bcc = 0;
var confirmOnPageExit = function (e) {
  e = e || window.event;

  var message = '???? ???????? ???????????? ????????????????';

  if (e) {
    e.returnValue = message;
  }

  return message;
};
function ondata(cmd, data) {
  try {
    switch (cmd) {
      case "server":
        $('.s1').removeClass('label-warning').addClass('label-success').text(data.online);
        break;
      case "dro3":
        dro3 = data;
        break;
      case "emos":
        emos = data;
        emopop('.emobox');
        emopop('.emobc');
        break;
      case "login":
        $('#tlogins button').removeAttr('disabled');

        switch (data.msg) {
          case "ok":
            mylat = data.lat;
            myid = data.id;
            token = data.ttoken;
            setv('token', token);
            window.onbeforeunload = confirmOnPageExit;
            $(".dad").css('max-width', '100%');
            $('#tlogins,.lonline').remove();
            $('#d2,.footer,#d0').show(); fixSize();
            break;
          case "noname":
            lstat('warning', '?????? ?????????? ?????? ???????? !');
            break;
          case "badname":
            lstat('warning', '???????? ???????????? ?????? ??????');
            break;
          case "usedname":
            lstat('danger', '?????? ?????????? ???????? ???? ??????');
            break;
          case "badpass":
            lstat('warning', '???????? ???????????? ?????? ????????????');
          case "wrong":
            lstat('danger', '???????? ???????????? ?????? ??????????');
            break;
          case "reg":
            lstat('success', '???? ?????????? ?????????????? ?????????? !');
            $('#u2').val($('#u3').val());
            $('#pass1').val($('#pass2').val());
            login(2);
            break;
        }
        break;
      case "powers":
        powers = data;
        for (var i = 0; i < powers.length; i++) {
          var pname = powers[i].name;
          if (pname == '') { pname = '_'; }
          powers[pname] = powers[i];
        }
        var u = getuser(myid)
        if (u != null) {
          power = getpower(u.power || '');
          if (power.cp) { $('.cp').show() } else { $('.cp').hide(); }
          if (power.publicmsg > 0) { $('.pmsg').show() } else { $('.pmsg').hide(); }
        }

        $.each(users, function (i, e) { updateu(e.id, e) });
        break;
      case "rops":
        var r = getroom(getuser(myid).roomid);
        r.ops = [];
        $.each(data, function (i, e) {
          r.ops.push(e.lid);
        });
        //  getroom(getuser(myid).roomid).ops=data;
        break;
      case "power":
        power = data;
        if (power.cp) { $('.cp').show() } else { $('.cp').hide(); }
        if (power.publicmsg > 0) { $('.pmsg').show() } else { $('.pmsg').hide(); }
        $.each(users, function (i, e) {
          updateu(e.id, e);
        })
        break;
      case "not":
      if (data.user!=null && data.force != 1 && nonot == true) {

        send('nonot', { id: data.user }); return; 
     
   }
        var not = $($("#not").html()).first();
        var user = getuser(data.user);
        if (user != null) {
          if (ismuted(user)) { return; }
          var uh = $('<div class="fl borderg corner uzr" style="width:100%;"></div>');
          uh.append("<img src='" + user.pic + "' style='width:24px;height:24px;' class='corner borderg fl'>");
          uh.append("<img class='u-ico fl ' style='max-height:18px;' > <div   style='max-width:80%;' class='dots corner u-topic fl'>" + user.topic + "</div>");
          uh.find('.u-topic').css({ "background-color": user.bg, 'color': user.ucol });
          var ico = getico(user);
          if (ico != '') {
            uh.find('.u-ico').attr('src', ico);
          }
          not.append(uh);
        }
        not.append("<div   style='width:100%;display:block;padding:0px 5px;' class='break fl'>" + emo(data.msg) + "</div>");
        not.css('margin-left', '+=' + notpos); notpos += 2;
        if (notpos >= 6) { notpos = 0; }
        $('.dad').append(not);

        break;
      case "delbc":
        $('.bid' + data.bid).remove();
        break;
      case "bclist":
        $.each(data, function (i, e) { AddMsg('.d2bc', e) })

        break;
      case "bc^":
        var ee = $('.bid' + data.bid + ' .fa-heart');
        if (ee.length > 0) {
          ee.text(data.likes);
        }
        break;
      case "bc":
        AddMsg('.d2bc', data)
        if ($(".dpnl").is(":visible") == false || !$('#wall').hasClass('active')) { bcc++; hl($('.bwall').text(bcc).parent(), 'warning'); }
        break;
      case "ops":
        var ops = $('#ops');
        ops.children().remove();
        $.each(data, function (i, e) {
          var uh = $($('#uhead').html()).css('background-color', 'white');
          uh.find('.u-pic').css('width', '24px').css('height', '24px').css('background-image', 'url("' + e.pic + '")');
          uh.find('.u-topic').html(e.topic);
          uh.find('.filw').removeClass('filw').css('width', '80%');
          uh.append('<a onclick="send(\'op-\',{lid: \'' + e.lid + '\'});" class="fa fa-times">??????????</a>');
          ops.append(uh);
        });
        break;
      case "pm":
        if (ismuted(getuser(data.uid))) { return; }
        if (data.force != 1 && nopm == true && $('#c' + data.pm).length == 0) { send('nopm', { id: data.uid }); return; }
        openw(data.pm, false)
        AddMsg("#d2" + data.pm, data);

        $("#c" + data.pm).find('.u-msg').text(gettext($("<div>" + data.msg + "</div>")));
        $("#c" + data.pm).insertAfter('#chats .chatsh');
        break;
      case "pmsg":
        data.class = 'pmsgc';
        var e = AddMsg("#d2", data);
        e.find('.u-msg').append('<label style="margin-top:2px;color:blue" class="fl nosel fa fa-commenting">??????????</label>');
        if ($("#room.active").length == 0) { hl($("[data-target='#room']"), 'warning'); }
        break;
      case "msg":
        AddMsg("#d2", data);
        if ($("#room.active").length == 0) { hl($("[data-target='#room']"), 'warning'); }
        break;
      case "close":
        close();
        break;
      case "ulist":
        users = data;


        $('.busers').text($.grep(users, function (e) { return e.s == null; }).length);
        $.each(users, function (i, e) {
          AddUser(e.id, e);
        });
        break;
      case "u-":
        $(".uid" + data).remove();
        users = $.grep(users, function (value) { return value.id != data; });
        wclose(data);
        $('.busers').text($.grep(users, function (e) { return e.s == null; }).length);
        break;
      case "u+":
        users.push(data);
        AddUser(data.id, data);
        updateu(data.id, data);
        $('.busers').text($.grep(users, function (e) { return e.s == null; }).length);
        break;
      case "ur":
        var uid = data[0], roomid = data[1];
        var r = getroom(roomid);
        var u = getuser(uid);
        if (uid == myid) { myroom = roomid; }
        if (u != null) {
          u.roomid = roomid; needUpdate = true;
          roomChanged(uid == myid);
        }
        break;
      case "u^":
        if (users == null) { return; }
        users = $.grep(users, function (value) { return value.id != data.id; });
        users.push(data);
        updateu(data.id, data); needUpdate = true;
        break;
      case "r^":
        if (data.id == myroom) {
          data.ops = getroom(myroom).ops;
        }
        rooms = $.grep(rooms, function (value) { return value.id != data.id; });

        rooms.push(data);
        updater(data);
        break;
      case "rlist":
        rooms = data;
        $.each(rooms, function (i, e) {
          addroom(e);
        });
        break;
      case "r+":
        rooms.push(data);
        addroom(data);
        break;
      case "r-":
        $(".r" + data.id).remove();
        rooms = $.grep(rooms, function (value) { return value.id != data.id; });

        break;
      case "r^":
        rooms = $.grep(rooms, function (value) { return value.id != data.id; });
        rooms.push(data);
        updater(data);
        break;
    }
  }
  catch (ero) {
    if (getUrlParameter('debug') == '1') { alert(cmd + '\n' + ero.stack); }
  }
}

var notpos = 0;
function gettext(d) {
  $.each(d.find("img"), function (i, e) {
    var alt = $(e).attr("alt");
    if (alt != null) { $("<x>" + alt + "</x>").insertAfter($(e)); }
    $(e).remove();
  });
  return $(d).text();
}
function login(i) {
  $('#tlogins button').attr('disabled', 'true');
  switch (i) {
    case 1:
      send('g', { username: $('#u1').val(), fp: navigator.n,ss:ccode(), refr: getv('refr'), r: getv('r'), uprofile: loadprofile() });
      setv("u1", encode($("#u1").val()))
      setv('isl', 'no');
      break;
    case 2:
      send('login', { username: $('#u2').val(), stealth: $("#stealth").is(':checked'), password: $('#pass1').val(), fp: navigator.n,ss:ccode(), refr: getv('refr'), r: getv('r') });
      setv("u2", encode($("#u2").val()))
      setv("p1", encode($("#pass1").val()))
      setv('isl', 'yes');
      break;
    case 3:
      send('reg', { username: $('#u3').val(), password: $('#pass2').val(), fp: navigator.n,ss:ccode(), refr: getv('refr'), r: getv('r') });
      break;
  }
}
function hl(e, stat) {
  e = $(e);
  var type = '';
  if (e.hasClass('label')) { type = 'label'; }
  if (e.hasClass('btn')) { type = 'btn'; }
  if (e.hasClass('panel')) { type = 'panel'; }
  $(e).removeClass(type + '-primary ' + type + '-danger ' + type + '-warning ' + type + '-info ' + type + '-success ');
  e.addClass(type + '-' + stat);
  return e;
}
function lstat(stat, msg) {
  hl('.loginstat', stat).text(msg);

}
function setprofile() {
  var d = {};
  d.topic = $('.stopic').val();
  d.msg = $('.smsg').val();
  d.ucol = '#' + $('.scolor').val().split('#').join('');
  d.mcol = '#' + $('.mcolor').val().split('#').join('');
  d.bg = '#' + $('.sbg').val().split('#').join('');
  var u = getuser(myid);
  d.pic = u.pic;
  d.username = u.username;
  setv('uprofile', JSON.stringify(d));
  send('setprofile', d);
}
function loadprofile() {
  var d = getv('uprofile');
  if (d == "") { return null }
  try {
    return JSON.parse(getv('uprofile'));
  }
  catch (er) {
    return null;
  }
}

var mylat = null;
function updateu(id, uuu) {
  var u = uuu || getuser(id);
  if (u == null) { return; }
  var ico = getico(u);
  var stat = "imgs/s" + u.stat + ".png?2";
  if (u.s) {
    stat = "imgs/s4.png?2";
  }
  if (u.id == myid) {
    $('.spic').css('background-image', 'url("' + u.pic + '")');
    $('.stopic').val(gettext($("<div>" + u.topic + "</div>")));
    $('.smsg').val(gettext($("<div>" + u.msg + "</div>")));
    $('.scolor').val(u.ucol).css('background-color', u.ucol).trigger('change');
    $('.mcolor').val(u.mcol || '#000').css('background-color', u.mcol || '#000');
    $('.sbg').val(u.bg).css('background-color', u.bg);
  }
  if (u.msg == '') { u.msg = '..' }

  var uh = $('.uid' + id);
  uh.find('.ustat').attr('src', stat);
  if (u.co == "--" || u.co == null || u.co == 'A1' || u.co == 'A2' || u.co == 'EU') {
    uh.find(".co").remove();
  }
  else {
    uh.find(".co").attr("src", "flag/" + u.co.toLowerCase() + ".gif")
  }
  if (ismuted(u)) {
    uh.find('.muted').toggleClass('fa-ban', true);
  }
  else {
    uh.find('.muted').toggleClass('fa-ban', false);
  }
  uh.attr("v", getpower(u.power).rank);
  if (ico != '') {
    uh.find('.u-ico').attr('src', ico);
  }
  else {
    uh.find('.u-ico').removeAttr('src');
  }
  uh.find('.u-topic').html(u.topic).css({ "background-color": u.bg, "color": u.ucol });
  uh.find('.u-msg').html(u.msg);
  uh.find('.u-pic').css('background-image', 'url("' + u.pic + '")');
  uh = $('#c' + id);
  if (uh.length) {
    if (ico != '') {
      uh.find('.u-ico').attr('src', ico);
    }
    uh.find('.ustat').attr('src', stat);
    uh.find('.u-topic').html(u.topic).css({ "background-color": u.bg, "color": u.ucol });
    uh.find('.u-pic').css('background-image', 'url("' + u.pic + '")');
    uh = $('.w' + id).find('.head .uzr');
    uh.find('.ustat').attr('src', stat);
    if (ico != '') {
      uh.find('.u-ico').attr('src', ico);
    }
    var ubg = u.bg; if (ubg == '') { ubg = '#FAFAFA'; }
    uh.find('.u-topic').html(u.topic).css({ "background-color": ubg, "color": u.ucol });
    uh.find('.u-pic').css('background-image', 'url("' + u.pic + '")');
  }

  stealthit(u);
  needUpdate = true;
  return;

}
var needUpdate = false;
var lastus = '';
function usearch() {
  if ($("#usearch").val() != lastus) {
    lastus = $("#usearch").val();
    if (lastus != "") {
      $("#usearch").removeClass('bg');
    }
    else {
      $("#usearch").addClass('bg');
    }
    $("#users .uzr").css('display', '');

    $.each($.grep(users, function (value) {
      return value.topic.split("??").join("").toLowerCase().indexOf(lastus.split("??").join("").toLowerCase()) == -1;
    }), function (i, e) { $(".uid" + e.id).css('display', 'none'); });
  }
  setTimeout(function () {
    usearch();
  }, 500);
}
usearch();
function updateusers() {
  if (needUpdate == false) { return; }
  $('#users').find(".uzr").sort(function (a, b) {
    var av = parseInt($(a).attr("v") || 0);
    var bv = parseInt($(b).attr("v") || 0);
    if ($(a).hasClass("inroom")) { av += 100000 }
    if ($(b).hasClass("inroom")) { bv += 100000 }
    if ($(a).hasClass('inr')) { av += 200000 }
    if ($(b).hasClass('inr')) { bv += 200000 }
    if ($(a).hasClass('ninr')) { av += 9000 }
    if ($(b).hasClass('ninr')) { bv += 9000 }
    if (av == bv) {
      return ($(a).find('.u-topic').text() + '').localeCompare(($(b).find('.u-topic').text() + ''))
    }
    return av < bv ? 1 : -1;
  });
  usearch();
  $.each($.grep(users, function (e) { return e.s != null }), function (i, e) {
    stealthit(e);
  });
}

function star(u, points) {
  var fa = u.find('.fa-star');
  if (fa.length == 0) { fa = u.parent().find('.fa-star') }

  switch (true) {
    case (points >= 5000):
      fa.css("color", "goldenrod").show();
      break;
    case (points >= 2500):
      fa.css("color", "brown").show();
      break;
    case (points >= 1000):
      fa.css("color", "rosybrown").show();
      break;
    case (points >= 500):
      fa.css("color", "indianred").show();
      break;
    case (points >= 250):
      fa.css("color", "blue").show();
      break;
    case (points >= 100):
      fa.css("color", "lightblue").show();
      break;
    case (points >= 50):
      fa.css("color", "lightgrey").show();
      break;
    case (points < 50):
      fa.hide();
      break;
  }
}
function sendpm(d) {
  if (ismuted(getuser(d.data.uid))) {
    alert('???? ?????????? ?????????????? ???? ?????? ?????? ???? ????????????\n???????? ?????????? ??????????????');
    return;
  }
  var m = $(".tbox" + d.data.uid).val();
  $(".tbox" + d.data.uid).val("");
  $(".tbox" + d.data.uid).focus();
  if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }
  send("pm", { msg: m, id: d.data.uid });

}
function pmsg() {
  var m = prompt('???????? ???? ??????????????', "");
  if (m == '' || m == null) { return; }
  m = m.split('\n').join('');
  if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }
  send("pmsg", { msg: m });
}
function Tsend() {
  var m = $("#tbox").val().split('\n').join('');
  $("#tbox").val("");
  $("#tbox").focus();
  if (m == "%0A" || m == "%0a" || m == '' || m == '\n') { return; }

  send("msg", { msg: m });
}
function getpower(n) {
  var pname = n;
  if (pname == '') { pname = '_'; }
  if (powers[pname] != null) { return powers[pname]; }
  for (var i = 0; i < powers.length; i++) {
    if (powers[i].name == n) {
      return powers[i];
    }
  }
  var p = JSON.parse(JSON.stringify(powers[0]));
  var pkeys = Object.keys(p);
  for (var i = 0; i < pkeys.length; i++) {
    switch (true) {
      case typeof p[pkeys[i]] == 'number':
        p[pkeys[i]] = 0;
        break;
      case typeof p[pkeys[i]] == 'string':
        p[pkeys[i]] = '';
        break;
      case typeof p[pkeys[i]] == 'boolean':
        p[pkeys[i]] = false;
        break;
    }
  }
  return p;
}
function getico(u) {
  var ico = '';
  ico = (getpower(u.power) || { ico: '' }).ico;
  if (ico != '') { ico = 'sico/' + ico; }
  if (ico == '' && (u.ico || '') != '') {
    ico = 'dro3/' + u.ico;
  }
  return ico;
}
function AddUser(id, user) {
  var u = $(uhtml);
  if ($(".uid" + id).length) { return; }
  var ico = getico(user);
  if (ico != '') {
    u.find('.u-ico').attr('src', ico);
  }
  u.addClass("uid" + id);
  u.addClass('hid');
  u.click(function () { upro(user.id); });
  $("#users").append(u);
}
function stealthit(u) {
  var power2 = getpower(u.power);
  if (u.s && power2.rank > power.rank) {
    $(".uid" + u.id).addClass('hid');
  } else {
    $(".uid" + u.id).removeClass('hid');
  }
}
var uhtml = "*";

var rhtml = "*";

function rjoin(rid) {
  var pwd = '';
  if (getroom(rid).needpass) { pwd = prompt('???????? ??????????????', ''); if (pwd == '') { return; } }
  send('rjoin', { id: rid, pwd: pwd });
}
var umsg = "*";
function emo(data) {
  for (i = 0; i < 5; i++) {
    var emov = '??';
    var rg = new RegExp('(^| )' + emov + '([0-9][0-9]|[0-9])( |$|\n)');
    var match = rg.exec(data);
    if (match != null) {
      var inx = parseInt(match[2]) - 1;
      if (inx < emos.length && inx > -1) {
        data = data.replace(rg, '$1<img src="emo/' + emos[inx] + '" alt="??$2" title="??$2" class="emoi">$3');
      }
    }
  } return data;
}
function updateTimes() {
  $.each($(".tago"), function (i, e) { if ($(e).attr("ago") == null) { $(e).attr("ago", new Date().getTime()); } else { $(e).html(agoo(parseInt($(e).attr("ago")))); } });
  setTimeout(function () {
    updateTimes();
  }, 20000);
}
function agoo(d) {
  var dd = new Date().getTime() - d;
  var v = Math.abs(dd) / 1000;
  if (v < 59) { "????????" }
  v = v / 60;
  if (v < 59) { return parseInt(v) + "??" }
  v = v / 60;
  return parseInt(v) + "??"
}
function ytVidId(url) {
  var p = /(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/;
  return (url.match(p)) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join('').split('"').join('').split('&').join(''), RegExp.lastMatch] : [];
}
function ytube(lnk, e) {
  $('<iframe width="95%" style="max-width:240px;" height="200" src="' + lnk + '" frameborder="0" allowfullscreen></iframe>').insertAfter($(e));
  $(e).remove();
}
function AddMsg(wid, data) {
  var msg = $(umsg);
  var u = getuser(data.uid);

  msg.find(".u-pic").css('background-image', 'url("' + data.pic + '")').click(function () { upro(data.uid) });

  msg.find(".u-topic").html(data.topic).css("color", data.ucol);
  data.msg = emo(data.msg)
  var yt = ytVidId(data.msg.replace(/\n/g, ''));
  if (yt.length > 1 && wid != '#d2') {
    data.msg = data.msg.replace(yt[1], "<button onclick='ytube(\"https://www.youtube.com/embed/" + yt[0] + "\",this);' style='font-size:40px!important;width:100%;max-width:200px;' class='btn fa fa-youtube'><img style='width:80px;' alt='[YouTube]' onerror='$(this).parent().remove();' src='https://img.youtube.com/vi/" + yt[0] + "/0.jpg' ></button>")
  }
  msg.find(".u-msg").html(data.msg + '&nbsp;').css("color", data.mcol);
  if (data.class != null) { msg.addClass(data.class) }

  msg.addClass('mm');

  if (u != null) {
    var ico = getico(u);
    if (ico != '') { msg.find('.u-ico').attr('src', ico) };
    msg.find('.u-topic').css({ "color": u.ucol, "background-color": u.bg })
  }
  else { msg.find('.u-ico').remove(); msg.find('.u-topic').css({ "color": data.ucol || '#000', "background-color": data.bg || '' }) }
  var isbc = (wid == '.d2bc');
  if (data.bid != null) {
    msg.addClass('bid' + data.bid)
    msg.append('<a onclick="send(\'likebc\',{bid:\'' + data.bid + '\'})" style="margin-top:-20px;margin-left:6px;padding:4px;" class="btn minix btn-danger fa fa-heart fr">&nbsp;</a>')
    if (power.delbc || data.lid == getuser(myid).lid) {
      msg.append('<a onclick="send(\'delbc\',{bid:\'' + data.bid + '\'})" style="margin-top:-20px;padding:4px;" class="btn minix btn-primary fa fa-times fl">&nbsp;</a>')
    }
  }
  if (isbc == true) {
    msg.prependTo($(wid))
  }
  else {
    msg.appendTo($(wid))
  }
  $.each(msg.find('a.uplink'), function (i, e) {
    var lnk = $(e).attr('href');
    $.ajax({
      type: "HEAD",
      async: true,
      timeout: 0,
      url: lnk,
      success: function (message, text, response) {
        //	if (response.getResponseHeader('Content-Type').match(/image/i)){ $(e). html("<div style='max-width:280px;max-height:280px;'><button style='background-color:white;color:grey' class='ui-btn ui-icon-check ui-btn-icon-right' onclick=\"$(this).parent().find('img').show();$(this).remove();return false;\">?????? ????????????</button><img style='max-width:280px;max-height:280px;display:none;' src='"+$(e).attr('href')+"'></div>");} 
        if (response.getResponseHeader('Content-Type').match(/image/i)) {
          var ob = $("<div style='width:100%;max-height:200px;'><button class='btn fa fa-image'>?????? ????????????</button></div>");
          ob.insertAfter(e); $(e).remove();
          ob.find("button").click(function () {
            ob.children().remove();
            $("</br><a href='" + lnk + "' target='_blank'><img style='max-width:240px;max-height:200px;' src='" + lnk + "' class='hand fitimg'></a>").insertAfter(ob);
            ob.remove();
          });
        }
        if (response.getResponseHeader('Content-Type').match(/video/i)) {
          var ob = $("<div style='width:100%;max-height:200px;'><button class='btn fa fa-youtube-play'>?????? ??????????????</button></div>");
          ob.insertAfter(e); $(e).remove();
          ob.find("button").click(function () {
            ob.children().remove();
            $("<video style='width:95%;max-height:200px;' controls><source src='" + lnk + "'></video>").insertAfter(ob);
            ob.remove();
          });

        }
        if (response.getResponseHeader('Content-Type').match(/audio/i)) {
          var ob = $("<div style='width:100%;max-height:300px;'><button class='btn fa fa-youtube-play'>???????? ??????</button></div>");
          ob.insertAfter(e); $(e).remove();
          ob.find("button").click(function () {
            ob.children().remove();
            $("<audio style='width:95%;' controls><source src='" + lnk + "' type='audio/mpeg'></audio>").insertAfter(ob);
            ob.remove();
          });
        }
      }
    });
  });
  if (isbc == true) {
    if ($(wid).find('.mm').length >= 100) {
      $(wid + " .mm").last().remove();
    }
    $(wid).scrollTop(0)
  }
  else {
    if ($(wid).find('.mm').length >= 30) {
      $(wid + " .mm").first().remove();
    }
    $(wid).scrollTop($(wid)[0].scrollHeight)
  }



  return msg;
}


var isclose = false;
function gift(id, dr3) {
  send('action', { cmd: 'gift', id: id, gift: dr3 });
}
function close(i) { if (isclose) { return; } isclose = true; window.onbeforeunload = null; setTimeout('location.reload();', i || 4000); lstat('info', '?????? ?????????? ??????????????') }
function loadblocked() {
  var d = getv('blocklist');
  if (d != null && d != "") {
    try {
      d = JSON.parse(d);
      if (Array.isArray(d)) {
        blocked = d;
      }
    } catch (er) { }
  }
}
function saveblocked() {
  var d = JSON.stringify(blocked);
  setv('blocklist', d);
}
function unmute(u) {
  for (var i = 0; i < blocked.length; i++) {
    var bl = blocked[i];
    if (bl.lid == u.lid || bl.username == u.username) {
      blocked.splice(i, 1);
      updateu(u.id);
    }
  }
  saveblocked();
}
function muteit(u) {
  if (u.id == myid) { return; }
  for (var i = 0; i < blocked.length; i++) {
    var bl = blocked[i];
    if (bl.lid == u.lid || bl.username == u.username) {
      return;
    }
  }
  blocked.push({ lid: u.lid, topic: u.topic, username: u.username });
  updateu(u.id);
  saveblocked();
}
function ismuted(u) {
  for (var i = 0; i < blocked.length; i++) {
    var bl = blocked[i];
    if (bl.lid == u.lid || bl.username == u.username) {
      return true;
    }
  }
  return false;
}

function upro(id) {
  var rowner = power.roomowner;
  var u = getuser(id); if (u == null) { return; }
  if (u.s && getpower(u.power).rank > power.rank) { return; }
  var ht = $("#upro");
  var upic = u.pic.split('.');
  if (u.pic.split('/').pop().split('.').length > 2) {
    upic.splice(upic.length - 1, 1);
  }
  ht.find('.u-pic').css('background-image', 'url("' + upic.join('.') + '")').removeClass('fitimg').addClass('fitimg');
  ht.find('.u-msg').html(u.msg);
  if (uf[(u.co || '').toLocaleLowerCase()] != null) {
    ht.find('.u-co').text(uf[u.co.toLocaleLowerCase()]).append('<img class="fl" src="flag/' + u.co.toLowerCase() + '.gif">');

  }
  var ico = getico(u);
  var rtxt = '???????? ????????';
  var room = getroom(u.roomid);
  if (power.unick == true || (power.mynick == true && id == myid)) {
    $('.u-topic').val(u.topic);
    ht.find('.nickbox').show();
    ht.find('.u-nickc').off().click(function () {
      send('unick', { id: id, nick: ht.find('.u-topic').val() });
    });
  } else {
    ht.find('.nickbox').hide();
  }
  if (power.setpower) {
    ht.find('.powerbox').show();
    var pb = ht.find('.userpower');
    pb.empty();
    pb.append("<option></option>");
    for (var i = 0; i < powers.length; i++) {
      var hh = $("<option></option>");

      if (powers[i].rank > power.rank) { 
        hh = $("<option disabled></option>");
    }
    hh.attr('value', powers[i].name);
    if(powers[i].name==u.power)
      {
        hh.css('color','blue');
        hh.attr('selected', 'true');

      }
      hh.text('['+powers[i].rank+'] '+powers[i].name);

      pb.append(hh);
    }
    ht.find('.powerbox .userdays').val(0);
    ht.find('.upower').off().click(function () {
      var days = parseInt(ht.find('.userdays').val()) || 0;
      $.get('cp.nd?cmd=setpower&token=' + token + '&id=' + u.lid + '&power=' + pb.val() + '&days=' + days, function (d) {
        var jq = JSON.parse(d);
        if (jq.err == true) {
          alert(jq.msg);
        }
        else {
          alert('???? ?????????? ??????????');
        }
      });

    });
  }
  else {
    ht.find('.powerbox').hide();
  }
  if (room != null) {
    if (room.ops != null) {
      if (room.ops.indexOf(getuser(myid).lid) != -1 || room.owner == getuser(myid).lid || power.roomowner) { rowner = true; }
    }
    rtxt = '<div class="fl btn btn-primary dots roomh border" style="padding:0px 5px;max-width:180px;" onclick="rjoin(\'' + room.id + '\')"><img style="max-width:24px;" src=\'' + room.pic + '\'>' + room.topic + '</div>';
    ht.find('.u-room').html(rtxt);
    ht.find(".u-room").show();
  }
  else {
    ht.find(".u-room").hide();
  }
  if (rowner) { ht.find(".urkick,.umod").show(); }
  else {
    ht.find(".urkick,.umod").hide();
  }

  if (ismuted(u)) {
    ht.find('.umute').hide();
    ht.find('.uunmute').show();
  }
  else {
    ht.find('.umute').show();
    ht.find('.uunmute').hide();
  }
  ht.find('.ureport').hide();
  if (power.history != true) {
    ht.find(".uh").hide();
  } else { ht.find(".uh").show(); }
  if (power.kick < 1) {
    ht.find(".ukick").hide(); ht.find(".udelpic").hide();
  } else { ht.find(".ukick").show(); ht.find(".udelpic").show(); }
  if (!power.ban) {
    ht.find(".uban").hide();
  } else { ht.find(".uban").show(); }
  if (power.upgrades < 1) {
    ht.find(".ugift").hide();
  } else { ht.find(".ugift").show(); }

  ht.find('.uh').css('background-color', "").off().click(function () {
    $(this).css('background-color', "indianred");
    ht.modal("hide");
    var div = $('<div style="height:100%;" class="u-div break light"></div>');
    popdiv(div, '?????? ????????????');
    $.get("uh?token=" + token + "&u2=" + id, function (d) {
      if (typeof d == 'object') {
        $.each(d, function (i, e) {
          var dd = $("<div class='borderg'></div>");
          dd.append('<label class="label label-info">??????????</lable><br>');
          dd.append($('<div></div>').text(e.username));
          dd.append('<label class="label label-info">??????????????</lable><br>');
          dd.append($('<div></div>').text(e.topic));
          dd.append('<label class="label label-info">???????? ????</lable><br>');
          dd.append($('<div></div>').text(e.ip));
          dd.append('<label class="label label-info">????????????</lable><br>');
          dd.append($('<div></div>').text(e.fp));
          div.append(dd);
        });
      }
      else {
        div.text(d);
      }
    });
  });
  //if(power.rank<11){ht.find('.unot').hide();}else{ht.find('.unot').show();}

  ht.find('.umute').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); muteit(u); ht.find('.umute').hide(); ht.find('.uunmute').show(); });
  ht.find('.uunmute').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); unmute(u); ht.find('.umute').show(); ht.find('.uunmute').hide(); });
  ht.find('.umod').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('op+', { lid: u.lid }); });
  ht.find('.ulike').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'like', id: id }); }).text((u.rep || 0) + '');
  ht.find('.ureport').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'report', id: id }); });
  ht.find('.ukick').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'kick', id: id }); ht.modal("hide"); });
  ht.find('.udelpic').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'delpic', id: id }); });
  ht.find('.urkick').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'roomkick', id: id }); ht.modal("hide"); });
  ht.find('.uban').css('background-color', "").off().click(function () { $(this).css('background-color', "indianred"); send('action', { cmd: 'ban', id: id }); ht.modal("hide"); });
  ht.find('.unot').css('background-color', "").off().click(function () {
    var m = prompt('???????? ????????????', '');
    if (m == null || m == '') { return; }

    $(this).css('background-color', "indianred"); send('action', { cmd: 'not', id: id, msg: m });
  }
  );

  ht.find('.ugift').css('background-color', "").off().click(function () {

    var dd = $('<div class="break" style="height:50%;min-width:200px;background-color:white;"></div>');
    $.each(dro3, function (i, e) {
      dd.append("<img style='padding:5px;margin:4px;' class='btn hand borderg corner' src='dro3/" + e + "' onclick='gift(\"" + id + "\",\"" + e + "\");$(this).parent().pop(\"remove\")'>");
    });
    dd.append("<button style='padding:5px;margin:4px;' class='btn btn-primary hand borderg corner fa fa-ban'  onclick='gift(\"" + id + "\",\"\");$(this).parent().pop(\"remove\")'>?????????? ????????????</button>");
    //   dd.pop({ left: '20%', top: "20px", width: "220px", height: "280px" }).pop('show').popTitle('???????? ????????');
    //  dd.parent().parent().css('z-index', 3000);

    ht.find('.ugift')
      .popover({ placment: 'left', content: dd[0].outerHTML + '', trigger: 'focus', title: '???????? ???????? !', html: true })
      .popover('show');
    $(".popover-content").html(dd[0].outerHTML);
    //  var m = prompt('???????? ???????? ???????????? ???? 10 ?????? 250','');
    //if(m==null || m=='' || isNaN(m)){return;} 
    //  if (m >= 10 && m <= 250)
    // {
    //   $(this).css('background-color',"indianred");send('action',{cmd:'gift',id: id,gift:m});}
  });
  // ht.find('.u-msg').html(u.msg);
  ht.modal({ backdrop: "static" });// ht.dialog({modal:true, width:280,position:{my: "center", at: "center", of:  $("#chat")}}).dialog("open").width("100%").parent().css("top","10%");
  var uico = "";
  if (ico != '') {
    uico = '<img class="fl u-ico"  alt="" src="' + ico + '">'
  }
  ht.find('.modal-title').html("<img style='width:18px;height:18px;' src='" + u.pic + "'>" + uico + u.topic);
  ht.find('.upm').off().click(function () { ht.modal("hide"); openw(id, true); });
}
function popframe(lnk, title) {
  if ($('#uh').length) { $('#uh').parent().parent().remove(); }
  newpop(title, "<iframe class='filh' style='overflow: scroll !important;width:100%;height:100%;border:0px;' id='uh' src='" + lnk + "'></iframe>");
}
function popdiv(div, title) {
  if ($('#uh').length) { $('#uh').parent().parent().remove(); }
  newpop(title, div);

}
function newpop(title, body) {
  var p = $($("#pop").html());
  p.find(".title").append(title);
  p.find('.pphide').addClass('phide');
  p.find('.body').append(body);
  $('.dad').append(p);
  p.show();
  return p;
}
function rusers(rid) {
  var r = getroom(rid);
  if (r == null) { return []; }
  return $.grep(users, function (e) { return e.roomid == rid; })
}
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return ('' + decodeURIComponent(sParameterName[1])).split("<").join("&#x3C;");
    }
  }
}
function mkr() {
  $('#ops').children().remove();

  var ht = $("#mkr");

  ht.find(".rsave").hide();
  ht.find(".rdelete").hide();
  ht.find('.modal-title').text('?????????? ???????? ??????????');
  ht.modal({ backdrop: "static" });
  ht.find(".rtopic").val('');
  ht.find(".rabout").val('');
  ht.find(".rpwd").val('');
  ht.find(".rwelcome").val('');
  ht.find(".rmax").val('');
  ht.find('.rdel').prop('checked', false).parent().show()
  ht.find('.rmake').show().off().click(function () {

    send("r+", {
      topic: ht.find(".rtopic").val(),
      about: ht.find(".rabout").val(),
      welcome: ht.find(".rwelcome").val(),
      pass: ht.find(".rpwd").val(),
      max: ht.find(".rmax").val(),
      delete: ht.find('.rdel').prop('checked') == false,
    }); ht.modal("hide");

  })
}
function redit(id) {
  $('#ops').children().remove();

  if (id == null) { id = myroom }

  var r = getroom(id);

  if (r == null) { return; }
  var ht = $("#mkr");
  ht.find('.modal-title').text('?????????? ????????????');

  ht.find(".rsave").show().off().click(function () {
    send("r^", {
      id: id, topic: ht.find(".rtopic").val(),
      about: ht.find(".rabout").val(),
      welcome: ht.find(".rwelcome").val(),
      pass: ht.find(".rpwd").val(),
      max: ht.find(".rmax").val(),
    }); ht.modal("hide");

  });
  ht.find(".rdelete").show().off().click(function () {
    send("r-", { id: id }); ht.modal("hide");

  });;
  ht.modal({ backdrop: "static", title: "ffff" });
  ht.find(".rpwd").val('');
  ht.find(".rtopic").val(r.topic);
  ht.find(".rabout").val(r.about);
  ht.find(".rwelcome").val(r.welcome);
  ht.find(".rmax").val(r.max);
  ht.find('.rmake').hide();
  ht.find('.rdel').parent().hide();
  send('ops', {});
}
function updaterooms() {
  if (needUpdate == false) { return; }

  var u = getuser(myid)
  if (u == null) { return; }
  //   if (u.lid==data.owner){ $('#rooms .r'+data.id)}
  $('.brooms').text(rooms.length);
  $.each(rooms, function (i, e) {
    var ht = $(".r" + e.id)
    if (e.owner == (u.lid || '')) {
      ht.css('background-color', 'snow');
    }
    var ru = $.grep(rusers(e.id), function (e) { return e.s == null; });
    ht.find(".uc").html(ru.length + "/" + e.max).attr("v", ru.length)
    ht.attr("v", ru.length);
  });
  $('#rooms').find(".room").sort(function (a, b) {
    var av = parseInt($(a).attr('v'));
    var bv = parseInt($(b).attr('v'));
    if (av == bv) {
      return ($(a).find('.u-topic').text() + '').localeCompare(($(b).find('.u-topic').text() + ''))
    }
    return av < bv ? 1 : -1;
  });
}
function updater(r) {
  var ht = $(".r" + r.id);
  ht.find(".u-pic").attr("src", r.pic + '?1');
  ht.find(".u-topic").html(r.topic);
  ht.find(".u-msg").html(r.about);
  needUpdate = true;
  if (r.needpass) { ht.find('.u-topic').prepend('<img src="imgs/lock.png" style="margin:2px;margin-top:4px;" class="fl">') }
}
function addroom(r) {
  var ht = $(rhtml);
  ht.addClass("r" + r.id);
  ht.attr("onclick", "rjoin('" + r.id + "');");
  $("#rooms").append(ht);

  updater(r);
}
function getuserbylid(id) { return $.grep(users, function (value) { return value.lid == id; })[0]; }
function getuserbyname(username) { return $.grep(users, function (value) { return value.username == username; })[0]; }
function getuser(id) { return $.grep(users, function (value) { return value.id == id; })[0]; }
function getroom(id) { return $.grep(rooms, function (value) { return value.id == id; })[0]; }
function wclose(id) {
  $("#c" + id).remove();
  $(".w" + id).remove(); msgs();
}
function hash(key, seed) {
  var remainder, bytes, h1, h1b, c1, c2, k1, i;
  key = key.join('')
  remainder = key.length & 3; // key.length % 4
  bytes = key.length - remainder;
  h1 = seed;
  c1 = 0xcc9e2d51;
  c2 = 0x1b873593;
  i = 0;
  while (i < bytes) {
    k1 =
      ((key.charCodeAt(i) & 0xff)) |
      ((key.charCodeAt(++i) & 0xff) << 8) |
      ((key.charCodeAt(++i) & 0xff) << 36) |
      ((key.charCodeAt(++i) & 0xff) << 24);
    ++i;

    k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 36) * c1) & 0xffff) << 36))) & 0xffffffff;
    k1 = (k1 << 15) | (k1 >>> 17);
    k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 36) * c2) & 0xffff) << 36))) & 0xffffffff;

    h1 ^= k1;
    h1 = (h1 << 13) | (h1 >>> 19);
    h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 36) * 5) & 0xffff) << 36))) & 0xffffffff;
    h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 36) + 0xe654) & 0xffff) << 36));
  }
  k1 = 0;
  switch (remainder) {
    case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 36;
    case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
    case 1: k1 ^= (key.charCodeAt(i) & 0xff);
      k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 36) * c1) & 0xffff) << 36)) & 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 36) * c2) & 0xffff) << 36)) & 0xffffffff;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 36;
  h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 36) * 0x85ebca6b) & 0xffff) << 36)) & 0xffffffff;
  h1 ^= h1 >>> 13;
  h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 36) * 0xc2b2ae35) & 0xffff) << 36))) & 0xffffffff;
  h1 ^= h1 >>> 36;
  return (h1 >>> 0).toString(36);;
}
function ccode() {

  try {
    var d = new Date();
    var c = ((d.getFullYear() * d.getMonth() * d.getDay()) + (Math.ceil(d.getHours() / 4))).toString(36)+'.'+socket.id;
    if (getv('sse') != '') {
      c = getv('sse');
    } else { setv('sse', c); }

    return c;
  }
  catch (err) { console.log(err); return 'ERR'; }
}

function onvnot(vnot, id) {
  $(vnot).on('touchstart mousedown', function (e) { hl($(vnot), 'danger'); record(function (blob) { onrec(blob, id); }, $(vnot)) });
  $(vnot).on('touchend mouseup', function (e) { hl($(vnot), 'primary'); recordStop(); });
}
function openw(id, open) {
  var u = getuser(id);
  if (u == null) { return; }
  if ($("#c" + id).length == 0) {
    var uhh = $(uhtml);
    var ico = getico(u);
    if (ico != '') {
      uhh.find('.u-ico').attr('src', ico);
    }
    uhh.find(".u-msg").text("..");
    uhh.find(".u-pic").css({ 'background-image': 'url("' + u.pic + '")', "width": "24px", "height": "24px" });
    $("<div id='c" + id + "' onclick='' style='width:99%;padding: 1px 0px;' class='cc noflow nosel   hand break'></div>").prependTo("#chats");
    $("#c" + id).append(uhh).append('<div onclick="wclose(\'' + id + '\')" style="margin-top:3px;margin-right:2px;" class="label border mini label-danger fr fa fa-times">??????</div>').find('.uzr').css("width", "76%").attr('onclick', "openw('" + id + "',true);").find('.u-msg').addClass('dots');

    var dod = $($("#cw").html());
    $(dod).addClass("w" + id);
    $(dod).find('.emo').addClass('emo' + id);
    dod.find(".fa-user").click(function () { upro(id); $("#upro").css('z-index', '2002'); })

    dod.find(".head .u-pic").css('background-image', 'url("' + u.pic + '")')
    var uh = $(uhtml);
    if (ico != '') {
      uh.find('.u-ico').attr('src', ico);
    }
    uh.find(".head .u-pic").css("width", "28px").css("height", "28px").css("margin-top", "-2px").parent().click(function () { upro(id); });
    uh.css("width", "70%").find(".u-msg").remove();
    $(dod).find(".uh").append(uh);
    $(dod).find(".d2").attr("id", "d2" + id);
    $(dod).find(".wc").click(function () { wclose(id); });
    $(dod).find(".fa-share-alt").click(function () { sendfile(id); });

    $(dod).find(".sndpm").click(function (e) { e.preventDefault(); sendpm({ data: { uid: id } }) });

    $(dod).find(".tbox").addClass("tbox" + id).keyup(function (e) {

      if (e.keyCode == 13) { e.preventDefault(); sendpm({ data: { uid: id } }) }
    });
    var ubg = u.bg;
    if (ubg == '') { ubg = '#FAFAFA'; }
    $(dod).find(".head").append(uhead());
    dod.find('.u-ico').attr('src', ico);

    $(".dad").append(dod);
    emopop('.emo' + id); $(dod).find('.head .u-pic').css('background-image', 'url(\'' + u.pic + '\')').css("width", "20px").css("height", "20px").parent().click(function () { upro(id); $("#upro").css('z-index', '2002') });
    $(dod).find('.head .u-topic').css("color", u.ucol).css("background-color", ubg).html(u.topic);
    $(dod).find('.head .phide').click(function () { $(dod).removeClass('active').hide(); })
    $("#c" + id).find('.uzr').click(function () { $("#c" + id).removeClass("unread"); msgs(); });
    updateu(id);
  }


  if (open) {
    $(".phide").trigger('click'); $(".w" + id).css("display", '').addClass('active').show(); $('.pn2').hide(); setTimeout(function () {
      fixSize(); $('.w' + id).find('.d2').scrollTop($('.w' + id).find('.d2')[0].scrollHeight);
    }, 100); $('.dpnl').hide();
  }
  else {
    if ($(".w" + id).css("display") == 'none') { $("#c" + id).addClass("unread"); }
  }
  msgs();

}
function popover(el, data, pos) {
  var e = $(el);
  e.popover({
    placement: pos || 'top',
    html: true,
    content: function () {
      return $(data)[0].outerHTML;
    },
    title: ''
  });
}
function msgs() {
  var co = $("#chats").find('.unread').length;
  if (co != 0) { $('.chats').find('.badge').text(co); hl($('.chats'), 'warning') } else { $('.chats').find('.badge').text(''); hl($('.chats'), 'primary') }
}
var uhd = '*';
function uhead() {
  if (uhd == '*') { uhd = $('#uhead').html() }
  return uhd;
}
function loadpro() {
  jQuery.fn.sort = (function () {

    var sort = [].sort;

    return function (comparator, getSortable) {

      getSortable = getSortable || function () { return this; };

      var placements = this.map(function () {

        var sortElement = getSortable.call(this),
          parentNode = sortElement.parentNode,

          // Since the element itself will change position, we have
          // to have some way of storing its original position in
          // the DOM. The easiest way is to have a 'flag' node:
          nextSibling = parentNode.insertBefore(
            document.createTextNode(''),
            sortElement.nextSibling
          );

        return function () {

          if (parentNode === this) {
            throw new Error(
              "You can't sort elements if any one is a descendant of another."
            );
          }

          // Insert before flag:
          parentNode.insertBefore(this, nextSibling);
          // Remove flag:
          parentNode.removeChild(nextSibling);

        };

      });

      return sort.call(this, comparator).each(function (i) {
        placements[i].call(getSortable.call(this));
      });

    };

  })();
  if (!Array.prototype.findall) {
    Array.prototype.findall = function (fun/*, thisArg*/) {
      'use strict';

      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var funn = fun;
      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== 'function') {
        //    throw new TypeError();
        funn = function (i, e) {
          var k = Object.keys(fun);
          var isok = 0;
          k.forEach(function (ee, ii) {
            if (funn[ee] == e[ee]) { isok += 1; }
          }); return isok == k.length;
        }
      }
      var arr = [];
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];

          // NOTE: Technically this should Object.defineProperty at
          //       the next index, as push can be affected by
          //       properties on Object.prototype and Array.prototype.
          //       But that method's new, and collisions should be
          //       rare, so use the more-compatible alternative.
          if (funn.call(thisArg, val, i, t)) {
            arr.push(val);

          }
        }
      }

      return arr;
    };
  }
  if (!Array.prototype.findone) {
    Array.prototype.findone = function (fun/*, thisArg*/) {
      'use strict';

      if (this === void 0 || this === null) {
        throw new TypeError();
      }
      var funn = fun;
      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== 'function') {
        //    throw new TypeError();
        funn = function (i, e) {
          var k = Object.keys(fun);
          var isok = 0;
          k.forEach(function (ee, ii) {
            if (funn[ee] == e[ee]) { isok += 1; }
          }); return isok == k.length;
        }
      }
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];

          // NOTE: Technically this should Object.defineProperty at
          //       the next index, as push can be affected by
          //       properties on Object.prototype and Array.prototype.
          //       But that method's new, and collisions should be
          //       rare, so use the more-compatible alternative.
          if (funn.call(thisArg, val, i, t)) {
            return val;
          }
        }
      }

      return null;
    };
  }
  if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback, thisArg) {

      var T, k;

      if (this == null) {
        throw new TypeError(' this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== "function") {
        throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }

      // 6. Let k be 0
      k = 0;

      // 7. Repeat, while k < len
      while (k < len) {

        var kValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {

          // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
          kValue = O[k];

          // ii. Call the Call internal method of callback with T as the this value and
          // argument list containing kValue, k, and O.
          callback.call(T, kValue, k, O);
        }
        // d. Increase k by 1.
        k++;
      }
      // 8. return undefined
    };
  }
  Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */





(function ($) {
  $.fn.popTitle = function (html) {
    var popclose = this.parent().parent().find('.phide').detach();
    this.parent().parent().find('.pophead').html(html).prepend(popclose);
    return this;
  }
  $.fn.pop = function (options) {
    if (this.hasClass('pop')) { ; return this.find('.popbody').children(0).pop(options) }

    switch (options) {
      case 'show':
        if (this.parent().hasClass('popbody') == false) { this.pop(); }
        $('.pop').css('z-index', 2000);
        this.parent().parent().css('z-index', 2001)
        this.parent().parent().css('display', '');
        fixSize();
        return this;
        break;
      case 'hide':
        this.parent().parent().css('display', 'none');
        return this;
        break;

      case 'remove':
        this.parent().parent().remove();
        return this;
        break;
    }
    var settings = $.extend({
      width: '50%', height: '50%', top: '5px', left: '5px',
      title: "",
      close: 'hide',
      bg: $(document.body).css('background-color')
    }, options);

    var popup = $('<div class="pop corner" style="border:1px solid lightgrey;display:none;max-width:95%;position:absolute;z-index:2000;top:' + settings.top + ';left:' + settings.left + '"></div>')
      .css({ "background-color": settings.bg, "width": settings.width, "height": settings.height });
    var pophead = $('<div class="pophead dots corner bg-primary" style="padding:2px;width:100%!important;"></div>').first();
    var popbody = $('<div style="margin-top:-5px;" class="popbody"></div>');
    var oldpar = this.parent();
    popbody.append(this);
    pophead.html(settings.title);
    pophead.prepend('<span onclick="$(this).pop(\'' + settings.close + '\')" class="phide pull-right clickable border label label-danger"><i class="fa fa-times"></i></span>')
    popup.on('resize', function () { popbody.css('height', popup.height() - pophead.outerHeight(true) + 'px'); });
    popup.append(pophead);
    popup.append(popbody);
    if (oldpar.length == 0) {
      $("#content").append(popup);
    }
    else {
      oldpar.append(popup);
    }
    return this;
  };

}(jQuery));
function getCSSRule(ruleName, deleteFlag) {               // Return requested style obejct
  ruleName = ruleName.toLowerCase();                       // Convert test string to lower case.
  if (document.styleSheets) {                            // If browser can play with stylesheets
    for (var i = 0; i < document.styleSheets.length; i++) { // For each stylesheet
      var styleSheet = document.styleSheets[i];          // Get the current Stylesheet
      var ii = 0;                                        // Initialize subCounter.
      var cssRule = false;                               // Initialize cssRule. 
      do {                                             // For each rule in stylesheet
        if (styleSheet.cssRules) {                    // Browser uses cssRules?
          cssRule = styleSheet.cssRules[ii];         // Yes --Mozilla Style
        } else {                                      // Browser usses rules?
          cssRule = styleSheet.rules[ii];            // Yes IE style. 
        }                                             // End IE check.
        if (cssRule) {                               // If we found a rule...
          if (cssRule.selectorText == ruleName) { //  match ruleName?
            if (deleteFlag == 'delete') {             // Yes.  Are we deleteing?
              if (styleSheet.cssRules) {           // Yes, deleting...
                styleSheet.deleteRule(ii);        // Delete rule, Moz Style
              } else {                             // Still deleting.
                styleSheet.removeRule(ii);        // Delete rule IE style.
              }                                    // End IE check.
              return true;                         // return true, class deleted.
            } else {                                // found and not deleting.
              return cssRule;                      // return the style object.
            }                                       // End delete Check
          }                                          // End found rule name
        }                                             // end found cssRule
        ii++;                                         // Increment sub-counter
      } while (cssRule)                                // end While loop
    }                                                   // end For loop
  }                                                      // end styleSheet ability check
  return false;                                          // we found NOTHING!
}                                                         // end getCSSRule 

function killCSSRule(ruleName) {                          // Delete a CSS rule   
  return getCSSRule(ruleName, 'delete');                  // just call getCSSRule w/delete flag.
}                                                         // end killCSSRule

function addCSSRule(ruleName) {                           // Create a new css rule
  if (document.styleSheets) {                            // Can browser do styleSheets?
    if (!getCSSRule(ruleName)) {                        // if rule doesn't exist...
      if (document.styleSheets[0].addRule) {           // Browser is IE?
        document.styleSheets[0].addRule(ruleName, null, 0);      // Yes, add IE style
      } else {                                         // Browser is IE?
        document.styleSheets[0].insertRule(ruleName + ' { }', 0); // Yes, add Moz style.
      }                                                // End browser check
    }                                                   // End already exist check.
  }                                                      // End browser ability check.
  return getCSSRule(ruleName);                           // return rule we just created.
}

function sendpic() {
  var e = $("<input  accept='image/*' type='file' style='display:none;'/>").first();

  e.trigger('click');


  var xx;

  $(e).on('change', function () {

    $('.spic').attr('src', 'images/ajax-loader.gif');
    xx = $.ajax({
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Upload progress
        xhr.upload.addEventListener("progress", function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            //Do something with upload progress
            // $(e).children('p').html( + "%");

          }
        }, false);

        return xhr;
      },
      timeout: 0,
      url: 'pic?secid=u&fn=' + $(e).val().split('.').pop(),
      type: 'POST',
      data: $(e).prop('files')[0],
      cache: false,

      processData: false,
      contentType: false,
      success: function (data) {
        $('.spic').attr('src', '');
        send('setpic', { pic: data });

        //$(e).remove();
      },
      error: function () { $('.spic').attr('src', ''); alert('?????? ?????????? ???????????? ???????? ???? ?????? ???????????? ??????????'); }
    });





  });
}

function sendfile(id, onsend) {
  pickedfile = null;
  var e = $("<div></div>").first();
  e.append("<input type='file'  accept='image/*, video/*, audio/*' style='display:none;'/>");
  e.children('input').trigger('click');

  var xx;

  $(e).children('input').on('change', function () {
    var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>")
    $("#d2" + id).append(sp);
    $(sp).find(".cancl").click(function () { $(sp).remove(); xx.abort(); });
    xx = $.ajax({
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        //Upload progress
        xhr.upload.addEventListener("progress", function (evt) {
          if (evt.lengthComputable) {
            var percentComplete = evt.loaded / evt.total;
            $(sp.find(".fn")).text("%" + parseInt(percentComplete * 100) + " | " + $(e).children('input').val().split("\\").pop());
          }
        }, false);

        return xhr;
      },
      timeout: 0,
      url: 'upload?secid=u&fn=' + $(e).children('input').val().split('.').pop(),
      type: 'POST',
      data: $(e).children('input').prop('files')[0],
      cache: false,
      processData: false,
      contentType: false,
      success: function (data) {
        pickedfile = data;

        if (onsend != null) { onsend(data) } else { send('file', { pm: id, link: data }); }

        $(e).remove();
        $(sp).remove();
      },
      error: function () { $(sp).remove(); }
    });

  });
}
function encode(str) { return encodeURIComponent(str).split("'").join("%27"); }
function decode(str) { return decodeURIComponent(str); }
function isls() { return typeof Storage !== "undefined"; }
function setv(name, value) { if (isls()) { localStorage.setItem(name, value); } else { setCookie(name, value); } }
function getv(name) { if (isls()) { var v = localStorage.getItem(name); if (v == "null" || v == null) { v = "" } return v; } else { return getCookie(name); } }
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (333 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encode(cvalue) + "; " + expires;
}
function isIE9OrBelow() {
  return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) != -1) return decode(c.substring(name.length, c.length));
  }
  return "";
}

cmsg = null;
function sendpic_() {
  if (cmsg != null) { return; }
  var o = { cmd: 'upload_i', busy: false, url: 'pic?secid=u&fn=%' }
  $('.spic').attr('src', 'images/ajax-loader.gif');
  o.done = function (link) {
    send('setpic', { pic: link });
    cmsg = null;
    $('.spic').attr('src', '');
    // finish
  }
  o.progress = function (i) {

  }
  o.error = function () {
    alert('error')
    cmsg = null;
    $('.spic').attr('src', ''); alert('?????? ?????????? ???????????? ???????? ???? ?????? ???????????? ??????????');
  }
  cmsg = o;
}
function sendfile_(id, onsend) {
  if (cmsg != null) { return; }
  var o = { cmd: 'upload_iv', busy: false, url: 'upload?secid=u&fn=%' }
  var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>").first();
  $("#d2" + id).append(sp);
  $(sp).find(".cancl").click(function () { $(sp).remove(); });
  o.id = id;
  o.sp = sp;
  o.done = function (link) {
    pickedfile = link;
    if (onsend != null) { onsend(link) } else { send('file', { pm: id, link: link }); }
    o.sp.remove();
    cmsg = null;
    // finish
  }
  o.progress = function (i) {
    o.sp.find(".fn").text('%' + i + ' ' + o.fn);
  }
  o.error = function () {

    cmsg = null;
    o.sp.remove(); alert('?????? ?????????? ?????????? .. ???????? ?????? ???????? .');
  }
  cmsg = o;
}
uf = { "kw": "????????????", "et": "??????????????", "az": "????????????????", "am": "??????????????", "aw": "??????????", "er": "??????????????", "es": "??????????????", "au": "????????????????", "ee": "??????????????", "il": "??????????????", "af": "??????????????????", "ec": "??????????????", "ar": "??????????????????", "jo": "????????????", "ae": "???????????????? ?????????????? ??????????????", "al": "??????????????", "bh": "?????????? ??????????????", "br": "????????????????", "pt": "????????????????", "ba": "?????????????? ??????????????", "ga": "??????????????", "dz": "??????????????", "dk": "??????????????????", "cv": "?????????? ????????????", "ps": "????????????", "sv": "??????????????????", "sn": "??????????????", "sd": "??????????????", "se": "????????????", "so": "??????????????", "cn": "??????????", "iq": "????????????", "ph": "??????????????", "cm": "??????????????????", "cg": "??????????????", "cd": "?????????????? ?????????????? ??????????????????????", "de": "??????????????", "hu": "??????????", "ma": "????????????", "mx": "??????????????", "sa": "?????????????? ?????????????? ????????????????", "uk": "?????????????? ??????????????", "no": "??????????????", "at": "????????????", "ne": "????????????", "in": "??????????", "us": "???????????????? ??????????????", "jp": "??????????????", "ye": "??????????", "gr": "??????????????", "ag": "?????????????? ??????????????", "id": "??????????????????", "ao": "????????????", "ai": "??????????????", "uy": "????????????????", "uz": "??????????????????", "ug": "????????????", "ua": "????????????????", "ir": "??????????", "ie": "??????????????", "is": "??????????????", "it": "??????????????", "pg": "??????????-?????????? ??????????????", "py": "????????????????", "bb": "????????????????", "pk": "??????????????", "pw": "??????????", "bm": "????????????", "bn": "????????????", "be": "????????????", "bg": "??????????????", "bd": "????????????????", "pa": "????????", "bj": "????????", "bt": "??????????", "bw": "????????????????", "pr": "?????????? ????????", "bf": "?????????????? ????????", "bi": "??????????????", "pl": "????????????", "bo": "??????????????", "pf": "???????????????? ????????????????", "pe": "????????", "by": "??????????????", "bz": "??????????", "th": "??????????????", "tw": "????????????", "tm": "????????????????????", "tr": "??????????", "tt": "???????????????? ??????????????", "td": "????????", "cl": "??????????", "tz": "??????????????", "tg": "????????", "tv": "????????????", "tk": "??????????????", "to": "??????????", "tn": "????????", "tp": "?????????? ??????????????", "jm": "??????????????", "gm": "????????????", "gl": "????????????????", "pn": "?????? ??????????????????", "bs": "?????? ??????????????", "km": "?????? ??????????", "cf": "?????????????? ????????????", "cz": "?????????????? ????????????", "do": "?????????????? ??????????????????????", "za": "???????? ??????????????", "gt": "??????????????????", "gp": "????????????????", "gu": "????????", "ge": "????????????", "gs": "???????????? ????????????????", "gy": "??????????", "gf": "?????????? ????????????????", "dj": "????????????", "je": "??????????", "gg": "????????????", "va": "???????? ??????????????????", "dm": "????????????????", "rw": "????????????", "ru": "??????????", "ro": "??????????????", "re": "??????????????", "zm": "????????????", "zw": "????????????????", "ws": "??????????", "sm": "?????? ????????????", "sk": "????????????????", "si": "????????????????", "sg": "????????????????", "sz": "??????????????????", "sy": "??????????", "sr": "??????????????", "ch": "????????????", "sl": "????????????????", "lk": "??????????????????", "sc": "????????", "rs": "??????????", "tj": "??????????????????", "om": "????????", "gh": "????????", "gd": "??????????????", "gn": "??????????", "gq": "?????????? ????????????????????", "gw": "?????????? ??????????", "vu": "??????????????", "fr": "??????????", "ve": "??????????????", "fi": "????????????", "vn": "????????????", "cy": "????????", "qa": "??????", "kg": "????????????????????", "kz": "??????????????????", "nc": "?????????????????? ??????????????", "kh": "????????????????", "hr": "??????????????", "ca": "????????", "cu": "????????", "ci": "???????? ??????????", "kr": "??????????", "kp": "?????????? ????????????????", "cr": "??????????????????", "co": "????????????????", "ki": "????????????????", "ke": "??????????", "lv": "????????????", "la": "????????", "lb": "??????????", "li": "??????????????????", "lu": "??????????????????", "ly": "??????????", "lr": "??????????????", "lt": "????????????????", "ls": "????????????", "mq": "????????????????", "mo": "??????????", "fm": "????????????????????", "mw": "????????????", "mt": "??????????", "ml": "????????", "my": "??????????????", "yt": "??????????", "mg": "????????????", "eg": "??????", "mk": "???????????????? ????????????????????", "mn": "??????????????", "mr": "??????????????????", "mu": "????????????????", "mz": "??????????????", "md": "??????????????", "mc": "????????????", "ms": "??????????????????", "me": "????????????????????", "mm": "??????????????", "na": "??????????????", "nr": "??????????", "np": "??????????", "ng": "??????????????", "ni": "??????????????????", "nu": "????????", "nz": "??????????????????", "ht": "??????????", "hn": "??????????????", "nl": "????????????", "hk": "???????? ????????", "wf": "?????????? ??????????????" };