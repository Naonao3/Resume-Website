# Resume Website

## 概要
私のこれまでの経歴及び開発物を紹介した静的なWebサイトです。<br>
Vertual Box、Ubuntu、Amazon EC2、NGINXを使用して静的ウェブサイトをデプロイしました。
NGINXを使いサーバーを構築し、ウェブサイトのコンテンツを提供する設定を行い、サーバーのファイアウォール設定を管理するためにUFWを利用します。
この結果、HTTP、HTTPS、SSHトラフィックのためのポートを開放しました。
セキュリティ面は、HTTPSを利用するためCertbotから取得した証明書を使いサイトへの接続を暗号化認証し安全性を保護するように設計しました。

## スキルセット
- 開発者ツールを使い送信したHTTPリクエストと受信したHTTPレスポンスのヘッダーやボディなどのネットワーク情報を確認する。
- AWS EC2インスタンスを利用して、Ubuntuサーバーインスタンスを構築する。
- NGINXをインストールし、.confファイルを設定してHTTPリクエストを受信し、適切なリソースファイルで応答するWebサーバーをデプロイする。
-  SSHを通じてEC2インスタンスに接続し、ローカルコンピューターからサーバ上でシェルコマンドを実行する。
-  ローカル開発環境と本番環境間をSSH経由でGitHubリポジトリを通して同期する。
-  certbotを使用して証明書を作成し、NGINXの.confファイルを設定してHTTPS接続のみを許可することで、HTTPの暗号化、真正性、完全性を保証するセキュアな接続を提供する。

## 学んだこと
- クライアントが発行するHTTPリクエストとWebサーバーが提供するHTTPレスポンスを含むHTTPプロトコルの理解を深めた。
- 仮想マシンをウェブサーバーを構築する際に利用する技術を取得した。
- SSH接続を使った安全なウェブサーバーへの接続方法。
- ローカル環境と本番環境でのコードの共有。
- ドメインの基礎を学び、ドメインの登録及びドメイン名を設定する。またサブドメインのを設定し、一つのサーバーで複数のサブドメインを管理する方法。
- TLS/SSLの原則を理解し、certbotを通した証明書を作成することでウェブサーバーへの安全な接続であるHTTPS接続を確立する。

## URL 
https://portfolio.nishimura-resume.net/

## Preview
<img width="1125" alt="スクリーンショット 2024-02-22 205431" src="https://github.com/Naonao3/resume-website/assets/97473345/be29150d-58bb-416d-a5c5-6d5c413c6e0e">
<img width="1098" alt="スクリーンショット 2024-02-22 205518" src="https://github.com/Naonao3/resume-website/assets/97473345/9470b26e-3b84-42fd-9d8c-8ef1e94e79a7">


## 使用技術
- フロントエンド
  - HTML
  - JavaScript
  - Bootstrap
- インフラ
  - Amazon EC2
  - Nginx
  - Ubuntu
  - VirtualBox
  - SSL/TLS証明書取得、更新、暗号化 : Certbot

