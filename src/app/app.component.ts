import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'greatwitsImprovedApp';

    openClicked() {
        $('#panel-admin').animate({ width: 'toggle' }, 100);
    }

    ngAfterViewInit() {
        $('#panel-admin').css('display', 'none');
        
        document.getElementById('wrapper')?.classList.remove('blue');
        if (
            !document.getElementById('wrapper')?.className &&
            !localStorage.getItem('selectedColor')
        ) {
            document.getElementById('wrapper')?.classList.add('blue');
        } else {
            var colorClass = localStorage.getItem('selectedColor') || '';
            document.getElementById('wrapper')?.classList.add(colorClass);
        }

        $('.panel-group').on('hidden.bs.collapse', this.toggleIcon);
        $('.panel-group').on('shown.bs.collapse', this.toggleIcon);
    }

    toggleIcon(e: any) {
        $(e.target)
            .prev('.panel-heading')
            .find('.more-less')
            .toggleClass('fa-plus fa-minus');
    }

    mytheme(index: any) {
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
        var selectedClass = document.getElementById('wrapper')?.className || '';
        localStorage.setItem("selectedColor", selectedClass);
    }

    changeColor(color: any): void {
        $('#wrapper').removeClass();
        $('#wrapper').addClass(color);
    }
}
