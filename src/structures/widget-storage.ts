import { observable } from 'mobx';

let _x = 90, _y = 90;

function getNewWidgetCoords () {
  _x += 10;
  _y += 10;
  return { x: _x, y: _y };
}

interface IPosition {
  x: number;
  y: number;
}

export interface IWidget {
  id?: number;
  title?: string;
  initialPosition?: IPosition
  z?: number;
  visible?: boolean;
  childPath?: string;
}

interface IWidgetAttrs extends IWidget {}


let idCounter = 0;

class Widget implements IWidget {
  @observable childPath!: string;
  @observable title!: string;
  @observable id!: number;
  @observable visible!: boolean;
  @observable z!: number;
  @observable initialPosition!: IPosition;

  constructor (attrs: IWidgetAttrs, private parent: WidgetStorage) {
    attrs = {
      initialPosition: {
        ...getNewWidgetCoords(),
        ...(attrs.initialPosition || {}),
      },
      z              : 0,
      visible        : true,
      id             : idCounter,
      title          : `widget${idCounter++}`,
      ...(attrs || {})
    };
    Object.assign(this, attrs);
  }

  bringToTop () {
    this.setVisible();
    this?.parent.bringToTop(this);
  }

  setVisible (visible = true) {
    if (visible !== this.visible) {
      this.visible = visible;
      if (this.visible) {
        this.bringToTop();
      }
    }
  }

  toggle () {
    this.setVisible(!this.visible);
  }
}

export const MAX_WIDGETS = 100;

class WidgetStorage {
  @observable widgets: Array<Widget> = [];

  addWidget (childPath: string, attrs: IWidgetAttrs = {}) {
    attrs = { childPath, ...attrs };
    const widget = new Widget(attrs, this);
    this.widgets.push(widget);
    this.bringToTop(widget);

    return widget;
  }

  bringToTop (widget: Widget) {
    const prevZ = widget.z;
    widget.z = MAX_WIDGETS;

    for (const otherWidget of this.widgets) {
      if (otherWidget === widget) continue;
      if (otherWidget.z > prevZ) {
        otherWidget.z--;
      }
    }
  }

  toggle (path: string, attrs: IWidgetAttrs = {}) {
    let widget = this.widgets.find(w => w.childPath === path);

    if (!widget) {
      widget = this.addWidget(path, attrs);
      widget.setVisible(false);
    }

    widget.toggle();
  }
}


export default WidgetStorage
