import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-success">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" routerLink="/" (click)="isMenuCollapsed = true">
          <i class="bi bi-eye-fill me-2 text-success"></i>
          <span class="fw-bold tracking-wider text-uppercase">CN <span class="text-success">Ótica</span></span>
        </a>
        <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" [class.collapse]="isMenuCollapsed" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="isMenuCollapsed = true">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/shop" routerLinkActive="active" (click)="isMenuCollapsed = true">Loja</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { padding: 1.2rem 0; background-color: #080808 !important; z-index: 1050; }
    .navbar-collapse { transition: all 0.3s ease; }
    /* Mobile styles for collapsed menu */
    @media (max-width: 991.98px) {
      .navbar-collapse {
        background: #080808;
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 12px;
        border: 1px solid rgba(0,255,65,0.1);
      }
    }
    .nav-link { font-weight: 600; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; color: rgba(255,255,255,0.7) !important; transition: 0.3s; border-bottom: 2px solid transparent; }
    .nav-link:hover { color: #00FF41 !important; }
    .nav-link.active { color: #00FF41 !important; border-bottom: 2px solid #00FF41; }
    .tracking-wider { letter-spacing: 0.1rem; }
  `]
})
export class NavbarComponent {
  isMenuCollapsed = true;
}
