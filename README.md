# Kiwitter: A Simple Twitter Clone

## Kapsam

- **user register:** Frontend'de signup ekranı olacak. Şifre db'de şifrelenerek saklanmalı.
- **user giriş:** Girilen bilgilerle kaydedilmiş kullanıcı varsa, server 6 saat geçerli bir JWT token döndürmeli.
- **twit yazma:** sadece metin girebilir.
- **twit reply:** twitler yanıtlanabilmeli. Yanıtların kendisi yanıtlanmamalı.
- **like:** kullanıcılar twitleri beğenebilmeli. Bir kullanıcı aynı twiti sadece 1 kez beğenebilmeli.
- **ana akış:** her kullanıcı aynı akışı görmeli. takip etme, ya da gizli hesap yok. son atılan twitler görüntülenmeli. like ve reply sayıları görünmeli. ana akışta başka bir twite reply olarak yazılan twitler görünmemeli.
- **en beğenilenler akışı:** son 24 saatte en beğenilen twitler görünmeli. Like sayısına göre çoktan aza.
- **twit detay:** bir twit, ona yazılan cevaplar, like sayıları, tarihi görünmeli.
- **profil sayfası:** kendi yazdığı twitler görünmeli
- **twit silme:** kullanıcılar sadece kendi twitilerini silebilmeli, admin her twiti silebilmeli.

## endpointler
 
| İşlem | Method | Endpoint |
| ------ | ------ | ------ |
| createUser | POST | `/users` |
| login | POST | `/login` |
| createTwit | POST | `/twits` |
| replyToTwit | POST | `/twits/:twitId/replies` |
| likeTwit | POST | `/twits/:twitId/likes` |
| getTwits | GET | `/twits` |
| getTopTwits | GET | `/twits/popular` |
| getTwitDetails | GET | `/twits/:twitId` |
| getUserTwits | GET | `/users/:userId/twits` |
| getUserLikes | GET | `/users/:userId/likes` |

