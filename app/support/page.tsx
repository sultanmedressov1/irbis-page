export const metadata = {
  title: "Поддержка — Ирбис ЕНТ",
};

export default function SupportPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f0522",
      color: "white",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px" }}>
        <a href="/" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          color: "rgba(255,255,255,0.5)", textDecoration: "none",
          fontSize: 14, marginBottom: 40, fontWeight: 600,
        }}>← Назад</a>

        <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>
          🐆 Поддержка
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>
          Мы отвечаем в течение 24 часов
        </p>

        {[
          {
            q: "Как восстановить подписку Premium?",
            a: "Открой Профиль → нажми 'Получить Premium' → 'Восстановить покупки'. Покупка привязана к вашему Apple ID и восстанавливается бесплатно.",
          },
          {
            q: "Мой прогресс не сохраняется",
            a: "Убедись что ты вошёл в аккаунт (раздел Профиль). Без аккаунта прогресс сохраняется только на устройстве. При переустановке без аккаунта прогресс теряется.",
          },
          {
            q: "Как отменить подписку?",
            a: "Настройки iPhone → твоё имя → Подписки → Ирбис ЕНТ → Отменить подписку. Доступ к Premium сохраняется до конца оплаченного периода.",
          },
          {
            q: "Вопросы неправильные или устаревшие",
            a: "Напиши нам на support@irbis.kz с указанием предмета, темы и текста вопроса. Исправим в ближайшем обновлении.",
          },
          {
            q: "Приложение не работает / вылетает",
            a: "Попробуй: 1) Перезапусти приложение. 2) Проверь интернет. 3) Переустанови приложение. Если не помогает — напиши нам.",
          },
          {
            q: "Как удалить аккаунт?",
            a: "Напиши на support@irbis.kz с запросом на удаление. Мы удалим все данные в течение 7 рабочих дней.",
          },
        ].map(faq => (
          <div key={faq.q} style={{
            marginBottom: 16,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: "24px",
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10, color: "#c4b5fd" }}>
              {faq.q}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: 14, margin: 0 }}>
              {faq.a}
            </p>
          </div>
        ))}

        <div style={{
          marginTop: 48,
          padding: "32px",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 20,
          textAlign: "center",
        }}>
          <p style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Не нашёл ответа?</p>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, fontSize: 14 }}>
            Напиши нам — ответим в течение 24 часов
          </p>
          <a href="mailto:support@irbis.kz" style={{
            display: "inline-block",
            background: "white",
            color: "#1a0533",
            fontWeight: 800,
            fontSize: 15,
            padding: "14px 32px",
            borderRadius: 50,
            textDecoration: "none",
          }}>
            ✉️ support@irbis.kz
          </a>
        </div>
      </div>
    </main>
  );
}
