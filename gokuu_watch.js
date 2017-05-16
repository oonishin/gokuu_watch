'use strict'

// 悟空のきもちの空き状況JSON
// shop_idは、1:京都本店、2：心斎橋店、3:表参道、4：銀座
// course_idは、http://goku-nokimochi.com/reservation.htmlを確認すること。
const ginza60URL  = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=4&course_id=157';
const ginza80URL  = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=4&course_id=158';
const ginza90URL  = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=4&course_id=159';
const ginza120URL = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=4&course_id=161';

const omote60URL  = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=3&course_id=132';
const omote90URL  = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=3&course_id=134';
const omote120URL = 'http://goku-nokimochi.com/form/getReservation4.php?shop_id=3&course_id=136';

//チェック処理
check(omote60URL,"表参道 60分");
check(omote90URL,"表参道 90分");
check(omote120URL,"表参道 120分");

check(ginza60URL,"銀座 60分");
check(ginza80URL,"銀座 80分");
check(ginza90URL,"銀座 90分");
check(ginza120URL,"銀座 120分");

//JSONチェックして値があれば通知
function check(url,msg){

   let http = require('http');
   http.get(url, (res) => {
     let body = '';
     res.setEncoding('utf8');

     res.on('data', (chunk) => {
         body += chunk;
     });

     res.on('end', (res) => {
         let res_aki = "";
         res = JSON.parse(body);
         for (var i in res) {
                if(res[i] != ""){
                        res_aki += i + ",";
                }
         }
         if(res_aki != ""){
            push("悟空のきもち " + msg + " " + res_aki + " 空きあり");
         }
     });
   }).on('error', (e) => {
     console.log(e.message); //エラー時
   });

}

//im.kayac.com経由での通知処理
function push(msg){

   var request = require('request');
   var im_kayac_username = '';

   // URL
   var baseUrl = 'http://im.kayac.com/api/post/' + im_kayac_username;

   request.post(
       baseUrl,
       { form: { message: msg } },
       function (err, res, body) {
           if (!err && res.statusCode == 200) {
               //console.log(body);
           } else {
             console.log(body);
           }
        }
   );
}
