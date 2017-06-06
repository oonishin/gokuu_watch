# gokuu_watch

悟空のきもちの予約サイトの空き状況JSONを叩いて、空きがあれば、im.kayac.com経由でiPhoneにPush通知する。

事前にhttp://im.kayac.com でアカウントを作成して、iOSにim.kayac.comのアプリをインストールし、通知可能にすること。
gokuu_watch.jsの59行目付近の
`var im_kayac_username = '';`
にim.kayac.comのusernameを設定すること。

requestモジュール必須。

`npm install request`

でインストールしておくこと。

あとはcron 等でnode gokuu_watch.js を定期的に叩けばオッケー。
