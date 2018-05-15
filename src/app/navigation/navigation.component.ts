import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let backgroundImg = "https://pre00.deviantart.net/2907/th/pre/f/2015/167/a/5/assassin_s_creed_wallpaper__updated___full_hd__by_gianlucasorrentino-d8xk6eq.jpg";

   
      $('#navIcon').click(function () {
        $('.acLogoImages').each(function () {

          $(this).toggleClass('showEffect');
          $(this).toggleClass('hideEffect');

        })
      })
    $('li').click(function () {
        $("#myVideo").css({
          'opacity': '0'
        })
        $("#main").css({
          'background': 'URL(' + backgroundImg + ')'
        })
        $("#gallery-box").css({
          'transform': 'translateX(0)',
          'opacity': '1'
        })
      })
  }
}
