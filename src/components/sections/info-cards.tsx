import React from 'react';

const InfoCards = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-stretch mt-10">
      {/* What is Anime? Card */}
      <div 
        className="glass rounded-[15px] p-6 flex flex-col justify-center"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), 0 0 30px rgba(163, 230, 53, 0.05)'
        }}
      >
        <h2 className="text-2xl font-semibold text-white">What is Anime?</h2>
        <p className="mt-3 text-white/80 text-[16px] leading-[1.6]">
          Anime is a style of animation that originated in Japan, known for its vibrant art, imaginative worlds, and rich storytelling across genres. Its history dates back to early 20th‑century experimental films, blossoming in the post‑war era with pioneers like Osamu Tezuka. Today, anime spans TV series, films, and OVAs, captivating global audiences with unique aesthetics and cultural depth.
        </p>
        <div className="mt-4">
          <a 
            href="/ratings" 
            className="inline-block rounded-[12px] px-4 py-2 bg-gradient-to-r from-teal-400 to-lime-400 text-black font-semibold text-sm shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:brightness-110 hover:scale-105 transition-transform duration-200"
          >
            Explore Ratings
          </a>
        </div>
      </div>

      {/* About Animexus Card */}
      <div 
        className="glass rounded-[15px] p-6 flex flex-col justify-center"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), 0 0 30px rgba(163, 230, 53, 0.05)'
        }}
      >
        <h2 className="text-2xl font-semibold text-white">About Animexus</h2>
        <p className="mt-3 text-white/80 text-[16px] leading-[1.6]">
          Animexus is a web platform dedicated to anime discovery, bringing together trending titles, top-rated series, and detailed information through the Jikan API. Designed with a sleek, glass-styled interface, it offers fans access to genres, ratings, and insights, creating a seamless hub for exploration and appreciation of anime culture.
        </p>
        <div className="mt-4">
          <a 
            href="/guide" 
            className="inline-block rounded-[12px] px-4 py-2 bg-gradient-to-r from-teal-400 to-lime-400 text-black font-semibold text-sm shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:brightness-110 hover:scale-105 transition-transform duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;