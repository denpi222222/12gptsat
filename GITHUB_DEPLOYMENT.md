# 🚀 GitHub + Netlify Deployment Guide

## 📋 Шаги для загрузки на GitHub:

### 1. Создайте новый репозиторий на GitHub:
- Перейдите на https://github.com
- Нажмите "New repository"
- Название: `CrazyOctagon-ultimate-game`
- Описание: `Complete Web3 NFT Game with Security Features`
- **НЕ** ставьте галочки "Add a README file", "Add .gitignore", "Choose a license"
- Нажмите "Create repository"

### 2. Подключите локальный репозиторий к GitHub:
```bash
git remote add origin https://github.com/denpi222222/CrazyOctagon-ultimate-game.git
git branch -M main
git push -u origin main
```

### 3. Проверьте, что все файлы загружены:
```bash
git status
```

## 🌐 Настройка автоматического деплоя на Netlify:

### 1. Подключите GitHub к Netlify:
- Перейдите на https://netlify.com
- Нажмите "New site from Git"
- Выберите "GitHub"
- Авторизуйтесь через GitHub
- Выберите репозиторий `CrazyOctagon-ultimate-game`

### 2. Настройте параметры сборки:
```
Build command: npm run build
Publish directory: .next
```

### 3. Добавьте переменные окружения в Netlify:
Перейдите в Site settings → Environment variables и добавьте:

```
NEXT_PUBLIC_CHAIN_ID=33139
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=0x... (ваш адрес контракта)
NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS=0x... (ваш адрес токена)
NEXT_PUBLIC_GAME_PROXY_ADDRESS=0x... (ваш адрес прокси)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

### 4. Настройте домен (опционально):
- Перейдите в Site settings → Domain management
- Добавьте ваш кастомный домен

## ✅ Проверка деплоя:

### 1. После первого деплоя проверьте:
- ✅ Сайт загружается без ошибок
- ✅ Кошелек подключается
- ✅ Все функции работают
- ✅ Безопасность активна

### 2. Проверьте логи сборки:
- В Netlify Dashboard → Deploys → Latest deploy
- Убедитесь, что нет ошибок

## 🔄 Автоматические обновления:

После настройки каждый push в main ветку будет автоматически деплоить на Netlify!

## 🛡️ Безопасность:

Проект уже настроен с:
- ✅ Автоматическое удаление console.log при сборке
- ✅ Проверка безопасности после сборки
- ✅ CSP заголовки
- ✅ DDoS защита
- ✅ CSRF защита
- ✅ XSS защита

## 📞 Поддержка:

Если возникнут проблемы:
1. Проверьте логи в Netlify Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте, что контракты развернуты в правильной сети

---

**🎉 Готово! Ваш сайт будет автоматически деплоиться при каждом обновлении кода!** 