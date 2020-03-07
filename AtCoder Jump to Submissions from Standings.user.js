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

    // FIXME: 肥大化してきたため、リファクタリングが必要
    $(document).on('dblclick', '.standings-result', function() {
        const $includingVirutal = $('body').find('script:contains("isVirtual =  true")')[0]
        let $prefix = '';

        if ($includingVirutal) {
            $prefix = '../';
        }

        let $clickedRow = $(this)[0].cellIndex;

        // コンテスト当日の順位表とバーチャル順位表の列の並びに違いがある
        // 当日の順位表の並びに合わせる
        if ($includingVirutal) {
            $clickedRow -= 1
        }

        // 順位とユーザ名の欄を扱わずに済むようにインデックスを補正
        // A問題がindex = 0となるようにしている
        $clickedRow -= 3

        // TODO: 順位表の範囲外(0未満 or 問題数 + 1以上)なら以降は計算しない

        const $taskUrls = $('body').find('thead a');
        let $taskId = '';

        $taskUrls.each((index) => {
            if (index == $clickedRow) {
                const $url = $taskUrls[index].pathname;
                const $elements = $url.split('/');
                const $length = $elements.length;

                $taskId = $elements[$length - 1]; // 0-indexed
            }
        });

        const $standings = $(this).siblings('td');
        const $username = $standings.find('.username span').text();

        setTimeout(function() {
            location.href = `${$prefix}submissions?f.Task=abc153_f&f.Language=&f.Status=AC&f.User=${$username}`;
        }, 250)
    });
})();
