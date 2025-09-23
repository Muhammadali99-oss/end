import { useEffect, useRef } from 'react';

const PartnersSection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const carousel = carouselRef.current;
    if (!track || !carousel) return;

    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    const first = slides[0].cloneNode(true);
    const last = slides[slides.length - 1].cloneNode(true);
    track.insertBefore(last, slides[0]);
    track.appendChild(first);

    let index = 1;
    const total = track.children.length;

    const updateInstant = () => {
      track.style.transition = 'none';
      track.style.transform = `translateX(-${index * 100}%)`;
    };
    const updateAnimated = () => {
      track.style.transition = 'transform .7s ease-in-out';
      track.style.transform = `translateX(-${index * 100}%)`;
      syncProgress();
    };

    updateInstant();
    requestAnimationFrame(() => {
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      track.offsetHeight;
      updateAnimated();
    });

    const intervalMs = 3500;
    let timer = window.setInterval(next, intervalMs);

    function resetTimer() {
      window.clearInterval(timer);
      timer = window.setInterval(next, intervalMs);
    }

    function next() {
      index++;
      updateAnimated();
    }
    function prev() {
      index--;
      updateAnimated();
    }

    const onEnter = () => window.clearInterval(timer);
    const onLeave = () => resetTimer();
    carousel.addEventListener('mouseenter', onEnter);
    carousel.addEventListener('mouseleave', onLeave);

    const onTransitionEnd = () => {
      if (index === total - 1) {
        index = 1;
        updateInstant();
        requestAnimationFrame(() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          track.offsetHeight;
          updateAnimated();
        });
      }
      if (index === 0) {
        index = total - 2;
        updateInstant();
        requestAnimationFrame(() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          track.offsetHeight;
          updateAnimated();
        });
      }
    };
    track.addEventListener('transitionend', onTransitionEnd);

    function syncProgress() {
      track.querySelectorAll<HTMLDivElement>('.progress i').forEach((el) => {
        el.style.transition = 'none';
        el.style.width = '0%';
      });
      const current = track.children[index]?.querySelector<HTMLDivElement>('.progress i');
      if (current) {
        requestAnimationFrame(() => {
          current.style.transition = `width ${intervalMs}ms linear`;
          current.style.width = '100%';
        });
      }
    }

    const nextBtn = carousel.querySelector<HTMLButtonElement>('.nav.next');
    const prevBtn = carousel.querySelector<HTMLButtonElement>('.nav.prev');
    const onNext = () => {
      next();
      resetTimer();
    };
    const onPrev = () => {
      prev();
      resetTimer();
    };
    nextBtn?.addEventListener('click', onNext);
    prevBtn?.addEventListener('click', onPrev);

    const onResize = () => updateInstant();
    window.addEventListener('resize', onResize);

    return () => {
      window.clearInterval(timer);
      carousel.removeEventListener('mouseenter', onEnter);
      carousel.removeEventListener('mouseleave', onLeave);
      track.removeEventListener('transitionend', onTransitionEnd);
      nextBtn?.removeEventListener('click', onNext);
      prevBtn?.removeEventListener('click', onPrev);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="partners" className="py-20">
      <div className="partners max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-black text-4xl sm:text-5xl text-primary mb-10">Our Partners</h2>

        <div className="carousel" ref={carouselRef}>
          <div className="track" ref={trackRef}>
            <section className="slide">
              <article className="partner-card theme-brown">
                <div className="dim-bg"></div>
                <div className="logo-wrap" aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="#bfbfbf"><path d="M95 30 30 170h26l16-36h56l16 36h26L135 30h-40zm-1 30 22 50H72l22-50z"/></svg>
                </div>
                <div className="partner-meta">
                  <h3 className="partner-title">Ibrat Farzandlari</h3>
                  <a className="btn" href="#" aria-label="See more about Ibrat Farzandlari">See more</a>
                </div>
                <div className="progress"><i></i></div>
              </article>
            </section>

            <section className="slide">
              <article className="partner-card theme-slate">
                <div className="dim-bg"></div>
                <div className="logo-wrap" aria-hidden="true">
                  <svg viewBox="0 0 220 220"><circle cx="110" cy="110" r="96" fill="#d9d9d9"/><path d="M110 50c28 0 50 22 50 50s-22 50-50 50-50-22-50-50 22-50 50-50zm0 22c-16 0-28 12-28 28s12 28 28 28 28-12 28-28-12-28-28-28z" fill="#9aa0a6"/></svg>
                </div>
                <div className="partner-meta">
                  <h3 className="partner-title">Youth Affairs Agency</h3>
                  <a className="btn" href="#" aria-label="See more about Youth Affairs Agency">See more</a>
                </div>
                <div className="progress"><i></i></div>
              </article>
            </section>

            <section className="slide">
              <article className="partner-card theme-blue">
                <div className="dim-bg"></div>
                <div className="logo-wrap" aria-hidden="true">
                  <svg viewBox="0 0 220 220"><rect x="40" y="60" width="140" height="26" rx="6" fill="#b6d2ff"/><rect x="40" y="96" width="140" height="26" rx="6" fill="#dbe8ff"/><rect x="40" y="132" width="140" height="26" rx="6" fill="#b6d2ff"/></svg>
                </div>
                <div className="partner-meta">
                  <h3 className="partner-title">Asaxiy Books</h3>
                  <a className="btn" href="#" aria-label="See more about Asaxiy Books">See more</a>
                </div>
                <div className="progress"><i></i></div>
              </article>
            </section>
          </div>

          <button className="nav prev" aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="nav next" aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <style>{`
          .partners{--ink:#0a1f33;--muted:#4a5a6a;--bg:#f5f7fb;--card:#ffffff;--ring:rgba(10,31,51,.08);--accent:#1d4ed8;color:var(--ink)}
          .partners h2{font-size:34px;margin:0 0 18px}
          .partners .carousel{position:relative;overflow:hidden;border-radius:22px}
          .partners .track{display:flex;transition:transform .7s ease-in-out}
          .partners .slide{flex:0 0 100%;display:flex;justify-content:center;padding:10px}
          .partners .partner-card{position:relative;width:400px;height:500px;border-radius:26px;overflow:hidden;background:linear-gradient(180deg,#7a3b16,#55250f);box-shadow:0 10px 35px rgba(10,31,51,.25);display:flex;flex-direction:column;justify-content:flex-end;padding:26px;isolation:isolate}
          .partners .partner-card .dim-bg{position:absolute;inset:0;opacity:.35;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="%23ffffff" stop-opacity="0.12"/><stop offset="1" stop-color="%23ffffff" stop-opacity="0"/></linearGradient></defs><rect width="400" height="400" fill="url(%23g)"/></svg>') center/cover no-repeat;z-index:0}
          .partners .logo-wrap{position:absolute;inset:0;display:grid;place-items:center;z-index:0;opacity:.85;filter:grayscale(100%)}
          .partners .logo-wrap svg{width:min(55%,420px);height:auto}
          .partners .partner-meta{position:relative;z-index:1;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.35)}
          .partners .partner-title{font-size:28px;font-weight:700;margin:0 0 12px}
          .partners .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:999px;border:2px solid rgba(255,255,255,.7);color:#fff;text-decoration:none;font-weight:600;backdrop-filter:blur(3px)}
          .partners .btn:hover{background:rgba(255,255,255,.1)}
          .partners .theme-brown{background:linear-gradient(180deg,#7a3b16,#632e14)}
          .partners .theme-slate{background:linear-gradient(180deg,#7b818a,#595f69)}
          .partners .theme-blue{background:linear-gradient(180deg,#18365e,#0f2745)}
          .partners .nav{position:absolute;top:50%;transform:translateY(-50%);display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:#fff;box-shadow:0 10px 22px var(--ring);cursor:pointer;user-select:none}
          .partners .nav svg{width:22px;height:22px}
          .partners .nav.prev{left:14px}
          .partners .nav.next{right:14px}
          .partners .nav:active{transform:translateY(-50%) scale(.98)}
          .partners .progress{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(255,255,255,.35)}
          .partners .progress > i{display:block;height:100%;width:0;background:#fff}
          @media (max-width:700px){
            .partners .partner-card{aspect-ratio:4/5;height:auto;width:100%;max-width:420px}
            .partners .partner-title{font-size:22px}
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnersSection;