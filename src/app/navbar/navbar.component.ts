import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navIsOpen: boolean = false;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  toggleNav(check?: boolean) {
    if (check && !this.navIsOpen) {
      return;
    }

    this.navIsOpen = !this.navIsOpen;
    this.navIsOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  }
}
