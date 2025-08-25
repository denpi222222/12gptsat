# 🚀 Автоматический деплой на Netlify

## Настройка автоматического деплоя

### 1. Подключение к Netlify

1. Перейдите на [netlify.com](https://netlify.com)
2. Войдите в аккаунт или создайте новый
3. Нажмите "New site from Git"
4. Выберите GitHub
5. Выберите репозиторий: `denpi222222/caiit7`

### 2. Настройки деплоя

**Build settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `18` (или выше)

**Environment variables:**
```
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_CONTRACT_ADDRESS=0xBb526D657Cc1Ba772469A6EC96AcB2ed9D2A93e5
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=CrazyOctagon-project-id
NEXT_PUBLIC_WEB3_MODAL_ENABLED=true
```

### 3. Автоматический деплой

После настройки:
- Каждый push в `main` ветку автоматически запускает деплой
- Netlify будет автоматически собирать и деплоить сайт
- URL будет вида: `https://your-site-name.netlify.app`

### 4. Домен (опционально)

Можно настроить кастомный домен в настройках Netlify.

## ✅ Готово!

После настройки сайт будет автоматически обновляться при каждом push в GitHub! 