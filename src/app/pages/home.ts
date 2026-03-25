import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero-section text-white d-flex align-items-center overflow-hidden">
      <div class="container position-relative py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0 z-1">
            <h1 class="display-2 fw-bold mb-4 animate-slide-in">CN <span class="text-success">Otica AI</span>.</h1>
            <p class="lead mb-5 opacity-75 fs-4">A mais alta tecnologia óptica encontra o design de luxo. Nossos óculos são feitos para quem vê o mundo em alta definição.</p>
            <div class="d-flex gap-3">
              <a routerLink="/shop" class="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold shadow-green">EXPLORAR LOJA</a>
              <button class="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold border-2">SABER MAIS</button>
            </div>
          </div>
          <div class="col-lg-6 position-relative z-1">
            <div class="hero-bg-glow"></div>
            <img src="assets/images/aviator.png" alt="Aviator Green" class="img-fluid rounded-4 shadow-lg hero-img animate-float">
          </div>
        </div>
      </div>
      <div class="bg-mesh"></div>
    </div>

    <section class="info-section py-5 bg-black">
      <div class="container py-5 text-white">
        <div class="text-center mb-5">
          <h2 class="fw-bold fs-1">Tecnologia <span class="text-success text-uppercase">Premium</span></h2>
          <div class="mx-auto bg-success mt-2" style="height: 4px; width: 60px;"></div>
        </div>
        <div class="row g-4 pt-4">
          <div class="col-md-4">
            <div class="p-5 bg-dark rounded-5 border border-secondary border-opacity-10 h-100 glass-card">
              <i class="bi bi-shield-check text-success display-4 mb-3"></i>
              <h3 class="mb-3 mt-2">Visão Blindada</h3>
              <p class="text-secondary">Lentes produzidas com polímeros espaciais que garantem proteção absoluta contra reflexos e raios UV nocivos.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-5 bg-dark rounded-5 border border-secondary border-opacity-10 h-100 glass-card active-card">
              <i class="bi bi-lightning-charge text-success display-4 mb-3"></i>
              <h3 class="mb-3 mt-2">Ultra Versátil</h3>
              <p class="text-secondary">Conforto inigualável que se adapta ao seu rosto. Use o dia todo sem cansaço visual ou marcas.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-5 bg-dark rounded-5 border border-secondary border-opacity-10 h-100 glass-card">
              <i class="bi bi-cpu text-success display-4 mb-3"></i>
              <h3 class="mb-3 mt-2">Smart Design</h3>
              <p class="text-secondary">Ergonomia perfeita combinada com materiais de ponta para um look futurista e sofisticado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section { min-height: 90vh; background-color: #000; position: relative; }
    .bg-mesh { position: absolute; inset: 0; background: radial-gradient(circle at 70% 30%, rgba(0,255,65,0.15), transparent 40%), radial-gradient(circle at 10% 70%, rgba(0,255,65,0.05), transparent 30%); pointer-events: none; }
    .hero-img { transform: perspective(1000px) rotateY(-10deg) rotateX(2deg); transition: 0.8s ease; width: 80%; border: 1px solid rgba(0,255,65,0.2); }
    .hero-img:hover { transform: perspective(1000px) rotateY(0deg) scale(1.05); border-color: #00FF41; }
    .hero-bg-glow { position: absolute; top: 50%; left: 50%; width: 150%; height: 150%; background: radial-gradient(circle, rgba(0,255,65,0.2), transparent 70%); transform: translate(-50%, -50%); pointer-events: none; filter: blur(40px); }
    .glass-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); background: linear-gradient(135deg, #121212, #080808); }
    .glass-card:hover { transform: translateY(-15px); border-color: rgba(0,255,65,0.5) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.6); }
    .active-card { border-color: rgba(0,255,65,0.3) !important; background: linear-gradient(135deg, #151515, #0a0a0a); }
    .shadow-green { box-shadow: 0 10px 25px rgba(0,255,65,0.2); }
    @keyframes float { 0% { transform: translateY(0) perspective(1000px) rotateY(-10deg); } 50% { transform: translateY(-15px) perspective(1000px) rotateY(-8deg); } 100% { transform: translateY(0) perspective(1000px) rotateY(-10deg); } }
    .animate-float { animation: float 6s ease-in-out infinite; }
    @keyframes slideIn { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
    .animate-slide-in { animation: slideIn 1s ease-out forwards; }
  `]
})
export class HomeComponent {}
