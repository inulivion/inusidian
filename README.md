# Inusidian ![#chihuahuawashawasha](https://img.shields.io/badge/%23chihuahuawashawasha-000?style=flat)

## ディレクトリ構成

```
inusidian
├─ .github/workflows
├─ growl    # バックエンド
├─ kennel   # DB
├─ leash    # スクリプト用
├─ muzzle   # フロントエンド
├─ sniff    # iOS
└─ README.md
```

## コマンド

```
docker exec -it inusidian-db mysql -u root -ppass

docker exec -it inusidian-db mysql -u user -ppass

docker logs -f inusidian-api

curl http://localhost:5000/v2/inusidian/tags/list

docker pull localhost:5000/inusidian:api-1.6.0
```
