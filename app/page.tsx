export default function Home() {
  return (
    <main className="hearthPage">
      <nav className="topNav">
        <div className="logoWrap">
          <img src="/mascot.jpg" alt="Hearth mascot" />
          <span>Hearth</span>
        </div>

        <div className="navCenter">
          <a>Features</a>
          <a>Safety Map</a>
          <a>Community</a>
          <a>About</a>
        </div>
      </nav>

      <section className="hero">
        <div className="giantWord">HEARTH</div>

        <div className="heroLeft">
          <div className="eyebrow">AI-powered safety intelligence</div>

          <h1>Built for the way people move</h1>

          <p>
            Whether you're walking across town or exploring somewhere new,
            Hearth helps you choose safer routes, discover trusted places, and
            stay connected to people who care.
          </p>

          <div className="heroButtons">
            <button>Explore Safety Map</button>
            <button className="secondary">See How It Works</button>
          </div>
        </div>

        <div className="heroRight">
          <div className="softCircle" />

          <div className="block mapBlock">
            <div className="street s1" />
            <div className="street s2" />
            <div className="street s3" />
            <div className="routeDash" />
            <span className="pin p1" />
            <span className="pin p2" />
          </div>

          <div className="bubble bubbleA">AI found a safer route nearby.</div>
          <div className="bubble bubbleB">Community reports updated this area.</div>

          <div className="safeRibbon">Safeguarding Together</div>

          <img className="mascotFloat" src="/mascot.jpg" alt="" />
        </div>
      </section>
    </main>
  );
}