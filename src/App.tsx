
import { useState } from "react";
import "./App.css";

const menus = [
  { icon: "⌂", label: "Beranda" },
  { icon: "🗺️", label: "Peta" },
  { icon: "🏆", label: "Prestasi" },
  { icon: "▤", label: "Buku" },
  { icon: "♟", label: "Profil" },
];

export default function App() {
  const [activeMenu, setActiveMenu] = useState("Beranda");
  const [started, setStarted] = useState(false);

  return (
    <main className="game-page">
      <section className="game-screen">
        <div className="world-background" />

        <div className="sun-decoration" />
        <div className="cloud-decoration cloud-a" />
        <div className="cloud-decoration cloud-b" />
        <div className="mountain-decoration mountain-a" />
        <div className="mountain-decoration mountain-b" />
        <div className="green-hills" />
        <div className="blue-river" />
        <div className="front-hill" />

        <div className="castle">
          <div className="castle-main">
            <div className="castle-window" />
            <div className="castle-door" />
          </div>
          <div className="castle-tower tower-a">
            <i />
          </div>
          <div className="castle-tower tower-b">
            <i />
          </div>
          <div className="castle-tower tower-c">
            <i />
          </div>
        </div>

        <header className="top-ui">
          <div className="player-card">
            <div className="avatar">👧🏻</div>
            <div className="player-info">
              <small>PETUALANG</small>
              <strong>Naya</strong>
              <div className="level-progress">
                <span />
              </div>
            </div>
            <div className="level-badge">Lv. 3</div>
          </div>

          <div className="player-stats">
            <div className="stat coin-stat">🪙 240</div>
            <div className="stat star-stat">⭐ 12</div>
            <button
              className="settings-button"
              onClick={() => setActiveMenu("Pengaturan")}
              aria-label="Pengaturan"
            >
              ⚙
            </button>
          </div>
        </header>

        <div className="mission-card">
          <div className="mission-icon">📋</div>
          <div className="mission-content">
            <small>MISI HARI INI</small>
            <strong>Temukan 3 bentuk!</strong>
            <div className="mission-progress">
              <span />
            </div>
          </div>
          <b>1/3</b>
        </div>

        <section className="hero">
          <div className="world-label">
            ✦ DUNIA PENUH KEAJAIBAN ✦
          </div>

          <h1>
            <span className="title-blue">Petualangan</span>
            <span className="title-yellow">Bangun Datar</span>
          </h1>

          <div className="title-dots">
            <i />
            <i />
            <i />
          </div>

          <button
            className="start-button"
            onClick={() => {
              setStarted(true);
              setActiveMenu("Permainan");
            }}
          >
            <span className="play-icon">▶</span>
            <span>Mulai Petualangan</span>
            <span className="arrow">›</span>
          </button>

          <p className="tagline">✨ Ayo jelajahi dunia bentuk! ✨</p>
        </section>

        <span className="floating-star star-one">✦</span>
        <span className="floating-star star-two">✧</span>

        <div className="shape-circle">
          <span>•ᴗ•</span>
          <i className="cheek cheek-left" />
          <i className="cheek cheek-right" />
        </div>

        <div className="shape-square">
          <span>•ᴗ•</span>
        </div>

        <div className="speech-bubble">
          Hai, teman! <span>☻</span>
        </div>

        <div className="triangle-character">
          <div className="triangle-star">★</div>
          <div className="triangle-eyes">● ●</div>
          <div className="triangle-cheeks">●●</div>
          <div className="triangle-mouth">⌣</div>
        </div>

        {started && (
          <div className="menu-popup">
            <h2>Petualangan Dimulai! 🎉</h2>
            <p>Yuk, kenali bentuk-bentuk bangun datar.</p>
            <div className="shape-options">
              <button onClick={() => setActiveMenu("Segitiga")}>
                🔺 Segitiga
              </button>
              <button onClick={() => setActiveMenu("Persegi")}>
                🟦 Persegi
              </button>
              <button onClick={() => setActiveMenu("Lingkaran")}>
                🟣 Lingkaran
              </button>
            </div>
            <p className="selected-shape">
              {["Segitiga", "Persegi", "Lingkaran"].includes(activeMenu)
                ? `Kamu memilih ${activeMenu}!`
                : "Pilih bentuk untuk mulai belajar."}
            </p>
            <button
              className="close-popup"
              onClick={() => {
                setStarted(false);
                setActiveMenu("Beranda");
              }}
            >
              Kembali ke Beranda
            </button>
          </div>
        )}

        {!started &&
          activeMenu !== "Beranda" &&
          activeMenu !== "Pengaturan" && (
            <div className="menu-popup">
              <h2>{activeMenu}</h2>
              <p>Selamat datang di menu {activeMenu}!</p>
              <button onClick={() => setActiveMenu("Beranda")}>
                Kembali
              </button>
            </div>
          )}

        {activeMenu === "Pengaturan" && (
          <div className="menu-popup">
            <h2>⚙ Pengaturan</h2>
            <p>Petualangan Bangun Datar</p>
            <button onClick={() => setActiveMenu("Beranda")}>
              Selesai
            </button>
          </div>
        )}

        <nav className="bottom-nav">
          {menus.map((menu) => (
            <button
              key={menu.label}
              className={`nav-item ${
                activeMenu === menu.label ? "active" : ""
              }`}
              onClick={() => {
                setStarted(false);
                setActiveMenu(menu.label);
              }}
            >
              <span className="nav-icon">{menu.icon}</span>
              <small>{menu.label}</small>
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}
