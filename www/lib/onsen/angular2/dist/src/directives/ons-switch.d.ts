import { ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
/**
 * @element ons-switch
 * @directive OnsSwitch
 * @selector ons-switch
 * @description
 *   [en]Angular 2 directive for `<ons-switch>` component.[/en]
 *   [ja]`<ons-switch>`要素のAngular 2ディレクティブです。[/ja]
 * @example
 *   <ons-switch [(value)]="target"></ons-switch>
 */
export declare class OnsSwitch implements OnChanges, OnDestroy {
    private _elementRef;
    private _element;
    private _boundOnChange;
    /**
     * @input value
     * @type {boolean}
     * @desc
     *   [en]Specify the value of the `<ons-switch>` component.[/en]
     *   [ja]`ons-switch`コンポーネントに設定する値を指定します。[/ja]
     */
    value: boolean;
    /**
     * @output valueChange
     * @type {string}
     * @desc
     *   [en]Triggers when the value is changed.[/en]
     *   [ja]値が変更された時に発火します。[/ja]
     */
    _valueChange: EventEmitter<boolean>;
    constructor(_elementRef: ElementRef);
    _onChange(event: any): void;
    ngOnChanges(changeRecord: SimpleChanges): void;
    readonly element: any;
    ngOnDestroy(): void;
}
