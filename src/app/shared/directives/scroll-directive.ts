import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { isPlatformBrowser } from '@angular/common';
import {
    Directive,
    ElementRef,
    Inject,
    Input,
    OnChanges,
    PLATFORM_ID,
    SimpleChanges
} from '@angular/core';

@Directive({
    selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective implements OnChanges {
    @Input() appScrollIntoView: boolean | undefined;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private elementRef: ElementRef
    ) { }

    ngOnChanges(simpleChange: SimpleChanges) {
        if (isPlatformBrowser(this.platformId)) {
            if (coerceBooleanProperty(this.appScrollIntoView)) {
                (this.elementRef.nativeElement as HTMLInputElement).scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }
}
