// ==UserScript==
// @name         AtCoder Jump to Submissions from Standings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  順位表の得点をダブルクリックすると、該当するコンテスタントの実装を見ることができます。
// @match        https://atcoder.jp/contests/*/standings*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @author       hiro_hiro
// @downloadURL  https://github.com/KATO-Hiro/AtCoder-Jump-to-Submissions-from-Standings/atcoder_jump_to_submissions_from_standings.js
// @updateURL    https://github.com/KATO-Hiro/AtCoder-Jump-to-Submissions-from-Standings/atcoder_jump_to_submissions_from_standings.js
// @supportURL   https://github.com/KATO-Hiro/AtCoder-Jump-to-Submissions-from-Standings/issues
// @grant        none
// ==/UserScript==

$(function() {
    'use strict';

    $(document).on('dblclick', '.standings-result', function() {
        alert('double click');
    });
})();
