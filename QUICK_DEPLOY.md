# ⚡ Быстрый деплой на Netlify

## 🚀 Шаги:

### 1. Загрузите на GitHub:
```bash
# Создайте репозиторий на GitHub: CrazyOctagon-ultimate-game
git remote add origin https://github.com/denpi222222/CrazyOctagon-ultimate-game.git
git branch -M main
git push -u origin main
```

### 2. Подключите к Netlify:
- Перейдите на https://netlify.com
- "New site from Git" → GitHub → CrazyOctagon-ultimate-game
- Build command: `npm run build`
- Publish directory: `.next`

### 3. Добавьте переменные окружения:
```
NEXT_PUBLIC_CHAIN_ID=33139
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=0x... (ваш адрес)
NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS=0x... (ваш адрес)
NEXT_PUBLIC_GAME_PROXY_ADDRESS=0x... (ваш адрес)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_id
```

### 4. Готово! 🎉
Сайт автоматически деплоится при каждом push в main.

## ✅ Что уже настроено:
- ✅ Автоматическое удаление логов
- ✅ Проверка безопасности
- ✅ CSP заголовки
- ✅ DDoS защита
- ✅ CSRF защита
- ✅ XSS защита
- ✅ HTTPS принудительно
- ✅ Кэширование статики
- ✅ Защита от ботов
- ✅ AI мониторинг безопасности

**Проект готов к продакшену! 🛡️** 