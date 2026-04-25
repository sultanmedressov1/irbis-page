export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a0533 0%, #2d0f5e 40%, #4f1b8c 70%, #1a0533 100%)",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      color: "white",
    }}>
      {/* Hero */}
      <section style={{
        maxWidth: 700,
        margin: "0 auto",
        padding: "80px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>🐆</div>
        <h1 style={{
          fontSize: "clamp(36px, 8vw, 64px)",
          fontWeight: 900,
          letterSpacing: "-2px",
          margin: "0 0 16px",
          background: "linear-gradient(135deg, #fff 0%, #c4b5fd 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Ирбис ЕНТ
        </h1>
        <p style={{ fontSize: 20, color: "rgba(255,255,255,0.75)", margin: "0 0 40px", lineHeight: 1.6 }}>
          Умная подготовка к Единому Национальному Тестированию.<br />
          Казахстан 2025.
        </p>
        <a href="https://apps.apple.com/app/id000000000" style={{
          display: "inline-block",
          background: "white",
          color: "#1a0533",
          fontWeight: 800,
          fontSize: 16,
          padding: "16px 36px",
          borderRadius: 50,
          textDecoration: "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}>
          📱 Скачать в App Store
        </a>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { emoji: "📚", title: "Все предметы ЕНТ", desc: "История КЗ, математика, биология, химия, физика и другие" },
            { emoji: "⏱️", title: "Симулятор ЕНТ", desc: "4 часа, 200 вопросов — как настоящий экзамен" },
            { emoji: "🔥", title: "Геймификация", desc: "XP, серии дней, достижения и прогноз баллов" },
            { emoji: "📊", title: "Калькулятор грантов", desc: "Узнай в какие вузы Казахстана ты проходишь" },
          ].map(f => (
            <div key={f.title} style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: "28px 24px",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{f.emoji}</div>
              <h3 style={{ fontWeight: 800, fontSize: 16, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "32px 24px",
        textAlign: "center",
        color: "rgba(255,255,255,0.4)",
        fontSize: 14,
      }}>
        <p style={{ margin: "0 0 12px" }}>
          <a href="/privacy" style={{ color: "rgba(255,255,255,0.5)", marginRight: 24, textDecoration: "none" }}>Политика конфиденциальности</a>
          <a href="/support" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Поддержка</a>
        </p>
        <p style={{ margin: 0 }}>© 2025 Ирбис ЕНТ · Казахстан 🇰🇿</p>
      </footer>
    </main>
  );
}
