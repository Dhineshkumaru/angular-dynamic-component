import { Component, ComponentFactoryResolver,  VERSION, ViewChild } from '@angular/core';
import { HelloComponent, HiComponent } from './hello.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild(HostDirective, {static: true})
  childRef: HostDirective;
  Components = [HiComponent, HelloComponent];

  constructor(public factoryRes:
  ComponentFactoryResolver){

  }

  loadComponent(id){
    this.childRef.viewRef.clear();
    const resolveFactory =  this.factoryRes.resolveComponentFactory(this.Components[id]);
    const compRef =  this.childRef.viewRef.createComponent(resolveFactory);
    compRef.instance.name = id == 0 ? 'Dhinesh' : 'Kumar'
    console.log(compRef)

  }
}
