import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'produk',
    redirectTo: '/tabs/produk',
    pathMatch: 'full'
  },
  {
    path: 'transaksi',
    redirectTo: '/tabs/transaksi',
    pathMatch: 'full'
  },
  {
    path: 'profil',
    redirectTo: '/tabs/profil',
    pathMatch: 'full'
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: 'detail-produk/:id',
    loadChildren: () => import('./detail-produk/detail-produk.module').then( m => m.DetailProdukPageModule)
  },
  {
    path: 'tambah-produk',
    loadChildren: () => import('./tambah-produk/tambah-produk.module').then( m => m.TambahProdukPageModule)
  },
  {
    path: 'keranjang',
    loadChildren: () => import('./keranjang/keranjang.module').then( m => m.KeranjangPageModule)
  },
  {
    path: 'riwayat-transaksi',
    redirectTo: '/tabs/transaksi',
    pathMatch: 'full'
  },
  {
    path: 'detail-transaksi/:id',
    loadChildren: () => import('./detail-transaksi/detail-transaksi.module').then( m => m.DetailTransaksiPageModule)
  },
  {
    path: 'edit-produk/:id',
    loadChildren: () => import('./edit-produk/edit-produk.module').then( m => m.EditProdukPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
