import Image from "next/image";
import { assetPath } from "@/lib/assets";

const mapLabels = [
  ["Nukus", "93", "13%", "47%"],
  ["Bukhara", "87", "40%", "58%"],
  ["Samarkand", "88", "62%", "62%"],
  ["Tashkent", "65", "73%", "43%"],
  ["Fergana", "83", "89%", "57%"],
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-backdrop" aria-hidden="true">
        {"HEARTH".split("").map((letter, index) => <span key={index}>{letter}</span>)}
      </div>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Safer journeys, together</span>
          <h1><span>Built for the way</span><span>people move</span></h1>
          <p>Whether you&apos;re walking across town or exploring somewhere new, Hearth helps you choose safer routes, discover trusted places, and stay connected to people who care.</p>
          <div className="hero-actions"><a className="btn" href="#map">Explore safety map <span>→</span></a><a className="btn alt" href="#features">See how it works</a></div>
          <div className="trust-note"><div className="faces"><span>З</span><span>М</span><span>А</span></div><span>Designed with women across Uzbekistan</span></div>
        </div>
        <div className="hero-art map-hero-art" aria-label="Illustrative Uzbekistan regional safety map">
          <div className="map-title-chip"><b>Uzbekistan safety overview</b><small>Regional confidence model</small></div>
          <div className="uzbekistan-hero-map">
            <Image src={assetPath("/uzbekistan-safety-map-v3.png")} alt="Uzbekistan regions colored from red to green by illustrative safety score" width={1200} height={690} priority />
            {mapLabels.map(([city, score, left, top]) => <span className="hero-map-label" style={{left,top}} key={city}><b>{city}</b><small>{score}</small></span>)}
          </div>
          <div className="safety-scale"><div className="scale-bar"/><div className="scale-numbers"><span><b>0</b> Less safe</span><span><b>50</b> Moderate</span><span><b>100</b> Safer</span></div></div>
          <p className="map-method">Model view: community reports, live signals, public information and official statistics.</p>
        </div>
      </div>
    </section>
  );
}
