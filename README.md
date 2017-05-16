# gokuu_watch

悟空のきもちの予約サイトの空き状況JSONを叩いて、空きがあれば、im.kayac.com経由でiPhoneにPush通知する。

事前にhttp://im.kayac.com でアカウントを作成して、iOSにim.kayac.comのアプリをインストールし、通知可能にすること。
gokuu_watch.jsの59行目付近の var im-kayac_id = ''; にim.kayac.comのusernameを設定すること。

requestモジュールとhttpモジュール必須。

`npm install http` 
`npm install request`

でインストールしておくこと。

ぶっちゃけ、requestモジュールだけで十分ですが、書き直すの邪魔くさいので、そのまま。

あとはcron 等でnode gokuu_watch.js を定期的に叩けばオッケー。
