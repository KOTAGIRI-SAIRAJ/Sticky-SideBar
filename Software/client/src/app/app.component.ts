import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ngOnInit() {
    $(document).ready(function() {
      const sidebar = $('.sidebar');
      const top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

      $(window).scroll(function (event) {
        const y = $(this).scrollTop();
        if (y >= top) {
          sidebar.addClass('fixed');
        } else {
          sidebar.removeClass('fixed');
        }
      });
    });
  }
}
