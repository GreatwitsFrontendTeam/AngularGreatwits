import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'greatwitsImprovedApp';


    

  toggleIcon(e:any) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
    }

  mytheme(index:any) {
    switch (index) {
        case 0:
            this.changeColor('cyan');
            break;
        case 1:
            this.changeColor('orange');
            break;
        case 2:
            this.changeColor('lightgreen');
            break;
        case 3:
            this.changeColor('red');
            break;
        case 4:
            this.changeColor('green');
            break;
        case 5:
            this.changeColor('blue');
            break;
        default:
            this.changeColor('blue');
    }

}


changeColor(color:any) :void {
  $('#wrapper').removeClass();
  $('#wrapper').addClass(color);
}


  
}
