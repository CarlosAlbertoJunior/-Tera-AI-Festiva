import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  template: `
    <div class="shop-container py-5 bg-black min-vh-100 text-white">
      <div class="container py-5">
        <div class="text-center mb-5 mt-4">
          <span class="text-success fw-bold text-uppercase tracking-widest small">Nossa Seleção</span>
          <h2 class="display-4 fw-bold mb-3 mt-2">Coleção <span class="text-success">CN Ótica</span> 2026</h2>
          <p class="text-secondary mx-auto mb-5" style="max-width: 600px;">Explore o futuro da moda e tecnologia. Cada par é uma obra-prima de engenharia e estilo.</p>
        </div>

        <div class="row g-5 pt-2">
          @for (item of products; track item.name) {
            <div class="col-md-6 col-lg-4">
              <div class="product-card bg-dark rounded-5 overflow-hidden border border-secondary border-opacity-10 h-100 d-flex flex-column">
                <div class="product-img-wrapper position-relative overflow-hidden bg-black d-flex align-items-center justify-content-center p-4">
                  <img [src]="item.image" [alt]="item.name" class="img-fluid product-img">
                  <div class="product-overlay d-flex align-items-center justify-content-center">
                    <button class="btn btn-light rounded-pill px-4 fw-bold">VER DETALHES</button>
                  </div>
                  <div class="badge-new position-absolute top-0 end-0 m-4">NEW</div>
                </div>
                <div class="p-4 flex-grow-1">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <h3 class="h4 mb-0 fw-bold">{{item.name}}</h3>
                    <div class="rating text-warning small">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill opacity-25"></i>
                    </div>
                  </div>
                  <p class="text-secondary mb-4 opacity-75">{{item.description}}</p>
                  <div class="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-secondary border-opacity-10">
                    <span class="fs-3 fw-bold text-success">R$ {{item.price}}</span>
                    <button class="btn btn-success p-0 rounded-circle d-flex align-items-center justify-content-center shadow-green" style="width: 45px; height: 45px;">
                      <i class="bi bi-bag-plus fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .shop-container { background: linear-gradient(to bottom, #000, #050505); }
    .product-card { transition: all 0.4s ease; background: #0c0c0c !important; }
    .product-card:hover { transform: translateY(-10px); border-color: rgba(0,255,65,0.4) !important; box-shadow: 0 15px 40px rgba(0,0,0,0.8); }
    .product-img-wrapper { height: 280px; transition: background 0.3s; }
    .product-img { transition: 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); max-height: 100%; }
    .product-card:hover .product-img { transform: scale(1.1) rotate(2deg); }
    .product-overlay { position: absolute; inset: 0; opacity: 0; background: rgba(0,0,0,0.6); transition: 0.3s; pointer-events: none; }
    .product-card:hover .product-overlay { opacity: 1; pointer-events: all; }
    .badge-new { background: #00FF41; color: #000; font-weight: 800; font-size: 0.7rem; padding: 0.4rem 0.8rem; border-radius: 4px; letter-spacing: 1px; }
    .tracking-widest { letter-spacing: 0.2rem; }
    .shadow-green { box-shadow: 0 5px 15px rgba(0,255,65,0.3); }
  `]
})
export class ShopComponent {
  products = [
    { name: 'Aviador Emerald', price: '299,00', image: 'assets/images/aviator.png', description: 'O clássico redesenhado com lentes esmeralda de ultra definição e proteção UV400 completa.' },
    { name: 'Sport Carbon', price: '349,00', image: 'assets/images/sporty.png', description: 'Estrutura aerodinâmica em fibra de carbono fosca com detalhes em neon verde vibrante.' },
    { name: 'Future Rect', price: '459,00', image: 'assets/images/futuristic.png', description: 'Design arquitetônico com armação em acetato transparente e lentes retangulares pretas.' }
  ];
}
