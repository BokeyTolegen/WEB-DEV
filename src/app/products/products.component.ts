import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/h6e/64091877081118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he1/h16/64091880357918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/hd0/64091886911518.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Apple MacBook Air 13',
      description: '2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGND3',
      price: '439 240 ₸',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgnd3-100797576/?c=750000000&tab=reviews'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h7a/64373093597214.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Lenovo IdeaPad 3',
      description: '15.6" / 4 Гб / SSD 256 Гб / Без ОС / 15IGL05 / 81WQ00EMRK',
      price: '173 959 ₸',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Acer Aspire 3',
      description: '15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 / NX.A9AEX.00H',
      price: '230 609 ₸',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hdb/84811733925918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h02/84811733991454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h7b/84811734056990.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Oyan Lite X14',
      description: '14.1" / 8 Гб / SSD 512 Гб / Win 11 Home / R1526',
      price: '139 900 ₸',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h58/86877585932318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h01/h87/86877585997854.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hb9/86877586063390.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Liman N4020',
      description: '14.1" / 8 Гб / SSD 512 Гб / Win 10 Pro / Z14202401662205NYM',
      price: '139 000 ₸',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/liman-n4020-14-1-8-gb-ssd-512-gb-win-10-pro-z14202401662205nym-119401128/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hc0/85277334470686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h5a/85277334601758.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2L',
      description: '15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / JT009500E',
      price: '459 748 ₸',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2l-15-6-16-gb-ssd-512-gb-win-11-pro-jt009500e-116983567/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h97/85277334405150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/hc0/85277334470686.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h64/h5a/85277334601758.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Castom',
      description: '15.6" / 12 Гб / SSD 512 Гб / Win 11 / TK-E158 N95',
      price: '129 900 ₸',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/castom-15-6-12-gb-ssd-512-gb-win-11-tk-e158-n95-119401752/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he1/hc7/86013994893342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/ha9/86013994958878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h7b/86013995155486.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Castom',
      description: '15.6" / 12 Гб / SSD 512 Гб / Win 11 / TK-E158 N95',
      price: '129 900 ₸',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/castom-15-6-12-gb-ssd-512-gb-win-11-tk-e158-n95-119401752/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h52/85790401855518.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdd/hd9/85790401921054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h69/85937503469598.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Great Asia TK-E140',
      description: '14" / 8 Гб / SSD 256 Гб / Win 10 /',
      price: '104 000 ₸',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/great-asia-tk-e140-14-8-gb-ssd-256-gb-win-10--114194866/?c=750000000'
    },
    {
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h11/64377753796638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h06/64377756876830.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5f/h26/64377760350238.jpg?format=gallery-medium'
      ],
      name: 'Ноутбук Acer Nitro 5',
      description: '15.6" / 8 Гб / SSD 512 Гб / DOS / AN515-57 / NH.QELER.008',
      price: '599 894 ₸',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/acer-nitro-5-15-6-8-gb-ssd-512-gb-dos-an515-57-nh-qeler-008-102710820/?c=750000000'
    }
  ];

  shareOnWhatsApp(productLink: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(productLink)}`, '_blank');
  }

  shareOnTelegram(productLink: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(productLink)}`, '_blank');
  }
}
