import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  title = 'assasins creed one';
  textContent = "Imported text will go here.";
  constructor() { }

  ngOnInit() {
    $('.acLogoImages').click(function () {
      $("#mySidenav").toggleClass("slideWidth",true);
      $("#main").toggleClass("slideOut",true);
      $('#story-box').toggleClass('addWidth',true);
      $('#story-box').css({ "padding":"2%"});
    }
    );

    $('.closebtn').click(function () {
      $("#mySidenav").toggleClass("slideWidth",false);
      $("#main").toggleClass("slideOut",false);
      $('#story-box').toggleClass('addWidth', false);
      $('#story-box').css({ "padding": "0%" });
      $("#myVideo").css({
        'opacity': '1'
      })
      $("#main").css({
        'background': 'none';
      })
      $("#gallery-box").css({
        'transform': 'translateX(200vw)',
        'opacity': '1'
      })
    })
  }

}
