import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  

  //for any DOM manipulations you should use the Renderer!!! look at Renderer methods for more info
  constructor(private elRef:ElementRef,private renderer: Renderer2 ){}

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');  jasmine-core 3.5   typescript 3.6
  }

}
