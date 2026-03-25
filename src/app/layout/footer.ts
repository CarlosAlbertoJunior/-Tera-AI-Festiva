import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white py-5 border-top border-success mt-auto">
      <div class="container text-center">
        <h4 class="fw-bold mb-4">CN <span class="text-success">Otica AI</span></h4>
        <div class="d-flex justify-content-center gap-4 mb-4">
          <i class="bi bi-instagram fs-4 hover-success"></i>
          <i class="bi bi-facebook fs-4 hover-success"></i>
          <i class="bi bi-twitter fs-4 hover-success"></i>
          <i class="bi bi-tiktok fs-4 hover-success"></i>
        </div>
        <p class="text-secondary small mb-0">&copy; 2026 CN Otica AI Premium. Todos os direitos reservados.</p>
        <p class="text-secondary opacity-50 small mt-2">Tecnologia, Estilo e Visão.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer { background-color: #050505 !important; }
    .hover-success { cursor: pointer; transition: 0.3s; color: rgba(255,255,255,0.6); }
    .hover-success:hover { color: #00FF41; transform: scale(1.1); }
  `]
})
export class FooterComponent {}
